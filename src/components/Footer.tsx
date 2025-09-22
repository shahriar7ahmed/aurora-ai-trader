import { Link } from 'react-router-dom';
import { Zap, Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-10 glass-card border-t border-glass-border mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 text-xl font-normal tracking-tight">
              <div className="w-8 h-8 bg-aurora-intense rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-background" />
              </div>
              <span>Lunexa</span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed">
              Democratizing sophisticated financial tools through artificial intelligence.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-text-muted hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-text-muted hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-text-muted hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-text-muted hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-normal text-text-primary mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-text-secondary hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-text-secondary hover:text-primary transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-text-secondary hover:text-primary transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-normal text-text-primary mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-text-secondary hover:text-primary transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-text-secondary hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-text-secondary hover:text-primary transition-colors text-sm">
                  Security
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-normal text-text-primary mb-4">Stay Updated</h4>
            <p className="text-text-secondary text-sm mb-4">
              Get the latest updates on AI trading strategies and market insights.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-glass-bg border border-glass-border rounded-l-lg text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-primary"
              />
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-r-lg hover:bg-primary/90 transition-colors text-sm font-normal">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-glass-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-muted text-sm">
              © 2025 Lunexa Labs, Inc. All rights reserved.
            </p>
            <p className="text-text-muted text-sm mt-2 md:mt-0">
              Built with 🚀 by the Lunexa team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;