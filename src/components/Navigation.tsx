import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { href: '#how-it-works', label: 'How it Works' },
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#faq', label: 'FAQ' },
  ];

  const pageLinks = [
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <>
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-card border-b border-glass-border backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-2 text-xl font-normal tracking-tight hover:text-primary transition-colors"
            >
              <div className="w-8 h-8 bg-aurora-intense rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-background" />
              </div>
              <span>Lunexa</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {location.pathname === '/' ? (
                // Home page - scroll anchors
                <>
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-text-secondary hover:text-primary transition-colors font-normal"
                    >
                      {link.label}
                    </a>
                  ))}
                </>
              ) : (
                // Other pages - regular links
                <>
                  <Link
                    to="/"
                    className="text-text-secondary hover:text-primary transition-colors font-normal"
                  >
                    Home
                  </Link>
                  {pageLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={`transition-colors font-normal ${
                        location.pathname === link.href
                          ? 'text-primary'
                          : 'text-text-secondary hover:text-primary'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </>
              )}
            </div>

            {/* Get Started Button */}
            <div className="hidden lg:block">
              <button className="neuro-button px-6 py-2.5 text-sm font-normal text-primary relative z-10">
                <span className="relative z-10">Get Started For Free</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-text-secondary hover:text-primary transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />
        <div
          className={`absolute right-0 top-0 h-full w-80 glass-card border-l border-glass-border transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-20 px-6">
            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-6">
              {location.pathname === '/' ? (
                <>
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-lg text-text-secondary hover:text-primary transition-colors font-light"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                </>
              ) : (
                <>
                  <Link
                    to="/"
                    className="text-lg text-text-secondary hover:text-primary transition-colors font-light"
                  >
                    Home
                  </Link>
                  {pageLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={`text-lg transition-colors font-light ${
                        location.pathname === link.href
                          ? 'text-primary'
                          : 'text-text-secondary hover:text-primary'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </>
              )}
            </div>

            {/* Mobile CTA Button */}
            <div className="mt-8">
              <button className="neuro-button w-full py-3 text-sm font-normal text-primary">
                <span className="relative z-10">Get Started For Free</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
