import { Brain, Shield, PieChart, Plug } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: 'Adaptive AI Strategy',
      description: 'Our AI continuously learns and adapts to changing market conditions, ensuring your strategy is never outdated.',
      highlights: ['Machine learning algorithms', 'Market pattern recognition', 'Continuous optimization', 'Real-time adaptation']
    },
    {
      icon: Shield,
      title: 'Advanced Risk Management',
      description: 'Implement automated stop-loss, take-profit, and portfolio balancing rules to protect your capital.',
      highlights: ['Smart stop-losses', 'Portfolio balancing', 'Risk assessment', 'Capital protection']
    },
    {
      icon: PieChart,
      title: 'Real-Time Portfolio Analytics',
      description: 'A beautiful, intuitive dashboard gives you a transparent, real-time view of your performance and assets.',
      highlights: ['Live performance metrics', 'Detailed analytics', 'Custom reporting', 'Mobile access']
    },
    {
      icon: Plug,
      title: 'Multi-Exchange Support',
      description: 'Connect and manage all your exchange accounts from one powerful, unified interface.',
      highlights: ['Multiple exchanges', 'Unified interface', 'Cross-platform trading', 'Secure API integration']
    }
  ];

  return (
    <section id="features" className="relative py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="scroll-reveal text-center mb-20">
          <h2 className="mb-6">An Unfair Advantage</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Powerful features designed to give you the edge in crypto trading, 
            backed by cutting-edge artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="scroll-reveal group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="glass-card p-8 h-full hover:shadow-hover-lift transition-all duration-500 relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-aurora opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-aurora-intense rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 glow-cyan">
                      <feature.icon className="w-8 h-8 text-background" />
                    </div>
                  </div>

                  {/* Title and Description */}
                  <h3 className="mb-4 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-3">
                    {feature.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center text-sm text-text-muted">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating decoration */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 scroll-reveal" style={{ animationDelay: '0.8s' }}>
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="mb-4">Ready to experience the future?</h3>
            <p className="text-text-secondary mb-6">
              Join thousands of traders who are already using AI to maximize their crypto returns.
            </p>
            <button className="neuro-button px-6 py-3 text-primary font-normal">
              <span className="relative z-10">Explore All Features</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;