import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Is my money safe?',
      answer: 'Yes, absolutely. Lunexa never holds your funds. We connect to your exchange via read-only API keys that can only execute trades - they cannot withdraw funds. Your crypto remains in your exchange accounts under your full control. We use bank-level encryption and security protocols to protect all data.'
    },
    {
      question: 'How does the AI work?',
      answer: 'Our AI uses advanced machine learning algorithms trained on years of market data, technical indicators, and trading patterns. It continuously analyzes market conditions, news sentiment, and on-chain metrics to identify optimal entry and exit points. The system adapts to changing market conditions and learns from each trade to improve performance over time.'
    },
    {
      question: 'Which exchanges do you support?',
      answer: 'We currently support major exchanges including Binance, Coinbase Pro, Kraken, Bitfinex, and KuCoin. We\'re continuously adding support for more exchanges. Each exchange integration goes through rigorous testing to ensure reliability and security before launch.'
    },
    {
      question: 'What are the fees?',
      answer: 'Lunexa charges a simple monthly subscription fee based on your plan. There are no hidden fees, no percentage of profits, and no additional trading fees beyond what your exchange charges. You can see our transparent pricing above. We believe in simple, predictable pricing so you can focus on trading.'
    },
    {
      question: 'Can I cancel my subscription at any time?',
      answer: 'Yes, you can cancel your subscription at any time with no cancellation fees. Your AI trading will continue until the end of your current billing period. We also offer a 30-day money-back guarantee if you\'re not satisfied with the service for any reason.'
    },
    {
      question: 'What\'s the minimum amount needed to start?',
      answer: 'You can start with as little as $100, though we recommend at least $1,000 to see meaningful results and proper risk management. The AI performs better with larger amounts as it can diversify across more trading pairs and strategies. There\'s no maximum limit - our Enterprise clients trade with millions.'
    },
    {
      question: 'How much can I expect to earn?',
      answer: 'While past performance doesn\'t guarantee future results, our users typically see 15-45% annual returns. Results vary based on market conditions, your risk settings, and the amount invested. The AI is designed to be conservative and protect capital first, with growth as the secondary objective.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-32 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="scroll-reveal text-center mb-20">
          <h2 className="mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-text-secondary">
            Got questions? We've got answers. If you can't find what you're looking for, 
            our support team is always here to help.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="scroll-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass-card overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-glass-bg/5 transition-colors"
                >
                  <h3 className="text-lg font-normal text-text-primary pr-8">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-primary" />
                    ) : (
                      <Plus className="w-5 h-5 text-text-muted" />
                    )}
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ease-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6 border-t border-glass-border/50">
                    <p className="text-text-secondary leading-relaxed pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16 scroll-reveal" style={{ animationDelay: '0.8s' }}>
          <div className="glass-card p-8">
            <h3 className="mb-4">Still have questions?</h3>
            <p className="text-text-secondary mb-6">
              Our team is here to help you get started with AI-powered trading.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="neuro-button px-6 py-3 text-primary font-normal">
                <span className="relative z-10">Contact Support</span>
              </button>
              <button className="glass-card px-6 py-3 text-text-primary font-normal hover:bg-glass-bg/10 transition-colors">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;