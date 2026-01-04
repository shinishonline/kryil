import { Link } from 'react-router-dom';
import { newsArticles } from '../data/newsArticles';

export default function News() {
  const sortedArticles = [...newsArticles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const featuredArticle = sortedArticles[0];
  const otherArticles = sortedArticles.slice(1);

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
    <div className="bg-[#f1f0ea] min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-black/90" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-8 md:px-16 lg:px-24 pt-40 pb-24">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-[#dff140]/10 border border-[#dff140]/30 rounded-full text-[#dff140] text-xs uppercase tracking-[0.2em] mb-8 font-['Lato']">
              Press & Media
            </span>
            <h1 className="font-['Lato'] text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.1]">
              News
            </h1>
            <p className="text-white/50 text-xl md:text-2xl font-['Lato'] leading-relaxed max-w-2xl">
              Latest press releases, company announcements, and updates from Kryil Infotech.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 pt-16 pb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-black/40 mb-6 font-['Lato']">Latest Announcement</p>
          <Link
            to={`/news/${featuredArticle.slug}`}
            className="group block"
          >
            <div className="grid lg:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-10 md:p-14 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full border font-['Lato'] ${getTypeColor(featuredArticle.type)}`}>
                    {featuredArticle.type}
                  </span>
                </div>
                <h2 className="font-['Lato'] text-3xl md:text-4xl font-black text-black mb-6 leading-tight group-hover:text-black/70 transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="text-black/50 font-['Lato'] text-lg leading-relaxed mb-8">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-black/5">
                  <span className="text-sm text-black/40 font-['Lato']">
                    {new Date(featuredArticle.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                  <span className="text-black font-bold text-sm font-['Lato'] flex items-center gap-3 group-hover:gap-4 transition-all">
                    Read More
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* News Grid */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 py-16">
        <p className="text-xs uppercase tracking-[0.2em] text-black/40 mb-8 font-['Lato']">All News</p>
        <div className="grid md:grid-cols-2 gap-10">
          {otherArticles.map((article) => (
            <Link
              key={article.id}
              to={`/news/${article.slug}`}
              className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="aspect-[2/1] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-5">
                  <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full border font-['Lato'] ${getTypeColor(article.type)}`}>
                    {article.type}
                  </span>
                  <span className="text-black/30 text-sm font-['Lato']">
                    {new Date(article.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                <h3 className="font-['Lato'] text-xl font-bold text-black mb-4 leading-snug group-hover:text-black/70 transition-colors">
                  {article.title}
                </h3>
                <p className="text-black/40 text-sm font-['Lato'] leading-relaxed line-clamp-2 mb-6">
                  {article.excerpt}
                </p>
                <span className="text-black font-semibold text-sm font-['Lato'] flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Media Contact Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 py-24">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="inline-block px-4 py-2 bg-black/5 rounded-full text-black/60 text-xs uppercase tracking-[0.2em] mb-8 font-['Lato']">
                Get in Touch
              </span>
              <h2 className="font-['Lato'] text-3xl md:text-4xl font-black mb-6">
                Media Contact
              </h2>
              <p className="text-black/50 font-['Lato'] text-lg leading-relaxed mb-10">
                For press inquiries, interview requests, or additional information about Kryil Infotech, please contact our media relations team.
              </p>
              <div className="space-y-6">
                <a
                  href="mailto:media@kryil.com"
                  className="flex items-center gap-4 p-5 bg-black/5 rounded-2xl hover:bg-black hover:text-white transition-all duration-300 font-['Lato'] group"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <path d="M22 6l-10 7L2 6"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold">Email Us</p>
                    <p className="text-sm opacity-60">media@kryil.com</p>
                  </div>
                </a>
                <a
                  href="tel:+918089090365"
                  className="flex items-center gap-4 p-5 bg-black/5 rounded-2xl hover:bg-black hover:text-white transition-all duration-300 font-['Lato'] group"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold">Call Us</p>
                    <p className="text-sm opacity-60">+91-8089090365</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="bg-[#f1f0ea] rounded-3xl p-10 md:p-14">
              <span className="inline-block px-4 py-2 bg-black/5 rounded-full text-black/60 text-xs uppercase tracking-[0.2em] mb-8 font-['Lato']">
                Resources
              </span>
              <h2 className="font-['Lato'] text-3xl md:text-4xl font-black mb-6">
                Press Kit
              </h2>
              <p className="text-black/50 font-['Lato'] text-lg leading-relaxed mb-10">
                Download our press kit containing company logos, executive bios, fact sheets, and high-resolution images.
              </p>
              <button className="w-full flex items-center justify-center gap-4 px-8 py-5 bg-black text-white font-bold rounded-full font-['Lato'] hover:bg-black/80 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download Press Kit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Social CTA */}
      <section className="bg-black text-white">
        <div className="max-w-5xl mx-auto px-8 md:px-16 py-24 text-center">
          <span className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/60 text-xs uppercase tracking-[0.2em] mb-8 font-['Lato']">
            Follow Us
          </span>
          <h2 className="font-['Lato'] text-4xl md:text-5xl font-black mb-6 leading-tight">
            Stay Updated
          </h2>
          <p className="text-white/40 text-lg mb-12 font-['Lato'] max-w-2xl mx-auto leading-relaxed">
            Follow us on social media for the latest updates and announcements.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://linkedin.com/company/kryil-infotech"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-[#0077b5] transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://twitter.com/kryilinfotech"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              aria-label="X (Twitter)"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="https://youtube.com/@kryilinfotech"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-red-600 transition-all duration-300"
              aria-label="YouTube"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
