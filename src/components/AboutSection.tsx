import { Shield, Award, Users, Target } from "lucide-react";

const stats = [
  { value: "37+", label: "Years of Excellence", icon: Award },
  { value: "5000+", label: "Students Trained", icon: Users },
  { value: "100+", label: "National Medals", icon: Shield },
  { value: "ITF", label: "Certified Academy", icon: Target },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>
      
      <div className="container-main relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-heading tracking-widest text-sm uppercase">About Us</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-2">
            The Art of <span className="text-primary">Discipline</span>
          </h2>
        </div>
        
        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in 1987, <strong className="text-foreground">Master's Taekwon-Do Academy</strong> has been 
              a beacon of traditional ITF Taekwon-Do training in India. We are dedicated to preserving the 
              authentic art of Taekwon-Do while nurturing the next generation of martial artists.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our academy follows the original teachings of General Choi Hong Hi, focusing on the five 
              tenets of Taekwon-Do: <span className="text-primary font-semibold">Courtesy, Integrity, 
              Perseverance, Self-Control, and Indomitable Spirit</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're a complete beginner or an experienced martial artist, we provide personalized 
              training to help you achieve your goals—be it fitness, self-defense, or competitive excellence.
            </p>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="bg-gradient-card p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsla(0,85%,50%,0.2)] group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-heading tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
