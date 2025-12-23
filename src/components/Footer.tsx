import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50 py-12">
      <div className="container-main px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Info */}
          <div className="flex items-center gap-4">
            <img 
              src={logo} 
              alt="Master's Taekwondo Academy" 
              className="w-16 h-16 rounded-full border-2 border-primary/30"
            />
            <div>
              <h4 className="font-heading font-bold text-foreground text-lg">
                MASTER'S TAEKWON-DO ACADEMY
              </h4>
              <p className="text-muted-foreground text-sm">
                ITF Taekwon-Do • Est. 1987 • India
              </p>
            </div>
          </div>
          
          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm font-heading tracking-wide uppercase">
              About
            </a>
            <a href="#programs" className="text-muted-foreground hover:text-primary transition-colors text-sm font-heading tracking-wide uppercase">
              Programs
            </a>
            <a href="#benefits" className="text-muted-foreground hover:text-primary transition-colors text-sm font-heading tracking-wide uppercase">
              Benefits
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm font-heading tracking-wide uppercase">
              Contact
            </a>
          </nav>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-muted-foreground text-sm">
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
