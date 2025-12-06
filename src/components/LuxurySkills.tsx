import { motion } from 'framer-motion';
import { useState } from 'react';
import HorizontalCarousel from './HorizontalCarousel';

const LuxurySkills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      id: 1,
      name: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
      ],
    },
    {
      id: 2,
      name: 'Backend',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'Node.js', level: 85 },
        { name: 'FastAPI', level: 90 },
        { name: 'PostgreSQL', level: 80 },
      ],
    },
    {
      id: 3,
      name: 'AI & ML',
      skills: [
        { name: 'OpenAI API', level: 95 },
        { name: 'LLMs', level: 90 },
        { name: 'NLP', level: 88 },
        { name: 'TensorFlow', level: 75 },
      ],
    },
    {
      id: 4,
      name: 'Tools',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'Figma', level: 85 },
      ],
    },
  ];

  const skillCards = skillCategories.map((category) => ({
    id: category.id,
    content: (
      <div className="luxury-card p-8 h-full">
        <h3 className="text-xs tracking-[0.3em] text-primary uppercase mb-8">
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
                <span className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">
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
              <div className="h-1 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary rounded-full"
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
    'React', 'Python', 'TypeScript', 'OpenAI', 'TensorFlow', 'Node.js', 
    'FastAPI', 'PostgreSQL', 'Docker', 'AWS', 'Tailwind', 'Next.js',
  ];

  return (
    <section id="skills" className="py-16">
      {/* Skills carousel */}
      <HorizontalCarousel
        items={skillCards}
        itemWidth={320}
        gap={24}
        title="Technical Skills"
        subtitle="Expertise"
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
              className="text-2xl md:text-3xl font-bold text-muted-foreground/20 hover:text-primary transition-colors duration-300"
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
