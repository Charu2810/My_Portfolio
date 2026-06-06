import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus, Icosahedron, Stars, Environment } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

function FloatingCore() {
  const meshRef = useRef<Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1.2, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#4f46e5"
          attach="material"
          distort={0.45}
          speed={2}
          roughness={0.1}
          metalness={0.9}
          emissive="#1e1e5a"
          emissiveIntensity={0.4}
        />
      </Sphere>
    </Float>
  );
}

function OrbitingRings() {
  const ring1 = useRef<Mesh>(null);
  const ring2 = useRef<Mesh>(null);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ring1.current) {
      ring1.current.rotation.x = t * 0.4;
      ring1.current.rotation.y = t * 0.2;
    }
    if (ring2.current) {
      ring2.current.rotation.x = -t * 0.3;
      ring2.current.rotation.z = t * 0.4;
    }
  });
  return (
    <>
      <Torus ref={ring1} args={[2.2, 0.02, 16, 100]}>
        <meshStandardMaterial color="#a78bfa" emissive="#7c3aed" emissiveIntensity={0.6} />
      </Torus>
      <Torus ref={ring2} args={[2.8, 0.015, 16, 100]}>
        <meshStandardMaterial color="#60a5fa" emissive="#3b82f6" emissiveIntensity={0.5} />
      </Torus>
    </>
  );
}

function FloatingShapes() {
  return (
    <>
      <Float speed={2} rotationIntensity={2} floatIntensity={3} position={[-3.2, 1.5, -1]}>
        <Icosahedron args={[0.35, 0]}>
          <meshStandardMaterial color="#a78bfa" wireframe />
        </Icosahedron>
      </Float>
      <Float speed={1.2} rotationIntensity={1.5} floatIntensity={2} position={[3, -1.2, -0.5]}>
        <Icosahedron args={[0.5, 0]}>
          <meshStandardMaterial color="#4f46e5" emissive="#4f46e5" emissiveIntensity={0.4} />
        </Icosahedron>
      </Float>
      <Float speed={1.8} rotationIntensity={1} floatIntensity={2.5} position={[2.5, 2, -1.5]}>
        <Sphere args={[0.25, 32, 32]}>
          <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={0.8} />
        </Sphere>
      </Float>
    </>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#a78bfa" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#4f46e5" />
        <spotLight position={[0, 5, 5]} intensity={1.2} color="#ffffff" angle={0.3} />
        <FloatingCore />
        <OrbitingRings />
        <FloatingShapes />
        <Stars radius={50} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
        <Environment preset="night" />
      </Suspense>
    </Canvas>
  );
}