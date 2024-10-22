import React from 'react';
import Link from "next/link";


const HomeAbout: React.FC = () => {

 return (
  <div className="relative h-screen">
   <div className="relative max-w-7xl mx-auto h-full flex flex-row px-16 py-8">
    <div className='text-5xl w-3/4 py-8 pr-8'>
     <p>
      Helping businesses build dynamic, user-friendly websites and applications tailored to their needs
     </p>
     <br></br>
     <p> I transform your vision into reality with technology that works for you</p>
    </div>
    <div className='w-1/4 py-8 pl-8 pr-20 text-base'>
     <p> I transform your vision into reality with technology that works for you, I transform your vision into reality with technology that works for you</p>
     <div className='pt-10'>
      <Link href="/about" className="group relative text-white text-xl">
       About me
       <span className="absolute left-0 bottom-0 w-0 h-1 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
      </Link>
     </div>
    </div>
   </div>
  </div>
 );
};

export default HomeAbout;
