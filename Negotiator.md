## The Negotiator Platform

### What is the Negotiator?

The Negotiator is basically a structured messaging system for handling sample and data access requests. Instead of endless email chains between researchers and biobanks, everything happens in one place with proper tracking, templates, and audit trails.

Think of it as a project management tool specifically designed for biobank access requests. It keeps everyone on the same page and makes sure nothing falls through the cracks.

**Who runs it:** BBMRI-ERIC Common Service IT maintains the platform as part of the integrated [discovery and access infrastructure](Overview.md).

### How it's set up

The Negotiator has two main parts:

**Request management** - This handles the structured forms where researchers describe what they need, tracks the status of requests, and manages multi-biobank requests (when a researcher needs samples from several biobanks for the same study). Authentication is handled through [BBMRI-ERIC AAI](https://www.bbmri-eric.eu/services/aai/).

**Communication system** - Secure messaging between researchers and biobank representatives, document exchange (for ethics approvals, MTAs, DTAs, etc.), full negotiation history, and notifications when there are updates.

Everything is logged and traceable, which is important for compliance and accountability.

### How it actually works

Here's what a typical access request looks like:

1. **Researcher finds what they need** via the [Directory](Directory.md) or [Locator](Locator.md) and clicks to create an access request

2. **Researcher fills out the request form** with:
   - What they're trying to research and why
   - Exactly what samples or data they need
   - How they plan to use the materials
   - What ethical approvals they have (or are getting)
   - Timeline and any specific requirements

3. **Request gets sent to biobank representatives** - You'll get a notification that there's a new request waiting for review

4. **Back-and-forth negotiation** happens through the platform:
   - You assess feasibility (do we actually have what they're asking for?)
   - You discuss the [MTA](https://en.wikipedia.org/wiki/Material_transfer_agreement) (Material Transfer Agreement) terms
   - If data is involved, you work out the [DTA](https://en.wikipedia.org/wiki/Data_transfer_agreement) (Data Transfer Agreement)
   - You provide cost estimates
   - You make sure everything complies with [GDPR](https://gdpr.eu/) and your institutional policies
   - You coordinate with your ethics board and legal team as needed

5. **Agreement gets finalized** - Once everyone agrees on terms, conditions, costs, and timelines, the agreement is documented in the system

6. **You fulfill the request** - Samples or data get provided according to the agreed terms

**Example:** A researcher runs a query in [Locator](Locator.md) and finds that three biobanks have relevant brain tumor samples. They create one request through Negotiator that goes to all three biobanks. Each biobank reviews independently, negotiates terms, and decides whether to participate. The researcher can track all three negotiations in one place.

### How it connects to other tools

The Negotiator is the final step in the [BBMRI-ERIC workflow](Overview.md):

- **[Directory](Directory.md) integration** - Researchers can initiate requests directly from biobank profiles
- **[Locator](Locator.md) integration** - After running federated queries, researchers can request access to the samples they found
- **Standardized templates** - The platform provides [GDPR](https://gdpr.eu/)-compliant templates for consent, DTAs, and MTAs so you're not starting from scratch
- **Transparency** - The system can track what happens with samples after they're provided, which helps demonstrate impact

### What you need to do

**If you're a biobank:**

**Designate representatives** - You need to assign people who will handle access requests. They'll get notifications when new requests come in.

**Respond in a timely way** - Researchers are on timelines. Try to review requests and provide initial feedback within a reasonable timeframe (many biobanks aim for 2-4 weeks for initial response).

**Provide feasibility assessments** - Be honest about whether you can actually provide what's being requested, and give realistic timelines and cost estimates.

**Negotiate within your framework** - You're working within your institutional policies, ethical approvals, and legal requirements. The Negotiator helps document all of this, but you're still responsible for ensuring compliance.

**Coordinate internally** - You'll likely need to involve your ethics board, legal team, and sample management staff. The Negotiator gives you a central place to track all of this.

**If you're a researcher:**

**Be specific and clear** - The more detail you provide about your research objectives and requirements, the easier it is for biobanks to assess feasibility.

**Have your ethics approvals ready** - Or at least be clear about your timeline for getting them. Many biobanks won't commit until they see ethics approval.

**Respect the agreements** - Once you've agreed to terms, stick to them. If something changes in your research plan, communicate that.

**Provide feedback** - If the biobank asks for updates on how you used the samples or what you found, provide it. This helps biobanks demonstrate their impact and justify their existence.

The whole point of the Negotiator is to make this process more efficient and transparent. Everything is documented, everyone knows the status, and there's a clear audit trail for compliance purposes.
