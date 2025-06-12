// import React from "react";
// import "react-inner-image-zoom/lib/styles.min.css";
// import InnerImageZoom from "react-inner-image-zoom";
// import { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Navigation, Pagination } from "swiper/modules";
// function ProductZoomer() {
//   return (
//     <div className="flex gap-3">
//       <div className="slideer bg-amber-300 w-[30%]">
//         <Swiper
//           slidesPerView={5}
//           spaceBetween={20}
//           direction={"vertical"}
        
//           modules={[Pagination,Navigation]}
//           className="zoomproductsliderthumbs "
//         >
//           <SwiperSlide>
//             <img src="/assets/blogimg/img1.jpg" />
//           </SwiperSlide>
//           <SwiperSlide className="">
//             <img src="/assets/blogimg/img1.jpg " />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src="/assets/blogimg/img1.jpg" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src="/assets/blogimg/img1.jpg" />
//           </SwiperSlide>
//              <SwiperSlide>
//             <img src="/assets/blogimg/img1.jpg" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src="/assets/blogimg/img1.jpg" />
//           </SwiperSlide>

//         </Swiper>
//       </div>

//       <div className="zoomimage w-[70%] bg-black">
//         <InnerImageZoom
//           src="../../../public/assets/productimg/product1.webp"
//           zoomSrc="../../../public/assets/productimg/product1.webp"
//           zoomType="hover"
//           zoomPreload
//           width={800}
         
//         />
//       </div>
//     </div>
//   );
// }

// export default ProductZoomer;




import React, { useState } from "react";
import "react-inner-image-zoom/lib/styles.min.css";
import InnerImageZoom from "react-inner-image-zoom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

function ProductZoomer() {
  const [selectedImage, setSelectedImage] = useState("/assets/productimg/product1.webp");

  const thumbnailImages = [
   
    "/assets/productimg/product1.webp",
    "/assets/productimg/product1.2.webp",
    "/assets/productimg/product1.3.webp",
    "/assets/productimg/product1.4.webp",
     "/assets/productimg/product1.4.webp",
    "/assets/productimg/product1.4.webp",
     "/assets/productimg/product1.4.webp",
     "/assets/productimg/product1.4.webp",
     
  ];

  return (
    <div className="flex gap-3">
      <div className="slideer bg-amber-300 w-[15%] h-[500px] overflow-hidden">
        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          direction={"vertical"}
          modules={[Pagination, Navigation]}
          className="zoomproductsliderthumbs h-full"
        >
          {thumbnailImages.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                onClick={() => setSelectedImage(img)}
                className="cursor-pointer h-[80px] object-cover border-2 hover:border-black transition"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="zoomimage w-[80%] bg-black">
        <InnerImageZoom
          src={selectedImage}
          zoomSrc={selectedImage}
          zoomType="hover"
          zoomPreload
          width={800}
        />
      </div>
    </div>
  );
}

export default ProductZoomer;
