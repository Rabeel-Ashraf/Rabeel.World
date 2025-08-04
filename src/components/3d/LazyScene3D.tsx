import { lazy, Suspense } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

// Lazy load the Scene3D component
const Scene3D = lazy(() => import('./Scene3D'));

// Simplified mobile fallback component
const MobileEarthFallback = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
      {/* Simplified CSS-only Earth animation for mobile */}
      <div className="relative">
        {/* Outer wireframe sphere */}
        <div 
          className="w-32 h-32 border-2 border-primary/40 rounded-full animate-spin"
          style={{ animationDuration: '8s' }}
        />
        {/* Inner glow */}
        <div 
          className="absolute inset-4 bg-primary/20 rounded-full animate-pulse"
          style={{ animationDuration: '2s' }}
        />
        {/* Center core */}
        <div className="absolute inset-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full" />
      </div>
      
      {/* Simplified particle field */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/60 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Loading component optimized for mobile
const MobileLoader = () => (
  <div className="flex items-center justify-center h-full">
    <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
);

interface LazyScene3DProps {
  children?: React.ReactNode;
  className?: string;
}

const LazyScene3D = ({ children, className = "" }: LazyScene3DProps) => {
  const isMobile = useIsMobile();

  // On mobile, use the simplified CSS animation instead of heavy 3D
  if (isMobile) {
    return (
      <div className={`w-full h-full ${className}`}>
        <MobileEarthFallback />
        {children}
      </div>
    );
  }

  // On desktop, lazy load the full 3D scene
  return (
    <div className={`w-full h-full ${className}`}>
      <Suspense fallback={<MobileLoader />}>
        <Scene3D className={className}>
          {children}
        </Scene3D>
      </Suspense>
    </div>
  );
};

export default LazyScene3D;