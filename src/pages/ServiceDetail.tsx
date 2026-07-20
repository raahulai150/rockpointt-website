import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Phone, Mail, CheckCircle2 } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { getServiceBySlug, services } from "@/data/services";
import { SITE_DEFAULTS, useSiteContent } from "@/hooks/useSiteContent";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);
  const { data: content = SITE_DEFAULTS } = useSiteContent();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (service) {
      document.title = `${service.title} Supply in Dubai, UAE | Rock Point`;
    }
  }, [service]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <div className="flex-1 container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-heading font-bold mb-4">Service not found</h1>
          <Link to="/#services" className="text-electric hover:underline">
            Back to services
          </Link>
        </div>
        <SiteFooter />
      </div>
    );
  }

  const Icon = service.icon;
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.bg}
            alt={`${service.title} manpower supply in Dubai, UAE`}
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative container mx-auto px-4">
          <Link
            to="/#services"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors mb-6 font-body"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center shadow-btn">
                <Icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <span className="text-sm font-heading font-semibold uppercase tracking-widest text-accent">
                Manpower Supply
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
              {service.title} Supply in Dubai, UAE
            </h1>
            <p className="text-lg text-primary-foreground/80 font-body">
              {service.desc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              About Our {service.title} Manpower Service
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed">
              {service.longDesc}
            </p>

            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              {[
                "Verified & experienced workers",
                "Fast deployment across the UAE",
                "Short-term & long-term contracts",
                "Compliant with UAE labour laws",
                "Flexible daily / monthly rates",
                "On-site supervision available",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-electric flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-body text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <aside className="bg-card border border-border rounded-xl p-6 shadow-card h-fit">
            <h3 className="text-xl font-heading font-bold text-foreground mb-2">
              Request {service.title}s
            </h3>
            <p className="text-sm text-muted-foreground font-body mb-5">
              Get skilled {service.title.toLowerCase()}s on your site quickly. Contact us today.
            </p>
            <div className="space-y-3">
              <a href={`tel:${content.contact_phone.replace(/\s/g, "")}`} className="block">
                <Button className="w-full gradient-primary text-accent-foreground font-heading font-semibold uppercase tracking-wider">
                  <Phone className="w-4 h-4 mr-2" /> Call Now
                </Button>
              </a>
              <a href={`mailto:${content.contact_email}`} className="block">
                <Button variant="outline" className="w-full font-heading font-semibold uppercase tracking-wider">
                  <Mail className="w-4 h-4 mr-2" /> Email Us
                </Button>
              </a>
            </div>
            <div className="mt-6 pt-6 border-t border-border text-sm text-muted-foreground font-body">
              <p>{content.contact_location}</p>
            </div>

          </aside>
        </div>
      </section>

      {/* Other services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8 text-center">
            Other Manpower Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {others.map((s) => {
              const OIcon = s.icon;
              return (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="group flex items-center gap-3 bg-card border border-border rounded-lg p-4 hover:border-electric/50 hover:shadow-card-hover transition-all"
                >
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                    <OIcon className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <span className="font-heading font-semibold text-foreground group-hover:text-electric transition-colors">
                    {s.title}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default ServiceDetail;
