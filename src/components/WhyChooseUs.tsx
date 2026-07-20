import { motion } from "framer-motion";
import { Check } from "lucide-react";

const reasons = [
  "Skilled & Certified Workforce",
  "Immediate Deployment",
  "Competitive Pricing",
  "UAE Safety Compliance",
  "24/7 Customer Support",
  "Flexible Contracts",
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-electric/5" />
      <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-purple/5" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-heading font-semibold uppercase tracking-widest text-electric mb-2 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            The Preferred Manpower Partner in Dubai,UAE
          </h2>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto font-body">
            We set the standard for reliable, professional manpower supply in the UAE.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-5 border border-primary-foreground/10 hover:border-electric/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="text-primary-foreground font-medium font-body">
                {reason}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
