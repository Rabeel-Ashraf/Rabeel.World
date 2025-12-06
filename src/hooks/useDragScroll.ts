import { useRef, useEffect, useState, useCallback } from 'react';
import gsap from 'gsap';

interface DragScrollOptions {
  friction?: number;
  snapToItems?: boolean;
}

export const useDragScroll = (options: DragScrollOptions = {}) => {
  const { friction = 0.92, snapToItems = true } = options;
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const velocity = useRef(0);
  const lastX = useRef(0);
  const animationFrame = useRef<number>();

  const momentum = useCallback(() => {
    if (!containerRef.current) return;
    
    velocity.current *= friction;
    containerRef.current.scrollLeft += velocity.current;

    if (Math.abs(velocity.current) > 0.5) {
      animationFrame.current = requestAnimationFrame(momentum);
    } else if (snapToItems) {
      // Snap to nearest item
      const container = containerRef.current;
      const items = container.querySelectorAll('.scroll-item');
      if (items.length === 0) return;

      let closestItem = items[0] as HTMLElement;
      let closestDistance = Infinity;

      items.forEach((item) => {
        const rect = (item as HTMLElement).getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const distance = Math.abs(rect.left - containerRect.left - 40);
        
        if (distance < closestDistance) {
          closestDistance = distance;
          closestItem = item as HTMLElement;
        }
      });

      gsap.to(container, {
        scrollLeft: closestItem.offsetLeft - 40,
        duration: 0.4,
        ease: 'power2.out',
      });
    }
  }, [friction, snapToItems]);

  const handleMouseDown = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return;
    
    setIsDragging(true);
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
    lastX.current = e.pageX;
    velocity.current = 0;
    
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
    
    velocity.current = lastX.current - e.pageX;
    lastX.current = e.pageX;
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    momentum();
  }, [momentum]);

  const handleMouseLeave = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      momentum();
    }
  }, [isDragging, momentum]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mouseleave', handleMouseLeave);
      
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [handleMouseDown, handleMouseMove, handleMouseUp, handleMouseLeave]);

  return { containerRef, isDragging };
};

export default useDragScroll;
