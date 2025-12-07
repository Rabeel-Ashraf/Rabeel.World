import { motion } from 'framer-motion';
import { useState } from 'react';
import HorizontalCarousel from './HorizontalCarousel';

const LuxurySkills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      id: 1,
      name: 'frontend',
      skills: [
        { name: 'react', level: 95 },
        { name: 'next.js', level: 90 },
        { name: 'typescript', level: 85 },
        { name: 'tailwind css', level: 95 },
      ],
    },
    {
      id: 2,
      name: 'backend',
      skills: [
        { name: 'python', level: 95 },
        { name: 'node.js', level: 85 },
        { name: 'fastapi', level: 90 },
        { name: 'postgresql', level: 80 },
      ],
    },
    {
      id: 3,
      name: 'ai & ml',
      skills: [
        { name: 'openai api', level: 95 },
        { name: 'llms', level: 90 },
        { name: 'nlp', level: 88 },
        { name: 'tensorflow', level: 75 },
      ],
    },
    {
      id: 4,
      name: 'tools',
      skills: [
        { name: 'git', level: 95 },
        { name: 'docker', level: 80 },
        { name: 'aws', level: 75 },
        { name: 'figma', level: 85 },
      ],
    },
  ];

  const skillCards = skillCategories.map((category) => ({
    id: category.id,
    content: (
      <div className="luxury-card p-8 h-full">
        <h3 className="text-eyebrow mb-8">
          {category.name}
        </h3>

        <div className="space-y-6">
          {category.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-foreground font-medium group-hover:text-foreground/80 transition-colors duration-300 lowercase">
                  {skill.name}
                </span>
                <motion.span
                  className="text-sm text-muted-foreground"
                  animate={{ 
                    opacity: hoveredSkill === skill.name ? 1 : 0.5,
                    scale: hoveredSkill === skill.name ? 1.1 : 1,
                  }}
                >
                  {skill.level}%
                </motion.span>
              </div>

              {/* Progress bar */}
              <div className="h-px bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-foreground rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  }));

  // Tech marquee
  const technologies = [
    'react', 'python', 'typescript', 'openai', 'tensorflow', 'node.js', 
    'fastapi', 'postgresql', 'docker', 'aws', 'tailwind', 'next.js',
  ];

  return (
    <section id="skills" className="py-16">
      {/* Skills carousel */}
      <HorizontalCarousel
        items={skillCards}
        itemWidth={320}
        gap={24}
        title="technical skills"
        subtitle="expertise"
      />

      {/* Marquee */}
      <div className="mt-24 overflow-hidden border-y border-border py-6">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: [0, '-50%'] }}
          transition={{ 
            repeat: Infinity, 
            duration: 20, 
            ease: 'linear',
          }}
        >
          {[...technologies, ...technologies].map((tech, index) => (
            <span
              key={index}
              className="text-2xl md:text-3xl font-bold text-muted-foreground/15 hover:text-foreground/50 transition-colors duration-300 lowercase"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LuxurySkills;