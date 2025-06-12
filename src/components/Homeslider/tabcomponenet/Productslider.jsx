import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Productitem from './Productitem';


function Productslider({items}) {
  return (
    <div className="productslider">
              <Swiper
        slidesPerView={items}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}

        modules={[Pagination]}
        className="mySwiper h-[350px] bg-amber-50"
      >
        <SwiperSlide className='p-4'>
           <Productitem/>
        </SwiperSlide>
         <SwiperSlide className='p-4'>
           <Productitem/>
        </SwiperSlide>
         <SwiperSlide className='p-4'>
           <Productitem/>
        </SwiperSlide>
         <SwiperSlide className='p-4'>
           <Productitem/>
        </SwiperSlide>
         <SwiperSlide className='p-4'>
           <Productitem/>
        </SwiperSlide>
         <SwiperSlide className='p-4'>
           <Productitem/>
        </SwiperSlide>
   
      
       
      </Swiper>
    </div>
  )
}

export default Productslider