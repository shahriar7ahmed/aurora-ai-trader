import { useEffect } from 'react';
import Layout from '../components/Layout';
import { Linkedin, Twitter } from 'lucide-react';

const About = () => {
  useEffect(() => {
    // SEO
    document.title = 'About Lunexa - AI-Powered Crypto Trading Platform';
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content', 
      'Learn about Lunexa\'s mission to democratize sophisticated financial tools through AI. Meet our team and discover our vision for the future of crypto trading.'
    );

    // Intersection Observer for scroll animations
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

  const team = [
    {
      name: 'Alex Chen',
      title: 'CEO & Co-Founder',
      bio: 'Former Goldman Sachs quantitative analyst with 12 years in algorithmic trading.',
      avatar: '👨‍💼',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Sarah Williams',
      title: 'CTO & Co-Founder',
      bio: 'Ex-Google AI researcher specializing in machine learning and financial modeling.',
      avatar: '👩‍💻',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Marcus Rodriguez',
      title: 'Head of AI',
      bio: 'PhD in Computer Science from MIT, published researcher in algorithmic trading systems.',
      avatar: '🧠',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Emily Zhang',
      title: 'VP of Engineering',
      bio: 'Former lead engineer at Coinbase, expert in crypto exchange integrations.',
      avatar: '⚡',
      linkedin: '#',
      twitter: '#'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16">
        <div className="max-w-4xl mx-auto text-center fade-in-up">
          <h1 className="mb-8 bg-gradient-to-br from-text-primary via-primary to-secondary bg-clip-text text-transparent">
            We are building the future of finance
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
            Lunexa was born from a simple belief: sophisticated financial tools shouldn't be 
            exclusive to Wall Street. We're democratizing AI-powered trading for everyone.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="relative py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-reveal">
              <h2 className="mb-8">Our Story</h2>
              <div className="space-y-6 text-text-secondary leading-relaxed">
                <p>
                  In 2023, our founders Alex and Sarah were working at traditional finance firms, 
                  watching AI transform trading floors while individual investors remained locked out 
                  of these powerful tools.
                </p>
                <p>
                  They saw crypto as the perfect opportunity to level the playing field. Unlike traditional 
                  markets with their gatekeepers and barriers, crypto operates 24/7 and welcomes anyone 
                  with an internet connection.
                </p>
                <p>
                  After months of research and development, Lunexa was launched with a mission: 
                  to give every trader access to institutional-grade AI technology, regardless of 
                  their background or portfolio size.
                </p>
              </div>
            </div>

            <div className="scroll-reveal" style={{ animationDelay: '0.2s' }}>
              <div className="glass-card p-8 text-center">
                <h3 className="mb-6">Our Journey</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-normal">2023</span>
                    <span className="text-text-secondary">Company Founded</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-normal">50K+</span>
                    <span className="text-text-secondary">Active Users</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-normal">$2.4B+</span>
                    <span className="text-text-secondary">Trading Volume</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-normal">127</span>
                    <span className="text-text-secondary">Countries</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="relative py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="scroll-reveal">
            <h2 className="mb-8">Our Vision</h2>
            <div className="text-xl text-text-secondary leading-relaxed space-y-6">
              <p>
                We envision a world where financial success isn't determined by who you know 
                or where you went to school, but by your willingness to learn and adapt.
              </p>
              <p>
                Through AI, we're breaking down the barriers that have kept sophisticated trading 
                strategies in the hands of the few. We're building tools that are not just powerful, 
                but accessible, transparent, and designed with the individual investor in mind.
              </p>
              <p className="text-text-primary font-normal">
                The future of finance is decentralized, intelligent, and inclusive. 
                We're here to make that future a reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="relative py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal text-center mb-20">
            <h2 className="mb-6">Meet the Team</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Our diverse team brings together expertise from Wall Street, Silicon Valley, 
              and the crypto industry to build the future of trading.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="scroll-reveal group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="glass-card p-6 text-center hover:shadow-hover-lift transition-all duration-500">
                  {/* Avatar */}
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-aurora-intense rounded-full flex items-center justify-center text-4xl mx-auto group-hover:scale-110 transition-transform duration-300">
                      {member.avatar}
                    </div>
                  </div>

                  {/* Info */}
                  <h3 className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-primary text-sm mb-4 font-normal">
                    {member.title}
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    <a 
                      href={member.linkedin}
                      className="text-text-muted hover:text-primary transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href={member.twitter}
                      className="text-text-muted hover:text-primary transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="scroll-reveal glass-card p-12">
            <h2 className="mb-6">Join Us on This Journey</h2>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Whether you're a seasoned trader or just getting started, we're here to help you 
              harness the power of AI for smarter, more profitable trading.
            </p>
            <button className="neuro-button px-8 py-4 text-lg font-normal text-primary">
              <span className="relative z-10">Start Trading with AI</span>
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;