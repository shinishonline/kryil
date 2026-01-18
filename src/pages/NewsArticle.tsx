import { useEffect, useState, useRef, useCallback } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getNewsArticleBySlug, getRecentNews } from '../data/newsArticles';

export default function NewsArticle() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getNewsArticleBySlug(slug) : undefined;
  const recentNews = getRecentNews(4).filter(n => n.slug !== slug).slice(0, 3);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const articleRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // Smooth scroll progress
  const handleScroll = useCallback(() => {
    if (!articleRef.current) return;

    const articleTop = articleRef.current.offsetTop;
    const articleHeight = articleRef.current.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;

    const start = articleTop - windowHeight * 0.5;
    const end = articleTop + articleHeight - windowHeight;

    if (scrollY <= start) {
      setScrollProgress(0);
    } else if (scrollY >= end) {
      setScrollProgress(100);
    } else {
      const progress = ((scrollY - start) / (end - start)) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    }

  }, []);

  useEffect(() => {
    setIsLoaded(true);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | KRYIL Infotech News`;

      // Add NewsArticle schema for SEO
      const existingSchema = document.querySelector('script[data-schema="news-article"]');
      if (existingSchema) existingSchema.remove();

      const schema = document.createElement('script');
      schema.type = 'application/ld+json';
      schema.setAttribute('data-schema', 'news-article');
      schema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": article.title,
        "description": article.excerpt,
        "image": article.image,
        "author": {
          "@type": "Organization",
          "name": "KRYIL Infotech"
        },
        "publisher": {
          "@type": "Organization",
          "name": "KRYIL Infotech",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.kryil.com/logo.png"
          }
        },
        "datePublished": article.date,
        "dateModified": article.date,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://www.kryil.com/news/${article.slug}`
        },
        "articleSection": article.type
      });
      document.head.appendChild(schema);
    }
    return () => {
      document.title = 'KRYIL Infotech | UAV Drone Manufacturer | Robotics & IoT Solutions | Bangalore India';
      const schema = document.querySelector('script[data-schema="news-article"]');
      if (schema) schema.remove();
    };
  }, [article]);

  // Parallax mouse effect for hero
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left - rect.width / 2) / 50,
      y: (e.clientY - rect.top - rect.height / 2) / 50,
    });
  };

  if (!article) {
    return <Navigate to="/news" replace />;
  }

  const getTypeStyles = (type: string) => {
    const styles: Record<string, { bg: string; text: string; accent: string }> = {
      'Press Release': { bg: 'bg-blue-500', text: 'text-white', accent: '#3b82f6' },
      'Company News': { bg: 'bg-emerald-500', text: 'text-white', accent: '#10b981' },
      'Award': { bg: 'bg-amber-500', text: 'text-black', accent: '#f59e0b' },
      'Partnership': { bg: 'bg-violet-500', text: 'text-white', accent: '#8b5cf6' },
    };
    return styles[type] || { bg: 'bg-gray-500', text: 'text-white', accent: '#6b7280' };
  };

  const typeStyles = getTypeStyles(article.type);
  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="bg-[#fafafa] min-h-screen overflow-x-hidden">
      {/* Elegant Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-black/5">
        <div
          className="h-full transition-all duration-300 ease-out"
          style={{
            width: `${scrollProgress}%`,
            background: `linear-gradient(90deg, ${typeStyles.accent}, #dff140)`
          }}
        />
      </div>

      {/* Floating Navigation */}
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ${
          scrollProgress > 5 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-4 px-6 py-3 bg-white/80 backdrop-blur-xl border border-black/5 shadow-lg shadow-black/5">
          <Link to="/news" className="text-black/40 hover:text-black transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </Link>
          <div className="w-px h-5 bg-black/10" />
          <span className="text-sm font-medium text-black/60 font-['Lato'] max-w-[200px] truncate">
            {article.title}
          </span>
        </div>
      </nav>

      {/* Hero Section - Editorial Style */}
      <section
        ref={heroRef}
        className="relative min-h-screen"
        onMouseMove={handleMouseMove}
      >
        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 min-h-screen">
          {/* Left - Content */}
          <div className="relative flex flex-col justify-center order-2 lg:order-1 bg-white">
            <div className="px-8 md:px-12 lg:px-16 xl:px-24 py-20 lg:py-0">
              {/* Breadcrumb */}
              <nav
                className={`flex items-center gap-2 mb-10 transition-all duration-1000 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '100ms' }}
              >
                <Link to="/" className="text-black/30 hover:text-black text-xs uppercase tracking-[0.15em] font-['Lato'] font-medium transition-colors">
                  Home
                </Link>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black/20">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
                <Link to="/news" className="text-black/30 hover:text-black text-xs uppercase tracking-[0.15em] font-['Lato'] font-medium transition-colors">
                  News
                </Link>
              </nav>

              {/* Type Badge */}
              <div
                className={`transition-all duration-1000 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                <span className={`inline-flex items-center gap-2 px-4 py-2 ${typeStyles.bg} ${typeStyles.text} text-xs font-bold uppercase tracking-[0.15em] font-['Lato']`}>
                  <span className="w-1.5 h-1.5 bg-current rounded-full animate-pulse" />
                  {article.type}
                </span>
              </div>

              {/* Title */}
              <h1
                className={`font-['Lato'] text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-black mt-8 mb-8 leading-[1.1] tracking-[-0.02em] transition-all duration-1000 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                {article.title}
              </h1>

              {/* Excerpt */}
              <p
                className={`text-black/50 text-lg md:text-xl font-['Lato'] leading-relaxed max-w-xl transition-all duration-1000 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                {article.excerpt}
              </p>

              {/* Meta Row */}
              <div
                className={`flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-black/10 transition-all duration-1000 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '500ms' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-[#dff140] flex items-center justify-center">
                    <span className="font-['Lato'] font-black text-black text-sm">K</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-black font-['Lato']">KRYIL Communications</p>
                    <p className="text-xs text-black/40 font-['Lato']">Official Release</p>
                  </div>
                </div>

                <div className="hidden sm:block w-px h-10 bg-black/10" />

                <div className="flex items-center gap-2 text-black/40">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                  <span className="text-sm font-['Lato']">{formattedDate}</span>
                </div>
              </div>

              {/* Scroll Hint */}
              <div
                className={`absolute bottom-8 left-8 md:left-12 lg:left-16 xl:left-24 hidden lg:flex items-center gap-3 transition-all duration-1000 ${
                  isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: '800ms' }}
              >
                <div className="w-[1px] h-16 bg-gradient-to-b from-black/20 to-transparent relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-8 bg-black animate-[scrollDown_1.5s_ease-in-out_infinite]" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-black/30 font-['Lato'] font-medium">
                  Scroll
                </span>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative h-[50vh] lg:h-auto order-1 lg:order-2 overflow-hidden bg-black">
            <div
              className={`absolute inset-0 transition-all duration-1000 ${
                imageLoaded ? 'scale-100' : 'scale-110'
              }`}
              style={{
                transform: `scale(1.05) translate(${mousePos.x}px, ${mousePos.y}px)`,
                transition: 'transform 0.3s ease-out'
              }}
            >
              <img
                src={article.image}
                alt={article.title}
                className={`w-full h-full object-cover transition-all duration-1000 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
              />
            </div>

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent lg:bg-gradient-to-l lg:from-black/20 lg:via-transparent lg:to-transparent" />

            {/* Image loading skeleton */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-black/90 animate-pulse" />
            )}

            {/* Corner accent */}
            <div className="absolute bottom-0 right-0 w-24 h-24 lg:w-32 lg:h-32">
              <div
                className="absolute bottom-0 right-0 w-full h-full"
                style={{ background: `linear-gradient(135deg, transparent 50%, ${typeStyles.accent}20 50%)` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content - Creative Typography Layout */}
      <article ref={articleRef} className="relative bg-[#0a0a0a]">
        {/* Decorative Header Strip */}
        <div className="relative h-40 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${typeStyles.accent}15 0%, transparent 50%, #dff14010 100%)`
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <span className="font-['Lato'] text-[200px] font-black text-white tracking-tighter select-none">
              KRYIL
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        </div>

        {/* Content Area */}
        <div className="pb-20" style={{ paddingLeft: '40px', paddingRight: '40px' }}>
          {/* Large Quote Accent */}
          <div className="flex items-start gap-6 mb-12">
            <div
              className="hidden md:flex w-1 self-stretch"
              style={{ backgroundColor: typeStyles.accent }}
            />
            <div className="flex-1">
              <p className="text-white/40 text-sm font-['Lato'] uppercase tracking-widest mb-4">
                Full Story
              </p>
              <div className="h-px bg-gradient-to-r from-white/10 to-transparent" />
            </div>
          </div>

          {/* Article Body */}
          <div
            className={`prose prose-lg prose-invert max-w-none font-['Lato']
              prose-headings:font-['Lato'] prose-headings:font-bold prose-headings:text-white
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
              prose-p:text-white/70 prose-p:leading-relaxed prose-p:mb-6
              prose-li:text-white/70 prose-li:leading-relaxed
              prose-strong:text-white
              prose-blockquote:border-l-4 prose-blockquote:border-[#dff140] prose-blockquote:pl-6 prose-blockquote:text-white/60 prose-blockquote:italic prose-blockquote:my-8
              prose-ul:my-6 prose-ul:pl-0 prose-ul:list-inside
              prose-ol:my-6 prose-ol:pl-0 prose-ol:list-inside
              prose-a:text-[#dff140] prose-a:no-underline hover:prose-a:underline`}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Share Section */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <p className="text-white/40 text-sm font-['Lato']">Share this article</p>
              <div className="flex gap-3">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(`https://www.kryil.com/news/${article.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-white text-white/50 hover:text-black transition-all"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://www.kryil.com/news/${article.slug}`)}&title=${encodeURIComponent(article.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-[#0077b5] text-white/50 hover:text-white transition-all"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(`Read: https://www.kryil.com/news/${article.slug}`)}`}
                  className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-white text-white/50 hover:text-black transition-all"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <path d="M22 6l-10 7L2 6"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related News - Full Width Grid */}
      {recentNews.length > 0 && (
        <section className="bg-[#0a0a0a] text-white">
          <div className="py-20" style={{ paddingLeft: '40px', paddingRight: '40px' }}>
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
              <h2 className="font-['Lato'] text-2xl md:text-3xl font-bold">
                More Stories
              </h2>
              <Link
                to="/news"
                className="group inline-flex items-center gap-2 text-white/50 hover:text-[#dff140] font-['Lato'] text-sm font-medium transition-colors"
              >
                View All News
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>

            {/* News Grid - Equal Width Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentNews.map((news) => {
                const newsTypeStyles = getTypeStyles(news.type);
                return (
                  <Link
                    key={news.id}
                    to={`/news/${news.slug}`}
                    className="group block bg-[#111] border border-white/5 hover:border-white/10 transition-all"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span
                          className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wider font-['Lato']"
                          style={{ backgroundColor: newsTypeStyles.accent, color: news.type === 'Award' ? '#000' : '#fff' }}
                        >
                          {news.type}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-['Lato'] text-lg font-bold text-white mb-3 leading-snug group-hover:text-[#dff140] transition-colors line-clamp-2">
                        {news.title}
                      </h3>
                      <p className="text-white/40 text-sm font-['Lato']">
                        {new Date(news.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Press Contact */}
      <section className="bg-white">
        <div className="py-20" style={{ paddingLeft: '40px', paddingRight: '40px' }}>
          <div className="max-w-[1800px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 bg-black" />
                  <span className="text-black text-xs uppercase tracking-[0.2em] font-['Lato'] font-medium">
                    Media Inquiries
                  </span>
                </div>
                <h2 className="font-['Lato'] text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                  Press Contact
                </h2>
                <p className="text-black/50 font-['Lato'] text-lg max-w-md">
                  For press inquiries, interview requests, or media kit access, reach out to our communications team.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:info@kryil.com"
                  className="group flex items-center gap-4 p-6 bg-[#fafafa] border border-black/10 hover:border-black/20 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <path d="M22 6l-10 7L2 6"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-black/40 font-['Lato'] mb-1">Email</p>
                    <p className="text-black font-semibold font-['Lato']">info@kryil.com</p>
                  </div>
                  <svg className="w-5 h-5 text-black/30 ml-auto group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="tel:+918089090365"
                  className="group flex items-center gap-4 p-6 bg-[#fafafa] border border-black/10 hover:border-black/20 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-black/40 font-['Lato'] mb-1">Phone</p>
                    <p className="text-black font-semibold font-['Lato']">+91-8089090365</p>
                  </div>
                  <svg className="w-5 h-5 text-black/30 ml-auto group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Animation Keyframes */}
      <style>{`
        @keyframes scrollDown {
          0%, 100% { transform: translateY(-100%); }
          50% { transform: translateY(100%); }
        }
      `}</style>
    </div>
  );
}
