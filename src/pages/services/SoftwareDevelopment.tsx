import ServicePageLayout from '../../components/ServicePageLayout';

export default function SoftwareDevelopment() {
  return (
    <ServicePageLayout
      title="Custom Software Development"
      subtitle="Tailored Solutions"
      description="We build bespoke software solutions designed to meet your unique business requirements. From enterprise applications to consumer-facing products, our team delivers scalable, secure, and high-performance software."
      image="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
      galleryImages={[
        'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop',
      ]}
      benefitsImage="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2070&auto=format&fit=crop"
      stats={[
        { value: '200+', label: 'Apps Delivered' },
        { value: '99.9%', label: 'Uptime SLA' },
        { value: '40%', label: 'Faster Delivery' },
        { value: '24/7', label: 'Support' },
      ]}
      features={[
        {
          title: 'Enterprise Applications',
          description: 'Robust, scalable enterprise software solutions that streamline operations and drive productivity across your organization.',
        },
        {
          title: 'Web Applications',
          description: 'Modern, responsive web applications built with cutting-edge technologies for optimal performance and user experience.',
        },
        {
          title: 'Mobile Development',
          description: 'Native and cross-platform mobile applications for iOS and Android that engage users and deliver value.',
        },
        {
          title: 'API Development',
          description: 'RESTful and GraphQL APIs that enable seamless integration between systems and third-party services.',
        },
        {
          title: 'Legacy Modernization',
          description: 'Transform outdated systems into modern, efficient solutions while preserving business logic and data.',
        },
        {
          title: 'Quality Assurance',
          description: 'Comprehensive testing strategies including automated testing, performance testing, and security audits.',
        },
      ]}
      benefits={[
        'Tailored solutions that perfectly align with your business processes and goals',
        'Scalable architecture designed to grow with your business',
        'Reduced operational costs through automation and efficiency improvements',
        'Faster time-to-market with agile development methodologies',
        'Ongoing support and maintenance to ensure optimal performance',
        '24/7 monitoring and rapid issue resolution',
      ]}
      technologies={[
        'React',
        'Node.js',
        'Python',
        'Java',
        'TypeScript',
        '.NET',
        'PostgreSQL',
        'MongoDB',
        'AWS',
        'Docker',
        'Kubernetes',
      ]}
      ctaText="Start Your Project"
    />
  );
}
