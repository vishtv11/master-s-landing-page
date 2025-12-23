import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-taekwondo.jpg";
import logo from "@/assets/logo.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Red Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-glow opacity-50" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Logo */}
        <div className="mb-8 animate-scale-in">
          <img 
            src={logo} 
            alt="Master's Taekwondo Academy Logo" 
            className="w-40 h-40 md:w-56 md:h-56 mx-auto rounded-full border-4 border-primary/30 shadow-[0_0_60px_hsla(0,85%,50%,0.4)]"
          />
        </div>
        
        {/* Korean Text */}
        <p className="text-primary text-xl md:text-2xl font-heading tracking-widest mb-4 animate-fade-in-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
          태권도
        </p>
        
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-4 animate-fade-in-up opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
          MASTER'S{" "}
          <span className="text-primary">TAEKWON-DO</span>{" "}
          ACADEMY
        </h1>
        
        {/* Tagline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
          Discipline. Respect. Excellence. — Training champions since 1987.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
          <Button variant="hero">
            Start Your Journey
          </Button>
          <Button variant="heroOutline">
            View Programs
          </Button>
        </div>
        
        {/* Established Badge */}
        <div className="mt-12 animate-fade-in-up opacity-0" style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}>
          <span className="inline-block px-6 py-2 border border-border/50 rounded-full text-sm text-muted-foreground font-heading tracking-widest">
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
