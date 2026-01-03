import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50 py-8 sm:py-12">
      <div className="container-main px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Logo & Info */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
            <img 
              src={logo} 
              alt="Master's Taekwondo Academy" 
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-primary/30"
            />
            <div>
              <h4 className="font-heading font-bold text-foreground text-base sm:text-lg">
                MASTER'S TAEKWON-DO ACADEMY
              </h4>
              <p className="text-muted-foreground text-xs sm:text-sm">
                ITF Taekwon-Do • Est. 1987 • India
              </p>
            </div>
          </div>
          
          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm font-heading tracking-wide uppercase min-h-[44px] flex items-center">
              About
            </a>
            <a href="#programs" className="text-muted-foreground hover:text-primary transition-colors text-sm font-heading tracking-wide uppercase min-h-[44px] flex items-center">
              Programs
            </a>
            <a href="#benefits" className="text-muted-foreground hover:text-primary transition-colors text-sm font-heading tracking-wide uppercase min-h-[44px] flex items-center">
              Benefits
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm font-heading tracking-wide uppercase min-h-[44px] flex items-center">
              Contact
            </a>
          </nav>
        </div>
        
        {/* Copyright */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border/30 text-center">
          <p className="text-muted-foreground text-xs sm:text-sm">
            © {new Date().getFullYear()} Master's Taekwon-Do Academy. All rights reserved.
          </p>
          <p className="text-primary/70 text-xs mt-2 font-heading tracking-widest">
            태권도 — THE WAY OF THE FOOT AND FIST
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
