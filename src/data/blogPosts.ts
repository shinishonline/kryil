export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'UAV' | 'Robotics' | 'IoT' | 'Defense' | 'AI' | 'Industry News';
  image: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'future-of-uav-drones-in-defense',
    title: 'The Future of UAV Drones in Modern Defense Systems',
    excerpt: 'Exploring how unmanned aerial vehicles are revolutionizing military operations, surveillance, and tactical warfare in the 21st century.',
    content: `
      <p>Unmanned Aerial Vehicles (UAVs) have fundamentally transformed modern defense systems, offering unprecedented capabilities in surveillance, reconnaissance, and tactical operations. As defense technology continues to evolve, UAV drones are becoming increasingly sophisticated, integrating artificial intelligence, advanced sensors, and autonomous navigation systems.</p>

      <h2>The Evolution of Military Drones</h2>
      <p>From the early days of remote-controlled aircraft to today's AI-powered autonomous systems, military drones have come a long way. Modern UAVs can operate in complex environments, make real-time decisions, and provide invaluable intelligence to ground forces.</p>

      <h2>Key Capabilities</h2>
      <ul>
        <li><strong>Intelligence, Surveillance, and Reconnaissance (ISR):</strong> UAVs provide persistent surveillance capabilities, enabling military forces to monitor enemy movements and gather critical intelligence without risking human lives.</li>
        <li><strong>Precision Strike:</strong> Armed drones can deliver precision strikes on high-value targets with minimal collateral damage.</li>
        <li><strong>Electronic Warfare:</strong> Advanced UAVs can disrupt enemy communications and radar systems, providing tactical advantages in modern warfare.</li>
        <li><strong>Logistics and Supply:</strong> Cargo drones are increasingly used for delivering supplies to remote or dangerous locations.</li>
      </ul>

      <h2>India's Growing UAV Industry</h2>
      <p>India has emerged as a significant player in the global UAV market, with domestic companies developing advanced drone systems for both military and civilian applications. The government's push for 'Make in India' has accelerated indigenous drone development, reducing dependency on foreign imports.</p>

      <h2>Future Trends</h2>
      <p>The future of UAV technology in defense includes swarm intelligence, hypersonic drones, and fully autonomous combat systems. These advancements will continue to reshape how nations approach defense and security.</p>
    `,
    category: 'UAV',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1400&auto=format&fit=crop',
    author: 'Defense Technology Team',
    date: '2026-01-02',
    readTime: '8 min read',
    tags: ['UAV', 'Defense', 'Military Technology', 'Drones', 'Surveillance'],
  },
  {
    id: '2',
    slug: 'industrial-robotics-manufacturing-revolution',
    title: 'How Industrial Robotics is Revolutionizing Manufacturing in India',
    excerpt: 'A deep dive into the adoption of industrial robots in Indian manufacturing and how automation is driving Industry 4.0 transformation.',
    content: `
      <p>Industrial robotics is at the heart of the manufacturing revolution, transforming production lines across India. From automotive to electronics, companies are embracing automation to improve efficiency, quality, and competitiveness.</p>

      <h2>The Rise of Industry 4.0</h2>
      <p>Industry 4.0 represents the fourth industrial revolution, characterized by smart factories, interconnected systems, and data-driven decision making. Industrial robots are a cornerstone of this transformation, enabling unprecedented levels of automation and precision.</p>

      <h2>Types of Industrial Robots</h2>
      <ul>
        <li><strong>Articulated Robots:</strong> Most common in automotive manufacturing for welding, painting, and assembly operations.</li>
        <li><strong>SCARA Robots:</strong> Ideal for high-speed pick-and-place operations in electronics manufacturing.</li>
        <li><strong>Collaborative Robots (Cobots):</strong> Designed to work safely alongside humans, perfect for SMEs with limited floor space.</li>
        <li><strong>Delta Robots:</strong> High-speed robots used in packaging and food processing industries.</li>
      </ul>

      <h2>Benefits for Indian Manufacturers</h2>
      <p>Indian manufacturers adopting industrial robotics are seeing significant improvements:</p>
      <ul>
        <li>50-70% increase in production efficiency</li>
        <li>Consistent product quality with reduced defects</li>
        <li>24/7 operation capability</li>
        <li>Improved worker safety</li>
        <li>Long-term cost reduction</li>
      </ul>

      <h2>Implementation Challenges</h2>
      <p>While the benefits are clear, implementing industrial robotics requires careful planning, skilled workforce development, and integration with existing systems. Companies like Kryil Infotech provide end-to-end solutions to help manufacturers navigate this transition successfully.</p>
    `,
    category: 'Robotics',
    image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=1400&auto=format&fit=crop',
    author: 'Automation Division',
    date: '2025-12-28',
    readTime: '6 min read',
    tags: ['Robotics', 'Manufacturing', 'Industry 4.0', 'Automation', 'Industrial Robots'],
  },
  {
    id: '3',
    slug: 'iot-smart-cities-bangalore',
    title: 'IoT Solutions Powering Smart City Initiatives in Bangalore',
    excerpt: 'How Internet of Things technology is transforming Bangalore into a smarter, more connected city with improved services and sustainability.',
    content: `
      <p>Bangalore, India's Silicon Valley, is leading the charge in smart city development through innovative IoT implementations. From traffic management to waste collection, IoT sensors and connected devices are making the city more efficient and livable.</p>

      <h2>Smart Traffic Management</h2>
      <p>IoT-enabled traffic signals and sensors are helping manage Bangalore's notorious traffic congestion. Real-time data collection allows for dynamic signal timing, reducing wait times and improving traffic flow across the city.</p>

      <h2>Environmental Monitoring</h2>
      <p>Air quality sensors deployed across the city provide real-time pollution data, enabling citizens to make informed decisions and authorities to take timely action. Water quality monitoring ensures safe drinking water supply throughout the city.</p>

      <h2>Smart Waste Management</h2>
      <ul>
        <li>IoT sensors in garbage bins alert collection services when full</li>
        <li>Optimized collection routes reduce fuel consumption and emissions</li>
        <li>Real-time tracking ensures no area is missed</li>
        <li>Data analytics help plan infrastructure improvements</li>
      </ul>

      <h2>Public Safety Enhancements</h2>
      <p>Connected CCTV cameras with AI-powered analytics enhance public safety, while IoT-enabled street lights improve visibility and reduce energy consumption through smart dimming capabilities.</p>

      <h2>The Role of Technology Partners</h2>
      <p>Implementing smart city solutions requires expertise in IoT architecture, cloud computing, and data analytics. Technology companies in Bangalore are developing and deploying these solutions, contributing to the city's transformation while creating exportable expertise for other Indian cities.</p>
    `,
    category: 'IoT',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1400&auto=format&fit=crop',
    author: 'IoT Solutions Team',
    date: '2025-12-20',
    readTime: '5 min read',
    tags: ['IoT', 'Smart City', 'Bangalore', 'Connected Devices', 'Urban Technology'],
  },
  {
    id: '4',
    slug: 'ai-powered-autonomous-systems',
    title: 'AI-Powered Autonomous Systems: The Next Frontier in Defense',
    excerpt: 'Exploring how artificial intelligence is enabling truly autonomous defense systems and the implications for modern warfare.',
    content: `
      <p>Artificial intelligence is transforming autonomous systems from remote-controlled devices to truly independent decision-makers. In defense applications, this represents both tremendous opportunity and significant responsibility.</p>

      <h2>From Remote Control to Autonomy</h2>
      <p>Traditional unmanned systems required constant human oversight. Modern AI enables these systems to navigate complex environments, identify targets, and make tactical decisions with minimal human intervention. This shift fundamentally changes how defense forces operate.</p>

      <h2>Key AI Technologies</h2>
      <ul>
        <li><strong>Computer Vision:</strong> Enables systems to interpret visual data for navigation and target identification</li>
        <li><strong>Machine Learning:</strong> Allows systems to improve performance through experience</li>
        <li><strong>Natural Language Processing:</strong> Facilitates human-machine communication</li>
        <li><strong>Reinforcement Learning:</strong> Enables adaptive behavior in dynamic environments</li>
      </ul>

      <h2>Applications in Defense</h2>
      <p>AI-powered autonomous systems are being deployed across multiple defense domains:</p>
      <ul>
        <li>Autonomous UAVs for surveillance and reconnaissance</li>
        <li>Unmanned ground vehicles for logistics and patrol</li>
        <li>Autonomous naval vessels for maritime security</li>
        <li>AI-enhanced cybersecurity systems</li>
      </ul>

      <h2>Ethical Considerations</h2>
      <p>As autonomous systems become more capable, questions about accountability, decision-making authority, and the role of human oversight become increasingly important. Responsible development requires careful consideration of these ethical dimensions.</p>

      <h2>India's Position</h2>
      <p>India is actively developing AI capabilities for defense applications, with initiatives spanning research institutions, defense organizations, and private sector partnerships. This indigenous development ensures strategic autonomy while building world-class technological capabilities.</p>
    `,
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1400&auto=format&fit=crop',
    author: 'AI Research Division',
    date: '2025-12-15',
    readTime: '7 min read',
    tags: ['AI', 'Autonomous Systems', 'Defense', 'Machine Learning', 'Military Technology'],
  },
  {
    id: '5',
    slug: 'robotic-process-automation-enterprise',
    title: 'Implementing RPA: A Complete Guide for Enterprise',
    excerpt: 'Step-by-step guide to implementing Robotic Process Automation in your organization for improved efficiency and reduced costs.',
    content: `
      <p>Robotic Process Automation (RPA) is transforming how businesses operate by automating repetitive, rule-based tasks. This comprehensive guide walks you through implementing RPA in your organization.</p>

      <h2>What is RPA?</h2>
      <p>RPA uses software robots or 'bots' to automate routine business processes. Unlike traditional automation, RPA works at the user interface level, mimicking human actions without requiring changes to existing systems.</p>

      <h2>Ideal Processes for RPA</h2>
      <ul>
        <li>Data entry and migration</li>
        <li>Invoice processing</li>
        <li>Report generation</li>
        <li>Customer onboarding</li>
        <li>HR processes (leave management, payroll)</li>
        <li>IT support tasks</li>
      </ul>

      <h2>Implementation Steps</h2>
      <ol>
        <li><strong>Process Assessment:</strong> Identify and prioritize processes suitable for automation</li>
        <li><strong>Platform Selection:</strong> Choose the right RPA tool (UiPath, Blue Prism, Automation Anywhere)</li>
        <li><strong>Pilot Project:</strong> Start with a small, well-defined process to demonstrate value</li>
        <li><strong>Development:</strong> Build and test automation workflows</li>
        <li><strong>Deployment:</strong> Roll out bots with proper monitoring and governance</li>
        <li><strong>Scale:</strong> Expand automation across the organization</li>
      </ol>

      <h2>Expected ROI</h2>
      <p>Organizations typically see:</p>
      <ul>
        <li>40-75% reduction in processing time</li>
        <li>Elimination of human errors in automated tasks</li>
        <li>24/7 operation capability</li>
        <li>Employee satisfaction improvement as tedious tasks are automated</li>
      </ul>

      <h2>Common Challenges</h2>
      <p>Successful RPA implementation requires addressing change management, process standardization, and ongoing maintenance. Partnering with experienced implementation providers can significantly accelerate success.</p>
    `,
    category: 'Robotics',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1400&auto=format&fit=crop',
    author: 'Enterprise Solutions Team',
    date: '2025-12-10',
    readTime: '9 min read',
    tags: ['RPA', 'Automation', 'Enterprise', 'Digital Transformation', 'Process Automation'],
  },
  {
    id: '6',
    slug: 'drone-regulations-india-2026',
    title: 'Understanding Drone Regulations in India: 2026 Update',
    excerpt: 'A comprehensive guide to the latest drone regulations in India, including licensing requirements, operational restrictions, and compliance guidelines.',
    content: `
      <p>India's drone regulations have evolved significantly, creating a structured framework for both commercial and recreational drone operations. Understanding these regulations is essential for anyone involved in the UAV industry.</p>

      <h2>Drone Categories</h2>
      <p>The Directorate General of Civil Aviation (DGCA) classifies drones into five categories based on maximum take-off weight:</p>
      <ul>
        <li><strong>Nano:</strong> Up to 250g - Minimal restrictions</li>
        <li><strong>Micro:</strong> 250g to 2kg - Requires registration</li>
        <li><strong>Small:</strong> 2kg to 25kg - License required</li>
        <li><strong>Medium:</strong> 25kg to 150kg - Strict licensing and operational requirements</li>
        <li><strong>Large:</strong> Above 150kg - Full aviation compliance required</li>
      </ul>

      <h2>Registration and Licensing</h2>
      <p>All drones above nano category must be registered on the Digital Sky Platform. Operators need appropriate licenses based on intended use:</p>
      <ul>
        <li>Remote Pilot License (RPL) for basic operations</li>
        <li>Certified Training from DGCA-approved institutes</li>
        <li>Operational approvals for specific missions</li>
      </ul>

      <h2>Operational Restrictions</h2>
      <p>Key restrictions include:</p>
      <ul>
        <li>Maximum altitude of 400 feet in uncontrolled airspace</li>
        <li>No-fly zones around airports, military installations, and sensitive areas</li>
        <li>Daylight operations only (without special approval)</li>
        <li>Visual line of sight requirements</li>
      </ul>

      <h2>Opportunities for Manufacturers</h2>
      <p>The Production Linked Incentive (PLI) scheme offers significant benefits for domestic drone manufacturers, encouraging indigenous production and reducing import dependency. Companies meeting manufacturing criteria can avail incentives up to 20% of value addition.</p>

      <h2>Future Outlook</h2>
      <p>Regulations continue to evolve with advancements in technology. BVLOS (Beyond Visual Line of Sight) operations and autonomous flights are expected to receive clearer guidelines, opening new commercial opportunities.</p>
    `,
    category: 'UAV',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1400&auto=format&fit=crop',
    author: 'Regulatory Affairs Team',
    date: '2026-01-01',
    readTime: '6 min read',
    tags: ['Drone Regulations', 'UAV', 'DGCA', 'India', 'Compliance'],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

export function getRecentPosts(count: number = 3): BlogPost[] {
  return [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, count);
}
