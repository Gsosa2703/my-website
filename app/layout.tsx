import type { Metadata } from "next";
import "./globals.css";
import SmoothScrolling from "./components/SmoothScrolling";
// import { Inter } from "next/font/google";
import Background from "./components/Background";
import { League_Spartan } from 'next/font/google';

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  weight: ["100", "500", "600", "900"],
});

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Gabriela Sosa | Developer',
  description: 'A smooth scrolling website using Lenis',


};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={leagueSpartan.className}>
      <body className="relative">
        <Background />
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}

