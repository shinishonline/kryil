import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import type { BlogPost } from '../data/blogPosts';

const categories = ['All', 'UAV', 'Robotics', 'IoT', 'Defense', 'AI', 'Industry News'];

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
      <section className="relative bg-black text-white pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-[#dff140] text-sm uppercase tracking-[0.2em] mb-4 font-['Lato']">
            Insights & Updates
          </p>
          <h1 className="font-['Lato'] text-4xl md:text-6xl font-black tracking-tight mb-6">
            Blog & News
          </h1>
          <p className="text-white/60 text-lg max-w-2xl font-['Lato']">
            Stay informed with the latest developments in UAV technology, robotics, IoT solutions,
            and defense innovation from Kryil Infotech.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-20 md:top-24 z-30 bg-[#f1f0ea] border-b border-black/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex gap-2 py-4 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-['Lato'] whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-white text-black/60 hover:bg-black/5 hover:text-black'
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
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <Link
            to={`/blog/${featuredPost.slug}`}
            className="group block"
          >
            <div className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-[#dff140] text-black text-xs font-semibold rounded-full font-['Lato']">
                    {featuredPost.category}
                  </span>
                  <span className="text-black/40 text-sm font-['Lato']">
                    {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="font-['Lato'] text-2xl md:text-3xl font-bold text-black mb-4 group-hover:text-black/80 transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-black/60 font-['Lato'] leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-black/40 font-['Lato']">
                    <span>{featuredPost.author}</span>
                    <span className="mx-2">•</span>
                    <span>{new Date(featuredPost.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}</span>
                  </div>
                  <span className="text-black font-semibold text-sm font-['Lato'] flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read More
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-black/40 font-['Lato'] text-lg">
              No posts found in this category.
            </p>
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-['Lato'] text-3xl md:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-white/60 mb-8 font-['Lato']">
            Subscribe to our newsletter for the latest insights on UAV technology,
            robotics, and defense innovation.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-white/40 font-['Lato'] focus:outline-none focus:border-[#dff140]"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-[#dff140] text-black font-semibold rounded-full font-['Lato'] hover:bg-[#e8f756] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="px-2 py-1 bg-black/5 text-black/70 text-xs font-medium rounded font-['Lato']">
            {post.category}
          </span>
          <span className="text-black/40 text-xs font-['Lato']">
            {post.readTime}
          </span>
        </div>
        <h3 className="font-['Lato'] text-lg font-bold text-black mb-2 group-hover:text-black/80 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-black/50 text-sm font-['Lato'] leading-relaxed line-clamp-2 mb-4">
          {post.excerpt}
        </p>
        <div className="text-xs text-black/40 font-['Lato']">
          {new Date(post.date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          })}
        </div>
      </div>
    </Link>
  );
}
