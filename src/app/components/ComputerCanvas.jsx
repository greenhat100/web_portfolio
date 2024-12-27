"use client"
import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from './Loader';
import { HemisphereLight } from 'three';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('/desktop/scene.gltf');

  return (
    <group>
      <mesh>
        <hemisphereLight intensity={0.5} groundColor='black' />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={2}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={2} castShadow />
      </mesh>
      <primitive
        object={computer.scene}
        scale={isMobile ? 1.3 : 0.8} // Increase scale factor for desktop
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  try {
    return (
      <Canvas
       style={{ width: '100%', height: '100vh' }} // Adjust width and height as needed
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
>
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>

        <Preload all />
      </Canvas>
    );
  } catch (error) {
    console.error('Error in ComputersCanvas:', error);
    // Handle or log the error accordingly
    return null; // or a fallback UI
  }
};

export default ComputersCanvas;
