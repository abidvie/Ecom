import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <>
    <h1 className='font-bold container text-3xl pb-4'>From the blog</h1>
      <Swiper
        slidesPerView={4}
        
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper container"
      >
        <SwiperSlide className='rounded-3xl pl-3 pt-2.5'>
            <div className=''>
                <img className='rounded-3xl  hover:scale-105 hover:duration-300' src="../../../public/assets/blogimg/img1.jpg" alt="" />
                <p className='m-2 font-[500]'>sustainable living through cutting-edge prefabricated homes</p>
                <p className='m-2 font-[200]'>Give2 lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure e......</p>
                <Link className='m-2' to={"/"}>Read more..</Link>
            </div>
        </SwiperSlide>
         <SwiperSlide className='rounded-3xl pl-3 pt-2.5'>
            <div className=''>
                <img className='hover:duration-300 rounded-3xl hover:scale-105' src="../../../public/assets/blogimg/img1.jpg" alt="" />
                <p className='m-2 font-[500]'>sustainable living through cutting-edge prefabricated homes</p>
                <p className='m-2 font-[200]'>Give2 lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure e......</p>
                <Link className='m-2' to={"/"}>Read more..</Link>
            </div>
        </SwiperSlide>
          <SwiperSlide className='rounded-3xlpl-3 pt-2.5'>
            <div className=''>
                <img className='hover:duration-300 rounded-3xl hover:scale-105' src="../../../public/assets/blogimg/img1.jpg" alt="" />
                <p className='m-2 font-[500]'>sustainable living through cutting-edge prefabricated homes</p>
                <p className='m-2 font-[200]'>Give2 lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure e......</p>
                <Link className='m-2' to={"/"}>Read more..</Link>
            </div>
        </SwiperSlide>
          <SwiperSlide className='rounded-3xl pl-3 pr-2.5 pt-2.5'>
            <div className=''>
                <img className='hover:duration-300 rounded-3xl hover:scale-105' src="../../../public/assets/blogimg/img1.jpg" alt="" />
                <p className='m-2 font-[500]'>sustainable living through cutting-edge prefabricated homes</p>
                <p className='m-2 font-[200]'>Give2 lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure e......</p>
                <Link className='m-2' to={"/"}>Read more..</Link>
            </div>
        </SwiperSlide>
       

        
      </Swiper>
    </>
  );
}
