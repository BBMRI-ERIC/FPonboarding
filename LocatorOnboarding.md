# Biobank Onboarding Guide
## BBMRI-ERIC Locator

**Version 1.0 | February 2025**

---

## Quick Start: What You Need to Know

The BBMRI-ERIC Locator is a federated search platform that enables researchers to search for detailed sample-level data across connected biobanks in Europe. Unlike the Directory which provides biobank-level information, the Locator allows fine-grained searches based on diagnosis, sample types, donor characteristics, and more.

Being connected to the Locator significantly increases your biobank's visibility and enables researchers to find exactly what they need.

---

## What is the Federated Platform?

The Federated Platform is part of the broader BBMRI-ERIC IT ecosystem, designed to be vendor-neutral and support different solutions based on standards for interoperability. The platform:

- Supports datafication of BBMRI-ERIC biobanks and the Research Infrastructure (RI) as a whole
- Enables participation in activities such as implementation of the Mission Cancer and European Health Data Space
- Supports member country state's national strategies through a hierarchical model in federated searches and federated data analyses
- Enables biomedical research services provisioning at all hierarchical levels (biobanks, national coordinators, and BBMRI-ERIC)

**Learn more:** [Federated Platform Strategy v1.1](https://www.bbmri-eric.eu/wp-content/uploads/Federated-Platform-Strategy-v1.1.pdf)

---

## Prerequisites

Before you can connect to the Locator, you must have:

### ✅ Directory Registration
- [ ] Your biobank and collections **must be registered** in the [BBMRI-ERIC Directory](https://directory.bbmri-eric.eu/)
- [ ] If not yet registered, complete the Directory onboarding first (see DirectoryOnboarding.md)

### ✅ Technical Infrastructure
- [ ] Ability to create a virtual machine to run local component software (Bridgehead)
- [ ] Technical support available (either local or via your national node)
- [ ] Appropriate data from your biobank management system(s)

### ✅ Data Protection Compliance
- [ ] Read the [BBMRI-ERIC Data Protection Concept](https://web.bbmri-eric.eu/Policies/FedPlatform_Data_Protection_Concept-1_7.pdf)
- [ ] Get approval from your Data Security office if required by your internal policy

---

## Step 1: Understand the Locator Architecture

### What is a Bridgehead?

A **Bridgehead** is the local component that you install at your biobank. It:
- Stores your harmonized data locally (data never leaves your institution)
- Responds to federated queries from the central Locator
- Ensures data protection and privacy by design
- Uses standardized data formats (HL7 FHIR)

### Data Flow

```
Researcher Query → Central Locator → Your Bridgehead → Local Data
                                  ↓
                            Aggregated Results ← Your Bridgehead
```

**Important:** Individual-level data never leaves your institution. Only aggregated counts are returned to researchers.

---

## Step 2: Contact the Federated Platform Team

Before starting the technical setup:

1. **Email the Federated Search Task Force co-chairs:**
   - Email: [federated-platform@helpdesk.bbmri-eric.eu](mailto:federated-platform@helpdesk.bbmri-eric.eu)
   
2. **Include in your email:**
   ```
   Subject: Request to Connect to BBMRI-ERIC Locator
   
   Dear Federated Search Task Force,
   
   We would like to connect our biobank to the BBMRI-ERIC Locator.
   
   Biobank details:
   - Biobank name: [Your biobank name]
   - Directory ID: [Your bbmri-eric:ID:CC_XXX]
   - Institution: [Your institution]
   - Contact person: [Your name and email]
   - National Node: BBMRI-[country code]
   
   We have:
   ✓ Registered our biobank in the BBMRI-ERIC Directory
   ✓ Read the Data Protection Concept
   ✓ Technical support available for installation
   
   Please guide us through the connection process.
   
   Best regards,
   [Your name]
   ```

3. **Wait for response** with further instructions and credentials

---

## Step 3: Technical Requirements

### Hardware Requirements

You need to set up a virtual machine with the following specifications:

| Component | Minimum Requirement |
|-----------|---------------------|
| **CPU** | 4 vCPU |
| **RAM** | 8 GB |
| **Storage** | 50 GB (minimum) |
| **OS** | Linux (Ubuntu 20.04+ or similar) |
| **Network** | Outbound HTTPS (port 443) |

**Detailed requirements:** [GitHub - Bridgehead Hardware Requirements](https://github.com/samply/bridgehead#hardware)

### Software Requirements

- Docker and Docker Compose
- Git
- Internet connection with outbound HTTPS access
- SSH access for administration

---

## Step 4: Install the Bridgehead

### 4.1 Watch the Installation Demo

Before starting, watch the installation demonstration:
- **Video:** [Demo on the installation of Locator bridgehead](https://drive.google.com/file/d/1D-RbGJikgags5ipuGUpGkQcNpE4QF8ub/view?pli=1)

### 4.2 Installation Steps

The Bridgehead installation is automated using Docker containers.

1. **Prepare your virtual machine:**
   ```bash
   # Update system
   sudo apt update && sudo apt upgrade -y
   
   # Install Docker
   curl -fsSL https://get.docker.com -o get-docker.sh
   sudo sh get-docker.sh
   
   # Install Docker Compose
   sudo apt install docker-compose -y
   
   # Install Git
   sudo apt install git -y
   ```

2. **Clone the Bridgehead repository:**
   ```bash
   git clone https://github.com/samply/bridgehead.git
   cd bridgehead
   ```

3. **Configure your Bridgehead:**
   - Follow the configuration wizard
   - Enter your biobank's Directory ID
   - Configure network settings
   - Set up authentication credentials (provided by the Task Force)

4. **Start the Bridgehead:**
   ```bash
   sudo ./bridgehead start
   ```

5. **Verify installation:**
   ```bash
   sudo ./bridgehead status
   ```

**Note:** Detailed installation instructions will be provided by the Federated Search Task Force after your initial contact.

---

## Step 5: Prepare Your Data

### 5.1 Understand Required Data Elements

The Locator searches on the following **minimal denominators**:

| Data Element | Description | Example |
|--------------|-------------|---------|
| **Date of diagnosis** | When the donor was diagnosed | 2023-05-15 |
| **Diagnosis** | Disease code (ICD-10, SNOMED, etc.) | C50.9 (Breast cancer) |
| **Diagnosis age donor** | Age at diagnosis (years) | 45 |
| **Donor age** | Current age (years) | 52 |
| **Sampling date** | When sample was collected | 2023-06-20 |
| **Sample type** | Type of biological material | Plasma, DNA, Tissue |
| **Sex** | Donor sex | Male, Female, Other, Unknown |
| **Storage temperature** | Sample storage conditions | -80°C, Liquid nitrogen |

### 5.2 Export Data from Your System

Export the required data from your biobank management system (LIMS, OpenSpecimen, etc.):

- Donor demographics (age, sex)
- Diagnosis information (ICD-10 codes, diagnosis dates)
- Sample information (type, collection date, storage)
- Ensure data quality and completeness

---

## Step 6: Transform Data to HL7 FHIR Format

The Locator uses **HL7 FHIR** as the standard data format.

### 6.1 Choose an ETL Tool

Select an Extract-Transform-Load (ETL) tool based on your biobank management system:

#### For OpenSpecimen Users:
- **Tool:** [OpenSpecimen ETL to BBMRI-Locator FHIR resources](https://github.com/BiobankCy/os_locator_etl)
- Directly converts OpenSpecimen data to FHIR format
- Maintained by BBMRI Cyprus

#### For Custom Systems:
- **Tool:** [FHIR module](https://github.com/BBMRI-cz/fhir-module)
- Generic FHIR transformation module
- Maintained by BBMRI Czech Republic

#### For Advanced Users:
- **Tool:** [a-small-fire](https://github.com/bbdataeng/a-small-fire)
- Flexible ETL framework for FHIR
- Requires more technical expertise

### 6.2 FHIR Implementation Guide

Follow the BBMRI-ERIC FHIR Implementation Guide:
- **Documentation:** [HL7 FHIR BBMRI Implementation Guide](https://samply.github.io/bbmri-fhir-ig/overview.html)
- Defines required FHIR resources (Patient, Specimen, Condition, Observation)
- Specifies coding systems and value sets

### 6.3 Transform Your Data

1. **Install your chosen ETL tool**
2. **Configure the transformation:**
   - Map your data fields to FHIR resources
   - Ensure proper coding (ICD-10, SNOMED CT, etc.)
   - Validate data quality
3. **Run the transformation:**
   - Generate FHIR-compliant JSON files
   - Validate against the BBMRI FHIR profile

---

## Step 7: Load Data into the Bridgehead

### 7.1 Upload FHIR Data

Once your data is transformed to FHIR format:

1. **Copy FHIR files to the Bridgehead:**
   ```bash
   # Copy your FHIR JSON files to the Bridgehead data directory
   sudo cp /path/to/fhir/data/*.json /opt/bridgehead/data/
   ```

2. **Import data:**
   ```bash
   sudo ./bridgehead import
   ```

3. **Verify data import:**
   ```bash
   sudo ./bridgehead validate
   ```

### 7.2 Data Quality Checks

The Bridgehead will validate:
- FHIR resource structure
- Required fields are present
- Coding systems are correct
- Data types are valid

Fix any validation errors and re-import.

---

## Step 8: Connect to the Central Locator

### 8.1 Register Your Bridgehead

1. **Notify the Task Force** that your Bridgehead is ready
2. **Provide connection details:**
   - Bridgehead URL (if externally accessible)
   - Authentication credentials
   - Directory ID

3. **Wait for central registration** (usually 1-2 business days)

### 8.2 Test the Connection

Once registered:

1. Go to [BBMRI-ERIC Locator](https://locator.bbmri-eric.eu/)
2. Perform a test search
3. Verify your biobank appears in results
4. Check that sample counts are correct

---

## Step 9: Maintain Your Data

### 🔄 Regular Updates

To keep your data current:

1. **Update frequency:** At least quarterly (monthly recommended)
2. **Update process:**
   - Export updated data from your system
   - Transform to FHIR
   - Re-import to Bridgehead
   
3. **Automated updates:** Consider setting up automated ETL pipelines

### 📊 Monitor Your Bridgehead

Regularly check:
- Bridgehead is running: `sudo ./bridgehead status`
- Logs for errors: `sudo ./bridgehead logs`
- Data freshness (last update date)

### 🔒 Security Updates

- Keep Docker and system packages updated
- Apply Bridgehead updates when released
- Monitor security advisories

---

## Support and Training

### 📚 Training Resources

The BBMRI Federated Search Task Force provides:
- **Informative sessions** for national nodes and biobanks
- **Technical training** on local component maintenance
- **"Train the trainers"** system for sustainability

**Training materials:** [Federated Platform Training](https://drive.google.com/file/d/14dVeTEc1gxfSYBN-8ZpMKm0c0Vsif1dK/view?usp=sharing)

### 🆘 Getting Help

**Technical Issues:**
- Email: [federated-platform@helpdesk.bbmri-eric.eu](mailto:federated-platform@helpdesk.bbmri-eric.eu)
- Include: Bridgehead logs, error messages, Directory ID

**Your National Node:**
- Contact your National Node coordinator
- They can provide local technical support
- May have country-specific guidelines

**BBMRI-ERIC Common Service IT:**
- Provides integration with Authentication and Authorization Infrastructure (AAI)
- Supports integration with the Negotiator
- Maintains the central Locator infrastructure

### 💰 Costs

- **Software:** Free and open-source
- **Your responsibility:**
  - Virtual machine hosting costs
  - Technical staff time for setup and maintenance
  - Data management and ETL development

---

## Integration with Other BBMRI-ERIC Tools

### 🔗 Directory Integration

- Your Locator data is linked to your Directory entry
- Researchers can navigate from Directory to detailed Locator searches
- Keep both systems synchronized

### 🤝 Negotiator Integration

- When researchers find samples in the Locator, they can request access via the Negotiator
- Requests are automatically routed to your biobank contact
- Streamlines the sample request workflow

### 🔐 Authentication and Authorization (AAI)

- Researchers use BBMRI-ERIC AAI to access the Locator
- Institutional login or LifeScience Hostel
- Ensures secure and auditable access

---

## Common Issues and Troubleshooting

### ❌ Bridgehead Won't Start

**Symptoms:** Docker containers fail to start

**Solutions:**
- Check Docker is running: `sudo systemctl status docker`
- Check disk space: `df -h`
- Review logs: `sudo ./bridgehead logs`
- Verify configuration files

### ❌ Data Import Fails

**Symptoms:** FHIR validation errors

**Solutions:**
- Validate FHIR files against the BBMRI profile
- Check required fields are present
- Ensure coding systems are correct (ICD-10, SNOMED CT)
- Review ETL transformation logic

### ❌ Biobank Not Visible in Locator

**Symptoms:** Searches don't return your biobank

**Solutions:**
- Verify Bridgehead is connected: `sudo ./bridgehead status`
- Check central registration is complete
- Ensure data is imported: `sudo ./bridgehead validate`
- Contact the Task Force for central configuration check

### ❌ Sample Counts Incorrect

**Symptoms:** Locator shows wrong numbers

**Solutions:**
- Re-export data from source system
- Verify ETL transformation logic
- Check for duplicate records
- Re-import data to Bridgehead

---

## Best Practices

### ✅ Data Quality

- **Use standard coding systems:** ICD-10 for diagnoses, SNOMED CT for procedures
- **Complete data:** Ensure all required fields are populated
- **Accurate counts:** Regularly verify sample numbers match your LIMS
- **Consistent terminology:** Use controlled vocabularies

### ✅ Security

- **Isolate the Bridgehead:** Use a dedicated VM
- **Firewall rules:** Only allow necessary outbound connections
- **Regular updates:** Keep software up to date
- **Access control:** Limit SSH access to authorized personnel

### ✅ Documentation

- **Document your ETL process:** For reproducibility and troubleshooting
- **Keep configuration records:** Bridgehead settings, credentials
- **Maintain a changelog:** Track data updates and system changes

### ✅ Communication

- **Inform your national node:** Keep them updated on your status
- **Participate in community calls:** Learn from other biobanks
- **Share your experience:** Help improve the platform

---

## After Onboarding: Next Steps

### ✅ You're Connected!

Congratulations! Your biobank is now part of the BBMRI-ERIC Federated Platform, enabling detailed sample-level searches across Europe.

### 🔄 Ongoing Responsibilities

- **Update data regularly:** At least quarterly
- **Monitor Bridgehead health:** Check logs and status
- **Respond to Negotiator requests:** When researchers request samples
- **Participate in the community:** Join training sessions and share feedback

### ⭐ Enhance Your Visibility

- **Add more data elements:** Beyond the minimal denominators
- **Improve data quality:** Complete missing fields
- **Connect to Finder:** Consider also connecting to the BBMRI-ERIC Finder (OMOP CDM-based)
- **Join networks:** Participate in disease-specific networks

### 📊 Track Your Impact

- Monitor how often your biobank appears in searches
- Track Negotiator requests from Locator
- Use analytics to understand researcher needs
- Report impact to stakeholders

---

## Locator vs. Finder

BBMRI-ERIC offers two federated search tools:

| Feature | **Locator** | **Finder** |
|---------|-------------|------------|
| **Data format** | HL7 FHIR | OMOP CDM |
| **Local component** | Bridgehead | BC Link |
| **Focus** | Sample-level data | Clinical data and research datasets |
| **License** | Open source | Requires license agreement |
| **Hardware requirements** | 4 vCPU, 8 GB RAM | 8 vCPU, 16 GB RAM |
| **URL** | [locator.bbmri-eric.eu](https://locator.bbmri-eric.eu/) | [finder.bbmri-eric.eu](https://finder.bbmri-eric.eu/) |

**Recommendation:** Start with the Locator (easier setup), then consider adding Finder for more advanced use cases.

---

## Useful Resources

### 📚 Documentation

- **Federated Platform Strategy:** [PDF](https://www.bbmri-eric.eu/wp-content/uploads/Federated-Platform-Strategy-v1.1.pdf)
- **Data Protection Concept:** [PDF](https://web.bbmri-eric.eu/Policies/FedPlatform_Data_Protection_Concept-1_7.pdf)
- **FHIR Implementation Guide:** [https://samply.github.io/bbmri-fhir-ig/overview.html](https://samply.github.io/bbmri-fhir-ig/overview.html)
- **Bridgehead GitHub:** [https://github.com/samply/bridgehead](https://github.com/samply/bridgehead)

### 🎥 Videos and Training

- **Installation Demo:** [Google Drive](https://drive.google.com/file/d/1D-RbGJikgags5ipuGUpGkQcNpE4QF8ub/view?pli=1)
- **Training Materials:** [Google Drive](https://drive.google.com/file/d/14dVeTEc1gxfSYBN-8ZpMKm0c0Vsif1dK/view?usp=sharing)

### 🛠️ ETL Tools

- **OpenSpecimen ETL:** [https://github.com/BiobankCy/os_locator_etl](https://github.com/BiobankCy/os_locator_etl)
- **FHIR Module:** [https://github.com/BBMRI-cz/fhir-module](https://github.com/BBMRI-cz/fhir-module)
- **a-small-fire:** [https://github.com/bbdataeng/a-small-fire](https://github.com/bbdataeng/a-small-fire)

### 🌐 BBMRI-ERIC Platforms

- **Directory:** [https://directory.bbmri-eric.eu](https://directory.bbmri-eric.eu)
- **Locator:** [https://locator.bbmri-eric.eu](https://locator.bbmri-eric.eu)
- **Finder:** [https://finder.bbmri-eric.eu](https://finder.bbmri-eric.eu)
- **Negotiator:** [https://negotiator.bbmri-eric.eu](https://negotiator.bbmri-eric.eu)
- **National Nodes:** [https://www.bbmri-eric.eu/national-nodes/](https://www.bbmri-eric.eu/national-nodes/)

### 📧 Contact

- **Federated Platform Support:** [federated-platform@helpdesk.bbmri-eric.eu](mailto:federated-platform@helpdesk.bbmri-eric.eu)
- **BBMRI-ERIC:** [contact@bbmri-eric.eu](mailto:contact@bbmri-eric.eu)
- **Phone:** +43 316 34 99 170
- **Address:** Neue Stiftingtalstrasse 2/B/6, 8010 Graz, Austria

---

## Success! 🎉

You've successfully connected your biobank to the BBMRI-ERIC Locator!

Your biobank is now part of Europe's federated search infrastructure, enabling researchers to find detailed sample-level data and accelerating biomedical research.

**Welcome to the BBMRI-ERIC Federated Platform!**

---

*For questions about this guide, contact: federated-platform@helpdesk.bbmri-eric.eu*

*Last updated: February 2025 | Version 1.0*
