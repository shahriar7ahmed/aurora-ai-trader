import { Check, Star, ArrowRight } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Free',
      description: 'For newcomers starting their journey',
      price: '$0',
      period: 'forever',
      isRecommended: false,
      features: [
        'Connect 1 Exchange',
        '$1,000 Trading Volume Limit',
        'Basic AI Strategies',
        'Community Support',
        'Basic Analytics'
      ],
      buttonText: 'Start Now',
      buttonVariant: 'secondary'
    },
    {
      name: 'Pro',
      description: 'For active traders who need more power',
      price: '$49',
      period: 'per month',
      isRecommended: true,
      features: [
        'Everything in Free, plus:',
        'Connect up to 5 Exchanges',
        '$100,000 Trading Volume Limit',
        'Advanced AI & Custom Strategies',
        'Priority Email Support',
        'Advanced Analytics',
        'Mobile App Access'
      ],
      buttonText: 'Upgrade to Pro',
      buttonVariant: 'primary'
    },
    {
      name: 'Enterprise',
      description: 'For funds, institutions, and high-volume traders',
      price: 'Custom',
      period: 'contact sales',
      isRecommended: false,
      features: [
        'Everything in Pro, plus:',
        'Unlimited Exchanges & Volume',
        'API Access & Custom Integrations',
        'Dedicated Account Manager',
        'On-chain Analytics',
        'White-label Solutions',
        'Custom AI Model Training'
      ],
      buttonText: 'Contact Sales',
      buttonVariant: 'secondary'
    }
  ];

  return (
    <section id="pricing" className="relative py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="scroll-reveal text-center mb-20">
          <h2 className="mb-6">Find the Perfect Plan</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Choose the plan that fits your trading goals. Scale up as your portfolio grows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`scroll-reveal relative ${
                plan.isRecommended ? 'lg:-translate-y-4' : ''
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Recommended Badge */}
              {plan.isRecommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-normal glow-cyan">
                    <Star className="w-4 h-4 mr-2" />
                    Recommended
                  </div>
                </div>
              )}

              {/* Card */}
              <div className={`glass-card p-8 h-full hover:shadow-hover-lift transition-all duration-500 group ${
                plan.isRecommended ? 'border-primary/30' : ''
              }`}>
                {/* Background Glow for Recommended */}
                {plan.isRecommended && (
                  <div className="absolute inset-0 bg-aurora opacity-10 rounded-2xl"></div>
                )}

                <div className="relative z-10">
                  {/* Plan Header */}
                  <div className="mb-8">
                    <h3 className="text-2xl mb-2 group-hover:text-primary transition-colors">
                      {plan.name}
                    </h3>
                    <p className="text-text-secondary text-sm mb-6">
                      {plan.description}
                    </p>
                    
                    {/* Price */}
                    <div className="flex items-baseline">
                      <span className="text-4xl font-light text-text-primary">
                        {plan.price}
                      </span>
                      <span className="text-text-muted ml-2">
                        /{plan.period}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span className={`text-sm ${
                          feature.startsWith('Everything') 
                            ? 'text-text-primary font-normal' 
                            : 'text-text-secondary'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className={`w-full py-3 font-normal transition-all duration-300 group/btn ${
                    plan.buttonVariant === 'primary'
                      ? 'neuro-button text-primary'
                      : 'glass-card hover:bg-glass-bg/10 text-text-primary'
                  }`}>
                    <span className="relative z-10 flex items-center justify-center">
                      {plan.buttonText}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-16 scroll-reveal" style={{ animationDelay: '0.6s' }}>
          <div className="glass-card p-6 max-w-2xl mx-auto">
            <p className="text-text-secondary mb-4">
              All plans include bank-level security, 99.9% uptime guarantee, and the ability to cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-text-muted">
              <span>✓ No setup fees</span>
              <span>✓ Cancel anytime</span>
              <span>✓ 30-day money back guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;