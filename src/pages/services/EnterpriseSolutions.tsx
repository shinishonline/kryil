import ServicePageLayout from '../../components/ServicePageLayout';

export default function EnterpriseSolutions() {
  return (
    <ServicePageLayout
      title="Enterprise Solution  Application Development"
      subtitle="Enterprise Applications & Solutions"
      description="End-to-end enterprise application development services. We build scalable, secure, and innovative solutions that transform your business operations and drive digital excellence."
      image="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1400&auto=format&fit=crop"
      galleryImages={[
        '/group.jpg',
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1400&auto=format&fit=crop',
      ]}
      benefitsImage="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1400&auto=format&fit=crop"
      stats={[
        { value: '200+', label: 'Enterprise Clients' },
        { value: '500+', label: 'Applications Built' },
        { value: '99%', label: 'Client Satisfaction' },
        { value: '15+', label: 'Years Experience' },
      ]}
      features={[
        {
          title: 'Enterprise Application Development',
          description: 'Enterprise applications designed to meet your specific business requirements and workflows.',
        },
         {
          title: 'Enterprise Mobile Solutions',
          description: 'Cross-platform mobile applications that extend your enterprise capabilities to any device.',
        },
        {
          title: 'API Development & Integration',
          description: 'Build robust APIs and integrate disparate systems for unified data flow across your organization.',
        },
        {
          title: 'Business Process Automation',
          description: 'Automate repetitive tasks and streamline workflows to increase efficiency and reduce costs.',
        },
        {
          title: 'Legacy System Modernization',
          description: 'Transform outdated systems into modern, scalable applications without disrupting business operations.',
        },
        
        {
          title: 'Enterprise Resource Planning',
          description: 'Comprehensive ERP solutions that integrate all aspects of your business operations seamlessly.',
        },
       
      ]}
      benefits={[
        'Increased operational efficiency',
        'Reduced manual processes and human errors',
        'Seamless integration with existing systems',
        'Scalable architecture for future growth',
        'Enhanced data security and compliance',
        'Faster time-to-market for new features',
      ]}
      technologies={[
        'React',
        'Node.js',
        'Python',
        'Java',
        '.NET',
        'TypeScript',
        'PostgreSQL',
        'MongoDB',
        'Redis',
        'Microservices',
      ]}
      ctaText="Start Your Enterprise Project"
    />
  );
}
