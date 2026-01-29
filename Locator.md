## The Locator Platform

### What is the Locator?

The Locator is a federated search engine for biobank samples. Researchers can query multiple biobanks at once to see who has what they're looking for—but here's the key part: **your data never leaves your site**. All the processing happens locally at your biobank, and only aggregate counts get sent back.

It's open-source software developed by [DKFZ](https://www.dkfz.de/en/) (German Cancer Research Center) for BBMRI-ERIC. You can access the query interface at [locator.bbmri-eric.eu](https://locator.bbmri-eric.eu/).

**Who funds it:** Primarily the German Biobank Network, with partial funding from BBMRI-ERIC Common Service IT.

### How it's architected

The Locator has two pieces that work together:

**Your local Bridgehead** (the part you run)
- This is a server that sits in your infrastructure, behind your firewall
- It stores a copy of your biobank data in standardized [HL7 FHIR](https://hl7.org/fhir/) format
- It processes queries locally and sends back only aggregated results
- **Data sovereignty is built in** - sample-level and patient-level data never leave your biobank
- Optionally supports [OMOP CDM](https://www.ohdsi.org/data-standardization/) if you have clinical data in that format
- You (or your National Node, or your regional node) operate this

**The central component** (run by BBMRI-ERIC)
- This is the web interface where researchers submit queries
- It distributes queries to all participating Bridgeheads
- It collects and displays the aggregated results
- Requires [BBMRI-ERIC AAI](https://www.bbmri-eric.eu/services/aai/) login to see per-biobank results
- Users have to accept the BBMRI-ERIC Acceptable Use Policy

### How it actually works

Here's the step-by-step:

1. **You prepare your data** - Export your biobank data to [HL7 FHIR](https://hl7.org/fhir/) format and load it into your local Bridgehead. This is usually a one-time setup, then regular updates.

2. **Researcher submits a query** - They use the web interface at [locator.bbmri-eric.eu](https://locator.bbmri-eric.eu/) to search for samples. For example: "How many breast cancer patients (ICD-10: C50.1) have RNA samples available?"

3. **Your Bridgehead picks up the query** - It polls the central server every 5 seconds looking for new queries. When it finds one, it downloads it.

4. **Local processing happens** - Your Bridgehead runs the query against your local FHIR (or OMOP) database. All of this happens on your server, behind your firewall.

5. **Aggregated response goes back** - Your Bridgehead sends only counts and distributions to the central component. Something like "237 matching samples" - no patient names, no sample IDs, no individual-level data.

6. **Researcher sees combined results** - They get a summary showing how many matching samples each participating biobank has.

7. **Researcher can request access** - If they want to actually use the samples, they can jump to the [Negotiator](Negotiator.md) to start the access request process.

**Example query:** "Show me patients with colorectal cancer who have both tumor tissue and blood samples, with genomic data available"

**Example response:** 
- Biobank A: 156 patients
- Biobank B: 89 patients  
- Biobank C: 203 patients

No individual patient or sample data is transmitted—just the counts.

### How it connects to other tools

The Locator is the middle step in the [BBMRI-ERIC workflow](Overview.md):

- **[Directory](Directory.md) updates** - Your Bridgehead can optionally push aggregate statistics to update your Directory collection information automatically
- **[Negotiator](Negotiator.md) integration** - Researchers can initiate access requests directly from Locator search results
- **[FHIR](https://hl7.org/fhir/) standardization** - Using the healthcare interoperability standard ensures your data can work with clinical systems and other research infrastructures
- **[FAIR principles](https://www.go-fair.org/fair-principles/)** - The whole setup supports making data Findable, Accessible, Interoperable, and Reusable

### What you need to do

**Installation and setup:**

Your IT team (or your National Node) needs to install the Bridgehead. Here's what that involves:

- Deploy it on a VM or physical server in your infrastructure
- Put it behind your firewall - it only needs **one outbound connection** to pull queries from the central server. No inbound connections required, which keeps your network secure.
- Load your biobank data in [FHIR format](https://hl7.org/fhir/)
- Set up regular data updates so the Bridgehead reflects current sample availability

Your institution covers the infrastructure and operational costs. The software itself is open-source and free.

**Data preparation:**

This is usually the most time-consuming part:

- Map your biobank data to [HL7 FHIR](https://hl7.org/fhir/) specifications. FHIR has resources for Patient, Specimen, Condition, Observation, etc.
- Make sure your data quality is good - garbage in, garbage out
- Ensure you're compliant with local ethical and legal requirements before making data queryable
- Optionally, configure automated updates to the [Directory](Directory.md) so your collection metadata stays current

**Ongoing maintenance:**

- Keep your Bridgehead data updated as new samples come in or sample availability changes
- Monitor the system to make sure it's running and processing queries
- Work with your National Node if you run into technical issues

**Security note:** The architecture is designed to be secure by default. Queries are **pulled** from the central server by your Bridgehead, not pushed to you. This means no inbound connections to your network, which makes it much easier to get past your IT security team. Your data stays behind your firewall, and you maintain full control over what gets queried and what gets returned.
