import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import banimg from './sliderimg/banner2.jpg'
function Slider3rd({items}) {
  return (
   <>
 <div className="container py-10 ">
          <Swiper
        slidesPerView={items}
        spaceBetween={8}
        pagination={{
          clickable: true,
        }}

        modules={[Pagination]}
        className="mySwiper h-[100px] bg-amber-50"
      >
        <SwiperSlide>
            <div>
                <img src={banimg}></img>
            </div>
        </SwiperSlide>
           <SwiperSlide>
            <div>
                <img src={banimg}></img>
            </div>
        </SwiperSlide>
           <SwiperSlide>
            <div>
                <img src={banimg}></img>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src={banimg}></img>
            </div>
        </SwiperSlide>
          <SwiperSlide>
            <div>
                <img src={banimg}></img>
            </div>
        </SwiperSlide>
          <SwiperSlide>
            <div>
                <img src={banimg}></img>
            </div>
        </SwiperSlide>
      
       
      </Swiper>
        </div>
   </>
  )
}

export default Slider3rd