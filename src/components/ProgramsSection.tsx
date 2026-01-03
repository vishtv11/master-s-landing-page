import { Button } from "@/components/ui/button";
import { Baby, UserRound, Users, Trophy } from "lucide-react";

const programs = [
  {
    icon: Baby,
    title: "Little Tigers",
    age: "Ages 4-7",
    description: "Fun, engaging classes that build coordination, focus, and confidence through age-appropriate martial arts training.",
    features: ["Basic Stances & Kicks", "Balance & Coordination", "Discipline & Respect"],
  },
  {
    icon: UserRound,
    title: "Junior Program",
    age: "Ages 8-12",
    description: "Comprehensive Taekwon-Do curriculum teaching traditional patterns, sparring fundamentals, and self-defense techniques.",
    features: ["Traditional Patterns", "Sparring Basics", "Belt Progression"],
  },
  {
    icon: Users,
    title: "Adult Training",
    age: "Ages 13+",
    description: "Full ITF curriculum for teens and adults seeking fitness, self-defense mastery, or competitive training.",
    features: ["Advanced Techniques", "Competition Training", "Fitness & Flexibility"],
  },
  {
    icon: Trophy,
    title: "Elite Competitors",
    age: "All Ages",
    description: "Specialized training for national and international competition, including patterns, sparring, and power breaking.",
    features: ["Tournament Prep", "Advanced Sparring", "Breaking Techniques"],
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="section-padding bg-background relative overflow-x-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-gradient-glow opacity-30" />
      
      <div className="container-main relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-primary font-heading tracking-widest text-sm uppercase">Training Programs</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-foreground mt-2">
            Find Your <span className="text-primary">Path</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm sm:text-base px-2">
            From beginners taking their first steps to elite competitors seeking glory, 
            we have a program designed for every martial artist.
          </p>
        </div>
        
        {/* Programs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {programs.map((program, index) => (
            <div 
              key={program.title}
              className="group bg-gradient-card border border-border/50 rounded-xl p-4 sm:p-6 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsla(0,85%,50%,0.25)] md:hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <program.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              
              {/* Title & Age */}
              <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-1">
                {program.title}
              </h3>
              <span className="text-primary text-sm font-heading tracking-wider">
                {program.age}
              </span>
              
              {/* Description */}
              <p className="text-muted-foreground text-sm mt-3 sm:mt-4 mb-4 sm:mb-6 leading-relaxed">
                {program.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-2">
                {program.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                    <div className="w-1.5 h-1.5 flex-shrink-0 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View Full Schedule
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
