import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { useSiteContent, SITE_DEFAULTS } from "@/hooks/useSiteContent";


const stats = [
  { value: 500, suffix: "+", label: "Skilled Workers" },
  { value: 6, suffix: "+", label: "Years Experience" },
  { value: 60, suffix: "+", label: "Projects Completed" },
  { value: 24, suffix: "/7", label: "Support" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-heading font-bold text-accent drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
        {count}
        {suffix}
      </div>
    </div>
  );
};

const HeroSection = () => {
  const { data: content = SITE_DEFAULTS } = useSiteContent();
  return (

    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Skilled manpower supply for construction projects in Dubai, UAE"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover animate-ken-burns will-change-transform"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-sm md:text-base font-heading font-semibold uppercase tracking-[0.25em] text-accent mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
            {content.hero_company}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
            {content.hero_heading}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl font-body">
            {content.hero_subheading}
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <a href="tel:+971582603787">
              <Button
                size="lg"
                className="bg-card text-foreground font-heading font-semibold uppercase text-sm tracking-wider px-8 border-2 border-card shadow-btn hover:bg-card/90 hover:shadow-btn-hover hover:-translate-y-1 transition-all duration-300"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 border border-primary-foreground/10">
              <Counter target={stat.value} suffix={stat.suffix} />
              <p className="text-primary-foreground/70 text-sm text-center mt-1 font-body">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
