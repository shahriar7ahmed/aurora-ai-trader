import { ArrowRight, Zap, Shield, BarChart3, Network } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Network,
      title: 'Connect Your Exchange',
      description: 'Securely link your preferred crypto exchange account via API. Your funds remain in your custody.',
      features: ['Binance', 'Coinbase', 'Kraken', 'More coming soon']
    },
    {
      icon: Zap,
      title: 'Set Up Your AI Assistant',
      description: 'Define your risk parameters and choose from our proven AI models, or let Lunexa create a custom strategy for you.',
      features: ['Risk tolerance', 'Strategy selection', 'Custom models', 'Backtesting']
    },
    {
      icon: BarChart3,
      title: 'Automate Your Trading',
      description: 'Activate your assistant and let it analyze the markets and execute trades 24/7, capturing opportunities while you sleep.',
      features: ['24/7 monitoring', 'Auto execution', 'Real-time alerts', 'Performance tracking']
    }
  ];

  return (
    <section id="how-it-works" className="relative py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="scroll-reveal text-center mb-20">
          <h2 className="mb-6">Get Started in Minutes</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Our streamlined onboarding process gets you trading with AI in three simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="scroll-reveal relative" style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-normal z-10">
                {index + 1}
              </div>

              {/* Card */}
              <div className="glass-card p-8 h-full hover:shadow-hover-lift transition-all duration-500 group">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-aurora-intense rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-background" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="mb-4 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {step.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-text-muted">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Arrow connector (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-text-muted">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 scroll-reveal" style={{ animationDelay: '0.8s' }}>
          <button className="neuro-button px-8 py-4 text-lg font-normal text-primary inline-flex items-center space-x-2 group">
            <span className="relative z-10">Start Your Free Trial</span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;