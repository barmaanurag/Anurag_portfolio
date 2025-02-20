import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Spaceship = ({ isMobile }) => {
  const sps = useGLTF("./spaceship/scene.gltf");

  return (
    <mesh>
      {/* Lighting for Visibility */}
      <ambientLight intensity={0.6} />
      <hemisphereLight intensity={0.3} groundColor="black" />
      <spotLight
        position={[15, 20, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight position={[5, 5, 5]} intensity={1.5} />

      {/* Super Tiny Scale & Centered */}
      <primitive
        object={sps.scene}
        scale={isMobile ? 0.01 : 0.02} // **Extremely tiny now!**
        position={isMobile ? [0, -0.2, 0] : [0, -4, 0]} // Centered
        rotation={[-0.1, 0, 0]}
      />
    </mesh>
  );
};

const Space = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 2, 50], fov: 50 }} // **Moved camera even further back**
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Spaceship isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default Space;
