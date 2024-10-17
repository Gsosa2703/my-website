// app/components/Navbar.tsx
"use client"
import Link from "next/link";
import Image from "next/image";
import Logo from "../images/logo.png"
import Lenis from "@studio-freight/lenis";
import { useEffect, useState } from "react";

interface LenisScrollEvent {
 direction: number;
 velocity: number;
 scroll: number;
 limit: number;
}

const Navbar: React.FC = () => {

 const [isNavbarVisible, setIsNavbarVisible] = useState(true);

 useEffect(() => {
  const lenis = new Lenis({
   duration: 1.2,
  });

  const animate = (time: number) => {
   lenis.raf(time);
   requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);

  let previousDirection = 0;

  // Add the scroll event listener
  lenis.on("scroll", (e: LenisScrollEvent) => {
   const { direction } = e;
   if (direction !== previousDirection) {
    setIsNavbarVisible(direction <= 0);
    previousDirection = direction;
   }
  });

  return () => {
   lenis.destroy();
  };
 }, []);

 return (
  <nav
   className={`sticky top-0 pt-2 transition-all duration-500 ease-in-out z-50 ${isNavbarVisible
    ? "opacity-100 transform translate-y-0"
    : "opacity-0 transform -translate-y-full"
    }`}
  >
   <div className="px-5">
    <div className="flex justify-between items-center h-16">
     <div className="flex-shrink-0">
      <Link href="/" className="text-xl font-bold" passHref>
       <Image
        src={Logo} // Path to your logo
        alt="Software and web development logo / parallax scrolling"
       />
      </Link>
     </div>
     <div className="hidden md:flex space-x-4">
      <Link href="/about" className="hover:text-gray-500" passHref>
       work
      </Link>
      <Link href="/services" className="hover:text-gray-500" passHref>
       about me
      </Link>
      <Link href="/contact" className="hover:text-gray-500" passHref>
       let's get in touch
      </Link>
     </div>
    </div>
   </div>
  </nav>
 );
};

export default Navbar;
