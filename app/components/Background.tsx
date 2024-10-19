"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Points, PointMaterial } from '@react-three/drei'
import { inSphere } from 'maath/random';

const Stars: React.FC = (props) => {
 const ref = useRef<any>(null);
 const [sphere] = useState(() => inSphere(new Float32Array(5000), { radius: 1.5 })) as any

 useFrame((state, delta) => {
  if (ref.current) {
   ref.current.rotation.x -= delta / 10;
   ref.current.rotation.y -= delta / 15;
  }
 });

 return (
  <group rotation={[0, 0, Math.PI / 4]} {...props}>
   <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
    <PointMaterial
     transparent
     color="#ffa0e0"
     size={0.005}
     sizeAttenuation={true}
     depthWrite={false}
    />
   </Points>
  </group>
 );
}


const Background: React.FC = () => {
 return (
  <div id="backgroundCanvas" className="fixed inset-0 w-full h-full -z-10">
   <Canvas camera={{ position: [0, 0, 1] }}>
    <Stars />
   </Canvas>
  </div>
 );
};

export default Background;