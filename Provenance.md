## The Provenance Platform

### What is Provenance?

Provenance is the tracking system that records what happens to samples and data throughout their lifecycle—from collection to research use to publication. It's basically an audit trail that shows who accessed what, when, and for what purpose.

Think of it as a chain of custody for biobank samples and data. It helps biobanks demonstrate impact, ensures accountability, and provides transparency for governance and compliance purposes.

**Who runs it:** BBMRI-ERIC Common Service IT maintains the platform as part of the integrated [discovery and access infrastructure](Overview.md).

### How it's set up

The Provenance system has several key components:

**Activity tracking** - Records all interactions with samples and data: queries run through [Locator](Locator.md), access requests via [Negotiator](Negotiator.md), sample shipments, data transfers, and usage in research projects. Authentication is handled through [BBMRI-ERIC AAI](https://www.bbmri-eric.eu/services/aai/).

**Metadata capture** - Stores contextual information about each activity: who performed it, when it happened, what samples or data were involved, what research project it's associated with, and what ethical approvals are in place.

**Impact tracking** - Links samples and data to research outputs: publications, datasets, clinical trials, and other scientific outcomes. This helps biobanks demonstrate their contribution to research and justify their funding.

Everything follows [W3C PROV](https://www.w3.org/TR/prov-overview/) standards for provenance data modeling, ensuring interoperability and compliance with [FAIR principles](https://www.go-fair.org/fair-principles/).

### How it actually works

Here's what gets tracked throughout the research lifecycle:

1. **Discovery phase** - When researchers query the [Locator](Locator.md), the system records:
   - What queries were run and when
   - Which biobanks were queried
   - What results were returned (aggregate counts only, no individual data)
   - Who ran the query

2. **Access request phase** - When researchers submit requests through [Negotiator](Negotiator.md), the system captures:
   - What samples or data were requested
   - What research purpose was stated
   - What ethical approvals were provided
   - What agreements (MTAs, DTAs) were established
   - Who approved the request and when

3. **Sample/data provision** - When biobanks provide materials, the system records:
   - What was actually provided (may differ from initial request)
   - When it was shipped or transferred
   - What conditions were attached
   - Who received it

4. **Research use** - As the research progresses, the system can track:
   - What analyses were performed
   - What derived data was generated
   - What collaborations were formed
   - What secondary uses occurred (if permitted)

5. **Research outputs** - When results are published or datasets released, the system links:
   - Publications (via [DOI](https://www.doi.org/))
   - Datasets (via repositories like [EGA](https://ega-archive.org/))
   - Clinical trial results
   - Patents or other intellectual property

**Example:** A researcher queries [Locator](Locator.md) for lung cancer samples, requests access via [Negotiator](Negotiator.md), receives samples from three biobanks, performs genomic analysis, and publishes results. The Provenance system creates a complete record linking the original query → access request → sample provision → research activity → publication. Each biobank can now demonstrate their contribution to that specific research outcome.

### How it connects to other tools

Provenance is the accountability layer across the entire [BBMRI-ERIC workflow](Overview.md):

- **[Directory](Directory.md) integration** - Biobanks can showcase their research impact by displaying publications and outcomes associated with their collections
- **[Locator](Locator.md) integration** - All federated queries are logged with full provenance metadata for audit and compliance purposes
- **[Negotiator](Negotiator.md) integration** - Access agreements and sample transfers are automatically recorded in the provenance chain
- **[GDPR compliance](https://gdpr.eu/)** - Provenance records provide the audit trail required for demonstrating lawful processing and accountability
- **[FAIR principles](https://www.go-fair.org/fair-principles/)** - Provenance metadata makes data and samples more Findable and Reusable by documenting their history

### What you need to do

**If you're a biobank:**

**Enable provenance tracking** - Work with your National Node to ensure your systems are connected to the Provenance platform. This usually happens automatically when you're integrated with [Locator](Locator.md) and [Negotiator](Negotiator.md).

**Record sample provision** - When you provide samples or data, make sure the details are logged in the system. This includes what was provided, when, to whom, and under what conditions.

**Update research outcomes** - When researchers publish results using your samples, add this information to the provenance record. Many biobanks ask researchers to notify them of publications as part of the access agreement.

**Use the data for reporting** - The Provenance system gives you metrics for demonstrating impact: how many research projects used your samples, how many publications resulted, what diseases were studied, etc. This is valuable for funding applications and stakeholder reporting.

**Ensure compliance** - The provenance records help you demonstrate [GDPR](https://gdpr.eu/) compliance by showing you have proper audit trails for all data processing activities.

**If you're a researcher:**

**Understand what's tracked** - Be aware that your queries, access requests, and sample usage are recorded. This is for accountability and compliance, not surveillance.

**Report your outputs** - When you publish results or release datasets, report this back to the biobanks that provided samples. This helps them demonstrate impact and is often required by your access agreement.

**Respect the agreements** - The provenance system helps enforce the terms of MTAs and DTAs by tracking what you agreed to and what you actually did with the materials.

**Acknowledge contributions** - Properly cite and acknowledge the biobanks that contributed to your research. The Provenance system can help generate accurate acknowledgment text.

### Why it matters

**For biobanks:**
- Demonstrate research impact to funders and stakeholders
- Track return on investment in sample collection and curation
- Ensure compliance with [GDPR](https://gdpr.eu/) and ethical requirements
- Identify which collections are most valuable for research
- Build evidence for quality improvement

**For researchers:**
- Transparency about sample origins and processing
- Confidence that materials are properly documented
- Easier to track collaborations and contributions
- Simplified compliance with data management requirements

**For the research ecosystem:**
- Accountability and trust in the biobanking infrastructure
- Evidence for policy makers about the value of biobanks
- Better understanding of how samples flow through the research system
- Foundation for future integration with [European Health Data Space (EHDS)](https://health.ec.europa.eu/ehealth-digital-health-and-care/european-health-data-space_en)

The whole point of Provenance is to create transparency and accountability while making it easier—not harder—to do research. Everything is automated as much as possible so you're not manually filling out forms. The system captures what's happening anyway and structures it in a way that's useful for compliance, reporting, and demonstrating impact.
