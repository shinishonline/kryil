import ServicePageLayout from '../../components/ServicePageLayout';

export default function Cybersecurity() {
  return (
    <ServicePageLayout
      title="Cybersecurity"
      subtitle="Protect Your Business"
      description="Comprehensive cybersecurity solutions to protect your business from evolving threats. From security audits to threat detection and incident response, we keep your systems and data secure."
      image="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1400&auto=format&fit=crop"
      galleryImages={[
        '/group1.jpg',
        'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1400&auto=format&fit=crop',
      ]}
      benefitsImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format&fit=crop"
      stats={[
        { value: '0', label: 'Breaches on Watch' },
        { value: '24/7', label: 'Threat Monitoring' },
        { value: '500+', label: 'Audits Completed' },
        { value: '<15min', label: 'Response Time' },
      ]}
      features={[
        {
          title: 'Compliance Management',
          description: 'Ensure compliance with GDPR, HIPAA, PCI-DSS, SOC 2, and other regulatory requirements.',
        },
        {
          title: 'Incident Response',
          description: 'Rapid response services to contain breaches and minimize damage when security incidents occur.',
        },
        {
          title: 'Security Audits',
          description: 'Comprehensive security assessments to identify vulnerabilities and compliance gaps in your systems.',
        },
        {
          title: 'Penetration Testing',
          description: 'Simulated cyber attacks to test your defenses and identify weaknesses before real attackers do.',
        },
        {
          title: 'Security Training',
          description: 'Employee awareness training to reduce human error and strengthen your security culture.',
        },
        {
          title: 'Threat Detection',
          description: 'Advanced monitoring and detection systems to identify and respond to threats in real-time.',
        },
        
        
        
      ]}
      benefits={[
        'Protection against data breaches and cyber attacks',
        'Compliance with industry regulations and standards',
        'Reduced risk of financial losses from security incidents',
        'Improved customer trust through demonstrated security practices',
        '24/7 security monitoring and incident response',
        'Regular security assessments and continuous improvement',
      ]}
      technologies={[
        'SIEM',
        'IDS/IPS',
        'WAF',
        'EDR',
        'Zero Trust',
        'OAuth 2.0',
        'OWASP',
        'Nessus',
        'Burp Suite',
        'Splunk',
      ]}
      ctaText="Secure Your Business"
    />
  );
}
