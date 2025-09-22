const MissionSection = () => {
  return (
    <section className="relative py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Background Orb */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 bg-aurora-intense rounded-full blur-3xl opacity-10 pulse-glow"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center max-w-4xl mx-auto scroll-reveal">
            <h2 className="mb-8">Our Mission</h2>
            <div className="text-xl md:text-2xl text-text-secondary leading-relaxed space-y-6">
              <p>
                We built Lunexa to democratize access to sophisticated financial tools. 
                The world of cryptocurrency is complex and volatile.
              </p>
              <p>
                Our mission is to empower individual investors with the power of artificial intelligence, 
                making profitable, data-driven trading accessible, transparent, and effortless for everyone.
              </p>
              <p className="text-text-primary font-normal">
                Because everyone deserves a fair shot at financial freedom.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-light text-primary mb-2">50,000+</div>
                <div className="text-text-muted text-sm uppercase tracking-wider">Active Traders</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-light text-primary mb-2">$2.4B+</div>
                <div className="text-text-muted text-sm uppercase tracking-wider">Trading Volume</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-light text-primary mb-2">127</div>
                <div className="text-text-muted text-sm uppercase tracking-wider">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;