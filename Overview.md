## BBMRI-ERIC Federated Platform

### What is this platform?

The BBMRI-ERIC Federated Platform helps researchers find and access biological samples across European biobanks. The key thing to understand: **your data never leaves your site**. Researchers can search across the network, but all the actual data processing happens locally at your biobank. You stay in control.

Think of it as a distributed search engine for biobank samples. Researchers can ask "who has breast cancer samples with RNA data?" and get answers from multiple biobanks, but the samples and data themselves never move.

### The three main tools

The platform has three pieces that work together:

#### [Directory](Directory.md) - The catalog

This is where researchers start. It's basically a searchable database of what biobanks exist, what collections they have, and what services they offer. Think of it like a library catalog, but for biobanks. All the metadata is standardized using MIABIS, which just means everyone describes their collections the same way so researchers can actually compare them.

#### [Locator](Locator.md) - The search engine

Once researchers know which biobanks might have what they need, they can run actual queries: "Show me how many samples you have matching these criteria." Here's where the federated part comes in—the query gets sent to your local Bridgehead (a small server you run), which processes it against your data and sends back only aggregate numbers. No individual-level data ever leaves your site.

#### [Negotiator](Negotiator.md) - The request manager

When researchers find what they want, they need to actually request access. The Negotiator handles this workflow—it's basically a structured messaging system for handling sample requests, negotiating terms, sorting out MTAs and DTAs, and keeping track of everything. Much better than endless email chains.

### How it actually works

Here's a typical workflow:

1. **Researcher explores the Directory** to find biobanks that might have relevant samples (e.g., "cancer biobanks in Nordic countries")

2. **Researcher queries via Locator** to see actual numbers: "How many colorectal cancer samples with genomic data do you have?" Your Bridgehead processes this locally and returns something like "237 matching samples"—no patient data, just counts.

3. **Researcher submits a request through Negotiator** to the biobanks with relevant samples. You get notified, review the request, negotiate terms, and decide whether to grant access based on your own policies and ethics approvals.

### Why join?

**You keep control**
Your samples stay where they are. Your data stays where it is. You decide which queries to answer and which requests to approve. The federated architecture means there's no central database with everyone's data—it's all distributed.

**GDPR compliance built in**
Because personal data never leaves your infrastructure, you're in a much better position for GDPR compliance. The federated design prevents data centralization, and you get audit trails for all queries and requests.

**Increase your visibility**
Researchers across Europe can discover your collections. You can participate in multi-site studies without the headache of complex data transfers. Your samples get used for research they might not have been part of otherwise.

**Works with what you have**
The platform uses open standards (HL7 FHIR, MIABIS) and connects via APIs. You don't need to rip out your existing systems—the Bridgehead sits alongside them. It's vendor-neutral, so you're not locked into any particular technology.

### Technical setup

**Standards we use:**
- HL7 FHIR for data exchange (it's the healthcare interoperability standard)
- MIABIS Core 3.0 for describing biobank metadata
- Standard ontologies like SNOMED CT and NCIT for consistency
- FAIR principles because, well, that's the point

**Who runs what:**
- You run your own Bridgehead (behind your firewall, one outbound connection)
- Your National Node helps with setup and provides support
- BBMRI-ERIC Common Service IT operates the central platform components

**Data governance:**
Everything runs within BBMRI-ERIC infrastructure. Your data doesn't go to commercial vendors. The setup is designed to align with European Health Data Space (EHDS) requirements.

### Getting started

If you want to join, here's what you need to do:

1. **Install the Bridgehead** ([details in Locator docs](Locator.md))
   - It runs in your infrastructure, behind your firewall
   - Only needs one outbound connection to the central platform
   - Your National Node can help with installation

2. **Register in the Directory** ([details in Directory docs](Directory.md))
   - Provide metadata about your biobank and collections
   - Describe what services you offer
   - Work with your National Node to get this set up

3. **Connect to Negotiator** ([details in Negotiator docs](Negotiator.md))
   - Designate who handles access requests at your biobank
   - Set up your notification preferences
   - Define your request handling procedures

### Getting help

**Technical questions?** Your National Node is your first point of contact for Bridgehead installation and configuration.

**Platform issues?** BBMRI-ERIC Common Service IT maintains the central components.

**Standards and specs:**
- MIABIS: https://github.com/BBMRI-ERIC/miabis
- FHIR: https://hl7.org/fhir
- Main site: https://www.bbmri-eric.eu/

### What to read next

Check out the detailed docs for each component:
- [Directory Platform](Directory.md) - how the catalog works
- [Locator Platform](Locator.md) - technical details on federated search
- [Negotiator Platform](Negotiator.md) - access request workflows

Then reach out to your National Node to start the onboarding process. You'll also want to start thinking about mapping your data to FHIR and MIABIS formats—that's usually the most time-consuming part.
