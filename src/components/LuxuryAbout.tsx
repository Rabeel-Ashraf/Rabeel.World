import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Code, Cpu, Shield, Rocket } from 'lucide-react';

const LuxuryAbout = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const timeline = [
    {
      year: '2024',
      title: 'Founder',
      company: 'Orionix Labs',
      description: 'Building AI-powered applications and platforms for the future.',
      icon: Rocket,
    },
    {
      year: '2023',
      title: 'AI Specialist',
      company: 'Independent',
      description: 'Developing machine learning and NLP solutions for businesses.',
      icon: Cpu,
    },
    {
      year: '2022',
      title: 'Safety Officer',
      company: 'Industrial Sector',
      description: 'Managing safety protocols and compliance systems.',
      icon: Shield,
    },
    {
      year: '2021',
      title: 'Mechanical Engineer',
      company: 'Engineering Firm',
      description: 'Designing mechanical systems and innovative solutions.',
      icon: Code,
    },
  ];

  const expertise = [
    'Artificial Intelligence',
    'Machine Learning',
    'Full-Stack Development',
    'System Architecture',
    'UI/UX Design',
    'Project Leadership',
  ];

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-40 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column - Bio */}
          <motion.div style={{ y, opacity }}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs tracking-[0.3em] text-primary uppercase mb-6 block"
            >
              About
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-headline text-foreground mb-8"
            >
              Engineering
              <br />
              <span className="text-shimmer">the Future</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-body text-muted-foreground mb-8 leading-relaxed"
            >
              I'm an AI Specialist and Mechanical Engineer based in Dubai, UAE. 
              My journey spans from designing physical systems to architecting 
              intelligent software that shapes how we interact with technology.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-body text-muted-foreground mb-12 leading-relaxed"
            >
              As the founder of Orionix Labs, I focus on developing practical 
              AI applications that solve real-world problems for businesses 
              across the Middle East and beyond.
            </motion.p>

            {/* Expertise tags */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              {expertise.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  className="px-4 py-2 text-sm border border-border rounded-full hover:border-primary hover:text-primary transition-colors duration-300 magnetic"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column - Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />

            <div className="space-y-12 pl-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-8 top-0 w-px h-full">
                    <div className="absolute -left-[3px] top-2 w-2 h-2 rounded-full bg-border group-hover:bg-primary transition-colors duration-300" />
                  </div>

                  {/* Year badge */}
                  <div className="inline-flex items-center gap-2 mb-3">
                    <span className="text-xs tracking-[0.2em] text-primary font-medium">
                      {item.year}
                    </span>
                    <span className="w-8 h-px bg-primary/30" />
                  </div>

                  {/* Content */}
                  <div className="luxury-card p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-primary mb-2">{item.company}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 pt-16 border-t border-border"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '4+', label: 'Years Experience' },
              { number: '10+', label: 'Projects Delivered' },
              { number: '100%', label: 'Client Satisfaction' },
              { number: '∞', label: 'Ideas to Build' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LuxuryAbout;
