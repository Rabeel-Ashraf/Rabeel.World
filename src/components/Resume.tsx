import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Resume = () => {
  return (
    <section id="resume" className="min-h-screen py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-neon mb-4">
            Resume
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Here’s my professional background and experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="holo-card p-4 md:p-6"
        >
          <div className="relative w-full overflow-hidden rounded-lg border border-border bg-background/50">
            {/* Embedded PDF viewer with image fallback for unsupported browsers */}
            <object
              data="/resume.pdf"
              type="application/pdf"
              aria-label="Embedded resume PDF"
              className="w-full h-72 sm:h-96 md:h-[32rem]"
            >
              <img
                src="/resume-preview.jpg"
                alt="Rabeel Ashraf resume preview image"
                loading="lazy"
                className="block w-full h-72 sm:h-96 md:h-[32rem] object-cover"
              />
            </object>
          </div>

          <div className="mt-6 flex justify-center">
            <Button asChild size="lg" className="font-orbitron font-bold bg-gradient-to-r from-primary to-secondary hover:glow-primary transition-all duration-300">
              <a href="/resume.pdf" download rel="noopener noreferrer">
                Download Resume
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
