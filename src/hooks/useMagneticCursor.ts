import { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';

interface MagneticOptions {
  strength?: number;
  ease?: number;
}

export const useMagneticCursor = (options: MagneticOptions = {}) => {
  const { strength = 0.3, ease = 0.1 } = options;
  const elementRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    gsap.to(element, {
      x: deltaX,
      y: deltaY,
      duration: ease,
      ease: 'power2.out',
    });
  }, [strength, ease]);

  const handleMouseLeave = useCallback(() => {
    if (!elementRef.current) return;

    gsap.to(elementRef.current, {
      x: 0,
      y: 0,
      duration: 0.4,
      ease: 'elastic.out(1, 0.5)',
    });
  }, []);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return elementRef;
};

export default useMagneticCursor;
