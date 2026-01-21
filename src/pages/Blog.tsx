import { useState, useMemo, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import type { BlogPost } from '../data/blogPosts';

const categories = ['All', 'UAV', 'Robotics', 'IoT', 'Defense', 'AI', 'Aerospace'];

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

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredPosts = useMemo(() => {
    let posts = selectedCategory === 'All'
      ? blogPosts
      : blogPosts.filter(post => post.category === selectedCategory);

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    return posts;
  }, [selectedCategory, searchQuery]);

  const sortedPosts = [...filteredPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const featuredPost = sortedPosts[0];
  const secondaryPosts = sortedPosts.slice(1, 3);
  const otherPosts = sortedPosts.slice(3);

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Navbar Spacer */}
      <div className="h-20 md:h-24 bg-[#0a0a0a]"></div>

      {/* Hero Section - Full Width */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#dff140]/5 to-transparent" />

        <div className="relative" style={{ padding: '60px 40px 80px' }}>
          <div className="max-w-[1800px] mx-auto">
            {/* Breadcrumb */}
            <nav
              className={`flex items-center gap-2 mb-12 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Link to="/" className="text-white/40 hover:text-white text-sm transition-colors">
                Home
              </Link>
              <span className="text-white/20">/</span>
              <span className="text-white/60 text-sm">Blog</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span
                  className={`inline-block px-4 py-2 bg-[#dff140]/10 border border-[#dff140]/20 text-[#dff140] text-xs uppercase tracking-[0.2em] mb-8 transition-all duration-700 delay-100 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  Insights & Research
                </span>

                <h1
                  className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.05] transition-all duration-700 delay-200 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  The KRYIL
                  <br />
                  <span className="text-white/30">Journal</span>
                </h1>

                <p
                  className={`text-white/50 text-lg md:text-xl leading-relaxed max-w-xl transition-all duration-700 delay-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  Expert insights on UAV technology, aerospace engineering, robotics, and defense innovation from industry leaders.
                </p>
              </div>

              {/* Search */}
              <div
                className={`transition-all duration-700 delay-400 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="relative flex items-center">
                  <svg className="absolute w-5 h-5 text-white/30 pointer-events-none" style={{ left: '20px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles..."
                    className="w-full py-5 bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-base focus:outline-none focus:border-[#dff140]/50 focus:bg-white/[0.07] transition-all"
                    style={{ paddingLeft: '56px', paddingRight: '24px' }}
                  />
                </div>
              </div>
            </div>

            {/* Category Filter - Integrated */}
            <div
              className={`mt-16 transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="flex items-center gap-4 mb-5">
                <span className="text-xs text-white/40 uppercase tracking-wider">Browse by topic</span>
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-xs text-white/30">
                  {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-[#dff140] text-black'
                        : 'bg-white/[0.03] text-white/50 hover:text-white hover:bg-white/[0.08] border border-white/10 hover:border-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Featured Section - Bento Grid */}
      {featuredPost && (
        <section style={{ padding: '60px 40px' }}>
          <div className="max-w-[1800px] mx-auto">
            <AnimatedSection>
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Main Featured */}
                <Link
                  to={`/blog/${featuredPost.slug}`}
                  className="group lg:col-span-2 lg:row-span-2 relative overflow-hidden bg-white/5 border border-white/10 hover:border-[#dff140]/30 transition-all duration-500"
                >
                  <div className="absolute inset-0">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  </div>
                  <div className="relative h-full flex flex-col justify-end p-8 md:p-10" style={{ minHeight: '500px' }}>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="px-4 py-2 bg-[#dff140] text-black text-xs font-bold uppercase tracking-wider">
                        Featured
                      </span>
                      <span className="px-4 py-2 bg-black/50 backdrop-blur text-white text-xs font-bold uppercase tracking-wider">
                        {featuredPost.category}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight group-hover:text-white/90 transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed mb-6 max-w-2xl line-clamp-2">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur flex items-center justify-center">
                          <span className="text-sm font-bold text-white">{featuredPost.author.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">{featuredPost.author}</p>
                          <p className="text-xs text-white/50">
                            {new Date(featuredPost.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </p>
                        </div>
                      </div>
                      <span className="text-white/40 text-sm">
                        {featuredPost.readTime}
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Secondary Featured */}
                {secondaryPosts.map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.slug}`}
                    className="group relative overflow-hidden bg-white/5 border border-white/10 hover:border-[#dff140]/30 transition-all duration-500"
                  >
                    <div className="absolute inset-0">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
                    </div>
                    <div className="relative h-full flex flex-col justify-end p-6" style={{ minHeight: '240px' }}>
                      <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur text-white text-xs font-bold uppercase tracking-wider mb-4 self-start">
                        {post.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-white/90 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-white/50">
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* All Articles - Grid */}
      {otherPosts.length > 0 && (
        <section style={{ padding: '0 40px 80px' }}>
          <div className="max-w-[1800px] mx-auto">
            <AnimatedSection>
              <div className="flex items-center gap-6 mb-10">
                <h2 className="text-2xl font-bold text-white">All Articles</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
              </div>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {otherPosts.map((post, index) => (
                <AnimatedSection key={post.id} delay={Math.min(index * 30, 150)}>
                  <BlogCard post={post} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {filteredPosts.length === 0 && (
        <section style={{ padding: '80px 40px' }}>
          <div className="max-w-[1800px] mx-auto">
            <AnimatedSection>
              <div className="text-center py-20 border border-white/10 bg-white/[0.02]">
                <div className="w-20 h-20 mx-auto mb-8 bg-white/5 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <p className="text-white/40 text-xl mb-6">
                  No articles found
                </p>
                <p className="text-white/30 mb-8 max-w-md mx-auto">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                  className="px-8 py-3 bg-[#dff140] text-black font-bold text-sm hover:bg-white transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Newsletter Section */}

    </div>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex flex-col h-full bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500"
    >
      <div className="aspect-[16/10] overflow-hidden relative flex-shrink-0">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 bg-black/60 backdrop-blur text-white/90 text-xs font-bold uppercase tracking-wider">
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-base font-bold text-white mb-3 leading-snug group-hover:text-[#dff140] transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-white/40 text-sm leading-relaxed line-clamp-2 mb-4 flex-grow">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
          <span className="text-xs text-white/30">
            {new Date(post.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric'
            })}
          </span>
          <span className="text-xs text-white/30">
            {post.readTime}
          </span>
        </div>
      </div>
    </Link>
  );
}
