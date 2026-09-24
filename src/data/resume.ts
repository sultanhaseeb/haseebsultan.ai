// Public résumé content through 2025. Employer and client identities are omitted.
export const profile = {
  title: 'Senior DevOps / AIOps Engineer',
  location: 'Dubai, UAE',
  email: 'haseebsultandogar@gmail.com',
  summary: 'My background spans full-stack development, cloud architecture, DevOps, and AI operations. I build automated, secure platforms across Azure, AWS, and Google Cloud, with hands-on work in Kubernetes, infrastructure as code, CI/CD, MLOps, and LLM applications.',
};

export const expertise = [
  'Generative AI', 'Designing LLM applications', 'MLOps & LLMOps',
  'Public & private cloud platforms', 'Infrastructure as Code (IaC)',
  'Security & compliance', 'Containerization & orchestration', 'CI/CD', 'Monitoring & logging',
];

export const experience = [
  {
    role: 'Senior DevOps Engineer', period: 'Feb 2025 – ongoing as of 2025', focus: 'AWS infrastructure & platform automation',
    highlights: [
      'Architected secure, multi-tier AWS networking with VPCs, public and private subnets, route tables, and security groups for fintech microservices.',
      'Orchestrated Rails applications on ECS Fargate and a full ELK stack on EKS for centralized logging and real-time analytics.',
      'Codified VPCs, ECS/EKS, RDS, ElastiCache, and security groups in version-controlled Terraform for repeatable development-to-production environments.',
      'Built Bitbucket Pipelines for linting, testing, image builds, and zero-downtime deployments to ECS and EKS.',
      'Integrated Datadog APM and infrastructure monitoring, and maintained DevOps, IaC, and security documentation for observability and team onboarding.',
    ],
  },
  {
    role: 'Senior DevOps Engineer', period: 'Oct 2023 – Feb 2025', focus: 'Azure optimization & DevSecOps',
    highlights: [
      'Reduced Azure infrastructure costs by up to 45% through resource management, scaling strategies, cost-effective services, and reserved instances.',
      'Implemented DevSecOps in CI/CD for 23+ microservices, including secure code integration, continuous security testing, and compliance checks.',
      'Designed robust, scalable solutions using Azure services and infrastructure.',
      'Supported Agile delivery, continuous improvement, and rapid responses to changing business needs.',
      'Maintained comprehensive documentation of DevOps processes, configurations, and best practices.',
    ],
  },
  {
    role: 'Senior DevOps Engineer', period: 'Oct 2020 – Oct 2023', focus: 'Cloud migrations, architecture & technical leadership',
    highlights: [
      'Led more than 10 DevOps projects covering infrastructure automation, CI/CD implementation, and cloud migration.',
      'Migrated 5 applications, 100+ virtual machines, 25+ Kubernetes clusters, and 20+ database clusters across 11 environments to Azure, using Terraform and automated Azure DevOps pipelines.',
      'Designed infrastructure and DevOps practices for healthcare workloads, including scalable architecture, CI/CD, automated monitoring, and compliance.',
      'Deployed a containerized Temenos T24 banking solution on Azure for scalability and operational efficiency.',
      'Led a team of 8 people, coordinating delivery and project milestones.',
      'Worked across Azure, AWS, and Google Cloud, using Git and GitHub for source control and Docker and Helm to deploy and maintain microservices across Dev, QA, UAT, and production.',
    ],
  },
  {
    role: 'Cloud / Full Stack Engineer', period: 'Jun 2019 – Sep 2020', focus: 'Application development & collaborative delivery',
    highlights: [
      'Built full-stack applications using React, Node.js, MySQL, and Sequelize within Agile teams.',
      'Collaborated with domestic and international teams on application delivery and the DevOps platform.',
    ],
  },
];

