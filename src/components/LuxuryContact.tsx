import { motion } from 'framer-motion';
import { ArrowUpRight, Linkedin, Mail, Instagram, MessageCircle } from 'lucide-react';
import { openSecureLink } from '@/lib/security';

// Obfuscated email
const getEmail = () => {
  const parts = ['mrperfect6ft', 'gmail', 'com'];
  return `${parts[0]}@${parts[1]}.${parts[2]}`;
};

const LuxuryContact = () => {
  const socialLinks = [
    { 
      icon: MessageCircle, 
      label: 'WhatsApp', 
      href: 'https://wa.me/971501359046?text=Hi%20Rabeel,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you',
      external: true,
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      href: 'https://linkedin.com/in/rabeel-ashraf-721105204',
      external: true,
    },
    { 
      icon: Mail, 
      label: 'Email', 
      href: `mailto:${getEmail()}`,
      external: false,
    },
    { 
      icon: Instagram, 
      label: 'Instagram', 
      href: 'https://www.instagram.com/jupyter.me?igsh=bDZ2bjF3aWM3b3k1',
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-40 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.3em] text-primary uppercase mb-6 block"
          >
            Contact
          </motion.span>

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-headline text-foreground mb-8"
          >
            Let's Build
            <br />
            <span className="text-shimmer">Something Great</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-body text-muted-foreground mb-16 max-w-2xl"
          >
            Have a project in mind? I'm always open to discussing new opportunities, 
            creative ideas, or partnerships. Let's connect and explore what we can 
            create together.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-20"
          >
            <motion.button
              onClick={() => openSecureLink('https://wa.me/971501359046?text=Hi%20Rabeel,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you')}
              className="group inline-flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground hover:text-primary transition-colors duration-300 magnetic"
              whileHover={{ x: 10 }}
            >
              <span>Start a Conversation</span>
              <motion.div
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-300"
                whileHover={{ rotate: 45 }}
              >
                <ArrowUpRight className="w-5 h-5 group-hover:text-primary-foreground" />
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                onClick={link.external ? (e) => {
                  e.preventDefault();
                  openSecureLink(link.href);
                } : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="luxury-card p-6 flex flex-col items-center gap-3 group magnetic"
                whileHover={{ y: -4 }}
              >
                <link.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                <span className="text-sm text-foreground">{link.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-32 pt-8 border-t border-border"
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Rabeel Ashraf. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Dubai, UAE · Available Worldwide
            </p>
          </div>
        </div>
      </motion.footer>
    </section>
  );
};

export default LuxuryContact;
