import ServicePageLayout from '../../components/ServicePageLayout';

export default function DatabaseServices() {
  return (
    <ServicePageLayout
      title="Database Administration"
      subtitle="Data Management Excellence"
      description="Expert database administration and development services. From SQL Server and Oracle to MongoDB and PostgreSQL, we manage, optimize, and secure your data infrastructure for peak performance."
      image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1400&auto=format&fit=crop"
      galleryImages={[
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1400&auto=format&fit=crop',
      ]}
      benefitsImage="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1400&auto=format&fit=crop"
      stats={[
        { value: '99.99%', label: 'Uptime SLA' },
        { value: '500+', label: 'Databases Managed' },
        { value: '24/7', label: 'DBA Support' },
        { value: '10TB+', label: 'Data Processed Daily' },
      ]}
      features={[
        {
          title: 'SQL Server Administration',
          description: 'Complete SQL Server management including installation, configuration, optimization, SSRS, SSIS, SSAS, and Always On availability groups.',
        },
        {
          title: 'Oracle Database Services',
          description: 'Oracle DBA services including RAC, Data Guard, performance tuning, backup and recovery, and upgrade migrations.',
        },
        {
          title: 'PostgreSQL & MySQL',
          description: 'Open-source database administration, replication setup, performance optimization, and high availability configurations.',
        },
        {
          title: 'MongoDB & NoSQL',
          description: 'NoSQL database design, sharding, replica sets, aggregation pipelines, and schema optimization for scalable applications.',
        },
        {
          title: 'Data Warehousing',
          description: 'Enterprise data warehouse design, ETL development, dimensional modeling, and business intelligence solutions using MFBI and Power BI.',
        },
        {
          title: 'Database Security',
          description: 'Database encryption, access control, auditing, compliance management, and vulnerability assessments.',
        },
      ]}
      benefits={[
        'Improved database performance and query optimization',
        '24/7 monitoring and proactive issue resolution',
        'Reduced downtime with high availability solutions',
        'Secure data with encryption and compliance',
        'Cost-effective managed DBA services',
        'Expert migration and upgrade assistance',
      ]}
      technologies={[
        'SQL Server',
        'Oracle',
        'PostgreSQL',
        'MySQL',
        'MongoDB',
        'Redis',
        'Elasticsearch',
        'Power BI',
        'SSIS/SSRS',
        'Azure SQL',
      ]}
      ctaText="Optimize Your Database"
    />
  );
}
