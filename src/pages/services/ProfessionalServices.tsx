import ServicePageLayout from '../../components/ServicePageLayout';

export default function ProfessionalServices() {
  return (
    <ServicePageLayout
      title="Professional Services"
      subtitle="Expert Consulting & Managed Services"
      description="Strategic technology consulting and managed services that drive business transformation. Our expert consultants partner with you to optimize operations, implement best practices, and achieve measurable results."
      image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1400&auto=format&fit=crop"
      galleryImages={[
        'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1400&auto=format&fit=crop',
        '/group2.jpg',
      ]}
      benefitsImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1400&auto=format&fit=crop"
      stats={[
        { value: '150+', label: 'Expert Consultants' },
        { value: '300+', label: 'Projects Delivered' },
        { value: '98%', label: 'Client Retention' },
        { value: '20+', label: 'Industries Served' },
      ]}
      features={[
        {
          title: 'Consulting Services',
          description: 'Business strategy, IT consulting, digital transformation, and process optimization.',
        },
        {
          title: 'Technology & IT Services',
          description: 'Software development, system integration, cloud computing, cybersecurity, and AI/ML solutions.',
        },
        {
          title: 'Engineering Services',
          description: 'Design, analysis, simulation, research & development, and product engineering.',
        },
        {
          title: 'Project & Program Management',
          description: 'Planning, execution, risk management, and quality control.',
        },
        {
          title: 'Financial Services',
          description: 'Accounting, auditing, taxation, and financial advisory services.',
        },
        {
          title: 'Human Resource Services',
          description: 'Recruitment, training, talent management, and organizational development.',
        },
      ]}
      benefits={[
        'Access to specialized expertise on-demand',
        'Reduced operational costs',
        'Accelerated project delivery timelines',
        'Improved IT governance and compliance',
        'Scalable resources based on business needs',
        'Knowledge transfer and team enablement',
      ]}
      technologies={[
        'ITIL',
        'Agile',
        'Scrum',
        'PMP',
        'TOGAF',
        'Six Sigma',
        'DevOps',
        'COBIT',
        'Lean',
        'SAFe',
      ]}
      ctaText="Start Your Consultation"
    />
  );
}
