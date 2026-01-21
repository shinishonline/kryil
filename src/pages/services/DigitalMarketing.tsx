import ServicePageLayout from '../../components/ServicePageLayout';

export default function DigitalMarketing() {
  return (
    <ServicePageLayout
      title="Digital Marketing"
      subtitle="Grow Your Brand"
      description="Strategic digital marketing solutions to amplify your brand, drive traffic, and convert leads into customers. From SEO to social media, we help you reach and engage your target audience."
      image="https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1400&auto=format&fit=crop"
      galleryImages={[
        'https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=1400&auto=format&fit=crop',
      ]}
      benefitsImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1400&auto=format&fit=crop"
      stats={[
        { value: '300%', label: 'Avg. Traffic Growth' },
        { value: '5M+', label: 'Leads Generated' },
        { value: '150+', label: 'Campaigns Run' },
        { value: '4.2x', label: 'Avg. ROI' },
      ]}
      features={[
        {
          title: 'Search Engine Optimization',
          description: 'Comprehensive SEO strategies to improve your search rankings and drive organic traffic.',
        },
        {
          title: 'Social Media Marketing',
          description: 'Engaging social media strategies to build brand awareness and community engagement.',
        },
        
        {
          title: 'Analytics & Reporting',
          description: 'Data-driven insights and reporting to measure ROI and optimize campaign performance.',
        },
        {
          title: 'Content Marketing',
          description: 'Compelling content creation that educates, engages, and converts your target audience.',
        },
        {
          title: 'Email Marketing',
          description: 'Personalized email campaigns that nurture leads and drive customer retention.',
        },
        
        {
          title: 'Pay-Per-Click Advertising',
          description: 'Targeted PPC campaigns on Google, Bing, and social platforms to generate qualified leads.',
        },
      ]}
      benefits={[
        'Increased brand visibility and awareness',
        'Higher quality leads and improved conversion rates',
        'Better ROI through data-driven marketing strategies',
        'Consistent brand messaging across all channels',
        'Real-time performance tracking and optimization',
        'Competitive advantage through digital presence',
      ]}
      technologies={[
        'Google Ads',
        'Meta Ads',
        'Google Analytics',
        'SEMrush',
        'Ahrefs',
        'HubSpot',
        'Mailchimp',
        'Hootsuite',
        'Canva',
        'WordPress',
      ]}
      ctaText="Boost Your Marketing"
    />
  );
}
