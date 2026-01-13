import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-taekwondo.jpg";
import logo from "@/assets/logo.jpeg";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-100 ease-out"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${scrollY * 0.4}px) scale(1.1)`,
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Red Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] md:w-[800px] h-[200px] sm:h-[300px] md:h-[400px] bg-gradient-glow opacity-50" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-20 sm:pt-0">
        {/* Logo */}
        <div className="mb-6 sm:mb-8 animate-scale-in">
          <img 
            src={logo} 
            alt="Master's Taekwondo Academy Logo" 
            className="w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 mx-auto rounded-full border-4 border-primary/30 shadow-[0_0_60px_hsla(0,85%,50%,0.4)] object-cover object-center"
          />
        </div>
        
        {/* Korean Text */}
        <p className="text-primary text-lg sm:text-xl md:text-2xl font-heading tracking-widest mb-3 sm:mb-4 animate-fade-in-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
          태권도
        </p>
        
        {/* Main Title */}
        <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-3 sm:mb-4 animate-fade-in-up opacity-0 leading-tight" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
          MASTER'S{" "}
          <span className="text-primary">TAEKWON-DO</span>{" "}
          <span className="block sm:inline">ACADEMY</span>
        </h1>
        
        {/* Tagline */}
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 animate-fade-in-up opacity-0 px-2" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
          Discipline. Respect. Excellence. — Training champions since 1987.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up opacity-0 px-4" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
          <a href="#contact">
            <Button variant="hero" className="w-full sm:w-auto min-h-[44px]">
              Start Your Journey
            </Button>
          </a>
          <a href="#programs">
            <Button variant="heroOutline" className="w-full sm:w-auto min-h-[44px]">
              View Programs
            </Button>
          </a>
        </div>
        
        {/* Established Badge */}
        <div className="mt-8 sm:mt-12 animate-fade-in-up opacity-0" style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}>
          <span className="inline-block px-4 sm:px-6 py-2 border border-border/50 rounded-full text-xs sm:text-sm text-muted-foreground font-heading tracking-widest">
            ESTD. 1987 • ITF TAEKWON-DO • INDIA
          </span>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
