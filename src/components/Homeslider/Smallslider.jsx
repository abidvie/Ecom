import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import sldimg from './sliderimg/slide1.jpg'


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export function Smallslider() {
  return (
    <>
      <div className="homeslider">
        <div className="container">
            <Swiper
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className=" sliderhome"
      >
      
         <SwiperSlide className=''><img className=' w-full h-[520px] p-3 rounded-[20px] smothing' src={sldimg}></img></SwiperSlide>
        <SwiperSlide className=''><img className=' w-full p-3 h-[520px] rounded-[20px]' src={sldimg}></img></SwiperSlide>
      </Swiper>
        </div>
      </div>
    </>
  );
}
