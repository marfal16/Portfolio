import React, { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations, Environment } from "@react-three/drei";
import * as THREE from "three";

const AnimatedAvatar = ({ url, scale = 3 }) => {
  const group = useRef();
  const { scene, animations } = useGLTF(url);
  const { actions } = useAnimations(animations, group);

  // Correzione materiali / texture
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.side = THREE.DoubleSide;
      if (child.material.map) {
        child.material.map.encoding = THREE.sRGBEncoding;
        child.material.map.needsUpdate = true;
      }
      child.material.needsUpdate = true;
    }
  });

  // Animazione Mixamo
  useEffect(() => {
    if (animations.length > 0 && actions[animations[0].name]) {
      actions[animations[0].name].play();
    }
  }, [animations, actions]);

  const tRef = useRef(0);
  const { size } = useThree();

  useFrame(() => {
    if (group.current) {
      tRef.current += 0.03;
      const aspect = size.width / size.height;

      group.current.position.x = 1.6 * aspect;
      group.current.position.y = -2.2 + Math.sin(tRef.current) * 0.15; // leggero movimento su/giù
      group.current.position.z = -1;
      group.current.rotation.y = -1; // frontale
    }
  });

  return <primitive ref={group} object={scene} scale={scale} />;
};

const Background3D = () => {
  return (
    <Canvas
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
      camera={{ position: [0, 1, 5], fov: 50 }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <AnimatedAvatar url="/avatar.glb" />
      <Environment preset="sunset" />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  );
};

export default Background3D;
