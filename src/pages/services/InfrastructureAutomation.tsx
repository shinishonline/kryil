import ServicePageLayout from '../../components/ServicePageLayout';

export default function InfrastructureAutomation() {
  return (
    <ServicePageLayout
      title="Infrastructure Services & Automation"
      subtitle="Cloud, Network & DevOps Solutions"
      description="Comprehensive infrastructure services combined with intelligent automation. From cloud migration and network architecture to CI/CD pipelines and Infrastructure as Code, we deliver scalable, resilient, and automated infrastructure solutions."
      image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1400&auto=format&fit=crop"
      galleryImages={[
        'https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1400&auto=format&fit=crop',
      ]}
      benefitsImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1400&auto=format&fit=crop"
      stats={[
        { value: '99.99%', label: 'Uptime SLA' },
        { value: '90%', label: 'Faster Deployments' },
        { value: '200+', label: 'Infra Projects' },
        { value: '24/7', label: 'Support' },
      ]}
      features={[
        {
          title: 'Cloud Migration & Management',
          description: 'Seamless migration and unified management across AWS, Azure, and GCP for optimal performance and cost efficiency.',
        },
        {
          title: 'Infrastructure as Code',
          description: 'Automated provisioning and management of infrastructure using Terraform, CloudFormation, and Pulumi.',
        },
        {
          title: 'Network Architecture',
          description: 'Design and implement robust network infrastructures that scale with your business needs.',
        },
        {
          title: 'CI/CD Pipeline Automation',
          description: 'Streamlined development workflows with automated build, test, and deployment pipelines.',
        },
        {
          title: 'Disaster Recovery',
          description: 'Comprehensive backup and disaster recovery solutions to ensure business continuity.',
        },
        {
          title: 'Monitoring & Alerting',
          description: 'Automated monitoring systems with intelligent alerting and self-healing capabilities.',
        },
      ]}
      benefits={[
        'Reduced infrastructure',
        'Faster deployment cycles and time-to-market',
        'Improved system reliability and uptime',
        'Consistent and repeatable infrastructure deployments',
        'Enhanced security and compliance',
        'Scalable architecture for business growth',
      ]}
      technologies={[
        'AWS',
        'Azure',
        'Google Cloud',
        'Terraform',
        'Ansible',
        'Kubernetes',
        'Docker',
        'Jenkins',
        'GitLab CI',
        'Prometheus',
      ]}
      ctaText="Transform Your Infrastructure"
    />
  );
}
