import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScrolling from "./components/SmoothScrolling";
import { Inter } from "next/font/google";
import Background from "./components/Background";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Gabriela Sosa | Developer',
  description: 'A smooth scrolling website using Lenis',


};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative">
        <Background />
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}

