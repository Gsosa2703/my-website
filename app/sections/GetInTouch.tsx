import React from 'react';

const GetInTouch: React.FC = () => {

 return (
  <div className="relative h-screen">
   <div className="relative max-w-7xl mx-auto h-full px-16 py-8">
    <div className='text-5xl w-3/4 py-8 pr-8'>
     <h2>
       Let's talk
     </h2>
     <br></br>
     <p className='text-3xl w-2/5'>Whether you’re ready to begin your project or just have a question, i'm here to help.</p>
    </div>
    <div className="flex items-center py-20 justify-around">
          {/* Email link */}
          <a
            href="mailto:info@falkinstudio.com"
            className="text-3xl font-semibold relative group"
          >
            Email me
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </a>

          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/gabrielap-sosa/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl font-semibold relative group"
          >
            LinkedIn
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </a>
    </div>
   </div>
  </div>
 );
};

export default GetInTouch;
