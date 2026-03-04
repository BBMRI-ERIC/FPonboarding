## BBMRI-ERIC Provenance Platform

### What is Provenance?

Provenance is information that documents the history of a described object and related described activities, and that contains information about the origin or source of the object, any changes that may have occurred since its creation, and who has had custody of it since it was created.

In the context of samples and data in BBMRI-ERIC, provenance is a means to document sample and data related events, such as collection, processing, storage, or sharing, and associates these events with metadata.

Provenance enhances quality assessment and reproducibility of samples and data by enabling automated queries. Provenance can help biobanks demonstrate impact, ensure accountability, and provide transparency for governance and compliance purposes.

By implementing the provenance framework, biobanks can become a part of an environment where the traceability of samples and data is fully automated, confidentiality and privacy-preserving, and trustworthy enough to make informed decisions about the samples or data potential reuse.

This page describes BBMRI-ERIC’s provenance platform, which is an implementation of the **Common Provenance Framework (CPF)** (ISO 23494).

### Who runs it

The open specifications of the CPF are maintained by **BBMRI-ERIC** at https://www.commonprovenancemodel.org/. The page is currently under construction. 

The standardized instance of the specifications is maintained by **ISO TC 276 WG 5**.

The provenance platform is currently maintained by the **Institute of Computer Science, Masaryk University, Czech Republic**.

### How it's set up

TBA

### How it actually works

The provenance platform is designed according to the **ISO 23494 provenance standards series** and follows the lifecycle outlined in the standard.

The process of the standardized provenance collection consists of the following steps:

1. Provenance is collected by biobanks using proprietary mechanisms, including:
   - biobank information systems
   - laboratory notebooks
   - SOPs

   All these mechanisms already capture some form of provenance, as they document events related to samples and data.

2. The existing provenance is then transformed into the standardized representation defined by **ISO 23494**, assigned a unique identifier, and stored in the provenance platform.

The overall mechanism is depicted in the following figure.

Figure X: TBA.

### Example

An example of how provenance is designed according to the defined provenance model is shown in an **Evolve-BBMRI project deliverable** [here](https://ec.europa.eu/research/participants/documents/downloadPublic?documentIds=080166e51eafe08b&appId=PPGMS).

Adoption of the framework in a **digital pathology use case** is exemplified in a GitLab repository [here](https://gitlab.ics.muni.cz/422328/dbprov/-/tree/master?ref_type=heads).

## How it connects to other tools

Currently, there is no connection to other tools. The platform is being integrated into the **Data Quality dashboard**.

### What you need to do

**If you're a biobank**

The process of the design, development, and pivotal deployment of the resulting infrastructure consists of the following steps:

1. **Determine the scope** that will be documented by the standardized provenance.

2. **Design provenance documentation** for the selected processes in accordance with the underlying data model, the **Common Provenance Model (CPM / ISO 23494-2)**.

   The data model is described in the **Evolve-BBMRI project deliverable** [here](https://ec.europa.eu/research/participants/documents/downloadPublic?documentIds=080166e51eafe08b&appId=PPGMS)
   
   - Appendix A describes the CPM.
   - Appendix B describes data elements required to document sample handling.
   - Appendix B also shows an example of the design of the data model for a sample handling use case.

3. **Implement a transformation procedure** that translates existing provenance information into the standardized representation.

4. **Implementation example**

   Example implementation is available in the GitLab repository [here](https://gitlab.ics.muni.cz/422328/dbprov/-/tree/master?ref_type=heads).

**If you're a researcher**

### Why it matters

**For biobanks**

Biobanks can benefit from the provenance platform by documenting the full lifecycle of biological samples across organizational boundaries while retaining control over their own data.

This contributes to the automation and quality of the provided information. By implementing standardized provenance collection, biobanks can become part of an environment where the traceability of samples will be fully automated, confidentiality and privacy-preserving, and trustworthy enough to support informed decisions about sample or data reuse.

Biobanks can also benefit from the existence of the standard in procurement processes. Once adopted by software, device, or service providers, biobanks can require **product certification**, which simplifies the provision of machine-actionable standardized provenance representations.

**For researchers**

Researchers can benefit from the framework by enabling answers to concrete quality-related questions, for example:

- dataset composition
- protocol compatibility

The platform aims to reduce ambiguity in interpretation of answers and to support **reproducibility and quality assessment**.

**For the research ecosystem**

For the research ecosystem as a whole, the platform increases trust in shared samples and data across institutional and national boundaries.

It enables systematic quality assessment of complex research outputs whose lifecycle spans multiple organizations, reducing the risk that decisions are based on incomplete or unverifiable documentation.

By making cross-organizational traceability operational, it lowers the cost of quality assessment and supports more reliable research outcomes.

At the same time, it strengthens accountability without requiring central control, thereby improving governance, compliance, and the long-term sustainability of distributed research ecosystems.
