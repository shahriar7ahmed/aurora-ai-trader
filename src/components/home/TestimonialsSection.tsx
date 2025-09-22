import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      result: '+28.4% ROI in 30 Days',
      quote: "Lunexa's AI is uncanny. It caught the last dip perfectly. I've never had this much confidence in my portfolio.",
      name: 'J. Carter',
      location: 'Austin, TX',
      avatar: '🚀'
    },
    {
      result: '+45.2% Annual Return',
      quote: "The risk management is phenomenal. I sleep better at night knowing my trades are protected by intelligent stop-losses.",
      name: 'S. Chen',
      location: 'San Francisco, CA',
      avatar: '💎'
    },
    {
      result: '+67% Portfolio Growth',
      quote: "I've been trading for 8 years, and Lunexa's AI consistently outperforms my manual strategies. It's a game-changer.",
      name: 'M. Rodriguez',
      location: 'Miami, FL',
      avatar: '📈'
    },
    {
      result: '+52.8% YTD Returns',
      quote: "The multi-exchange support is brilliant. Managing all my accounts from one dashboard has simplified everything.",
      name: 'A. Thompson',
      location: 'London, UK',
      avatar: '🌟'
    },
    {
      result: '+91.3% Since Launch',
      quote: "Lunexa caught opportunities I would have completely missed. The 24/7 monitoring is worth every penny.",
      name: 'K. Yamamoto',
      location: 'Tokyo, Japan',
      avatar: '⚡'
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="scroll-reveal text-center mb-16">
          <h2 className="mb-4">Trusted by Traders Worldwide</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            See how our AI-powered platform is helping traders achieve consistent, profitable results.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="glass-card p-8 md:p-12 text-center">
                    {/* Result Badge */}
                    <div className="inline-flex items-center px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-8">
                      <Star className="w-4 h-4 text-primary mr-2" />
                      <span className="text-primary font-normal text-lg">
                        {testimonial.result}
                      </span>
                    </div>

                    {/* Quote */}
                    <blockquote className="text-xl md:text-2xl text-text-primary mb-8 leading-relaxed font-light">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* User Info */}
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-12 h-12 bg-aurora-intense rounded-full flex items-center justify-center text-2xl">
                        {testimonial.avatar}
                      </div>
                      <div className="text-left">
                        <div className="font-normal text-text-primary">
                          {testimonial.name}
                        </div>
                        <div className="text-text-secondary text-sm">
                          {testimonial.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 glass-card p-3 hover:bg-glass-bg/10 transition-all group"
          >
            <ChevronLeft className="w-6 h-6 text-text-secondary group-hover:text-primary transition-colors" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 glass-card p-3 hover:bg-glass-bg/10 transition-all group"
          >
            <ChevronRight className="w-6 h-6 text-text-secondary group-hover:text-primary transition-colors" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-text-muted/30 hover:bg-text-muted/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;