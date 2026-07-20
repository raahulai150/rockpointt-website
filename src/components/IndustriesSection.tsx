import { motion } from "framer-motion";
import {
  Building2,
  Home,
  Fuel,
  Factory,
  Wrench,
  Landmark,
} from "lucide-react";

const industries = [
  { icon: Building2, title: "Construction" },
  { icon: Home, title: "Real Estate" },
  { icon: Fuel, title: "Oil & Gas" },
  { icon: Factory, title: "Manufacturing" },
  { icon: Wrench, title: "Facility Management" },
  { icon: Landmark, title: "Infrastructure" },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-heading font-semibold uppercase tracking-widest text-electric mb-2 block">
            Industries
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Industries We <span className="text-gradient">Serve</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            Providing specialized manpower across diverse sectors in the UAE.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group flex flex-col items-center text-center p-6 rounded-xl bg-background shadow-card hover:shadow-card-hover border border-transparent hover:border-electric/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-sm font-heading font-bold text-foreground">
                  {ind.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
