import { motion } from "framer-motion";
import { Linkedin, Mail, Phone } from "lucide-react";
import { useTeamMembers } from "@/hooks/useTeamMembers";

const TeamSection = () => {
  const { data: teamMembers = [] } = useTeamMembers();

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-heading font-semibold uppercase tracking-widest text-accent">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            Meet Our <span className="text-primary">Expert Staff</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4 font-body">
            Our leadership team brings decades of experience in manpower supply, construction management, and workforce development across the UAE.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-border/50 hover:border-primary/30">
                {/* Photo */}
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img
                    src={member.image_url}
                    alt={`${member.name} – ${member.role} at Rock Point Technical Services`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Social overlay */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-primary-foreground/90 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-primary-foreground/90 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-primary-foreground/90 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 text-center">
                  <h3 className="text-lg font-heading font-bold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm text-accent font-semibold font-body mt-1">
                    {member.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
