import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css';
import 'swiper/css/pagination';
import img from './sliderimg/small.png'


// import required modules
import { Navigation, Pagination } from 'swiper/modules';

export  function Cathomeslider() {
  return (
    <>
      <Swiper
        slidesPerView={8}
        spaceBetween={30}
       
        modules={[Navigation,Pagination]}
        className="container bg-amber-300"
      >
        <SwiperSlide className='bg-amber-950 rounded-[50%]  ' >
            <div className="item bg-white p-3 rounded-[50%] smoothing "><img className='h-[80px] ' src={img} />
            <h3 className='bg-red-100 text-center' >item1</h3>
            </div>
            
        </SwiperSlide>
            <SwiperSlide className='bg-amber-950 rounded-[50%]  ' >
            <div className="item bg-white p-3 rounded-[50%] smoothing "><img className='h-[80px] ' src={img} />
            <h3 className='bg-red-100 text-center' >item1</h3>
            </div>
            
        </SwiperSlide>
            <SwiperSlide className='bg-amber-950 rounded-[50%]  ' >
            <div className="item bg-white p-3 rounded-[50%] smoothing "><img className='h-[80px] ' src={img} />
            <h3 className='bg-red-100 text-center' >item1</h3>
            </div>
            
        </SwiperSlide>
            <SwiperSlide className='bg-amber-950 rounded-[50%]  ' >
            <div className="item bg-white p-3 rounded-[50%] smoothing "><img className='h-[80px] ' src={img} />
            <h3 className='bg-red-100 text-center' >item1</h3>
            </div>
            
        </SwiperSlide>
            <SwiperSlide className='bg-amber-950 rounded-[50%]  ' >
            <div className="item bg-white p-3 rounded-[50%] smoothing "><img className='h-[80px] ' src={img} />
            <h3 className='bg-red-100 text-center' >item1</h3>
            </div>
            
        </SwiperSlide>
            <SwiperSlide className='bg-amber-950 rounded-[50%]  ' >
            <div className="item bg-white p-3 rounded-[50%] smoothing "><img className='h-[80px] ' src={img} />
            <h3 className='bg-red-100 text-center' >item1</h3>
            </div>
            
        </SwiperSlide>
            <SwiperSlide className='bg-amber-950 rounded-[50%]  ' >
            <div className="item bg-white p-3 rounded-[50%] smoothing "><img className='h-[80px] ' src={img} />
            <h3 className='bg-red-100 text-center' >item1</h3>
            </div>
            
        </SwiperSlide>
            <SwiperSlide className='bg-amber-950 rounded-[50%]  ' >
            <div className="item bg-white p-3 rounded-[50%] smoothing "><img className='h-[80px] ' src={img} />
            <h3 className='bg-red-100 text-center' >item1</h3>
            </div>
            
        </SwiperSlide>
            <SwiperSlide className='bg-amber-950 rounded-[50%]  ' >
            <div className="item bg-white p-3 rounded-[50%] smoothing "><img className='h-[80px] ' src={img} />
            <h3 className='bg-red-100 text-center' >item1</h3>
            </div>
            
        </SwiperSlide>
            <SwiperSlide className='bg-amber-950 rounded-[50%]  ' >
            <div className="item bg-white p-3 rounded-[50%] smoothing "><img className='h-[80px] ' src={img} />
            <h3 className='bg-red-100 text-center' >item1</h3>
            </div>
            
        </SwiperSlide>
      
      
      </Swiper>
    </>
  );
}
