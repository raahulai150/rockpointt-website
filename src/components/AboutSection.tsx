import { motion } from "framer-motion";
import { Shield, Clock, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutImg from "@/assets/about-team.jpg";

const highlights = [
  { icon: Shield, text: "Licensed & Insured" },
  { icon: Clock, text: "Fast Deployment" },
  { icon: Award, text: "Safety Compliant" },
  { icon: Users, text: "Client Focused" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img src={aboutImg} alt="Rock Point Technical Services team on a Dubai construction site" loading="lazy" decoding="async" className="w-full h-auto object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 gradient-primary rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-heading font-semibold uppercase tracking-widest text-electric mb-2 block">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Dubai's Trusted Manpower{" "}
              <span className="text-gradient">Partner</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Rock Point Technical Services Co. is a leading Dubai-based manpower supply company
              delivering skilled and certified workforce across the UAE. With over a decade of
              experience, we connect construction companies, facility managers, and industrial
              contractors with qualified professionals.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              Our commitment to safety compliance, rapid deployment, and competitive pricing has
              made us the preferred partner for over 100 successful projects across the Emirates.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{text}</span>
                </div>
              ))}
            </div>

            <a href="#contact">
              <Button className="gradient-primary text-accent-foreground font-heading font-semibold uppercase text-xs tracking-wider shadow-btn hover:shadow-btn-hover hover:-translate-y-0.5 transition-all duration-300">
                Learn More
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
