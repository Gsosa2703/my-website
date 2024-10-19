'use client';

import React, { useEffect, useRef } from 'react';


const HomeHero: React.FC = () => {

 return (
  <div className="relative h-screen">
   <div className="absolute inset-0 overflow-hidden">
   </div>
   <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-end pb-16 text-center text-white">
    <h3 className="text-xl mb-4 text-shadow">
     A web and software developer crafting digital solutions with clean code and creativity.
    </h3>
    <h1 className="md:text-6xl lg:text-7xl font-bold text-shadow" style={{ fontSize: '12rem' }}>
     Hello World
    </h1>
   </div>
  </div>
 );
};

export default HomeHero;
