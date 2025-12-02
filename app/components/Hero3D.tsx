"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

function Avatar() {
  const { scene, animations } = useGLTF("/programmer.glb");
  const { actions } = useAnimations(animations, scene);
  const ref = useRef<THREE.Group>(null);

  useEffect(() => {
    // Ganti nama animasi sesuai GLB Reza
    // Kalau tidak tahu: console.log(animations) dulu
    const typing = actions["Typing"] || actions["type"] || actions[Object.keys(actions)[0]];

    if (typing) {
      typing.reset().fadeIn(0.5).play();
    }
  }, [actions]);

  return (
    <primitive ref={ref} object={scene} scale={1.5} position={[0, -1.5, 0]} />
  );
}

export default function ProgrammerModel() {
  return (
    <div className="relative w-full h-screen">
      <Canvas
        camera={{ position: [2.5, 0.5, 3], fov: 60 }}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />

        <Avatar />

        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </div>
  );
}
