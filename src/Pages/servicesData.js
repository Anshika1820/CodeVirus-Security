import cybersecurity_operation_center from "/assets/photos/cybersecurity_operation_center.png";
import incident_response_and_management from "/assets/photos/incident_response_and_management.png";
import incident_response_plan_and_procedure from "/assets/photos/incident_response_plan_and_procedure.png";
import integrating_threat_and_intelligence from "/assets/photos/integrating_threat_and_intelligence.png";
import the_role_of_security_analyst_in_a_csoc from "/assets/photos/the_role_of_security_analyst_in_a_csoc.png";
import challenges_in_staffing_and_retaining_talent from "/assets/photos/challenges_in_staffing_and_retaining_talent.png";
import security_monitoring_and_detection from "/assets/photos/security_monitoring_and_detection.png";
import security_automation from "/assets/photos/security_automation.png";
import infrastructure_security from "/assets/photos/infrastructure_security.png";
import access_control_and_identity_management from "../assets/photos/access_control_and_identity_management.png";
import cloud_security from "/assets/photos/cloud_security.png";
import data_protection_and_privacy from "/assets/photos/data_protection_and_privacy.png";
import vulnerability_assessment_and_penetration_testing from "/assets/photos/vapt.jpeg";
import aadhaar_security_audit from "/assets/photos/aadhaar_security_audit.png";
import web_application_security_audit from "/assets/photos/web_application_security_audit.png";
import firewall_security_audit from "/assets/photos/firewall_security_audit.png";
import system_security_audit from "/assets/photos/system_security_audit.png";
import digital_forensics from "/assets/photos/digital_forensics.png";
import iot_and_edge_security from "/assets/photos/iot_and_edge_security.png";
import it_security_audit from "/assets/photos/it_security_audit.png";
import forensic_investigation_and_audit from "/assets/photos/forensic_investigation_and_audit.png";
import networking_audit from "/assets/photos/networking_audit.png";
const servicesData = [
    {
        id: 1,
        title: "Cybersecurity Operations Centers",
        image: cybersecurity_operation_center ,
        description: "A Cybersecurity Operations Center is a centralized unit that deals with monitoring, detecting, analyzing, and responding to cybersecurity incidents using technology solutions and defined procedures.",
        icon: "shield-check",
        features: ["24/7 Monitoring", "Real-time Threat Detection", "Incident Response", "Security Analytics"],
        details: "Our Cybersecurity Operations Center (CSOC) operates 24/7/365 to ensure your digital assets are always protected. We utilize state-of-the-art SIEM (Security Information and Event Management) technology combined with AI-driven analytics to detect anomalies in real-time. Our team of expert analysts triages threats, performs deep-dive investigations, and orchestrates rapid response actions to neutralize attacks before they impact your business continuity. We provide detailed reporting and compliance dashboards to keep stakeholders informed."
       
        },
    {
        id: 2,
        title: "Incident Response And Management",
        image: incident_response_and_management,
        description: "Comprehensive incident response services to quickly identify, contain, and remediate security threats before they can cause significant damage to your organization.",
        icon: "clock",
        features: ["Rapid Response", "Forensic Analysis", "Threat Containment", "Recovery Planning"],
        details: "When a security breach occurs, time is critical. Our Incident Response team is on standby to deploy immediately. We follow a rigorous 6-phase incident response lifecycle: Preparation, Identification, Containment, Eradication, Recovery, and Lessons Learned. We handle everything from malware outbreaks and ransomware attacks to data breaches and insider threats. Our goal is to minimize downtime, preserve evidence for forensic analysis, and restore your systems to a secure state as quickly as possible."
    },
    {
        id: 3,
        title: "Incident Response Plans And Procedures",
        image: incident_response_plan_and_procedure,
        description: "Develop and implement comprehensive incident response plans tailored to your organization's specific needs and regulatory requirements.",
        icon: "document-text",
        features: ["Custom Plans", "Regulatory Compliance", "Team Training", "Regular Updates"],
        details: "A plan is only good if it works when needed. We help you design, document, and test a bespoke Incident Response Plan (IRP) that aligns with frameworks like NIST and ISO 27001. We define roles and responsibilities, communication protocols, and escalation paths. Furthermore, we conduct Tabletop Exercises (TTX) to simulate real-world attack scenarios, ensuring your team is ready to execute the plan effectively under pressure."
    },
    {
        id: 4,
        title: "Integrating Threat And Intelligence",
        image: integrating_threat_and_intelligence,
        description: "Advanced threat intelligence integration to provide proactive security measures and stay ahead of emerging cyber threats.",
        icon: "chart-bar",
        features: ["Threat Intelligence", "Predictive Analytics", "Risk Assessment", "Strategic Planning"],
        details: "Don't just wait for attacks—anticipate them. We integrate Global Threat Intelligence feeds into your security ecosystem, enriching your defenses with indicators of compromise (IoCs) and tactics, techniques, and procedures (TTPs) used by threat actors targeting your industry. This proactive approach allows us to update firewall rules, patch vulnerabilities, and hunt for threats that may have evaded traditional defenses."
    },
    {
        id: 5,
        title: "The Role Of Security Analysts In A CSOC",
        image: the_role_of_security_analyst_in_a_csoc,
        description: "Expert security analysts provide continuous monitoring, analysis, and response to security events in your Security Operations Center.",
        icon: "users",
        features: ["Expert Analysts", "Continuous Monitoring", "Advanced Analysis", "Proactive Response"],
        details: "Our security analysts are the human firewall protecting your organization. They are certified professionals (CISSP, CEH, GCIH) trained to distinguish between false positives and genuine threats. Tier 1 analysts monitor alerts 24/7, Tier 2 analysts perform deep investigations and threat hunting, and Tier 3 experts handle advanced incident response and reverse engineering. Together, they ensure nothing slips through the cracks."
    },
    {
        id: 6,
        title: "Challenges In Staffing And Retaining Talent",
        image: challenges_in_staffing_and_retaining_talent,
        description: "Address the cybersecurity skills gap with our comprehensive staffing solutions and talent retention strategies.",
        icon: "academic-cap",
        features: ["Talent Acquisition", "Skills Development", "Retention Strategies", "Team Building"],
        details: "The cybersecurity skills gap is a global challenge. We provide staff augmentation services to fill critical roles in your security team instantly. Beyond hiring, we help you build a culture of continuous learning and career development to retain top talent. We offer training programs, mentorship, and certification paths to keep your team motivated and up-to-date with the latest security trends."
    },
    {
        id: 7,
        title: "Security Monitoring & Detection",
        image: security_monitoring_and_detection,
        description: "Advanced monitoring systems to detect and respond to security threats in real-time.",
        icon: "eye",
        features: ["Network Traffic Analysis", "Log Management", "Anomaly Detection", "Real-time Alerts"],
        details: "Visibility is the first step in security. Our Security Monitoring & Detection service provides you with a 360-degree view of your network traffic, system logs, and user activities. We employ advanced anomaly detection algorithms to spot suspicious behavior that might slip past traditional defenses. By correlating events across your entire infrastructure, we reduce noise and focus on high-fidelity alerts that require immediate attention."
    },
    {
        id: 8,
        title: "Security Automation",
        image: security_automation,
        description: "Automated security processes to improve efficiency and reduce response times.",
        icon: "cog",
        features: ["Automated Playbooks", "Workflow Orchestration", "Faster Response", "Reduced Human Error"],
        details: "Manual processes are slow and prone to error. Our Security Automation service leverages SOAR (Security Orchestration, Automation, and Response) technologies to streamline your security operations. We build custom playbooks that automatically trigger actions—such as blocking an IP address or isolating a compromised host—detecting threats at machine speed. This drastically reduces Mean Time to Respond (MTTR) and frees up your analysts for strategic tasks."
    },
    {
        id: 9,
        title: "Infrastructure Security",
        image: infrastructure_security,
        description: "Comprehensive protection for your IT infrastructure and network assets.",
        icon: "server",
        features: ["Network Segmentation", "Firewall Management", "Vulnerability Scanning", "Patch Management"],
        details: "Your infrastructure is the backbone of your business. We secure it from the ground up. Our services include rigorous firewall management to control traffic flow, network segmentation to limit lateral movement of attackers, and regular vulnerability scanning to identify weak points. We also manage your patching lifecycle, ensuring that your servers and network devices are always fortified against the latest known exploits."
    },
    {
        id: 10,
        title: "Access Control & Identity Management",
        image: access_control_and_identity_management,
        description: "Secure access control systems and identity management solutions.",
        icon: "lock-closed",
        features: ["MFA Implementation", "SSO Solutions", "Privileged Access Mgmt", "Role-Based Access"],
        details: "Identity is the new perimeter. We implement robust Identity and Access Management (IAM) solutions to ensure that the right people have the right access at the right time. Our services cover everything from deploying Multi-Factor Authentication (MFA) and Single Sign-On (SSO) to managing Privileged Access Management (PAM) for your most sensitive administrative accounts. We help you enforce the Principle of Least Privilege to minimize insider threats."
    },
    {
        id: 11,
        title: "Cloud Security",
        image: cloud_security,
        description: "Specialized security solutions for cloud-based infrastructure and applications.",
        icon: "globe",
        features: ["Cloud Config Review", "Container Security", "Data Encryption", "Compliance Monitoring"],
        details: "Moving to the cloud introduces unique security challenges. Whether you use AWS, Azure, or Google Cloud, we secure your shared responsibility model. We perform continuous configuration reviews to prevent misconfigurations (like open S3 buckets), secure your containerized applications (Docker/Kubernetes), and ensure data is encrypted both in transit and at rest. We also help you maintain compliance with cloud-specific standards."
    },
    {
        id: 12,
        title: "Data Protection & Privacy",
        image: data_protection_and_privacy,
        description: "Comprehensive data protection and privacy compliance solutions.",
        icon: "database",
        features: ["Data Classification", "DLP Solutions", "Encryption Strategy", "Privacy Impact Assessments"],
        details: "Data is your most valuable asset. We help you protect it and comply with regulations like GDPR, CCPA, and DPDP. Our Data Loss Prevention (DLP) strategies monitor and block unauthorized data transfers. We assist in data classification to identify sensitive information and implement strong encryption standards. We also conduct Privacy Impact Assessments (PIA) to help you understand and mitigate risks associated with processing personal data."
    },
    {
        id: 13,
        title: "Vulnerability Assessment & Penetration Testing",
        image: vulnerability_assessment_and_penetration_testing,
        description: "Security testing to find weak points in systems before they turn into real attacks.",
        icon: "shield-check",
        features: ["Application and network security testing", "Manual checks along with automated scans", "Clear risk explanation,not just severity scores", "Practical fix recommendations teams can apply"],
        details: "Every application and network has gaps. The problem is most teams don’t know where they are. Vulnerability Assessment & Penetration Testing helps identify these weak areas by checking systems the same way an attacker would. We review applications, servers, and networks to spot misconfigurations, outdated components, and exploitable issues. The focus is not just on finding problems, but on understanding which ones actually matter."
    },
    {
        id: 14,
        title: "Aadhaar Security Audit",
        image: aadhaar_security_audit,
        description: "A focused security review to check how Aadhaar-related systems handle data, access, and controls.",
        icon: "shield-check",
        features: ["Review of Aadhaar data flow and storage","Access control and role validation", "Basic application and infrastructure checks", "Practical audit observations and fixes"],
        details: "Organizations dealing with Aadhaar data carry a high level of responsibility. An Aadhaar Security Audit reviews how systems store, process, and access Aadhaar information, and whether the required security controls are actually in place. The audit looks at application setup, access management, data handling practices, and basic infrastructure security. The goal is to identify gaps that could lead to data leakage, misuse, or non-compliance."
    },
    {
        id: 15,
        title: "Web Application Security Audit",
        image: web_application_security_audit,
        description: "Security testing to identify weaknesses in web applications before attackers do.",
        icon: "shield-check",
        features: ["Authentication and access control review", "Input handling and validation checks", "Session and logic-related issues", "Practical remediation guidance"],
        details: "Web applications are directly exposed to users and the internet, making them frequent attack targets. A Web Application Security Audit examines how the application handles input, authentication, and access control. The audit focuses on real attack scenarios rather than just automated scans."
    },
    {
        id: 16,
        title: "Firewall Security Audit",
        image: firewall_security_audit,
        description: "A focused review of firewall rules and network controls to reduce unnecessary exposure.",
        icon: "shield-check",
        features: ["Rule base and access review", "Risky and unused rule identification", "Network segmentation validation", "Logging and monitoring checks"],
        details: "Firewalls often grow messy over time due to business changes and quick fixes. A Firewall Security Audit reviews rules, policies, and configurations to identify risky access paths and unused or overly permissive rules. The goal is to ensure only required traffic is allowed and security controls are working as intended."
    },
    {
        id: 17,
        title: "System Security Audit",
        image: system_security_audit,
        description: "A structured review to check how servers and core systems are configured, accessed, and protected.",
        icon: "shield-check",
        features: ["Server and OS configuration review", "User accounts and privilege checks", "Patch and update status", "Logging and basic security controls"],
        details: "Systems form the base of any IT environment, and weak configurations often become easy entry points for attacks. A System Security Audit reviews servers and operating systems to identify gaps in access control, patching, and basic security settings. The audit focuses on how systems are actually running in production, not just how they were designed. This helps teams understand where controls are missing or misconfigured and what needs immediate attention."
    },
    {
        id: 18,
        title: "Digital Forensics",
        image: digital_forensics,
        description: "Technical analysis to collect and examine digital evidence from systems and devices.",
        icon: "shield-check",
        features: ["Evidence identification and preservation", "Disk,system and log analysis", "Timeline and activity reconstruction", "Forensic findings and technical reporting"],
        details: "Digital Forensics focuses on identifying and preserving digital evidence from computers, servers, storage devices, and logs. The process follows structured methods to ensure evidence remains intact and reliable during analysis. The goal is to understand technical activity within systems by examining data artifacts, timelines, and system behavior without altering the original evidence."
    },
    {
        id: 19,
        title: "IoT & Edge Security",
        image: iot_and_edge_security,
        description: "Security assessment to protect connected devices and edge systems operating outside the core network.",
        icon: "shield-check",
        features: ["Device configuration and access review", "Network exposure and communication checks", "Authentication and update mechanism review", "Risk findings with practical fixes"],
        details: "IoT and edge devices often run in remote or unmanaged environments, making them easy targets if not properly secured. An IoT & Edge Security review checks how devices are configured, connected, and monitored across the network. The assessment focuses on device access, communication paths, and basic security controls to identify weaknesses that could lead to unauthorized access or data exposure."
    },
    {
        id: 20,
        title: "IT Security Audit",
        image: it_security_audit,
        description: "A practical review of security controls across systems, networks, and applications.",
        icon: "shield-check",
        features: ["Review of security controls across IT assets", "Access management and privilege checks", "Policy and configuration alignment review", "Clear audit observations with fix guidance"],
        details: "An IT Security Audit examines how well an organization’s technology environment is protected in day-to-day operations. The audit reviews core security controls, access management, configurations, and basic practices to identify gaps that increase risk. The focus is on understanding how security is actually implemented, not how it looks on paper. This helps organizations see where controls are missing, outdated, or not working as expected."
    },
    {
        id: 21,
        title: "Forensic Investigation & Audit",
        image: forensic_investigation_and_audit,
        description: "An investigative review performed after a security incident to understand what happened.",
        icon: "shield-check",
        features: ["Log and evidence analysis", "Timeline reconstruction", "Impact and root cause identification", "Incident reporting support"],
        details: "When a security incident occurs, quick assumptions often make things worse. A Forensic Audit helps reconstruct events by analyzing logs, systems, and digital evidence to identify the cause and impact of the incident. The focus is on facts, not guesswork."
    },
    {
        id: 22,
        title: "Networking Audit",
        image: networking_audit,
        description: "A detailed review of network design, configurations, and controls to identify security and reliability gaps.",
        icon: "shield-check",
        features: ["Network architecture and segmentation review", "Switch and router configuration checks", "VLAN and access control validation", "Traffic flow and exposure analysis"],
        details: "Networks connect everything, and a small misconfiguration can expose the entire environment. A Networking Audit reviews how network devices, segments, and traffic flows are set up and whether they follow basic security and operational best practices. The audit focuses on real configurations running in the network, not just diagrams. This helps identify weak segmentation, unnecessary exposure, and design issues that affect both security and performance."
    },
];
export default servicesData;
