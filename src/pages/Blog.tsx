import { useEffect } from 'react';
import Layout from '../components/Layout';
import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react';

const Blog = () => {
  useEffect(() => {
    // SEO
    document.title = 'Lunexa Blog - AI Trading Insights & Crypto Market Analysis';
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content', 
      'Stay updated with the latest insights on AI-powered crypto trading, market analysis, and trading strategies from the Lunexa team.'
    );

    // Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const featuredPost = {
    title: 'Beyond the Hype: How AI is Truly Revolutionizing Crypto Trading',
    excerpt: 'Discover the real impact of artificial intelligence on cryptocurrency trading, beyond the marketing buzzwords. We dive deep into the technical innovations that are reshaping the industry.',
    author: 'Alex Chen',
    date: 'December 15, 2024',
    readTime: '8 min read',
    category: 'AI & Technology',
    image: '🤖'
  };

  const posts = [
    {
      title: 'The Psychology of a Trader: 5 Ways Lunexa Removes Emotion from Your Strategy',
      excerpt: 'Emotional trading is the biggest enemy of consistent profits. Learn how AI eliminates fear, greed, and FOMO from your trading decisions.',
      author: 'Sarah Williams',
      date: 'December 12, 2024',
      readTime: '6 min read',
      category: 'Trading Psychology',
      image: '🧠'
    },
    {
      title: 'Security First: How We Protect Your Assets and Data at Lunexa',
      excerpt: 'An inside look at our security infrastructure, from API key management to data encryption. Your assets and privacy are our top priority.',
      author: 'Emily Zhang',
      date: 'December 10, 2024',
      readTime: '5 min read',
      category: 'Security',
      image: '🔒'
    },
    {
      title: 'From Bull to Bear: A Guide to All-Weather Crypto Investing with AI',
      excerpt: 'Market conditions change rapidly in crypto. Learn how our AI adapts strategies for different market cycles to protect and grow your portfolio.',
      author: 'Marcus Rodriguez',
      date: 'December 8, 2024',
      readTime: '7 min read',
      category: 'Market Analysis',
      image: '📊'
    },
    {
      title: 'DeFi Integration: The Future of Decentralized AI Trading',
      excerpt: 'Exploring how decentralized finance protocols are integrating with AI trading systems to create new opportunities for sophisticated investors.',
      author: 'Alex Chen',
      date: 'December 5, 2024',
      readTime: '9 min read',
      category: 'DeFi & Innovation',
      image: '🌐'
    },
    {
      title: 'Risk Management in Volatile Markets: Lessons from 2024',
      excerpt: 'A comprehensive analysis of the most effective risk management strategies during high-volatility periods, backed by real trading data.',
      author: 'Sarah Williams',
      date: 'December 3, 2024',
      readTime: '6 min read',
      category: 'Risk Management',
      image: '⚖️'
    },
    {
      title: 'The Evolution of Algorithmic Trading: From Wall Street to Crypto',
      excerpt: 'Trace the journey of algorithmic trading from traditional finance to cryptocurrency markets, and what it means for individual traders.',
      author: 'Emily Zhang',
      date: 'December 1, 2024',
      readTime: '8 min read',
      category: 'Industry History',
      image: '🏛️'
    }
  ];

  const categories = ['All Posts', 'AI & Technology', 'Trading Psychology', 'Market Analysis', 'Security', 'DeFi & Innovation', 'Risk Management'];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 lg:px-8 pt-16">
        <div className="max-w-4xl mx-auto text-center fade-in-up">
          <h1 className="mb-8">Insights & Analysis</h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            Stay ahead of the curve with expert insights on AI-powered trading, 
            market analysis, and the future of cryptocurrency.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="relative py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 text-sm font-normal rounded-full transition-all ${
                    index === 0
                      ? 'bg-primary text-primary-foreground'
                      : 'glass-card text-text-secondary hover:text-primary hover:bg-glass-bg/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="relative py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal mb-12">
            <div className="flex items-center space-x-2 mb-6">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="text-primary font-normal text-sm uppercase tracking-wider">Featured Article</span>
            </div>
          </div>

          <div className="scroll-reveal" style={{ animationDelay: '0.1s' }}>
            <div className="glass-card p-8 lg:p-12 hover:shadow-hover-lift transition-all duration-500 group cursor-pointer">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-normal rounded-full">
                      {featuredPost.category}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-text-muted">
                      <span>{featuredPost.author}</span>
                      <div className="w-1 h-1 bg-text-muted rounded-full"></div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="w-1 h-1 bg-text-muted rounded-full"></div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                <div className="flex justify-center lg:justify-end">
                  <div className="w-32 h-32 bg-aurora-intense rounded-2xl flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                    {featuredPost.image}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="relative py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal mb-12">
            <h2 className="text-center mb-6">Latest Articles</h2>
            <p className="text-xl text-text-secondary text-center max-w-3xl mx-auto">
              Deep dives into AI trading strategies, market insights, and the latest developments in crypto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <div
                key={index}
                className="scroll-reveal group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="glass-card p-6 h-full hover:shadow-hover-lift transition-all duration-500">
                  {/* Post Image */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-aurora-intense rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                      {post.image}
                    </div>
                  </div>

                  {/* Category */}
                  <div className="mb-3">
                    <span className="inline-block px-2 py-1 bg-glass-bg text-primary text-xs font-normal rounded">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>{post.author}</span>
                    <div className="flex items-center space-x-2">
                      <span>{post.date.split(',')[0]}</span>
                      <div className="w-1 h-1 bg-text-muted rounded-full"></div>
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <div className="mt-4 pt-4 border-t border-glass-border">
                    <div className="flex items-center text-primary text-sm font-normal group-hover:translate-x-1 transition-transform">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="relative py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="scroll-reveal glass-card p-12">
            <h2 className="mb-6">Stay in the Loop</h2>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Get weekly insights delivered to your inbox. No spam, just valuable content 
              about AI trading and crypto markets.
            </p>
            
            <div className="flex flex-col sm:flex-row max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-glass-bg border border-glass-border rounded-l-lg sm:rounded-r-none text-text-primary placeholder-text-muted focus:outline-none focus:border-primary"
              />
              <button className="neuro-button px-6 py-3 text-primary font-normal rounded-r-lg sm:rounded-l-none">
                <span className="relative z-10">Subscribe</span>
              </button>
            </div>

            <p className="text-xs text-text-muted mt-4">
              Join 10,000+ traders getting weekly insights. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;