"use client";
import { useLenis } from 'lenis/react'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/logo.png";

const Navbar: React.FC = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useLenis((lenis) => {
    lenis.on("scroll", ({ direction }: { direction: number }) => {
      setIsNavbarVisible(direction <= 0);
    });
  });

  return (
    <nav
      className={`sticky top-0 pt-2 transition-all duration-500 ease-in-out z-50 ${isNavbarVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}
    >
      <div className="px-5">
        <div className="flex justify-between items-center h-16 text-xl">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold" passHref>
              <Image src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="/about" className="hover:text-purple-500" passHref>
              work
            </Link>
            <Link href="/services" className="hover:text-purple-500" passHref>
              about me
            </Link>
            <Link href="/contact" className="hover:text-purple-500" passHref>
              let's get in touch
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
