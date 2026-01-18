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
];

export function getNewsArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find(article => article.slug === slug);
}

export function getRecentNews(count: number = 3): NewsArticle[] {
  return [...newsArticles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, count);
}
