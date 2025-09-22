import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    // SEO
    document.title = 'Contact Lunexa - Get in Touch with Our Team';
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content', 
      'Have questions about AI-powered crypto trading? Contact Lunexa\'s team for support, partnerships, or general inquiries. We\'re here to help.'
    );

    // Intersection Observer for animations
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      info: 'hello@lunexa.com',
      description: 'Get in touch for general inquiries'
    },
    {
      icon: Mail,
      title: 'Support',
      info: 'support@lunexa.com',
      description: 'Technical support and account help'
    },
    {
      icon: MapPin,
      title: 'Location',
      info: 'San Francisco, CA',
      description: 'Our headquarters in the heart of fintech'
    },
    {
      icon: Clock,
      title: 'Response Time',
      info: '< 24 hours',
      description: 'We respond to all inquiries quickly'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 lg:px-8 pt-16">
        <div className="max-w-4xl mx-auto text-center fade-in-up">
          <h1 className="mb-8">Get in Touch</h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            Have a question or a proposal? We'd love to hear from you. 
            Our team is here to help you succeed with AI-powered trading.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div className="scroll-reveal">
              <div className="space-y-8">
                <div>
                  <h2 className="mb-6">Let's Start a Conversation</h2>
                  <p className="text-text-secondary leading-relaxed mb-8">
                    Whether you're looking for support, interested in partnerships, or just want to learn more 
                    about our AI trading platform, we're here to help. Reach out through any of the channels below.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="glass-card p-6 group hover:shadow-hover-lift transition-all duration-300">
                      <div className="mb-4">
                        <div className="w-12 h-12 bg-aurora-intense rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <item.icon className="w-6 h-6 text-background" />
                        </div>
                      </div>
                      <h3 className="text-lg mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <div className="text-primary font-normal mb-2">
                        {item.info}
                      </div>
                      <p className="text-text-muted text-sm">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Additional Info */}
                <div className="glass-card p-6">
                  <h3 className="mb-4">Office Hours</h3>
                  <div className="space-y-2 text-text-secondary">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM PST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Weekend</span>
                      <span>Limited Support</span>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-glass-bg rounded-lg border border-glass-border">
                    <p className="text-sm text-text-muted">
                      Our AI systems monitor markets 24/7, but human support is available during business hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="scroll-reveal" style={{ animationDelay: '0.2s' }}>
              <div className="glass-card p-8">
                <h3 className="mb-6">Send us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-normal text-text-primary mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-glass-bg border border-glass-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-normal text-text-primary mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-glass-bg border border-glass-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-primary transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-normal text-text-primary mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-glass-bg border border-glass-border rounded-lg text-text-primary focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="">Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="enterprise">Enterprise Solutions</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-normal text-text-primary mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-glass-bg border border-glass-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Tell us about your question or how we can help..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full neuro-button py-4 text-primary font-normal group"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Send Message
                      <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </form>

                {/* Privacy Note */}
                <div className="mt-6 p-4 bg-glass-bg rounded-lg border border-glass-border">
                  <p className="text-xs text-text-muted">
                    We respect your privacy. Your information will only be used to respond to your inquiry and will never be shared with third parties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Access */}
      <section className="relative py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="scroll-reveal glass-card p-8">
            <h2 className="mb-4">Quick Answers</h2>
            <p className="text-text-secondary mb-6">
              Looking for immediate help? Check our FAQ section for answers to common questions.
            </p>
            <button className="glass-card px-6 py-3 text-text-primary font-normal hover:bg-glass-bg/10 transition-colors">
              Visit FAQ Section
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;