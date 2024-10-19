"use client";
import { ReactLenis } from 'lenis/react'
import Navbar from "./NavBar";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(useGSAP, ScrollTrigger);


// if (typeof window !== 'undefined') {
//  gsap.registerPlugin(ScrollTrigger, useGSAP);
// }

function SmoothScrolling({ children }: { children: React.ReactNode }) {
 return (
  <>
   <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
    <Navbar />
    {children}
   </ReactLenis>
  </>
 );
}

export default SmoothScrolling;
