import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { newsArticles } from '../data/newsArticles';
import type { NewsArticle } from '../data/newsArticles';

const newsTypes = ['All', 'Press Release', 'Company News', 'Award', 'Partnership'];

export default function News() {
  const [selectedType, setSelectedType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

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

    if (selectedDate) {
      const filterDate = new Date(selectedDate);
      articles = articles.filter(article => {
        const articleDate = new Date(article.date);
        return articleDate >= filterDate;
      });
    }

    return articles;
  }, [selectedType, searchQuery, selectedDate]);

  const sortedArticles = [...filteredArticles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const topStories = sortedArticles.slice(0, 3);
  const otherArticles = sortedArticles.slice(3);

  // Get recent news for sidebar
  const recentNews = useMemo(() => {
    return [...newsArticles]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5);
  }, []);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Press Release':
        return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
      case 'Company News':
        return 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20';
      case 'Award':
        return 'bg-amber-500/10 text-amber-600 border-amber-500/20';
      case 'Partnership':
        return 'bg-purple-500/10 text-purple-600 border-purple-500/20';
      default:
        return 'bg-gray-500/10 text-gray-600 border-gray-500/20';
    }
  };

  return (
    <div className="bg-[#f8f8f6] min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-black/90" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-36 md:pt-40 pb-20 md:pb-24">
          <div className="max-w-3xl">
            <span className="inline-block px-5 py-2.5 bg-[#dff140]/10 border border-[#dff140]/30 rounded-full text-[#dff140] text-xs uppercase tracking-[0.2em] mb-6 md:mb-8 font-['Lato']">
              Press & Media
            </span>
            <h1 className="font-['Lato'] text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 md:mb-8 leading-[1.1]">
              Newsroom
            </h1>
            <p className="text-white/50 text-base md:text-lg lg:text-xl font-['Lato'] leading-relaxed max-w-2xl">
              Latest press releases, company announcements, and updates from Kryil Infotech.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content Area */}
          <div className="flex-1 min-w-0">
            {/* Type Filter Pills */}
            <div className="flex flex-wrap gap-2 mb-10">
              {newsTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium font-['Lato'] transition-all duration-300 ${
                    selectedType === type
                      ? 'bg-black text-white shadow-lg'
                      : 'bg-white text-black/60 hover:bg-black/5 hover:text-black border border-black/10'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Top Stories Section */}
            {topStories.length > 0 && (
              <section className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="font-['Lato'] text-2xl font-black text-black">Top Stories</h2>
                  <div className="flex-1 h-px bg-black/10" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Featured Top Story */}
                  {topStories[0] && (
                    <Link
                      to={`/news/${topStories[0].slug}`}
                      className="group md:row-span-2 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={topStories[0].image}
                          alt={topStories[0].title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-8">
                        <div className="flex items-center gap-4 mb-5">
                          <span className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full border font-['Lato'] ${getTypeColor(topStories[0].type)}`}>
                            {topStories[0].type}
                          </span>
                        </div>
                        <h3 className="font-['Lato'] text-xl lg:text-2xl font-bold text-black mb-5 leading-tight group-hover:text-black/70 transition-colors">
                          {topStories[0].title}
                        </h3>
                        <p className="text-black/50 text-sm font-['Lato'] leading-relaxed mb-6 line-clamp-3">
                          {topStories[0].excerpt}
                        </p>
                        <div className="flex items-center justify-between pt-5 border-t border-black/10">
                          <span className="text-xs text-black/40 font-['Lato']">
                            {new Date(topStories[0].date).toLocaleDateString('en-US', {
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                          <span className="text-black font-semibold text-sm font-['Lato'] flex items-center gap-2 group-hover:gap-3 transition-all">
                            Read
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </Link>
                  )}

                  {/* Other Top Stories */}
                  <div className="flex flex-col gap-6">
                    {topStories.slice(1, 3).map((article) => (
                      <Link
                        key={article.id}
                        to={`/news/${article.slug}`}
                        className="group flex gap-4 md:gap-5 bg-white rounded-xl p-4 md:p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                      >
                        <div className="w-24 h-24 md:w-28 md:h-28 flex-shrink-0 rounded-lg overflow-hidden">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                        <div className="flex-1 min-w-0 py-1">
                          <div className="flex items-center gap-2 mb-2 md:mb-3">
                            <span className={`px-2 md:px-3 py-1 md:py-1.5 text-[10px] font-bold uppercase tracking-wider rounded border font-['Lato'] ${getTypeColor(article.type)}`}>
                              {article.type}
                            </span>
                          </div>
                          <h4 className="font-['Lato'] text-sm md:text-base font-bold text-black leading-snug group-hover:text-black/70 transition-colors line-clamp-2 mb-2 md:mb-3">
                            {article.title}
                          </h4>
                          <span className="text-[11px] md:text-xs text-black/40 font-['Lato']">
                            {new Date(article.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* All News Section */}
            {otherArticles.length > 0 && (
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="font-['Lato'] text-2xl font-black text-black">All News</h2>
                  <div className="flex-1 h-px bg-black/10" />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {otherArticles.map((article) => (
                    <NewsCard key={article.id} article={article} getTypeColor={getTypeColor} />
                  ))}
                </div>
              </section>
            )}

            {filteredArticles.length === 0 && (
              <div className="text-center py-20 bg-white rounded-2xl">
                <svg className="w-16 h-16 mx-auto mb-4 text-black/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-black/40 font-['Lato'] text-lg">
                  No news found matching your criteria.
                </p>
                <button
                  onClick={() => {
                    setSelectedType('All');
                    setSearchQuery('');
                    setSelectedDate('');
                  }}
                  className="mt-4 text-sm text-black/60 hover:text-black underline font-['Lato']"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
            <div className="lg:sticky lg:top-32 space-y-8">
              {/* Search Box */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-['Lato'] text-sm font-bold uppercase tracking-wider text-black/40 mb-4">
                  Search News
                </h3>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by keyword..."
                    className="w-full px-4 py-3 pl-11 bg-black/5 border-0 rounded-xl text-black placeholder:text-black/30 font-['Lato'] text-sm focus:outline-none focus:ring-2 focus:ring-[#dff140] transition-all"
                  />
                  <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Date Filter */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-['Lato'] text-sm font-bold uppercase tracking-wider text-black/40 mb-4">
                  Filter by Date
                </h3>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-3 bg-black/5 border-0 rounded-xl text-black font-['Lato'] text-sm focus:outline-none focus:ring-2 focus:ring-[#dff140] transition-all cursor-pointer"
                />
                {selectedDate && (
                  <button
                    onClick={() => setSelectedDate('')}
                    className="mt-3 text-xs text-black/50 hover:text-black font-['Lato'] flex items-center gap-1"
                  >
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Clear date filter
                  </button>
                )}
              </div>

              {/* Recent News */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-['Lato'] text-sm font-bold uppercase tracking-wider text-black/40 mb-4">
                  Recent News
                </h3>
                <div className="space-y-4">
                  {recentNews.map((article, index) => (
                    <Link
                      key={article.id}
                      to={`/news/${article.slug}`}
                      className="group flex items-start gap-4"
                    >
                      <span className="flex-shrink-0 w-8 h-8 bg-black/5 rounded-full flex items-center justify-center text-sm font-bold text-black/30 font-['Lato']">
                        {index + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-['Lato'] text-sm font-semibold text-black leading-snug group-hover:text-black/70 transition-colors line-clamp-2">
                          {article.title}
                        </h4>
                        <span className="text-[11px] text-black/40 font-['Lato']">
                          {new Date(article.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Media Contact Card */}
              <div className="bg-black rounded-2xl p-6 text-white">
                <h3 className="font-['Lato'] text-lg font-bold mb-2">
                  Media Contact
                </h3>
                <p className="text-white/50 text-sm font-['Lato'] mb-4">
                  For press inquiries and interview requests.
                </p>
                <a
                  href="mailto:media@kryil.com"
                  className="flex items-center gap-3 px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white font-['Lato'] text-sm hover:bg-white/20 transition-colors mb-3"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <path d="M22 6l-10 7L2 6"/>
                  </svg>
                  media@kryil.com
                </a>
                <a
                  href="tel:+918089090365"
                  className="flex items-center gap-3 px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white font-['Lato'] text-sm hover:bg-white/20 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  +91-8089090365
                </a>
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-['Lato'] text-sm font-bold uppercase tracking-wider text-black/40 mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  <a
                    href="https://linkedin.com/company/kryil-infotech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/kryilinfotech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                    aria-label="X (Twitter)"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a
                    href="https://youtube.com/@kryilinfotech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-300"
                    aria-label="YouTube"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function NewsCard({ article, getTypeColor }: { article: NewsArticle; getTypeColor: (type: string) => string }) {
  return (
    <Link
      to={`/news/${article.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
      </div>
      <div className="p-8">
        <div className="flex items-center gap-3 mb-5">
          <span className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full border font-['Lato'] ${getTypeColor(article.type)}`}>
            {article.type}
          </span>
        </div>
        <h3 className="font-['Lato'] text-xl font-bold text-black mb-4 leading-snug group-hover:text-black/70 transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-black/50 text-sm font-['Lato'] leading-relaxed line-clamp-3 mb-6">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between pt-5 border-t border-black/10">
          <span className="text-xs text-black/40 font-['Lato']">
            {new Date(article.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })}
          </span>
          <span className="text-black font-semibold text-sm font-['Lato'] flex items-center gap-2 group-hover:gap-3 transition-all">
            Read
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
