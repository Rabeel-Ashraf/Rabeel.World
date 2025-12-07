import { useRef, useEffect, useState, ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform, PanInfo } from 'framer-motion';
import gsap from 'gsap';

interface CarouselItem {
  id: string | number;
  content: ReactNode;
}

interface HorizontalCarouselProps {
  items: CarouselItem[];
  itemWidth?: number;
  gap?: number;
  title?: string;
  subtitle?: string;
}

const HorizontalCarousel = ({ 
  items, 
  itemWidth = 400, 
  gap = 32,
  title,
  subtitle 
}: HorizontalCarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const [activeIndex, setActiveIndex] = useState(0);
  
  const x = useMotionValue(0);
  const springX = useSpring(x, { damping: 30, stiffness: 200, mass: 0.5 });

  useEffect(() => {
    if (!containerRef.current || !trackRef.current) return;
    
    const containerWidth = containerRef.current.offsetWidth;
    const trackWidth = items.length * (itemWidth + gap) - gap;
    const maxDrag = Math.max(0, trackWidth - containerWidth + 80);
    
    setConstraints({ left: -maxDrag, right: 0 });
  }, [items.length, itemWidth, gap]);

  useEffect(() => {
    const unsubscribe = x.on('change', (latest) => {
      const index = Math.round(Math.abs(latest) / (itemWidth + gap));
      setActiveIndex(Math.min(index, items.length - 1));
    });
    return unsubscribe;
  }, [x, itemWidth, gap, items.length]);

  const handleDragEnd = (_: any, info: PanInfo) => {
    const velocity = info.velocity.x;
    const currentX = x.get();
    
    let targetIndex = Math.round(Math.abs(currentX) / (itemWidth + gap));
    
    if (Math.abs(velocity) > 500) {
      targetIndex += velocity > 0 ? -1 : 1;
    }
    
    targetIndex = Math.max(0, Math.min(targetIndex, items.length - 1));
    const targetX = -targetIndex * (itemWidth + gap);
    
    gsap.to(x, {
      value: Math.max(constraints.left, Math.min(constraints.right, targetX)),
      duration: 0.6,
      ease: 'power3.out',
      onUpdate: () => x.set(x.get()),
    });
  };

  const goToSlide = (index: number) => {
    const targetX = -index * (itemWidth + gap);
    gsap.to(x, {
      value: Math.max(constraints.left, Math.min(constraints.right, targetX)),
      duration: 0.8,
      ease: 'power3.out',
      onUpdate: () => x.set(x.get()),
    });
  };

  return (
    <section className="py-24 md:py-32 overflow-hidden">
      {(title || subtitle) && (
        <div className="container mx-auto px-6 md:px-12 mb-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              {subtitle && (
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-eyebrow mb-4 block"
                >
                  {subtitle}
                </motion.span>
              )}
              {title && (
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-headline text-foreground"
                >
                  {title}
                </motion.h2>
              )}
            </div>

            <div className="flex gap-2">
              {items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`
                    w-2 h-2 rounded-full transition-all duration-300 magnetic
                    ${activeIndex === index 
                      ? 'bg-foreground w-8' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }
                  `}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <div 
        ref={containerRef}
        className="relative cursor-grab active:cursor-grabbing"
      >
        <motion.div
          ref={trackRef}
          className="flex pl-6 md:pl-12"
          style={{ 
            x: springX,
            gap: `${gap}px`,
          }}
          drag="x"
          dragConstraints={constraints}
          dragElastic={0.1}
          onDragEnd={handleDragEnd}
        >
          {items.map((item, index) => {
            const itemX = useTransform(
              springX,
              [-(index + 1) * (itemWidth + gap), -index * (itemWidth + gap), -(index - 1) * (itemWidth + gap)],
              [-20, 0, 20]
            );
            
            const scale = useTransform(
              springX,
              [-(index + 1) * (itemWidth + gap), -index * (itemWidth + gap), -(index - 1) * (itemWidth + gap)],
              [0.95, 1, 0.95]
            );

            const opacity = useTransform(
              springX,
              [-(index + 2) * (itemWidth + gap), -index * (itemWidth + gap), -(index - 2) * (itemWidth + gap)],
              [0.5, 1, 0.5]
            );

            return (
              <motion.div
                key={item.id}
                className="scroll-item flex-shrink-0"
                style={{ 
                  width: itemWidth,
                  x: itemX,
                  scale,
                  opacity,
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {item.content}
              </motion.div>
            );
          })}
        </motion.div>

        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-8">
        <div className="h-px bg-border relative overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-foreground"
            style={{
              width: `${((activeIndex + 1) / items.length) * 100}%`,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </section>
  );
};

export default HorizontalCarousel;