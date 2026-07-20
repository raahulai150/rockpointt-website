import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useSiteContent, SITE_DEFAULTS } from "@/hooks/useSiteContent";

const ContactSection = () => {
  const { data: site = SITE_DEFAULTS } = useSiteContent();
  const contactInfo = [
    { icon: MapPin, label: "Location", value: site.contact_location },
    { icon: Phone, label: "Phone", value: site.contact_phone },
    { icon: Mail, label: "Email", value: site.contact_email },
    { icon: Clock, label: "Working Hours", value: site.contact_hours },
  ];


  return (
    <section id="contact" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-heading font-semibold uppercase tracking-widest text-electric mb-2 block">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            Ready to discuss your manpower requirements? Reach out to us today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map(({ icon: Icon, label, value }) => {
              const isEmail = label === "Email";
              const isPhone = label === "Phone";
              const content = (
                <>
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-body">{label}</p>
                    <p className="font-medium text-foreground break-all">{value}</p>
                  </div>
                </>
              );
              if (isEmail) {
                return (
                  <a key={label} href={`mailto:${value}`} className="flex items-start gap-4 group">
                    {content}
                  </a>
                );
              }
              if (isPhone) {
                return (
                  <a key={label} href={`tel:${value.replace(/\s+/g, "")}`} className="flex items-start gap-4 group">
                    {content}
                  </a>
                );
              }
              return (
                <div key={label} className="flex items-start gap-4">
                  {content}
                </div>
              );
            })}
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-card border border-border"
          >
            <iframe
              title="Rock Point Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.6828498767!2d54.89784164!3d25.076022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
