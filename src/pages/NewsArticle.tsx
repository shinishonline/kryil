import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getNewsArticleBySlug, getRecentNews } from '../data/newsArticles';

export default function NewsArticle() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getNewsArticleBySlug(slug) : undefined;
  const recentNews = getRecentNews(3).filter(n => n.slug !== slug);

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | Kryil Infotech News`;
    }
    return () => {
      document.title = 'Kryil Infotech | UAV Drone Manufacturer | Robotics & IoT Solutions | Bangalore India';
    };
  }, [article]);

  if (!article) {
    return <Navigate to="/news" replace />;
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Press Release':
        return 'bg-blue-100 text-blue-800';
      case 'Company News':
        return 'bg-green-100 text-green-800';
      case 'Award':
        return 'bg-yellow-100 text-yellow-800';
      case 'Partnership':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-[#f1f0ea] min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white pt-32 pb-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${article.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />
        <div className="relative max-w-4xl mx-auto px-6 md:px-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/40 mb-8 font-['Lato']">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/news" className="hover:text-white transition-colors">News</Link>
            <span>/</span>
            <span className="text-white/60">{article.type}</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className={`px-3 py-1 text-xs font-semibold rounded-full font-['Lato'] ${getTypeColor(article.type)}`}>
              {article.type}
            </span>
            <span className="text-white/40 text-sm font-['Lato']">
              {new Date(article.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </span>
          </div>

          <h1 className="font-['Lato'] text-3xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
            {article.title}
          </h1>

          <p className="text-white/70 text-lg md:text-xl font-['Lato'] leading-relaxed">
            {article.excerpt}
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        <div
          className="prose prose-lg max-w-none font-['Lato']
            prose-headings:font-['Lato'] prose-headings:font-bold prose-headings:text-black
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
            prose-p:text-black/70 prose-p:leading-relaxed
            prose-li:text-black/70
            prose-strong:text-black prose-strong:font-semibold
            prose-blockquote:border-l-4 prose-blockquote:border-[#dff140] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-black/60
            prose-ul:my-6 prose-ol:my-6
            prose-li:my-2"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Share */}
        <div className="mt-12 pt-8 border-t border-black/10">
          <p className="text-sm text-black/40 uppercase tracking-wider mb-4 font-['Lato']">Share this article</p>
          <div className="flex gap-4">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(`https://www.kryil.com/news/${article.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-black/5 rounded-full hover:bg-black hover:text-white transition-colors"
              aria-label="Share on Twitter"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://www.kryil.com/news/${article.slug}`)}&title=${encodeURIComponent(article.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-black/5 rounded-full hover:bg-[#0077b5] hover:text-white transition-colors"
              aria-label="Share on LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(`Read the latest news from Kryil Infotech: https://www.kryil.com/news/${article.slug}`)}`}
              className="p-3 bg-black/5 rounded-full hover:bg-black hover:text-white transition-colors"
              aria-label="Share via Email"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <path d="M22 6l-10 7L2 6"/>
              </svg>
            </a>
          </div>
        </div>
      </article>

      {/* More News */}
      {recentNews.length > 0 && (
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h2 className="font-['Lato'] text-2xl md:text-3xl font-bold mb-12">
              More News
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {recentNews.map((news) => (
                <Link
                  key={news.id}
                  to={`/news/${news.slug}`}
                  className="group block bg-[#f1f0ea] rounded-xl overflow-hidden"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <span className={`px-2 py-1 text-xs font-medium rounded font-['Lato'] ${getTypeColor(news.type)}`}>
                      {news.type}
                    </span>
                    <h3 className="font-['Lato'] text-lg font-bold text-black mt-3 group-hover:text-black/80 transition-colors line-clamp-2">
                      {news.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Media Contact CTA */}
      <section className="bg-black text-white py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-['Lato'] text-3xl md:text-4xl font-bold mb-4">
            Media Inquiries
          </h2>
          <p className="text-white/60 mb-8 font-['Lato']">
            For press inquiries or additional information, please contact our media relations team.
          </p>
          <a
            href="mailto:media@kryil.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#dff140] text-black font-semibold rounded-full font-['Lato'] hover:bg-[#e8f756] transition-colors"
          >
            <span>Contact Media Team</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <path d="M22 6l-10 7L2 6"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
