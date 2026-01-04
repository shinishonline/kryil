import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import type { BlogPost } from '../data/blogPosts';

const categories = ['All', 'UAV', 'Robotics', 'IoT', 'Defense', 'AI', 'Aerospace'];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

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

    if (selectedDate) {
      const filterDate = new Date(selectedDate);
      posts = posts.filter(post => {
        const postDate = new Date(post.date);
        return postDate >= filterDate;
      });
    }

    return posts;
  }, [selectedCategory, searchQuery, selectedDate]);

  const sortedPosts = [...filteredPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const topStories = sortedPosts.slice(0, 4);
  const latestPosts = sortedPosts.slice(4);

  // Get all unique tags for the sidebar
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    blogPosts.forEach(post => post.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags).slice(0, 12);
  }, []);

  // Get recent posts for sidebar
  const recentPosts = useMemo(() => {
    return [...blogPosts]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5);
  }, []);

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
        <div className="relative max-w-7xl mx-auto px-8 md:px-16 lg:px-20 pt-40 pb-24">
          <div className="max-w-3xl">
            <span className="inline-block px-5 py-2.5 bg-[#dff140]/10 border border-[#dff140]/30 rounded-full text-[#dff140] text-xs uppercase tracking-[0.2em] mb-8 font-['Lato']">
              Insights & Research
            </span>
            <h1 className="font-['Lato'] text-5xl md:text-6xl font-black tracking-tight mb-8 leading-[1.1]">
              The Kryil Journal
            </h1>
            <p className="text-white/50 text-lg md:text-xl font-['Lato'] leading-relaxed max-w-2xl pr-4">
              Expert insights on UAV technology, aerospace engineering, robotics, and defense innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content Area */}
          <div className="flex-1 min-w-0">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium font-['Lato'] transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-black text-white shadow-lg'
                      : 'bg-white text-black/60 hover:bg-black/5 hover:text-black border border-black/10'
                  }`}
                >
                  {category}
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
                      to={`/blog/${topStories[0].slug}`}
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
                          <span className="px-4 py-2 bg-[#dff140] text-black text-xs font-bold uppercase tracking-wider rounded-full font-['Lato']">
                            {topStories[0].category}
                          </span>
                          <span className="text-black/40 text-xs font-['Lato']">
                            {topStories[0].readTime}
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
                    {topStories.slice(1, 4).map((post) => (
                      <Link
                        key={post.id}
                        to={`/blog/${post.slug}`}
                        className="group flex gap-5 bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300"
                      >
                        <div className="w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                        <div className="flex-1 min-w-0 py-2">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="px-3 py-1.5 bg-black/5 text-black/60 text-[10px] font-bold uppercase tracking-wider rounded font-['Lato']">
                              {post.category}
                            </span>
                          </div>
                          <h4 className="font-['Lato'] text-base font-bold text-black leading-snug group-hover:text-black/70 transition-colors line-clamp-2 mb-3">
                            {post.title}
                          </h4>
                          <span className="text-xs text-black/40 font-['Lato']">
                            {new Date(post.date).toLocaleDateString('en-US', {
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

            {/* Latest Articles Section */}
            {latestPosts.length > 0 && (
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="font-['Lato'] text-2xl font-black text-black">Latest Articles</h2>
                  <div className="flex-1 h-px bg-black/10" />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {latestPosts.map((post) => (
                    <MagazineCard key={post.id} post={post} />
                  ))}
                </div>
              </section>
            )}

            {filteredPosts.length === 0 && (
              <div className="text-center py-20 bg-white rounded-2xl">
                <svg className="w-16 h-16 mx-auto mb-4 text-black/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-black/40 font-['Lato'] text-lg">
                  No articles found matching your criteria.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
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
                  Search Articles
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

              {/* Popular Tags */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-['Lato'] text-sm font-bold uppercase tracking-wider text-black/40 mb-4">
                  Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSearchQuery(tag)}
                      className={`px-3 py-1.5 text-xs font-medium font-['Lato'] rounded-full transition-all ${
                        searchQuery.toLowerCase() === tag.toLowerCase()
                          ? 'bg-[#dff140] text-black'
                          : 'bg-black/5 text-black/60 hover:bg-black/10 hover:text-black'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-['Lato'] text-sm font-bold uppercase tracking-wider text-black/40 mb-4">
                  Recent Posts
                </h3>
                <div className="space-y-4">
                  {recentPosts.map((post, index) => (
                    <Link
                      key={post.id}
                      to={`/blog/${post.slug}`}
                      className="group flex items-start gap-4"
                    >
                      <span className="flex-shrink-0 w-8 h-8 bg-black/5 rounded-full flex items-center justify-center text-sm font-bold text-black/30 font-['Lato']">
                        {index + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-['Lato'] text-sm font-semibold text-black leading-snug group-hover:text-black/70 transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <span className="text-[11px] text-black/40 font-['Lato']">
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter Sidebar */}
              <div className="bg-black rounded-2xl p-6 text-white">
                <h3 className="font-['Lato'] text-lg font-bold mb-2">
                  Subscribe to Newsletter
                </h3>
                <p className="text-white/50 text-sm font-['Lato'] mb-4">
                  Get the latest insights delivered to your inbox.
                </p>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white placeholder:text-white/30 font-['Lato'] text-sm focus:outline-none focus:border-[#dff140]/50 transition-colors mb-3"
                />
                <button className="w-full px-4 py-3 bg-[#dff140] text-black font-bold rounded-xl font-['Lato'] text-sm hover:bg-[#e8f756] transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function MagazineCard({ post }: { post: BlogPost }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
      </div>
      <div className="p-8">
        <div className="flex items-center gap-3 mb-5">
          <span className="px-4 py-2 bg-black/5 text-black/70 text-xs font-bold uppercase tracking-wider rounded-full font-['Lato']">
            {post.category}
          </span>
          <span className="text-black/30 text-xs font-['Lato']">
            {post.readTime}
          </span>
        </div>
        <h3 className="font-['Lato'] text-xl font-bold text-black mb-4 leading-snug group-hover:text-black/70 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-black/50 text-sm font-['Lato'] leading-relaxed line-clamp-3 mb-6">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between pt-5 border-t border-black/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black/10 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-black/50">{post.author.charAt(0)}</span>
            </div>
            <span className="text-xs text-black/40 font-['Lato']">
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </span>
          </div>
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
