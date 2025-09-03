import React, { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations, Environment } from "@react-three/drei";
import * as THREE from "three";


const AnimatedAvatar = ({ url }) => {
  const group = useRef();
  const { scene, animations } = useGLTF(url);
  const { actions } = useAnimations(animations, group);
  const { size } = useThree();

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

  useFrame(() => {
    if (group.current) {
      tRef.current += 0.03;

      const { width } = size;

      // Scala responsiva
      let newScale = 3;
      let newX = 0;
      let newYpos = 0;
      let newYrot = 0;
      let bounce = 0.15; // default rimbalzo

      if (width > 1280) { // Desktop grande
        newScale = 3;
        newX = 2.8;
        newYpos = -2.1;
        newYrot = -1;
      } else if (width > 768) { // Tablet
        newScale = 3.5;
        newX = 3.5;
        newYpos = -2.6;
        newYrot = -1;
      } else { // Mobile
        newScale = 2.2;
        newX = 0;
        newYpos = -1.1;
        newYrot = -0;
        bounce = 0; // niente rimbalzo su mobile
      }

      group.current.scale.set(newScale, newScale, newScale);
      group.current.position.x = newX;
      group.current.position.y = newYpos + Math.sin(tRef.current) * bounce;
      group.current.position.z = -1;
      group.current.rotation.y = newYrot;
    }
  });

  return <primitive ref={group} object={scene} />;
};


const Background3D = React.memo(() => {
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
});

export default Background3D;
