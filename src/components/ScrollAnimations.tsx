import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'parallax';
  delay?: number;
  duration?: number;
  className?: string;
}

const ScrollAnimation = ({ 
  children, 
  animation = 'fadeIn', 
  delay = 0, 
  duration = 0.6,
  className = ''
}: ScrollAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const variants = {
    fadeIn: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 }
    },
    slideUp: {
      initial: { opacity: 0, y: 60 },
      animate: { opacity: 1, y: 0 }
    },
    slideLeft: {
      initial: { opacity: 0, x: -60 },
      animate: { opacity: 1, x: 0 }
    },
    slideRight: {
      initial: { opacity: 0, x: 60 },
      animate: { opacity: 1, x: 0 }
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 }
    },
    parallax: {
      initial: { opacity: 0, y: 100 },
      animate: { opacity: 1, y: 0 }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={variants[animation].initial}
      animate={isInView ? variants[animation].animate : variants[animation].initial}
      transition={{ 
        duration, 
        delay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;