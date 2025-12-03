"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Avatar() {
  const { scene } = useGLTF("/programmer.glb");
  
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.position.y = -1.5 + Math.sin(t * 1.2) * 0.1;
      ref.current.rotation.y = Math.sin(t * 0.5) * 0.2;
    }
  });

  return <primitive ref={ref} object={scene} scale={1.3} position={[0, -1.5, 0]} />;
}

export default function ProgrammerModel() {
  return (
    <div className="relative w-full h-[360px] sm:h-[420px] md:h-screen">
      <Canvas
        camera={{ position: [2.5, 0.5, 3], fov: 60 }}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />

        <Avatar />

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
