import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/rockpoint-logo.png";
import { services } from "@/data/services";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "#about" },
  {
    label: "Services",
    href: "/#services",
    children: services.map((service) => ({
      label: service.title,
      href: `/services/${service.slug}`,
    })),
  },
  { label: "Industries", href: "#industries" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Contact Us", href: "#contact" },
];

const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-card/95 backdrop-blur-md shadow-card py-2"
        : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/#home" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Rock Point Technical Services Co. logo"
            className={`w-auto transition-all duration-300 ${scrolled ? "h-14" : "h-20 drop-shadow-lg"
              }`}
          />
        </Link>


        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              <Link
                to={link.href}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${scrolled
                  ? "text-foreground hover:text-electric"
                  : "text-primary-foreground/90 hover:text-primary-foreground"
                  }`}
              >
                {link.label}
                {link.children && <ChevronDown className="w-3 h-3" />}
              </Link>
              {link.children && (
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-card rounded-lg shadow-card-hover border border-border p-2 min-w-[200px]">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block px-3 py-2 text-sm text-foreground hover:text-electric hover:bg-secondary rounded-md transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block" />

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className={scrolled ? "text-foreground" : "text-primary-foreground"} />
          ) : (
            <Menu className={scrolled ? "text-foreground" : "text-primary-foreground"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-up">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  to={link.href}
                  onClick={() => {
                    if (!link.children) setMobileOpen(false);
                    else setServiceOpen(!serviceOpen);
                  }}
                  className="flex items-center justify-between px-3 py-3 text-sm font-medium text-foreground hover:text-electric rounded-md transition-colors"
                >
                  {link.label}
                  {link.children && <ChevronDown className={`w-4 h-4 transition-transform ${serviceOpen ? "rotate-180" : ""}`} />}
                </Link>
                {link.children && serviceOpen && (
                  <div className="pl-4">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-electric transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
