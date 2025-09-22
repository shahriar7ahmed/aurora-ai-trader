import { ArrowRight } from 'lucide-react';
import mockupImage from '@/assets/crypto-dashboard-mockup.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16">
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto text-center">
        <div className="fade-in-up">
          <h1 className="mb-6 bg-gradient-to-br from-text-primary via-primary to-secondary bg-clip-text text-transparent">
            Automate Your Edge in Crypto
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
            Lunexa leverages proprietary AI to analyze market trends and execute trades 24/7. 
            Stop guessing, start growing. Welcome to the future of trading.
          </p>
          
          {/* CTA Button */}
          <div className="mb-16">
            <button className="group neuro-button px-8 py-4 text-lg font-normal text-primary inline-flex items-center space-x-2 hover:shadow-neuro-glow">
              <span className="relative z-10">Get Started For Free</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Product Mockup */}
        <div className="relative fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative inline-block">
            {/* Device Frame */}
            <div className="relative p-3 glass-card rounded-2xl glow-cyan">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={mockupImage}
                  alt="Lunexa AI Trading Dashboard"
                  className="w-full max-w-4xl h-auto float pulse-glow"
                />
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-secondary rounded-full blur-xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-text-muted text-sm uppercase tracking-wider mb-6">Trusted by 50,000+ traders worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-40">
            <div className="text-2xl font-light">$2.4B+</div>
            <div className="w-1 h-1 bg-text-muted rounded-full"></div>
            <div className="text-2xl font-light">Trading Volume</div>
            <div className="w-1 h-1 bg-text-muted rounded-full hidden md:block"></div>
            <div className="text-2xl font-light">99.9%</div>
            <div className="w-1 h-1 bg-text-muted rounded-full"></div>
            <div className="text-2xl font-light">Uptime</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-text-muted">
        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
          <div className="w-1 h-3 bg-current rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;