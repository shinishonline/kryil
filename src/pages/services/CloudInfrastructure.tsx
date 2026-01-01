import ServicePageLayout from '../../components/ServicePageLayout';

export default function CloudInfrastructure() {
  return (
    <ServicePageLayout
      title="Cloud Infrastructure"
      subtitle="Scalable & Reliable"
      description="Design, migrate, and manage cloud infrastructure that scales with your business. Our cloud experts help you leverage AWS, Azure, and GCP to build resilient, cost-effective, and high-performance systems."
      image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
      stats={[
        { value: '99.99%', label: 'Uptime Achieved' },
        { value: '40%', label: 'Cost Savings' },
        { value: '100+', label: 'Migrations Done' },
        { value: '3x', label: 'Faster Scaling' },
      ]}
      features={[
        {
          title: 'Cloud Migration',
          description: 'Seamless migration of your applications and data to the cloud with minimal downtime and risk.',
        },
        {
          title: 'Infrastructure as Code',
          description: 'Automated infrastructure provisioning and management using Terraform, CloudFormation, and Pulumi.',
        },
        {
          title: 'Container Orchestration',
          description: 'Kubernetes and Docker solutions for scalable, portable, and efficient containerized applications.',
        },
        {
          title: 'Multi-Cloud Strategy',
          description: 'Strategic multi-cloud architectures that optimize costs and avoid vendor lock-in.',
        },
        {
          title: 'Cloud Optimization',
          description: 'Continuous optimization of cloud resources to reduce costs while maintaining performance.',
        },
        {
          title: '24/7 Monitoring',
          description: 'Proactive monitoring and alerting to ensure high availability and rapid incident response.',
        },
      ]}
      benefits={[
        'Reduced infrastructure costs with pay-as-you-go pricing',
        'Improved scalability to handle traffic spikes and growth',
        'Enhanced reliability with built-in redundancy and failover',
        'Faster deployment cycles with automated CI/CD pipelines',
        'Global reach with distributed cloud infrastructure',
        'Compliance with industry standards and regulations',
      ]}
      technologies={[
        'AWS',
        'Azure',
        'Google Cloud',
        'Kubernetes',
        'Docker',
        'Terraform',
        'Ansible',
        'Jenkins',
        'GitHub Actions',
        'Prometheus',
        'Grafana',
      ]}
      ctaText="Migrate to Cloud"
    />
  );
}