export const resumeProjects = [
  {
    title: 'AWS Microservices Platform', role: 'Architect & DevOps Engineer',
    description: 'Automated Bitbucket CI/CD to lint, test, containerize, and deploy Rails microservices to ECS Fargate and the ELK stack to EKS across non-production, staging, and production. Designed segmented VPC networking and granular security groups; managed VPCs, ECS/EKS, RDS, and ElastiCache with Terraform. Added Datadog APM and dashboards, alongside DevOps and security documentation for onboarding and audit readiness.',
    topics: ['AWS', 'ECS Fargate', 'EKS', 'Terraform', 'Bitbucket', 'Rails', 'ELK', 'Datadog', 'RDS', 'ElastiCache'],
    flow: ['Source and pipeline', 'ECS and EKS platform', 'Datadog and ELK'],
  },
  {
    title: 'GitOps Delivery on Azure', role: 'DevOps Engineer',
    description: 'Connected Azure DevOps pipelines with Git repositories containing manifests and Helm charts. Configured Argo CD to watch repository changes and automatically synchronize deployments to AKS across development, test, and production for consistent, automated delivery.',
    topics: ['Azure', 'AKS', 'Argo CD', 'Terraform', 'Azure DevOps', 'GitHub Actions', 'GitHub', 'Helm'],
    flow: ['Git and Helm', 'Argo CD sync', 'AKS environments'],
  },
  {
    title: 'DevOps Practice & Audit Documentation', role: 'Technical Lead & Documentation Designer',
    description: 'Led the design of Microsoft audit documentation for a DevOps consulting practice: readiness plans and roadmaps, practice charters, statements of work, a knowledge repository, DevOps and DevSecOps best practices, assessment and approval gates, solution designs, project plans, and migration and deployment sequences. Documented tools and practices for modernizing DevOps environments.',
    topics: ['Azure DevOps', 'Technical Documentation', 'DevSecOps', 'Audit Readiness', 'Solution Design'],
    flow: ['Requirements', 'Review gates', 'Audit evidence'],
  },
  {
    title: 'On-Premises to Azure Migration', role: 'Architect & DevOps Engineer',
    description: 'Automated migration to Azure using Azure DevOps pipelines, Terraform, and Ansible. Configured Application Gateway, AKS, SQL Managed Instance, PostgreSQL, ACR, virtual machines, virtual networks and peering, storage accounts, Traffic Manager, and Key Vault. Installed Twistlock, Velero, Grafana, and Prometheus through Helm, with Kubernetes backups in Blob Storage. Integrated Argo CD with Azure DevOps and Helm repositories, defining projects and applications for automated component deployments.',
    topics: ['Azure', 'Terraform', 'Ansible', 'Azure DevOps', 'Argo CD', 'AKS', 'Helm', 'Velero', 'Grafana', 'Prometheus'],
    flow: ['On premises', 'Automated migration', 'Azure platform'],
  },
  {
    title: 'Hybrid Kubernetes with EKS Anywhere', role: 'Architect & DevOps Engineer',
    description: 'Deployed an AWS EKS Anywhere Kubernetes cluster on vSphere 7 with two ESXi hosts. Configured Twistlock, Velero, Grafana, and Prometheus with Helm charts, stored Kubernetes backups in Amazon S3, and integrated Amazon ECR with the vSphere cluster.',
    topics: ['AWS EKS Anywhere', 'Kubernetes', 'vSphere 7', 'ESXi', 'Helm', 'Twistlock', 'Velero', 'S3', 'ECR'],
    flow: ['ECR and Helm', 'EKS Anywhere', 'vSphere and S3'],
  },
  {
    title: 'Google Cloud Microservices Delivery', role: 'Architect & DevOps Engineer',
    description: 'Built GitLab pipelines to deploy microservices and Google Cloud services across non-production, staging, and production. Worked with Kubernetes, Helm, Docker and container registries, Compute Engine, Cloud Run, Ingress, VPC networking, Cloud Monitoring, Secret Manager, Cloud SQL, Artifact Registry, and Firebase.',
    topics: ['Google Cloud', 'GitLab', 'Terraform', 'Kubernetes', 'Helm', 'Docker', 'Cloud Run', 'Firebase'],
    flow: ['GitLab pipeline', 'GKE and Cloud Run', 'Cloud Monitoring'],
  },
  {
    title: 'Node.js Microservices on AKS', role: 'Architect & DevOps Engineer',
    description: 'Built Azure DevOps pipelines to deploy Node.js microservices and Azure cloud services across development and production, using Docker, Docker Compose, Helm, Istio, AKS, MongoDB, Git, and GitHub.',
    topics: ['Azure DevOps', 'AKS', 'Node.js', 'Docker Compose', 'Helm', 'Istio', 'MongoDB', 'GitHub'],
    flow: ['Azure DevOps', 'Docker and Helm', 'AKS and Istio'],
  },
  {
    title: 'Azure Application Delivery & Quality Automation', role: 'Architect & DevOps Engineer',
    description: 'Built CI/CD for microservices across Dev, QA, UAT, and production using Azure DevOps, Kubernetes, Helm, Docker, container registries, Git, AKS, and MongoDB. Configured App Service, Application Gateway, Azure VPN and VNet Gateway, ARM templates, Azure Monitor Insights, Key Vault, Grafana, SonarQube, and API Management. Integrated unit and integration tests, Robot Framework and Selenium automation, PowerShell scripting, Data Factory, Databricks, and Synapse workspaces.',
    topics: ['Azure DevOps', 'Azure', 'AKS', 'MongoDB', 'SonarQube', 'Robot Framework', 'Selenium', 'PowerShell', 'API Management'],
    flow: ['Build and test', 'Deploy and secure', 'Observe and release'],
  },
  {
    title: 'Azure DataOps Pipelines', role: 'DevOps Engineer',
    description: 'Automated deployments of Azure Data Factory, Azure Databricks, and Azure Synapse across Dev, QA, UAT, and production. Implemented a GitOps workflow with security controls, pull-request approvals, and secrets stored in Azure Key Vault.',
    topics: ['DataOps', 'Azure DevOps', 'Azure Data Factory', 'Azure Databricks', 'Azure Synapse', 'GitOps', 'Key Vault'],
    flow: ['Git and approvals', 'Azure pipeline', 'Data platforms'],
  },
];

