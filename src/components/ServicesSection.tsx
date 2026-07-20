import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/data/services";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Skilled Manpower Supply Services in Dubai, UAE",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: `${service.title} Manpower Supply`,
      description: service.longDesc,
      areaServed: "AE",
      provider: {
        "@type": "Organization",
        name: "Rock Point Technical Services Co.",
      },
    },
  })),
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-heading font-semibold uppercase tracking-widest text-electric mb-2 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Comprehensive Manpower{" "}
            <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            We provide skilled, certified professionals across all technical trades to meet your project requirements.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={`/services/${service.slug}`}
                  aria-label={`View ${service.title} manpower supply details`}
                  className="group flex flex-col h-full bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover border border-border hover:border-electric/40 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-44 overflow-hidden">
                    <div
                      role="img"
                      aria-label={`${service.title} manpower supply in Dubai, UAE`}
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${service.bg})` }}
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-3 left-4 w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-btn group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                      {service.title} Supply in Dubai,UAE
                    </h3>
                    <p className="text-muted-foreground text-sm font-body leading-relaxed mb-4 flex-1">
                      {service.desc}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-electric group-hover:text-purple transition-colors self-start">
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14">
          <p className="text-[28px] font-heading font-semibold uppercase tracking-wider text-accent text-center mb-5">
            TRUSTED INTERNATIONAL RECRUITMENT PARTNER
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {["India", "Nepal", "South Africa", "Kenya", "Ethiopia"].map((country) => (
              <div
                key={country}
                className="bg-foreground/[0.06] backdrop-blur-sm rounded-lg p-4 border border-foreground/10 text-center"
              >
                <div className="text-2xl md:text-3xl font-heading font-bold text-accent">
                  {country}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
