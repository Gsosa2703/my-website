

"use client";

import React from "react";

// Swiper components, modules and styles
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import 'swiper/css/scrollbar';

// Import your custom images here
import Work from '../../public/images/work-1.jpg'

const DemoSlider: React.FC = () => {
 return (
  <section className="w-full h-screen">
   <div className='text-5xl w-3/4 px-16'>
     <h2>
        Latest Job
     </h2>
   </div>
   <div className="h-[90vh] flex items-center justify-center">
    <ul className="w-full ">
     <Swiper
      slidesPerView={2}
      centeredSlides={true}
      spaceBetween={100}
      grabCursor={true}
      watchSlidesProgress={true} // Keep track of slides' visibility
      slideToClickedSlide={true}
      loop={true}
      freeMode={{
       enabled: true,
       momentum: true, // Keeps slides moving after you release
       momentumRatio: 1, // Controls momentum speed after release
       momentumVelocityRatio: 1, // Controls how long the momentum lasts
       minimumVelocity: 0.5, // Minimum velocity to trigger momentum
      }}
      modules={[FreeMode]} // Add FreeMode here
      className="mySwiper"
     >
      <SwiperSlide>
       <Image src={Work} alt="Vineyard Image 1" layout="responsive" className="rounded-lg" />
      </SwiperSlide>
      <SwiperSlide>
       <Image src={Work} alt="Vineyard Image 2" layout="responsive" className="rounded-lg" />
      </SwiperSlide>
      <SwiperSlide>
       <Image src={Work} alt="Vineyard Image 3" layout="responsive" className="rounded-lg" />
      </SwiperSlide>
      <SwiperSlide>
       <Image src={Work} alt="Vineyard Image 3" layout="responsive" className="rounded-lg" />
      </SwiperSlide>
      <SwiperSlide>
       <Image src={Work} alt="Vineyard Image 3" layout="responsive" className="rounded-lg" />
      </SwiperSlide>
      <SwiperSlide>
       <Image src={Work} alt="Vineyard Image 3" layout="responsive" className="rounded-lg" />
      </SwiperSlide>
     </Swiper>
    </ul>
   </div>
  </section>
 );
};

export default DemoSlider;

