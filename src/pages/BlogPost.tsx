import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getBlogPostBySlug, getRecentPosts } from '../data/blogPosts';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;
  const recentPosts = getRecentPosts(3).filter(p => p.slug !== slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Kryil Infotech Blog`;
    }
    return () => {
      document.title = 'Kryil Infotech | UAV Drone Manufacturer | Robotics & IoT Solutions | Bangalore India';
    };
  }, [post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="bg-[#f1f0ea] min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.image})` }}
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        <div className="relative max-w-5xl mx-auto px-8 md:px-16 pt-40 pb-24">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-3 text-sm text-white/40 mb-12 font-['Lato']">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/20">/</span>
            <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span className="text-white/20">/</span>
            <span className="text-white/60">{post.category}</span>
          </nav>

          <div className="flex items-center gap-4 mb-8">
            <span className="px-4 py-1.5 bg-[#dff140] text-black text-xs font-bold uppercase tracking-wider rounded-full font-['Lato']">
              {post.category}
            </span>
            <span className="text-white/40 text-sm font-['Lato']">
              {post.readTime}
            </span>
          </div>

          <h1 className="font-['Lato'] text-4xl md:text-6xl font-black tracking-tight mb-8 leading-[1.1] max-w-4xl">
            {post.title}
          </h1>

          <p className="text-white/60 text-xl md:text-2xl font-['Lato'] leading-relaxed mb-12 max-w-3xl">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-6 text-sm text-white/40 font-['Lato'] pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">{post.author.charAt(0)}</span>
              </div>
              <div>
                <p className="text-white/80 font-medium">{post.author}</p>
                <p className="text-white/40 text-xs">Kryil Infotech</p>
              </div>
            </div>
            <span className="text-white/20">|</span>
            <span>{new Date(post.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="relative">
        <div className="max-w-3xl mx-auto px-8 md:px-16 py-20">
          <div
            className="prose prose-lg max-w-none font-['Lato']
              prose-headings:font-['Lato'] prose-headings:font-black prose-headings:text-black prose-headings:tracking-tight
              prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8
              prose-p:text-black/60 prose-p:leading-[1.9] prose-p:text-lg prose-p:mb-8
              prose-li:text-black/60 prose-li:text-lg prose-li:leading-[1.8]
              prose-strong:text-black prose-strong:font-bold
              prose-ul:my-8 prose-ul:space-y-3
              prose-ol:my-8 prose-ol:space-y-3
              prose-li:my-0 prose-li:pl-2"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-20 pt-10 border-t border-black/10">
            <p className="text-xs uppercase tracking-[0.2em] text-black/30 mb-6 font-['Lato'] font-bold">Tags</p>
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-5 py-2 bg-black/5 text-black/50 text-sm rounded-full font-['Lato'] hover:bg-black/10 hover:text-black/70 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share */}
          <div className="mt-12 pt-10 border-t border-black/10">
            <p className="text-xs uppercase tracking-[0.2em] text-black/30 mb-6 font-['Lato'] font-bold">Share this article</p>
            <div className="flex gap-4">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://www.kryil.com/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-black/5 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                aria-label="Share on Twitter"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://www.kryil.com/blog/${post.slug}`)}&title=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-black/5 rounded-full flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all duration-300"
                aria-label="Share on LinkedIn"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`Check out this article: https://www.kryil.com/blog/${post.slug}`)}`}
                className="w-14 h-14 bg-black/5 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                aria-label="Share via Email"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <path d="M22 6l-10 7L2 6"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {recentPosts.length > 0 && (
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 py-24">
            <div className="flex items-center justify-between mb-12">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-black/30 mb-3 font-['Lato'] font-bold">Continue Reading</p>
                <h2 className="font-['Lato'] text-3xl md:text-4xl font-black">
                  More Articles
                </h2>
              </div>
              <Link
                to="/blog"
                className="hidden md:flex items-center gap-2 text-black/60 hover:text-black font-['Lato'] font-medium transition-colors"
              >
                View All
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {recentPosts.slice(0, 3).map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="group block bg-[#f1f0ea] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs text-black/40 font-['Lato'] uppercase tracking-wider">
                        {relatedPost.category}
                      </span>
                      <span className="text-black/20">|</span>
                      <span className="text-xs text-black/40 font-['Lato']">
                        {relatedPost.readTime}
                      </span>
                    </div>
                    <h3 className="font-['Lato'] text-xl font-bold text-black leading-snug group-hover:text-black/70 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-black text-white">
        <div className="max-w-5xl mx-auto px-8 md:px-16 py-24 text-center">
          <span className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/60 text-xs uppercase tracking-[0.2em] mb-8 font-['Lato']">
            Get Started
          </span>
          <h2 className="font-['Lato'] text-4xl md:text-5xl font-black mb-6 leading-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white/40 text-lg mb-12 font-['Lato'] max-w-2xl mx-auto leading-relaxed">
            Connect with our experts to discuss your UAV, robotics, or IoT project requirements.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-4 px-10 py-5 bg-[#dff140] text-black font-bold rounded-full font-['Lato'] text-lg hover:bg-[#e8f756] transition-colors"
          >
            <span>Get in Touch</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
