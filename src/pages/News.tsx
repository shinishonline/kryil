import { Link } from 'react-router-dom';
import { newsArticles } from '../data/newsArticles';

export default function News() {
  const sortedArticles = [...newsArticles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

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
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-[#dff140] text-sm uppercase tracking-[0.2em] mb-4 font-['Lato']">
            Press & Media
          </p>
          <h1 className="font-['Lato'] text-4xl md:text-6xl font-black tracking-tight mb-6">
            News & Announcements
          </h1>
          <p className="text-white/60 text-lg max-w-2xl font-['Lato']">
            Latest press releases, company news, and updates from Kryil Infotech.
          </p>
        </div>
      </section>

      {/* News List */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="space-y-8">
          {sortedArticles.map((article, index) => (
            <Link
              key={article.id}
              to={`/news/${article.slug}`}
              className={`group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ${
                index === 0 ? 'md:flex' : ''
              }`}
            >
              <div className={`overflow-hidden ${index === 0 ? 'md:w-1/2' : ''}`}>
                <div className={`${index === 0 ? 'aspect-[16/10] md:aspect-auto md:h-full' : 'aspect-[21/9]'}`}>
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className={`p-8 ${index === 0 ? 'md:w-1/2 md:p-12 flex flex-col justify-center' : ''}`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full font-['Lato'] ${getTypeColor(article.type)}`}>
                    {article.type}
                  </span>
                  <span className="text-black/40 text-sm font-['Lato']">
                    {new Date(article.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                <h2 className={`font-['Lato'] font-bold text-black mb-4 group-hover:text-black/80 transition-colors ${
                  index === 0 ? 'text-2xl md:text-3xl' : 'text-xl'
                }`}>
                  {article.title}
                </h2>
                <p className="text-black/60 font-['Lato'] leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <span className="text-black font-semibold text-sm font-['Lato'] flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Media Contact Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-['Lato'] text-2xl md:text-3xl font-bold mb-6">
                Media Contact
              </h2>
              <p className="text-black/60 font-['Lato'] leading-relaxed mb-6">
                For press inquiries, interview requests, or additional information about Kryil Infotech, please contact our media relations team.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:media@kryil.com"
                  className="flex items-center gap-3 text-black hover:text-[#dff140] transition-colors font-['Lato']"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <path d="M22 6l-10 7L2 6"/>
                  </svg>
                  media@kryil.com
                </a>
                <a
                  href="tel:+918089090365"
                  className="flex items-center gap-3 text-black hover:text-[#dff140] transition-colors font-['Lato']"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  +91-8089090365
                </a>
              </div>
            </div>
            <div>
              <h2 className="font-['Lato'] text-2xl md:text-3xl font-bold mb-6">
                Press Kit
              </h2>
              <p className="text-black/60 font-['Lato'] leading-relaxed mb-6">
                Download our press kit containing company logos, executive bios, fact sheets, and high-resolution images.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-3 px-6 py-3 bg-black text-white font-semibold rounded-full font-['Lato'] hover:bg-black/80 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download Press Kit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-['Lato'] text-3xl md:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-white/60 mb-8 font-['Lato']">
            Follow us on social media for the latest updates and announcements.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://linkedin.com/company/kryil-infotech"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/10 rounded-full hover:bg-[#0077b5] transition-colors"
              aria-label="LinkedIn"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://twitter.com/kryilinfotech"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/10 rounded-full hover:bg-black hover:ring-2 hover:ring-white transition-all"
              aria-label="X (Twitter)"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
