import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-background relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-glow opacity-20" />
      
      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - CTA */}
          <div>
            <span className="text-primary font-heading tracking-widest text-sm uppercase">Join Us Today</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-2 mb-6">
              Begin Your <span className="text-primary">Martial Arts</span> Journey
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Take the first step toward a stronger body, sharper mind, and unbreakable spirit. 
              Contact us for a free trial class and discover the transformative power of Taekwon-Do.
            </p>
            
            <Button variant="hero" className="mb-12">
              Book Free Trial Class
            </Button>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-semibold">Location</p>
                  <p className="text-muted-foreground text-sm">Master's Taekwon-Do Academy, India</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-semibold">Phone</p>
                  <p className="text-muted-foreground text-sm">Contact us for details</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-semibold">Email</p>
                  <p className="text-muted-foreground text-sm">info@masterstaekwondo.in</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-semibold">Training Hours</p>
                  <p className="text-muted-foreground text-sm">Mon-Sat: 6:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Contact Form */}
          <div className="bg-gradient-card border border-border/50 rounded-2xl p-8">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
              Send Us a Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your Phone"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Program Interest</label>
                <select className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-muted-foreground">
                  <option value="">Select a program</option>
                  <option value="little-tigers">Little Tigers (Ages 4-7)</option>
                  <option value="junior">Junior Program (Ages 8-12)</option>
                  <option value="adult">Adult Training (Ages 13+)</option>
                  <option value="elite">Elite Competitors</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your goals..."
                />
              </div>
              
              <Button variant="default" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
