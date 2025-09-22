import { useEffect } from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/home/HeroSection';
import FeaturedInSection from '../components/home/FeaturedInSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import HowItWorksSection from '../components/home/HowItWorksSection';
import FeaturesSection from '../components/home/FeaturesSection';
import MissionSection from '../components/home/MissionSection';
import PricingSection from '../components/home/PricingSection';
import FAQSection from '../components/home/FAQSection';

const Index = () => {
  useEffect(() => {
    // Intersection Observer for scroll reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    // Observe all scroll-reveal elements
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <HeroSection />
      <FeaturedInSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <FeaturesSection />
      <MissionSection />
      <PricingSection />
      <FAQSection />
    </Layout>
  );
};

export default Index;
