import { lazy, Suspense } from 'react';

// Lazy load the heavy 3D scene
const Scene3D = lazy(() => import('./3d/Scene3D'));

const SceneFallback = () => (
  <div className="w-full h-full flex items-center justify-center bg-background/50">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

interface LazyScene3DProps {
  children?: React.ReactNode;
  className?: string;
}

const LazyScene3D = ({ children, className = "" }: LazyScene3DProps) => {
  return (
    <Suspense fallback={<SceneFallback />}>
      <Scene3D className={className}>
        {children}
      </Scene3D>
    </Suspense>
  );
};

export default LazyScene3D;