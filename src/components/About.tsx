import { motion } from 'framer-motion';
import { Code, Cpu, Shield, Rocket } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: '2024',
      title: 'Founder of Orionix Labs',
      description: 'Developing AI-powered applications and platforms',
      icon: Rocket,
    },
    {
      year: '2023',
      title: 'AI Specialist',
      description: 'Building machine learning and NLP solutions',
      icon: Cpu,
    },
    {
      year: '2022',
      title: 'Safety Officer',
      description: 'Managing safety protocols and compliance',
      icon: Shield,
    },
    {
      year: '2021',
      title: 'Mechanical Engineer',
      description: 'Designing mechanical systems and solutions',
      icon: Code,
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-foreground mb-6">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            AI Specialist, Mechanical Engineer, and Safety Officer with expertise in building intelligent systems 
            and engineering solutions. Founder of Orionix Labs, focused on developing practical AI applications 
            for businesses in the UAE.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-orbitron font-bold text-primary mb-8">
              Professional Journey
            </h3>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-sm font-orbitron font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {item.year}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-1">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Highlight */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-orbitron font-bold text-primary mb-8">
              Core Expertise
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                'AI Development',
                'Mechanical Engineering',
                'Safety Management',
                'Full-Stack Development',
                'UI/UX Design',
                'Project Leadership',
                'Innovation Strategy',
                'Problem Solving'
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="clean-card p-4 text-center cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-sm font-medium text-foreground">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { number: '4+', label: 'Years Experience' },
                { number: '10+', label: 'Projects Completed' },
                { number: '100%', label: 'Client Satisfaction' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center glass p-4 rounded-lg"
                >
                  <div className="text-2xl font-orbitron font-bold text-primary mb-2">
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
      </div>
    </section>
  );
};

export default About;