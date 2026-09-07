import ServicePageLayout from '../../components/ServicePageLayout';

// Scope deliberately narrowed (Sept 2026). Offerings that require credentials KRYIL does
// not hold — penetration testing (OSCP/CREST), 24/7 SOC monitoring, incident response
// retainers, and SOC 2 / HIPAA / PCI-DSS compliance attestation — have been removed rather
// than advertised. What remains is what we can evidence today.
export default function Cybersecurity() {
  return (
    <ServicePageLayout
      title="Security Engineering"
      subtitle="Built In, Not Bolted On"
      description="Security is part of how we build, not a separate invoice. Every system we deliver is threat-modelled at design time, scanned in CI, and access-controlled by default. We also review systems you already run — including the AI ones, where the risks are newest and least understood."
      image="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1400&auto=format&fit=crop"
      galleryImages={[
        '/group1.jpg',
        'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1400&auto=format&fit=crop',
      ]}
      benefitsImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format&fit=crop"
      features={[
        {
          title: 'AI Security & Governance Review',
          description:
            'Prompt injection, data leakage through retrieval, model supply chain, and access boundaries on tool-using agents. A newer risk surface than most security practices currently cover.',
        },
        {
          title: 'Secure Architecture Review',
          description:
            'Threat modelling of a system you already run or are about to build, delivered as a written architecture record with the trade-offs stated.',
        },
        {
          title: 'DPDP Act Readiness',
          description:
            'A practical mapping of your data flows against the Digital Personal Data Protection Act 2023: classification, retention, erasure paths and sub-processors.',
        },
        {
          title: 'Secure Development Standard',
          description:
            'Dependency and container scanning in CI with builds failing on critical findings, secrets in a managed store, least-privilege IAM documented per grant.',
        },
        {
          title: 'Data Handling Design',
          description:
            'Classification maps, encryption in transit and at rest, and audit logging on every path that touches personal or regulated data.',
        },
        {
          title: 'Private Deployment',
          description:
            'Running AI and data workloads inside your own VPC or on your own hardware, so sensitive data never leaves a network you control.',
        },
      ]}
      benefits={[
        'Security designed in at architecture stage, not retrofitted after a finding',
        'Data residency you can evidence to an auditor or a regulator',
        'A written threat model and architecture record you keep',
        'Reduced exposure from third-party AI sub-processors',
        'Clear, documented data classification and retention rules',
      ]}
      technologies={[
        'STRIDE',
        'OWASP ASVS',
        'OWASP LLM Top 10',
        'Zero Trust',
        'OAuth 2.0',
        'Trivy',
        'Terraform',
        'HashiCorp Vault',
      ]}
      ctaText="Request a Security Review"
    />
  );
}
