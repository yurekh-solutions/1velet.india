import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const count = 800;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#4ade80" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function FloatingGrid() {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.PI / 4 + Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
      ref.current.rotation.z = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <group ref={ref} position={[0, -2, -5]}>
      <gridHelper args={[30, 30, "#1a3a1a", "#0a1a0a"]} />
    </group>
  );
}

const ThreeBackground = () => (
  <div className="absolute inset-0 z-0">
    <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.2} />
      <Particles />
      <FloatingGrid />
    </Canvas>
  </div>
);

export default ThreeBackground;
