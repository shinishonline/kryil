import ServicePageLayout from '../../components/ServicePageLayout';

export default function InfrastructureAutomation() {
  return (
    <ServicePageLayout
      title="Infrastructure Automation Solutions"
      subtitle="Smart Automation"
      description="Transform your operations with intelligent automation solutions. We help businesses automate infrastructure processes, optimize workflows, and leverage data for smarter decision-making."
      image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1400&auto=format&fit=crop"
      galleryImages={[
        'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=1400&auto=format&fit=crop',
      ]}
      benefitsImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop"
      stats={[
        { value: '90%', label: 'Faster Deployments' },
        { value: '80%', label: 'Less Manual Work' },
        { value: '1000+', label: 'Pipelines Built' },
        { value: '0', label: 'Config Drift' },
      ]}
      features={[
        {
          title: 'Infrastructure as Code',
          description: 'Automated provisioning and management of infrastructure using code-based templates.',
        },
        {
          title: 'CI/CD Pipeline Automation',
          description: 'Streamlined development workflows with automated build, test, and deployment pipelines.',
        },
        {
          title: 'Configuration Management',
          description: 'Automated configuration and maintenance of servers and infrastructure components.',
        },
        {
          title: 'Robotic Process Automation',
          description: 'RPA solutions that automate repetitive tasks and free up your team for higher-value work.',
        },
        {
          title: 'Monitoring & Alerting',
          description: 'Automated monitoring systems with intelligent alerting and self-healing capabilities.',
        },
        {
          title: 'Workflow Orchestration',
          description: 'End-to-end automation of complex workflows across multiple systems and platforms.',
        },
      ]}
      benefits={[
        'Reduced manual intervention by up to 80%',
        'Faster deployment cycles and time-to-market',
        'Improved accuracy and elimination of human error',
        'Consistent and repeatable infrastructure deployments',
        'Real-time visibility into operations and performance',
        'Scalable solutions that grow with your business',
      ]}
      technologies={[
        'Terraform',
        'Ansible',
        'Jenkins',
        'GitLab CI',
        'GitHub Actions',
        'Puppet',
        'Chef',
        'Kubernetes',
        'ArgoCD',
        'Prometheus',
      ]}
      ctaText="Automate Your Infrastructure"
    />
  );
}
