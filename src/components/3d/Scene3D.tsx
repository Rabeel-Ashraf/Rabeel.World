import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Stars, Float } from '@react-three/drei';

// Loading component for 3D elements
const Loader = () => (
  <div className="flex items-center justify-center h-full">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

// Floating AI Robot Component
const AIRobot = () => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh position={[3, 1, 0]}>
        {/* Main body */}
        <boxGeometry args={[0.8, 1.2, 0.6]} />
        <meshStandardMaterial 
          color="#00f5ff" 
          emissive="#004d66"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {/* Head */}
      <mesh position={[3, 2, 0]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial 
          color="#8b5cf6" 
          emissive="#2d1b69"
          emissiveIntensity={0.4}
        />
      </mesh>
      
      {/* Arms */}
      <mesh position={[2.2, 0.8, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.8]} />
        <meshStandardMaterial 
          color="#00ff88" 
          emissive="#004d2a"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      <mesh position={[3.8, 0.8, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.8]} />
        <meshStandardMaterial 
          color="#00ff88" 
          emissive="#004d2a"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
};

// Rotating Earth Component
const Earth = () => {
  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
      <mesh position={[-3, 0, 0]} rotation={[0, 0, 0]}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial 
          color="#00f5ff"
          emissive="#004d66"
          emissiveIntensity={0.6}
          wireframe={true}
        />
      </mesh>
      {/* Inner glow sphere */}
      <mesh position={[-3, 0, 0]}>
        <sphereGeometry args={[1.3, 32, 32]} />
        <meshStandardMaterial 
          color="#00f5ff"
          emissive="#00f5ff"
          emissiveIntensity={0.3}
          transparent={true}
          opacity={0.2}
        />
      </mesh>
    </Float>
  );
};

// Particle System
const ParticleField = () => {
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  
  return (
    <Stars 
      radius={100} 
      depth={50} 
      count={isMobile ? 1000 : 5000} 
      factor={isMobile ? 2 : 4} 
      saturation={0} 
      fade 
      speed={0.5}
    />
  );
};

interface Scene3DProps {
  children?: React.ReactNode;
  className?: string;
}

const Scene3D = ({ children, className = "" }: Scene3DProps) => {
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, isMobile ? 12 : 8], fov: isMobile ? 85 : 75 }}
        gl={{ 
          alpha: true, 
          antialias: !isMobile,
          powerPreference: "low-power",
          stencil: false,
          depth: true
        }}
        dpr={isMobile ? 1 : Math.min(window.devicePixelRatio || 1, 2)}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          {/* Enhanced Lighting for better visibility */}
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f5ff" />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#8b5cf6" />
          <pointLight position={[0, 10, 0]} intensity={0.8} color="#00ff88" />
          
          {/* 3D Elements - Simplified for mobile */}
          {!isMobile && <ParticleField />}
          <Earth />
          {!isMobile && <AIRobot />}
          
          {/* Controls */}
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            enableRotate={!isMobile}
            autoRotate={true}
            autoRotateSpeed={isMobile ? 1 : 0.5}
          />
          
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;