import ServicePageLayout from '../../components/ServicePageLayout';

export default function InfrastructureAutomation() {
  return (
    <ServicePageLayout
      title="Infrastructure Automation Solutions"
      subtitle="Smart Automation"
      description="Transform your operations with intelligent automation solutions. We help businesses automate infrastructure processes, optimize workflows, and leverage data for smarter decision-making."
      image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
      galleryImages={[
        'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop',
      ]}
      benefitsImage="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop"
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
