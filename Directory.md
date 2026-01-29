## The Directory Platform

### What is the Directory?

The Directory is BBMRI-ERIC's online catalog—basically a searchable database where researchers can find biobanks, browse their collections, and see what services they offer. If you're a researcher looking for samples, this is where you start.

You can access it at [directory.bbmri-eric.eu](https://directory.bbmri-eric.eu/). It's publicly available, though you'll need to log in via [BBMRI-ERIC AAI](https://www.bbmri-eric.eu/services/aai/) (the authentication system) to access some enhanced features.

**Who runs it:** BBMRI-ERIC Common Service IT maintains the platform, with funding from European research infrastructure initiatives.

### How it's structured

The Directory uses a centralized database built around [MIABIS](https://github.com/BBMRI-ERIC/miabis) (Minimum Information About BIobank data Sharing)—that's the standard for describing biobank metadata. Everything is organized into three main types of information:

**Biobank entities** - Basic info about your organization (who you are, where you are, what you do)

**Collection entities** - Details about your sample collections and datasets (what types of samples, how many, what diseases, what data is available)

**Service entities** - What services you offer (sample prep, sequencing, data analysis, ELSI support, etc.)

The metadata follows [MIABIS Core 3.0](https://github.com/BBMRI-ERIC/miabis/wiki/MIABIS-Core-3.0) and integrates with standard ontologies like [OBIB](http://www.obofoundry.org/ontology/obib.html) and [NCIT](https://ncithesaurus.nci.nih.gov/) so everything is semantically consistent across biobanks.

**Technical details:** The platform uses EMX (Entity Model Exchange) for data import/export, which makes it easier to bulk-upload and update your information. Everything is structured so researchers can search, filter, and compare biobanks side-by-side.

### How researchers use it

Here's a typical workflow:

1. **Researcher searches** for biobanks matching their criteria—maybe they're looking for pediatric cancer samples, or biobanks in a specific region, or collections with genomic data

2. **Directory returns matches** based on the standardized metadata you've provided

3. **Researcher explores** the results, comparing different biobanks and their services. They might be looking for specific capabilities like:
   - Sample preparation and quality control
   - Multi-omics analyses (genomics, proteomics, metabolomics)
   - Bioinformatics and data science support
   - ELSI (Ethical, Legal, Social Issues) guidance
   - Training and consultation

4. **Researcher moves to next step** by either:
   - Jumping to the [Locator](Locator.md) to run actual queries and see sample counts
   - Going straight to the [Negotiator](Negotiator.md) to request access

**Example:** A researcher searches "breast cancer tissue samples with RNA sequencing services" and gets a list of biobanks that match, with details about each collection and what services are available.

### How it connects to other tools

The Directory is the starting point, but it's integrated with the rest of the [BBMRI-ERIC platform](Overview.md):

- **[Locator](Locator.md) integration** - From a Directory listing, researchers can jump to Locator to run federated queries and see actual sample counts
- **[Negotiator](Negotiator.md) integration** - Researchers can initiate access requests directly from biobank profiles
- **[FAIR principles](https://www.go-fair.org/fair-principles/)** - The whole setup ensures data is Findable, Accessible, Interoperable, and Reusable
- **[EHDS](https://health.ec.europa.eu/ehealth-digital-health-and-care/european-health-data-space_en) compatibility** - Designed to integrate with the European Health Data Space as it develops

### What you need to do

**Provide and maintain your data:**
Your National Node will help coordinate this, but basically you need to:
- Register your biobank information in the Directory
- Describe your collections using MIABIS standards
- List the services you offer
- Keep everything up to date as your collections grow or change

**Keep it accurate:**
The Directory is only useful if the information is current. Regular updates are important—if you've added new sample types, expanded a collection, or started offering new services, that should be reflected in the Directory.

**Follow standards:**
You'll need to describe your collections using [MIABIS Core 3.0](https://github.com/BBMRI-ERIC/miabis/wiki/MIABIS-Core-3.0) metadata standards. This might seem like extra work, but it's what makes your collections discoverable and comparable to others.

**Quality documentation:**
If you have accreditations (like [ISO 20387](https://www.iso.org/standard/67888.html) or follow [ISBER guidelines](https://www.isber.org/page/BPR)), document them. Researchers care about quality standards, and it helps them trust your samples.

The Directory team provides templates and tools to make data entry easier—you're not starting from scratch. Most biobanks use the EMX import functionality to bulk-upload their collection information rather than entering it manually.
