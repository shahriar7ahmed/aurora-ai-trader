const FeaturedInSection = () => {
  const logos = [
    { name: 'CoinDesk', width: 120 },
    { name: 'Bloomberg', width: 140 },
    { name: 'TechCrunch', width: 130 },
    { name: 'Forbes', width: 100 },
    { name: 'Reuters', width: 110 },
    { name: 'WSJ', width: 80 },
  ];

  return (
    <section className="relative py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="scroll-reveal text-center">
          <h3 className="text-text-muted text-sm uppercase tracking-[0.2em] mb-12 font-light">
            As Seen On
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="opacity-30 hover:opacity-60 transition-opacity duration-300 cursor-default"
                style={{ width: logo.width }}
              >
                {/* Placeholder logo styling - in a real app you'd use actual logo images */}
                <div className="h-8 bg-text-muted rounded flex items-center justify-center">
                  <span className="text-xs font-light text-background px-3">
                    {logo.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInSection;