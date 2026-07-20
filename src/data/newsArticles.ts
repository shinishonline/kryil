export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  type: 'Press Release' | 'Company News' | 'Award' | 'Partnership';
  image: string;
  date: string;
  source?: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    slug: 'kryil-infotech-launches-advanced-uav-division',
    title: 'KRYIL Infotech Launches Advanced UAV Technology Division',
    excerpt: 'Bangalore-based technology company expands into defense sector with new UAV manufacturing and R&D capabilities.',
    content: `
      <p><strong>Bangalore, India - January 2026</strong> - Kryil Infotech Private Limited today announced the launch of its Advanced UAV Technology Division, marking a significant expansion into the defense and aerospace sector.</p>

      <p>The new division will focus on developing indigenous unmanned aerial vehicles (UAVs) for both military and commercial applications, supporting India's strategic goal of self-reliance in defense technology.</p>

      <blockquote>
        "This expansion represents our commitment to contributing to India's defense capabilities while leveraging our expertise in software development, AI, and robotics," said the company leadership. "We are building UAV systems that combine advanced technology with practical operational requirements."
      </blockquote>

      <h2>Key Initiatives</h2>
      <ul>
        <li>Establishment of UAV R&D center in Bangalore</li>
        <li>Development of AI-powered autonomous navigation systems</li>
        <li>Focus on ISR (Intelligence, Surveillance, Reconnaissance) capabilities</li>
        <li>Collaboration with defense research organizations</li>
      </ul>

      <h2>About KRYIL Infotech</h2>
      <p>KRYIL Infotech is a Bangalore-based technology company specializing in software development, AI, robotics, IoT solutions, and defense technology. The company serves clients across various sectors including defense, manufacturing, and enterprise.</p>
    `,
    type: 'Press Release',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1400&auto=format&fit=crop',
    date: '2026-01-02',
  },
  {
    id: '2',
    slug: 'partnership-with-leading-robotics-manufacturer',
    title: 'Strategic Partnership with Leading Industrial Robotics Manufacturer',
    excerpt: 'KRYIL Infotech partners with international robotics company to bring advanced automation solutions to Indian manufacturers.',
    content: `
      <p><strong>Bangalore, India - December 2025</strong> - KRYIL Infotech has announced a strategic partnership to bring world-class industrial robotics solutions to the Indian manufacturing sector.</p>

      <p>This partnership will enable Indian manufacturers to access advanced robotic systems with local support, integration services, and customization capabilities.</p>

      <h2>Partnership Highlights</h2>
      <ul>
        <li>Access to latest industrial robot platforms</li>
        <li>Local system integration and support services</li>
        <li>Training programs for Indian workforce</li>
        <li>Customization for specific industry requirements</li>
      </ul>

      <p>The partnership supports the Government of India's Make in India initiative by enabling domestic manufacturers to adopt Industry 4.0 technologies and improve global competitiveness.</p>
    `,
    type: 'Partnership',
    image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=1400&auto=format&fit=crop',
    date: '2025-12-15',
  },
  {
    id: '3',
    slug: 'kryil-expands-iot-solutions-team',
    title: 'KRYIL Infotech Expands IoT Solutions Team to Meet Growing Demand',
    excerpt: 'Company doubles its IoT engineering team as demand for smart city and industrial IoT solutions surges.',
    content: `
      <p><strong>Bangalore, India - December 2025</strong> - Responding to increasing demand for IoT solutions across smart city projects and industrial applications, KRYIL Infotech has significantly expanded its IoT Solutions division.</p>

      <p>The expansion includes hiring of additional IoT engineers, embedded systems developers, and cloud architects to support growing project pipelines.</p>

      <h2>Growth Areas</h2>
      <ul>
        <li>Smart city infrastructure projects</li>
        <li>Industrial IoT for manufacturing</li>
        <li>Connected vehicle solutions</li>
        <li>Environmental monitoring systems</li>
      </ul>

      <p>The company has successfully delivered IoT projects across multiple sectors and is positioned to support India's digital transformation initiatives.</p>
    `,
    type: 'Company News',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1400&auto=format&fit=crop',
    date: '2025-12-01',
  },
  {
    id: '4',
    slug: 'recognition-for-innovation-in-defense-tech',
    title: 'KRYIL Infotech Recognized for Innovation in Defense Technology',
    excerpt: 'Company receives recognition for contributions to indigenous defense technology development.',
    content: `
      <p><strong>Bangalore, India - November 2025</strong> - KRYIL Infotech has been recognized for its innovative contributions to India's indigenous defense technology development.</p>

      <p>The recognition acknowledges the company's work in developing advanced software systems, autonomous technologies, and AI-powered solutions for defense applications.</p>

      <blockquote>
        "This recognition reflects our team's dedication to building world-class technology solutions that support India's defense modernization. We remain committed to contributing to the nation's strategic capabilities."
      </blockquote>

      <h2>Areas of Recognition</h2>
      <ul>
        <li>Autonomous systems development</li>
        <li>AI-powered decision support systems</li>
        <li>Cybersecurity solutions</li>
        <li>Software excellence</li>
      </ul>
    `,
    type: 'Award',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1400&auto=format&fit=crop',
    date: '2025-11-20',
  },
  {
    id: '5',
    slug: 'kryil-infotech-unveils-new-brand-identity',
    title: 'KRYIL Infotech Unveils New Brand Identity',
    excerpt: 'The company introduces a refreshed logo and two-colour system. The previous mark was in use through 8 July 2026.',
    content: `
      <p><strong>Bangalore, India - July 2026</strong> - Kryil Infotech Private Limited today unveiled a refreshed brand identity, replacing the logo the company has used since its founding.</p>

      <p>The previous logo was in use through <strong>8 July 2026</strong>. The new mark took effect on <strong>9 July 2026</strong> and is now the only approved KRYIL Infotech logo across all materials.</p>

      <h2>What Changed</h2>
      <ul>
        <li>The enclosing circle becomes a rounded square, and the K is redrawn as a single continuous path</li>
        <li>A two-colour system replaces the previous monochrome mark: Kryil Blue (#25A9E0) and Kryil Gray (#747472)</li>
        <li>The wordmark is set in a wider cut, with a detached square dot on the "i"</li>
        <li>Defined colour, reversed and icon-only variants ship as a single asset set</li>
      </ul>

      <blockquote>
        "The name has not changed and the company has not changed. What has changed is the mark that carries them," said the company leadership. "The new identity reflects the engineering discipline behind our UAV, defense and enterprise work."
      </blockquote>

      <h2>For Partners and Suppliers</h2>
      <p>No contract, invoice or agreement is affected by this change. Partners holding KRYIL materials that still carry the previous mark should replace them with the current assets, available on the KRYIL brand page.</p>
    `,
    type: 'Company News',
    image: '/brand/logo-news-hero.jpg',
    date: '2026-07-09',
  },
  {
    id: '6',
    slug: 'avionix-aircraft-design-platform-public-release',
    title: 'KRYIL Releases Avionix Aircraft Design Platform to the Public',
    excerpt: 'Browser-based aircraft design and aerodynamic analysis platform launches free, with 58+ templates and no signup required.',
    content: `
      <p><strong>Bangalore, India - June 2026</strong> - Kryil Infotech announced the public release of Avionix, a browser-based aircraft design platform offering real-time aerodynamic analysis, flight simulation and 3D visualisation at no cost.</p>

      <p>Built for aerospace engineers, students and UAV designers, Avionix runs entirely in the browser with no installation or account required.</p>

      <h2>Platform Capabilities</h2>
      <ul>
        <li>58+ parametric aircraft templates spanning fighters, UAVs and transport aircraft</li>
        <li>Real-time CFD-based aerodynamic analysis</li>
        <li>Stability and control derivative computation</li>
        <li>Interactive 3D visualisation and flight simulation</li>
      </ul>

      <blockquote>
        "Aircraft design tools have historically been expensive and hard to access. Avionix removes both barriers," said the Avionix engineering team.
      </blockquote>

      <h2>Availability</h2>
      <p>Avionix is available now and free to use. The platform will continue to expand with additional templates and analysis modules through 2026.</p>
    `,
    type: 'Press Release',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1400&auto=format&fit=crop',
    date: '2026-06-18',
  },
  {
    id: '7',
    slug: 'nextdooh-crosses-major-deployment-milestone',
    title: 'NextDOOH Digital Signage Platform Crosses Major Deployment Milestone',
    excerpt: 'The cloud-based DOOH platform now manages screens across retail, hospitality and corporate installations with sub-two-second content sync.',
    content: `
      <p><strong>Bangalore, India - May 2026</strong> - Kryil Infotech's NextDOOH digital signage platform has crossed a significant deployment milestone, with installations spanning retail chains, hospitality venues and corporate campuses.</p>

      <p>NextDOOH delivers WebSocket-powered content synchronisation in under two seconds, allowing operators to push updates to entire screen networks in near real time.</p>

      <h2>Platform Highlights</h2>
      <ul>
        <li>Sub-two-second content sync across distributed screen networks</li>
        <li>Multi-zone layouts with independent content scheduling per zone</li>
        <li>Remote device management, health monitoring and kiosk mode</li>
        <li>Runs on standard Android displays, reducing hardware cost</li>
      </ul>

      <h2>What's Next</h2>
      <p>The roadmap for the remainder of 2026 includes audience analytics, programmatic ad integration and expanded offline resilience for low-connectivity sites.</p>
    `,
    type: 'Company News',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1400&auto=format&fit=crop',
    date: '2026-05-14',
  },
  {
    id: '8',
    slug: 'kryil-completes-bvlos-uav-flight-trials',
    title: 'KRYIL Completes Beyond Visual Line of Sight UAV Flight Trials',
    excerpt: 'The company concludes a trial campaign validating autonomous navigation and fail-safe behaviour for extended-range UAV operations.',
    content: `
      <p><strong>Bangalore, India - April 2026</strong> - Kryil Infotech has completed a campaign of Beyond Visual Line of Sight (BVLOS) flight trials for its UAV platform, validating autonomous navigation, link-loss handling and fail-safe recovery over extended ranges.</p>

      <h2>Trial Scope</h2>
      <ul>
        <li>Autonomous waypoint navigation without continuous operator control</li>
        <li>Link-loss and return-to-home fail-safe validation</li>
        <li>Onboard detect-and-avoid sensor evaluation</li>
        <li>Endurance testing across varied wind and thermal conditions</li>
      </ul>

      <blockquote>
        "BVLOS is where UAVs stop being line-of-sight tools and start being infrastructure," said the UAV division. "These trials give us the flight data to back that transition."
      </blockquote>

      <h2>Applications</h2>
      <p>Validated BVLOS capability supports long-range ISR, pipeline and powerline inspection, agricultural survey, and disaster-response mapping — applications where operator line of sight is the limiting constraint.</p>
    `,
    type: 'Press Release',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1400&auto=format&fit=crop',
    date: '2026-04-22',
  },
  {
    id: '9',
    slug: 'kryil-partners-on-industrial-iot-deployment',
    title: 'KRYIL Partners on Large-Scale Industrial IoT Deployment',
    excerpt: 'A new partnership brings predictive maintenance and edge analytics to manufacturing floors across South India.',
    content: `
      <p><strong>Bangalore, India - March 2026</strong> - Kryil Infotech announced a partnership to deliver industrial IoT infrastructure and predictive maintenance analytics across manufacturing facilities in South India.</p>

      <p>The engagement covers sensor instrumentation, edge computing deployment and the machine learning models that turn raw telemetry into maintenance decisions.</p>

      <h2>Scope of Work</h2>
      <ul>
        <li>Vibration, thermal and acoustic sensor instrumentation on production equipment</li>
        <li>Edge gateways for on-site inference without cloud round-trips</li>
        <li>Predictive maintenance models trained on historical failure data</li>
        <li>Unified dashboards for plant and maintenance teams</li>
      </ul>

      <h2>Expected Outcomes</h2>
      <p>The deployment targets reduced unplanned downtime, longer equipment life through condition-based servicing, and a shift away from fixed-interval maintenance schedules.</p>
    `,
    type: 'Partnership',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1400&auto=format&fit=crop',
    date: '2026-03-11',
  },
];

export function getNewsArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find(article => article.slug === slug);
}

export function getRecentNews(count: number = 3): NewsArticle[] {
  return [...newsArticles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, count);
}
