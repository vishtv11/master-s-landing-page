import { Zap, Heart, Brain, ShieldCheck, Flame, Medal } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Physical Fitness",
    description: "Build strength, flexibility, and endurance through dynamic training.",
  },
  {
    icon: Brain,
    title: "Mental Discipline",
    description: "Develop focus, concentration, and a resilient mindset.",
  },
  {
    icon: ShieldCheck,
    title: "Self-Defense",
    description: "Learn practical techniques to protect yourself and loved ones.",
  },
  {
    icon: Heart,
    title: "Confidence",
    description: "Gain self-assurance through achievement and mastery.",
  },
  {
    icon: Flame,
    title: "Stress Relief",
    description: "Channel energy positively and reduce daily stress.",
  },
  {
    icon: Medal,
    title: "Goal Achievement",
    description: "Progress through belt ranks and celebrate milestones.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="section-padding bg-card relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-heading tracking-widest text-sm uppercase">Why Taekwon-Do</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-2">
            Transform Your <span className="text-primary">Life</span>
          </h2>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="flex gap-4 group"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              
              {/* Content */}
              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
