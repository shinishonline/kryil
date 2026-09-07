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
    slug: 'kryil-infotech-unveils-new-brand-identity',
    title: 'KRYIL Infotech Unveils New Brand Identity',
    excerpt: 'The company introduces a refreshed logo and two-colour system. The previous mark was in use through 8 July 2026.',
    content: `
      <p><strong>Bangalore, India - July 2026</strong> - Kryil Infotech Private Limited today unveiled a refreshed brand identity, replacing the logo the company has used since its founding.</p>

      <p>The previous logo was in use through <strong>8 July 2026</strong>. The new mark took effect on <strong>9 July 2026</strong> and is now the only approved KRYIL Infotech logo across all materials.</p>

      <h2>What Changed</h2>
      <ul>
        <li>The enclosing circle becomes a rounded square, and the K is redrawn as a single continuous path</li>
        <li>A two-colour system replaces the previous monochrome mark: Kryil Blue (#17beb0) and Kryil Gray (#747472)</li>
        <li>The wordmark is set in a wider cut, with a detached square dot on the "i"</li>
        <li>Defined colour, reversed and icon-only variants ship as a single asset set</li>
      </ul>

      <blockquote>
        "The name has not changed and the company has not changed. What has changed is the mark that carries them," said the company leadership. "The new identity reflects the engineering discipline behind the work."
      </blockquote>

      <h2>For Partners and Suppliers</h2>
      <p>No contract, invoice or agreement is affected by this change. Partners holding KRYIL materials that still carry the previous mark should replace them with the current assets, available on the KRYIL brand page.</p>
    `,
    type: 'Company News',
    image: '/brand/logo-news-hero.jpg',
    date: '2026-07-09',
  },
  {
    id: '2',
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
];

export function getNewsArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find(article => article.slug === slug);
}

export function getRecentNews(count: number = 3): NewsArticle[] {
  return [...newsArticles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, count);
}
