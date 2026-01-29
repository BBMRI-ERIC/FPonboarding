## The Directory Platform

### Overview

The **Directory** is the main BBMRI-ERIC online catalogue and discovery platform that serves as the primary entry point for information about biobanks. It enables researchers, clinicians, and industry partners to discover, explore, and compare biobanks, sample collections, and services across the BBMRI-ERIC network.

**Funding**: Operated and maintained by BBMRI-ERIC Common Service IT (CS IT), with support from European research infrastructure initiatives.

### Architecture

Directory uses a **centralized data model** based on MIABIS (Minimum Information About BIobank data Sharing):

#### Data Model Components
- **Biobank entities**: Organizational information about biobanks
- **Collection entities**: Details about sample collections and datasets
- **Service entities**: Structured descriptions of available services
- Standardized metadata following MIABIS Core 3.0
- Integration with ontologies (OBIB, NCIT) for semantic interoperability

#### Technical Infrastructure
- Publicly accessible web interface at https://directory.bbmri-eric.eu/
- EMX (Entity Model Exchange) based data import/export mechanisms
- Structured metadata schema for searchable, filterable, and comparable information
- Authentication via BBMRI-ERIC AAI for enhanced features

### How It Works

1. **Data registration**: National Nodes and biobanks register their information in the Directory
2. **Metadata standardization**: Information is structured according to MIABIS standards
3. **Search and discovery**: Researchers search, filter, and compare resources based on standardized parameters
4. **Service exploration**: Users can explore available services including:
   - Sample preparation and quality control
   - Multi-omics analyses (genomics, proteomics, metabolomics)
   - Bioinformatics and data science services
   - ELSI support and training
5. **Access initiation**: Researchers identify suitable resources and initiate contact via the Negotiator

**Example search**: "Find biobanks with breast cancer tissue samples that offer RNA sequencing services"  
**Example response**: List of matching biobanks with detailed collection and service information

### Integration with BBMRI Tools

The Directory serves as the gateway to the broader BBMRI-ERIC tool ecosystem:

- **Locator integration**: Links to federated search capabilities for real-time queries
- **Negotiator integration**: Direct connection to initiate access requests
- **FAIR principles**: Ensures data is Findable, Accessible, Interoperable, and Reusable
- **Future interoperability**: Designed for integration with European Health Data Space (EHDS)

### Your Responsibilities

**Data Management**:
- National Nodes coordinate biobank data registration and updates
- Biobanks provide accurate, current information about collections and services
- Regular updates ensure the Directory reflects available resources
- Compliance with MIABIS metadata standards

**Quality Assurance**: Maintaining data quality through standardized service descriptions, accreditation status documentation, and adherence to quality standards (ISO 20387, ISBER guidelines).
