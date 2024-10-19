"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

const AnimatedPlane: React.FC = () => {
 const shaderRef = useRef<THREE.ShaderMaterial>(null);
 const [viewport, setViewport] = useState<{ width: number; height: number } | null>(null);

 useEffect(() => {
  const handleResize = () => {
   const { innerWidth, innerHeight } = window;
   setViewport({ width: innerWidth, height: innerHeight });
   if (shaderRef.current) {
    shaderRef.current.uniforms.resolution.value.set(innerWidth, innerHeight);
   }
  };

  // Set initial viewport size
  handleResize();
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
 }, []);

 useFrame(({ clock }) => {
  if (shaderRef.current) {
   shaderRef.current.uniforms.uTime.value = clock.getElapsedTime();
  }
 });

 if (!viewport) return null;

 return (
  <mesh scale={[viewport.width / 100, viewport.height / 100, 1]}>
   <boxGeometry args={[1, 1]} />
   <shaderMaterial
    ref={shaderRef}
    uniforms={{
     uTime: { value: 0.0 },
     uColor: { value: new THREE.Color("#30363c") },
     resolution: { value: new THREE.Vector2(viewport.width, viewport.height) }
    }}
    vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
    fragmentShader={`
          varying vec2 vUv;
          uniform float uTime;
          uniform vec3 uColor;

          void main() {
            float wave = sin(vUv.x * 5.0 + uTime) * 0.5 + 0.5;
            vec3 color = mix(vec3(0.2, 0.3, 0.5), uColor, wave);
            gl_FragColor = vec4(color, 1.0);
          }
        `}
   />
  </mesh>
 );
};

const Background: React.FC = () => {
 return (
  <div id="backgroundCanvas" className="fixed inset-0 w-full h-full -z-10">
   <Canvas style={{ width: '100%', height: '100%' }} dpr={[1, 2]} gl={{ antialias: false }}>
    <AnimatedPlane />
   </Canvas>
  </div>
 );
};

export default Background;
