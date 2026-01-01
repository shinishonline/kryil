import ServicePageLayout from '../../components/ServicePageLayout';

export default function InfrastructureServices() {
  return (
    <ServicePageLayout
      title="Infrastructure Services"
      subtitle="Cloud & Network Solutions"
      description="Expert cloud migration, management, and optimization across AWS, Azure, and GCP. Build resilient, scalable cloud architectures that power your business and drive digital transformation."
      image="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2832&auto=format&fit=crop"
      galleryImages={[
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?q=80&w=2069&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop',
      ]}
      benefitsImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
      stats={[
        { value: '99.99%', label: 'Uptime SLA' },
        { value: '50%', label: 'Cost Reduction' },
        { value: '200+', label: 'Infra Projects' },
        { value: '24/7', label: 'Support' },
      ]}
      features={[
        {
          title: 'Cloud Migration',
          description: 'Seamless migration of your applications and data to the cloud with minimal downtime and risk.',
        },
        {
          title: 'Multi-Cloud Management',
          description: 'Unified management across AWS, Azure, and GCP for optimal performance and cost efficiency.',
        },
        {
          title: 'Network Architecture',
          description: 'Design and implement robust network infrastructures that scale with your business needs.',
        },
        {
          title: 'Disaster Recovery',
          description: 'Comprehensive backup and disaster recovery solutions to ensure business continuity.',
        },
        {
          title: 'Performance Optimization',
          description: 'Continuous monitoring and optimization to maximize infrastructure performance.',
        },
        {
          title: 'Cost Management',
          description: 'Strategic resource allocation and optimization to reduce infrastructure costs.',
        },
      ]}
      benefits={[
        'Reduced infrastructure costs by up to 40%',
        'Improved system reliability and uptime',
        'Scalable architecture for business growth',
        'Enhanced security and compliance',
        '24/7 monitoring and support',
        'Faster deployment and time-to-market',
      ]}
      technologies={[
        'AWS',
        'Microsoft Azure',
        'Google Cloud',
        'Kubernetes',
        'Docker',
        'Terraform',
        'Ansible',
        'VMware',
        'Cisco',
        'CloudFormation',
      ]}
      ctaText="Transform Your Infrastructure"
    />
  );
}
