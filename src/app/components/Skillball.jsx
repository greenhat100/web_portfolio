import React, { Suspense } from 'react';
import { Float, OrbitControls, Preload, useTexture } from '@react-three/drei';

const SkillBall = ({ name, icon }) => {
  const [texture, textureError] = useTexture(icon);

  if (textureError) {
    console.error('Error loading texture:', textureError);
    // Handle or log the error accordingly
    return null; // or a fallback UI
  }

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.5]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial map={texture} />
      </mesh>
    </Float>
  );
};

export default SkillBall;
