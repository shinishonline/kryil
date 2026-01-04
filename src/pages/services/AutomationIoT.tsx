import ServicePageLayout from '../../components/ServicePageLayout';

export default function AutomationIoT() {
  return (
    <ServicePageLayout
      title="Automation & IoT"
      subtitle="Smart Solutions"
      description="Transform your operations with intelligent automation and IoT solutions. We help businesses automate processes, connect devices, and leverage data for smarter decision-making."
      image="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=1400&auto=format&fit=crop"
      stats={[
        { value: '80%', label: 'Manual Tasks Reduced' },
        { value: '10K+', label: 'Devices Connected' },
        { value: '5x', label: 'Efficiency Gain' },
        { value: '99.9%', label: 'System Uptime' },
      ]}
      features={[
        {
          title: 'Business Process Automation',
          description: 'Streamline workflows and eliminate manual tasks with intelligent process automation.',
        },
        {
          title: 'Robotic Process Automation',
          description: 'RPA solutions that automate repetitive tasks and free up your team for higher-value work.',
        },
        {
          title: 'IoT Device Integration',
          description: 'Connect and manage IoT devices to collect data and enable smart operations.',
        },
        {
          title: 'Industrial IoT',
          description: 'IIoT solutions for manufacturing, logistics, and industrial operations monitoring.',
        },
        {
          title: 'Workflow Optimization',
          description: 'Analyze and optimize business workflows to improve efficiency and reduce costs.',
        },
        {
          title: 'Real-time Monitoring',
          description: 'Dashboards and alerts for real-time visibility into operations and performance.',
        },
      ]}
      benefits={[
        'Reduced operational costs through automation',
        'Improved accuracy and elimination of human error',
        'Real-time visibility into operations and assets',
        'Faster decision-making with connected data',
        'Scalable solutions that grow with your business',
        'Predictive maintenance to reduce downtime',
      ]}
      technologies={[
        'UiPath',
        'Automation Anywhere',
        'Power Automate',
        'MQTT',
        'AWS IoT',
        'Azure IoT',
        'Raspberry Pi',
        'Arduino',
        'Node-RED',
        'InfluxDB',
      ]}
      ctaText="Automate Your Business"
    />
  );
}
