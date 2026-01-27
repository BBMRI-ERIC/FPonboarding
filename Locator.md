## The Locator Platform

### Overview

The **Locator** is an open-source federated search solution developed by DKFZ (Deutsches Krebsforschungszentrum) for BBMRI-ERIC. It enables scientists to search for human biospecimens and associated data across academic biobanks while ensuring data sovereignty and privacy.

**Funding**: Primarily supported by the German Biobank Network, with partial funding from BBMRI-ERIC Common Service IT (CS IT).

### Architecture

Locator uses a **two-component architecture**:

#### Local Component (Bridgehead)
- Operated by your biobank, national node, or regional node
- Stores data exported from your biobank database in standardized format (HL7 FHIR)
- Runs within your institution's infrastructure
- **Data sovereignty**: Sample-level and donor-level data never leave your biobank
- Only aggregated responses are sent to the central component

#### Central Component
- Operated and maintained by BBMRI-ERIC CS IT
- Publicly accessible for queries
- Requires authentication (BBMRI-ERIC AAI) to view per-biobank results
- Users accept BBMRI-ERIC Acceptable Use Policy during authentication

### How It Works

1. **Data preparation**: You standardize and export data to your local component in HL7 FHIR format
2. **Query submission**: Researchers submit queries through the central component
3. **Query distribution**: Your local component checks for new queries every 5 seconds
4. **Local processing**: When a relevant query is found, your local component processes it against your FHIR or OMOP database
5. **Aggregated response**: Your local component sends only aggregated data (e.g., counts, distributions) to the central component
6. **Request workflow**: Researchers view results and submit access requests via BBMRI-ERIC Negotiator

**Example query**: "How many patients whose samples are available for research have been diagnosed with C50.1?"  
**Example response**: A single count or distribution—no sensitive data transmitted.

### Optional Directory Updates

If you choose, your local component can update your collection information in the National and BBMRI-ERIC Directory using aggregate descriptors.

### Your Responsibilities

**Installation & Maintenance**:
- Your biobank/hospital IT team or National Node installs the local component
- Installed on a virtual machine or physical server within your infrastructure
- Secured behind your firewall (only one outbound port required)
- All costs are covered by your institution

**Security**: One-way connection ensures queries are pulled from the central component; no inbound connections to your network required.