export const publishedArticles = [
  { title: 'Dapr for Kubernetes', category: 'Kubernetes', href: 'https://medium.com/@haseebsultandogar/dapr-for-kubernetes-a5cf1ac8f1a7' },
  { title: 'Kubernetes with LKE — Linode Kubernetes Engine', category: 'Cloud & Kubernetes', href: 'https://medium.com/@haseebsultandogar/kubernetes-with-lke-linode-kubernetes-engine-9de7669323b5' },
  { title: 'DevSecOps — Integrating Security into DevOps', category: 'DevSecOps', href: 'https://medium.com/@haseebsultandogar/devsecops-integrating-security-into-devops-83121206bd95' },
];

export const certifications = [
  'Certified Kubernetes Administrator (CKA)',
  'Microsoft Certified: DevOps Engineer Expert',
  'GitHub Certified Partner: GitHub Actions',
  'GitHub Certified Partner: GitHub Advanced Security',
  'GitHub Certified Partner: GitHub Administration',
  'Designing and Implementing Microsoft DevOps Solutions (AZ-400)',
  'Microsoft Certified: Azure Administrator Associate (AZ-104)',
];

export const education = [
  { qualification: 'Artificial Intelligence: Generative AI, Cloud and MLOps', institution: 'University of Oxford', detail: 'Short course' },
  { qualification: 'B.S. in Computer Science', institution: 'FAST — National University of Computer and Emerging Sciences', detail: 'Bachelor’s degree' },
  { qualification: 'Intermediate (Pre-Engineering)', institution: 'Punjab Group of Colleges', detail: 'Higher secondary education' },
  { qualification: 'Matriculation (Science)', institution: 'Sadiq Public School, Bahawalpur', detail: 'Secondary education' },
];

export const additionalSkills = [
  { title: 'Technical pre-sales', description: 'Understanding client requirements, delivering product demonstrations, and designing tailored solutions around business value and client satisfaction.' },
  { title: 'Technical leadership', description: 'Guiding technical teams toward project goals and technical excellence, with experience leading a team of 8.' },
];
