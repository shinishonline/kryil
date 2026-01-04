import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import type { BlogPost } from '../data/blogPosts';

const categories = ['All', 'UAV', 'Robotics', 'IoT', 'Defense', 'AI'];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const sortedPosts = [...filteredPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const featuredPost = sortedPosts[0];
  const otherPosts = sortedPosts.slice(1);

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
              Insights & Research
            </span>
            <h1 className="font-['Lato'] text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.1]">
              Blog
            </h1>
            <p className="text-white/50 text-xl md:text-2xl font-['Lato'] leading-relaxed max-w-2xl">
              Expert insights on UAV technology, robotics, IoT solutions, and defense innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-20 md:top-24 z-30 bg-white/80 backdrop-blur-xl border-b border-black/5">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          <div className="flex gap-3 py-6 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium font-['Lato'] whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-black text-white shadow-lg'
                    : 'bg-black/5 text-black/60 hover:bg-black/10 hover:text-black'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 pt-16 pb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-black/40 mb-6 font-['Lato']">Featured Article</p>
          <Link
            to={`/blog/${featuredPost.slug}`}
            className="group block"
          >
            <div className="grid lg:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-10 md:p-14 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-4 py-1.5 bg-[#dff140] text-black text-xs font-bold uppercase tracking-wider rounded-full font-['Lato']">
                    {featuredPost.category}
                  </span>
                  <span className="text-black/30 text-sm font-['Lato']">
                    {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="font-['Lato'] text-3xl md:text-4xl font-black text-black mb-6 leading-tight group-hover:text-black/70 transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-black/50 font-['Lato'] text-lg leading-relaxed mb-8">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-black/5">
                  <div className="text-sm text-black/40 font-['Lato']">
                    <span className="font-medium text-black/60">{featuredPost.author}</span>
                    <span className="mx-3">|</span>
                    <span>{new Date(featuredPost.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}</span>
                  </div>
                  <span className="text-black font-bold text-sm font-['Lato'] flex items-center gap-3 group-hover:gap-4 transition-all">
                    Read Article
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

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 py-16">
        <p className="text-xs uppercase tracking-[0.2em] text-black/40 mb-8 font-['Lato']">Latest Articles</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {otherPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-32">
            <p className="text-black/30 font-['Lato'] text-xl">
              No articles found in this category.
            </p>
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 py-24">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/60 text-xs uppercase tracking-[0.2em] mb-8 font-['Lato']">
              Newsletter
            </span>
            <h2 className="font-['Lato'] text-4xl md:text-5xl font-black mb-6 leading-tight">
              Stay Ahead of the Curve
            </h2>
            <p className="text-white/40 text-lg mb-12 font-['Lato'] leading-relaxed">
              Get weekly insights on UAV technology, robotics innovations, and defense tech delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-8 py-5 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-white/30 font-['Lato'] text-lg focus:outline-none focus:border-[#dff140]/50 transition-colors"
              />
              <button
                type="submit"
                className="px-10 py-5 bg-[#dff140] text-black font-bold rounded-full font-['Lato'] text-lg hover:bg-[#e8f756] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
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
          <span className="px-3 py-1 bg-black/5 text-black/60 text-xs font-medium uppercase tracking-wider rounded-full font-['Lato']">
            {post.category}
          </span>
          <span className="text-black/30 text-xs font-['Lato']">
            {post.readTime}
          </span>
        </div>
        <h3 className="font-['Lato'] text-xl font-bold text-black mb-4 leading-snug group-hover:text-black/70 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-black/40 text-sm font-['Lato'] leading-relaxed line-clamp-2 mb-6">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between pt-5 border-t border-black/5">
          <span className="text-xs text-black/30 font-['Lato']">
            {new Date(post.date).toLocaleDateString('en-US', {
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
