## BBMRI-ERIC Federated Platform: Overview for New Biobanks

### What Is the Federated Platform

The **BBMRI-ERIC Federated Platform** is an integrated ecosystem of discovery and access tools that enables researchers to find, query, and request access to biological samples and associated data across European biobanks **without centralizing or transferring sensitive data**. Your samples and data remain under your control at your location while participating in pan-European research infrastructure.

**Core principle**: Data sovereignty—your biobank maintains full control over samples, data, and access decisions while enabling collaborative research at European scale.

### Platform Components

The federated platform consists of three integrated tools:

#### [Directory](Directory.md) - Discovery & Cataloguing
The central catalogue where researchers discover biobanks, sample collections, and available services across the BBMRI-ERIC network. It provides:
- Searchable metadata about biobanks and collections
- Standardized service descriptions (MIABIS-compliant)
- Filter and comparison capabilities
- Gateway to other platform tools

#### [Locator](Locator.md) - Federated Search
Real-time, privacy-preserving search across distributed biobank data. It enables:
- Queries across multiple biobanks simultaneously
- Local data processing at each biobank
- Aggregated result presentation
- Full data sovereignty (no data transfer)

#### [Negotiator](Negotiator.md) - Access Management
Structured communication tool for sample and data access requests. It facilitates:
- Request workflow management
- Multi-biobank negotiations
- MTA/DTA coordination
- Compliance documentation

### How the Platform Works

The three components create an integrated workflow:

1. **Discovery phase** (Directory)
   - Researchers explore available biobanks and collections
   - Search by disease type, sample type, available services
   - Identify relevant resources

2. **Query phase** (Locator)
   - Researchers submit specific queries to find matching samples
   - Your local Bridgehead processes queries on-site
   - Only aggregated counts returned (e.g., "150 breast cancer samples with RNA")
   - No personal or sample-level data leaves your biobank

3. **Access phase** (Negotiator)
   - Researchers initiate access requests
   - Structured negotiation of terms and conditions
   - Agreement on MTA/DTA, costs, timelines
   - Access granted according to your policies

### Key Benefits for Your Biobank

**Maintain Autonomy**
- Full control over your samples and data
- You decide which queries to answer
- You control access based on your policies and ethical approvals
- Your data never leaves your infrastructure

**Ensure Compliance**
- Meet GDPR and data protection regulations
- Personal data stays local
- Federated architecture prevents data centralization
- Audit trails for all requests

**Enable Collaboration**
- Participate in multi-biobank European research
- Increase visibility of your collections
- Support researchers without complex data transfers
- Contribute to precision medicine initiatives

**Technical Integration**
- Vendor-neutral, standards-based architecture
- Interfaces with your existing IT systems via open APIs
- No replacement of current systems required
- HL7 FHIR and MIABIS standardization ensures interoperability

### Infrastructure & Governance

**Standards-Based Architecture**
- HL7 FHIR for data exchange
- MIABIS Core 3.0 for metadata
- Ontology integration (OBIB, NCIT, SNOMED CT)
- FAIR principles (Findable, Accessible, Interoperable, Reusable)

**Data Governance**
- Operated by BBMRI-ERIC Common Service IT
- Your data never leaves BBMRI-ERIC infrastructure
- No access by technology vendors
- Compliant with European Health Data Space (EHDS) requirements

**Hierarchical Support Model**
- Local biobank level: Your Bridgehead installation
- National node level: Coordination and support
- BBMRI-ERIC level: Central platform operation and development

### Getting Started

To join the federated platform, your biobank will need to:

1. **Install the Locator Bridgehead** - See [Locator documentation](Locator.md)
   - Deployed within your infrastructure
   - Secured behind your firewall
   - One outbound connection only

2. **Register in the Directory** - See [Directory documentation](Directory.md)
   - Provide biobank and collection metadata
   - Describe available services
   - Coordinate through your National Node

3. **Set up Negotiator access** - See [Negotiator documentation](Negotiator.md)
   - Designate biobank representative
   - Establish request handling procedures
   - Configure notification preferences

### Support & Resources

**Technical Support**: Your National Node provides installation and configuration assistance for the Bridgehead component

**Coordination**: BBMRI-ERIC Common Service IT maintains the central platform components

**Standards & Documentation**: 
- MIABIS specifications: https://github.com/BBMRI-ERIC/miabis
- FHIR implementation: https://hl7.org/fhir
- Platform access: https://www.bbmri-eric.eu/

### Next Steps

1. Review the detailed documentation:
   - [Directory Platform](Directory.md) - Understanding cataloguing and discovery
   - [Locator Platform](Locator.md) - Technical requirements for federated search
   - [Negotiator Platform](Negotiator.md) - Access request workflows

2. Contact your National Node to initiate onboarding

3. Prepare your data according to HL7 FHIR and MIABIS standards

By joining the BBMRI-ERIC Federated Platform, your biobank becomes part of Europe's leading biobanking infrastructure, enabling cutting-edge research while maintaining full control over your valuable resources.
