import ServicePageLayout from '../../components/ServicePageLayout';

export default function Robotics() {
  return (
    <ServicePageLayout
      title="Robotics & Industrial Automation"
      subtitle="Smart Manufacturing Solutions"
      description="Advanced robotics and industrial automation solutions for modern manufacturing. From robotic process automation to autonomous systems, we help businesses achieve Industry 4.0 transformation."
      image="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1400&auto=format&fit=crop"
      galleryImages={[
        'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1400&auto=format&fit=crop',
      ]}
      benefitsImage="https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?q=80&w=1400&auto=format&fit=crop"
      stats={[
        { value: '85%', label: 'Efficiency Increase' },
        { value: '50+', label: 'Robots Deployed' },
        { value: '24/7', label: 'Autonomous Operation' },
        { value: '10x', label: 'Production Speed' },
      ]}
      features={[
        {
          title: 'Industrial Robotics',
          description: 'Design and deployment of industrial robots for manufacturing, assembly, welding, painting, and material handling applications.',
        },
        {
          title: 'Robotic Process Automation',
          description: 'RPA solutions using UiPath, Blue Prism, and Automation Anywhere to automate repetitive business processes and workflows.',
        },
        {
          title: 'Autonomous Mobile Robots',
          description: 'AMR development for warehouse automation, logistics, and material transport with advanced navigation and obstacle avoidance.',
        },
        {
          title: 'Collaborative Robots (Cobots)',
          description: 'Safe human-robot collaboration systems for flexible manufacturing with easy programming and quick deployment.',
        },
        {
          title: 'Computer Vision & AI',
          description: 'Vision-guided robotics with AI-powered quality inspection, defect detection, and object recognition systems.',
        },
        {
          title: 'Robot Programming & Integration',
          description: 'Custom robot programming, PLC integration, and seamless connectivity with existing manufacturing systems.',
        },
      ]}
      benefits={[
        'Increased production efficiency and throughput',
        'Reduced operational costs and labor expenses',
        'Improved product quality and consistency',
        '24/7 autonomous operation capability',
        'Enhanced workplace safety',
        'Flexible and scalable automation solutions',
      ]}
      technologies={[
        'ROS',
        'UiPath',
        'Blue Prism',
        'PLC/SCADA',
        'Computer Vision',
        'TensorFlow',
        'PyTorch',
        'FANUC',
        'ABB Robotics',
        'Universal Robots',
      ]}
      ctaText="Automate Your Operations"
    />
  );
}
