import { Facebook, Instagram, Linkedin, Twitter, ArrowUp } from "lucide-react";
import logo from "@/assets/rockpoint-logo.png";

const quickLinks = ["Home", "About Us", "Services", "Industries", "Why Choose Us", "Contact Us"];
const serviceLinks = ["Mason", "Electrician", "Steel Fixer", "Shuttering Carpenter", "Welder", "Plumber", "Painter", "Gypsum Carpenter", "AC Technician"];

const SiteFooter = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img
                src={logo}
                alt="Rock Point Technical Services Co. logo"
                loading="lazy"
                decoding="async"
                className="h-16 w-auto bg-card/95 rounded-lg p-2"
              />
            </div>
            <p className="text-primary-foreground/60 text-sm font-body leading-relaxed mb-6">
              Dubai's trusted manpower supply partner providing skilled, certified workforce for construction, industrial, and facility management sectors.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-electric/20 transition-colors"
                >
                  <Icon className="w-4 h-4 text-primary-foreground/70" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-primary-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, "-")}`} className="text-sm text-primary-foreground/60 hover:text-electric transition-colors font-body">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-primary-foreground">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a href="#services" className="text-sm text-primary-foreground/60 hover:text-electric transition-colors font-body">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-primary-foreground">Contact Info</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60 font-body">
              <li>📍 Dubai, UAE</li>
              <li>📞 +971 58 260 3787</li>
              <li className="break-all">
                📧 <a href="mailto:rockpointtechservices.dubai@gmail.com" className="hover:text-electric transition-colors">rockpointtechservices.dubai@gmail.com</a>
              </li>
              <li>🕒 Mon–Sat: 9AM–6PM</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40 font-body">
            © 2025 Rock Point Technical Services Co. All rights reserved. · Since 2024
          </p>
          <div className="flex gap-6 text-xs text-primary-foreground/40 font-body">
            <a href="#" className="hover:text-electric transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-electric transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-20 right-6 w-10 h-10 rounded-full gradient-primary flex items-center justify-center shadow-btn hover:shadow-btn-hover transition-all z-40"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5 text-accent-foreground" />
      </button>
    </footer>
  );
};

export default SiteFooter;
