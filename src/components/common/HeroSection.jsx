const HeroSection = ({ badge, title, subtitle, children }) => {
  return (
    <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white overflow-hidden min-h-[40vh] flex items-center">
      {/* Simple grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-0 -left-40 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-20 w-20 h-20 border border-white/10 rounded-xl rotate-12 hidden md:block"></div>
      <div className="absolute bottom-32 right-20 w-16 h-16 border border-white/10 rounded-full hidden md:block"></div>
      <div className="absolute top-32 right-1/4 w-8 h-8 bg-white/5 rounded-lg rotate-45 hidden md:block"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {badge && (
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-white/10 backdrop-blur-xl rounded-full text-sm font-medium border border-white/20 shadow-lg">
              {badge}
            </div>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl mb-8 text-blue-100/80 leading-relaxed max-w-2xl mx-auto font-light">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full" preserveAspectRatio="none">
          <path d="M0 120L48 108C96 96 192 72 288 60C384 48 480 48 576 54C672 60 768 72 864 78C960 84 1056 84 1152 78C1248 72 1344 60 1392 54L1440 48V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" fill="#F8FAFC"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
