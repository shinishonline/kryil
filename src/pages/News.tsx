import { useState, useMemo, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { newsArticles } from '../data/newsArticles';
import type { NewsArticle } from '../data/newsArticles';

const newsTypes = ['All', 'Press Release', 'Company News', 'Award', 'Partnership'];

function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className="transition-all duration-700 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
}

export default function News() {
  const [selectedType, setSelectedType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredArticles = useMemo(() => {
    let articles = selectedType === 'All'
      ? newsArticles
      : newsArticles.filter(article => article.type === selectedType);

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      articles = articles.filter(article =>
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query)
      );
    }

    return articles;
  }, [selectedType, searchQuery]);

  const sortedArticles = [...filteredArticles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const featuredArticle = sortedArticles[0];
  const secondaryArticles = sortedArticles.slice(1, 4);
  const otherArticles = sortedArticles.slice(4);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Press Release':
        return 'bg-blue-500/15 text-blue-300';
      case 'Company News':
        return 'bg-emerald-500/15 text-emerald-300';
      case 'Award':
        return 'bg-amber-500/15 text-amber-300';
      case 'Partnership':
        return 'bg-violet-500/15 text-violet-300';
      default:
        return 'bg-white/10 text-white/70';
    }
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Navbar Spacer */}
      <div className="h-20 md:h-24"></div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0a0a0a] border-b border-white/10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#dff140]/10 to-transparent" />

        <div className="relative" style={{ padding: '60px 40px 80px' }}>
          <div className="max-w-[1800px] mx-auto">
            {/* Breadcrumb */}
            <nav
              className={`flex items-center gap-2 mb-12 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Link to="/" className="text-white/40 hover:text-white text-sm font-['Lato'] transition-colors">
                Home
              </Link>
              <span className="text-white/25">/</span>
              <span className="text-white/60 text-sm font-['Lato']">News</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <div
                  className={`group flex items-center gap-3 mb-8 transition-all duration-700 delay-100 cursor-pointer ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <div
                    className="w-3 h-3 bg-[#dff140] transition-colors duration-300"
                    style={{
                      boxShadow: '0 0 10px rgba(223, 241, 64, 0.5), 0 0 20px rgba(223, 241, 64, 0.3)'
                    }}
                  />
                  <span className="text-white text-xs uppercase tracking-[0.2em] font-['Lato'] font-medium">
                    Press & Media
                  </span>
                </div>

                <h1
                  className={`heading-display text-white mb-8 transition-all duration-700 delay-200 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  Newsroom
                </h1>

                <p
                  className={`text-white/50 text-lg md:text-xl font-['Lato'] leading-relaxed max-w-xl transition-all duration-700 delay-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  Latest press releases, company announcements, and updates from Kryil Infotech.
                </p>
              </div>

              {/* Search */}
              <div
                className={`transition-all duration-700 delay-400 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="relative flex items-center">
                  <svg className="absolute w-5 h-5 text-white/35 pointer-events-none" style={{ left: '20px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search news..."
                    className="w-full py-5 bg-white/5 border border-white/10 text-white placeholder:text-white/30 font-['Lato'] text-base focus:outline-none focus:border-[#dff140]/50 focus:bg-white/[0.08] transition-all"
                    style={{ paddingLeft: '56px', paddingRight: '24px' }}
                  />
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div
              className={`mt-16 transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="flex items-center gap-4 mb-5">
                <span className="text-xs text-white/40 uppercase tracking-wider font-['Lato']">Filter by type</span>
                <div className="flex-1 h-px bg-black/10" />
                <span className="text-xs text-white/35 font-['Lato']">
                  {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'}
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {newsTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-5 py-2.5 text-sm font-medium font-['Lato'] transition-all duration-300 ${
                      selectedType === type
                        ? 'bg-black text-white'
                        : 'bg-white/[0.03] text-white/50 hover:text-white hover:bg-white/[0.08] border border-white/10 hover:border-white/20'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section style={{ padding: '60px 40px' }}>
          <div className="max-w-[1800px] mx-auto">
            <AnimatedSection>
              <Link
                to={`/news/${featuredArticle.slug}`}
                className="group grid lg:grid-cols-2 gap-0 bg-white/5 border border-white/10 hover:border-[#dff140]/30 hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="k-card-pad-lg flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <span className={`px-4 py-2 text-xs font-bold uppercase tracking-wider font-['Lato'] ${getTypeColor(featuredArticle.type)}`}>
                      {featuredArticle.type}
                    </span>
                    <span className="text-white/35 text-sm font-['Lato']">
                      {new Date(featuredArticle.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <h2 className="font-['Lato'] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight group-hover:text-white/70 transition-colors">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-white/50 font-['Lato'] text-lg leading-relaxed mb-8 line-clamp-3">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-white font-semibold font-['Lato'] group-hover:gap-4 transition-all">
                    Read Full Story
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Secondary Articles Grid */}
      {secondaryArticles.length > 0 && (
        <section style={{ padding: '0 40px 40px' }}>
          <div className="max-w-[1800px] mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {secondaryArticles.map((article, index) => (
                <AnimatedSection key={article.id} delay={index * 100}>
                  <NewsCard article={article} getTypeColor={getTypeColor} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All News */}
      {otherArticles.length > 0 && (
        <section style={{ padding: '40px 40px 100px' }}>
          <div className="max-w-[1800px] mx-auto">
            <AnimatedSection>
              <div className="flex items-center gap-6 mb-10">
                <h2 className="text-2xl font-bold text-white font-['Lato']">More News</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-black/10 to-transparent" />
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-6">
              {otherArticles.map((article, index) => (
                <AnimatedSection key={article.id} delay={Math.min(index * 50, 200)}>
                  <ListCard article={article} getTypeColor={getTypeColor} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {filteredArticles.length === 0 && (
        <section style={{ padding: '80px 40px' }}>
          <div className="max-w-[1800px] mx-auto">
            <AnimatedSection>
              <div className="text-center py-20 border border-white/10 bg-white/[0.02]">
                <div className="w-20 h-20 mx-auto mb-8 bg-black/5 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white/25" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <p className="text-white/60 font-['Lato'] text-xl mb-6">
                  No news found
                </p>
                <p className="text-white/40 font-['Lato'] mb-8 max-w-md mx-auto">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSelectedType('All');
                    setSearchQuery('');
                  }}
                  className="px-8 py-3 bg-black text-white font-bold font-['Lato'] text-sm hover:bg-black/80 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Media Contact CTA */}
      <section className="relative overflow-hidden border-t border-white/10 bg-[#0a0a0a]">
        <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

        <div className="relative" style={{ padding: '100px 40px' }}>
          <div className="max-w-[1800px] mx-auto">
            <AnimatedSection>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-2 bg-black" />
                    <span className="text-white text-xs uppercase tracking-[0.2em] font-['Lato'] font-medium">
                      Media Inquiries
                    </span>
                  </div>
                  <h2 className="font-['Lato'] text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Press Contact
                  </h2>
                  <p className="text-white/50 font-['Lato'] text-lg max-w-md">
                    For press inquiries, interview requests, or media kit access, reach out to our communications team.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <a
                    href="mailto:info@kryil.com"
                    className="group flex items-center k-row-pad gap-4 bg-white/[0.03] border border-white/10 hover:border-white/25 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <path d="M22 6l-10 7L2 6"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-white/40 font-['Lato'] mb-1">Email</p>
                      <p className="text-white font-semibold font-['Lato']">info@kryil.com</p>
                    </div>
                    <svg className="w-5 h-5 text-white/35 ml-auto group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a
                    href="tel:+918089090365"
                    className="group flex items-center k-row-pad gap-4 bg-white/[0.03] border border-white/10 hover:border-white/25 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-white/40 font-['Lato'] mb-1">Phone</p>
                      <p className="text-white font-semibold font-['Lato']">+91-8089090365</p>
                    </div>
                    <svg className="w-5 h-5 text-white/35 ml-auto group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}

function NewsCard({ article, getTypeColor }: { article: NewsArticle; getTypeColor: (type: string) => string }) {
  return (
    <Link
      to={`/news/${article.slug}`}
      className="group block bg-white/5 border border-white/10 hover:border-[#dff140]/30 hover:shadow-lg transition-all duration-500"
    >
      <div className="aspect-[16/10] overflow-hidden relative">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider font-['Lato'] ${getTypeColor(article.type)}`}>
            {article.type}
          </span>
        </div>
      </div>
      <div style={{ padding: '28px' }}>
        <h3 className="font-['Lato'] text-lg font-bold text-white mb-3 leading-snug group-hover:text-white/70 transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-white/40 text-sm font-['Lato'] leading-relaxed line-clamp-2 mb-4">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <span className="text-xs text-white/35 font-['Lato']">
            {new Date(article.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })}
          </span>
          <span className="text-xs text-white/50 font-['Lato'] font-medium">
            Read more →
          </span>
        </div>
      </div>
    </Link>
  );
}

function ListCard({ article, getTypeColor }: { article: NewsArticle; getTypeColor: (type: string) => string }) {
  return (
    <Link
      to={`/news/${article.slug}`}
      className="group flex gap-6 p-5 bg-white border border-white/10 hover:border-white/20 hover:shadow-lg transition-all duration-300"
    >
      <div className="w-32 h-32 flex-shrink-0 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="flex-1 min-w-0 py-1">
        <div className="flex items-center gap-3 mb-3">
          <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider font-['Lato'] ${getTypeColor(article.type)}`}>
            {article.type}
          </span>
          <span className="text-xs text-white/35 font-['Lato']">
            {new Date(article.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric'
            })}
          </span>
        </div>
        <h4 className="font-['Lato'] text-lg font-bold text-white leading-snug group-hover:text-white/70 transition-colors line-clamp-2 mb-2">
          {article.title}
        </h4>
        <p className="text-white/40 text-sm font-['Lato'] line-clamp-1">
          {article.excerpt}
        </p>
      </div>
    </Link>
  );
}
