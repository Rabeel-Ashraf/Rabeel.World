import { motion } from 'framer-motion';
import { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  const skillCategories = {
    Frontend: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'JavaScript', level: 95 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'UI/UX Design', level: 88 }
    ],
    Backend: [
      { name: 'Python', level: 95 },
      { name: 'Node.js', level: 85 },
      { name: 'FastAPI', level: 90 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 82 },
      { name: 'REST APIs', level: 92 }
    ],
    AI: [
      { name: 'OpenAI API', level: 95 },
      { name: 'LLMs', level: 90 },
      { name: 'Machine Learning', level: 85 },
      { name: 'NLP', level: 88 },
      { name: 'Computer Vision', level: 80 },
      { name: 'TensorFlow', level: 75 }
    ],
    Tools: [
      { name: 'GitHub', level: 95 },
      { name: 'Docker', level: 80 },
      { name: 'AWS', level: 75 },
      { name: 'Figma', level: 85 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 90 }
    ]
  };

  const categories = Object.keys(skillCategories);

  return (
    <section id="skills" className="min-h-screen py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-neon mb-6">
            Technical Skills
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Mastering cutting-edge technologies to build innovative solutions
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-orbitron font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary to-secondary text-background glow-primary'
                  : 'glass hover:glow-primary hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories[activeCategory].map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="holo-card p-6 hover:glow-primary transition-all duration-300 group"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-neon transition-colors duration-300">
                  {skill.name}
                </h3>
                <span className="text-sm font-orbitron font-bold text-primary">
                  {skill.level}%
                </span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary animate-pulse opacity-50" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '8+', label: 'Programming Languages' },
              { number: '15+', label: 'Frameworks & Libraries' },
              { number: '10+', label: 'Tools & Platforms' },
              { number: '5+', label: 'Years Learning' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-lg hover:glow-primary transition-all duration-300"
              >
                <div className="text-3xl font-orbitron font-bold text-neon mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
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

export default Skills;