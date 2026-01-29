## The Locator Platform

### Overview

The **Locator** is an open-source federated search solution developed by DKFZ (Deutsches Krebsforschungszentrum) for BBMRI-ERIC. It enables scientists to search for human biospecimens and associated data across academic biobanks while ensuring data sovereignty and privacy through federated query processing.

**Funding**: Primarily supported by the German Biobank Network, with partial funding from BBMRI-ERIC Common Service IT (CS IT).

### Architecture

Locator uses a **two-component federated architecture**:

#### Local Component (Bridgehead)
- Operated by your biobank, national node, or regional node
- Stores data exported from your biobank database in standardized format (HL7 FHIR)
- Runs within your institution's infrastructure behind your firewall
- **Data sovereignty**: Sample-level and donor-level data never leave your biobank
- Processes queries locally and returns only aggregated responses
- Optional OMOP CDM database support for clinical data

#### Central Component
- Operated and maintained by BBMRI-ERIC CS IT
- Publicly accessible query interface at https://locator.bbmri-eric.eu/
- Distributes queries to participating Bridgeheads
- Aggregates and presents results from multiple biobanks
- Requires authentication (BBMRI-ERIC AAI) to view per-biobank results
- Users accept BBMRI-ERIC Acceptable Use Policy during authentication

### How It Works

1. **Data preparation**: You standardize and export data to your local Bridgehead in HL7 FHIR format
2. **Query submission**: Researchers submit queries through the central component web interface
3. **Query distribution**: Your local Bridgehead checks for new queries every 5 seconds
4. **Local processing**: When a relevant query is found, your Bridgehead processes it against your FHIR or OMOP database
5. **Aggregated response**: Your Bridgehead sends only aggregated data (counts, distributions) to the central component
6. **Result presentation**: Researchers view combined results from all participating biobanks
7. **Access request**: Researchers can submit access requests via the integrated Negotiator workflow

**Example query**: "How many patients with samples available for research have been diagnosed with breast cancer (ICD-10: C50.1) and have RNA available?"  
**Example response**: Aggregated counts from each participating biobank—no individual patient or sample data transmitted.

### Integration with BBMRI Tools

The Locator integrates seamlessly with the BBMRI-ERIC ecosystem:

- **Directory updates**: Optional automatic updates to collection information using aggregate descriptors
- **Negotiator integration**: Direct access request initiation from search results
- **FHIR standardization**: Ensures interoperability with clinical systems and research infrastructures
- **FAIR principles**: Supports Findable, Accessible, Interoperable, and Reusable data practices

### Your Responsibilities

**Installation & Maintenance**:
- Your biobank/hospital IT team or National Node installs the local Bridgehead component
- Deployed on a virtual machine or physical server within your infrastructure
- Secured behind your firewall (only one outbound port required for query retrieval)
- Regular data updates to maintain current sample availability
- All infrastructure and operational costs covered by your institution

**Data Management**:
- Standardize data according to HL7 FHIR specifications
- Maintain data quality and accuracy in local systems
- Ensure compliance with local ethical and legal requirements
- Optional: Configure automated Directory updates for collection metadata

**Security**: One-way connection architecture ensures queries are pulled from the central component; no inbound connections to your network required, maintaining maximum security for your data infrastructure.
