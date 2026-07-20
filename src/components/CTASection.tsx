import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-28 gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(250_100%_62%/0.3),transparent_60%)]" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-accent-foreground mb-6">
            Need Skilled Manpower for Your Project?
          </h2>
          <p className="text-accent-foreground/80 text-lg max-w-2xl mx-auto mb-10 font-body">
            Get certified technicians deployed to your site within 24 hours. Contact us for a free consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+971582603787">
              <Button
                size="lg"
                variant="outline"
                className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 font-heading font-semibold uppercase text-sm tracking-wider px-8 transition-all duration-300 hover:-translate-y-1"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
