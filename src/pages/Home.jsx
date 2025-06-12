import React from "react";

import { Smallslider } from "../components/Homeslider/Smallslider";
import { Cathomeslider } from "../components/Homeslider/Cathomeslider";
import { TbTruckDelivery } from "react-icons/tb";
import Slider from "react-slick";
import Slider3rd from "../components/Homeslider/slider3rd";
import ScrollableTabsButtonAuto from "../components/Homeslider/tabcomponenet/ScrollableTabsButtonAuto";
import Productslider from "../components/Homeslider/tabcomponenet/Productslider";
import Blog from "../components/blog/Blog";


export default function Home() {
  return (
    <div>
      home page
      <Smallslider />
      <Cathomeslider />
      <section className="mt-4">
        <div className="container ">
          <div className="flex items-center justify-between">
            <div className="leftsec">
              <h1 className="text-2xl">Popular product</h1>
              <p>dont miss the current offer</p>
            </div>
            <div className="rightsec w-[800px]">
              <ScrollableTabsButtonAuto/>
            </div>
          </div>
          <Productslider items={5}/>
        </div>
      </section>
      <section className="py-5 bg-white">
        <div className="container bg-amber-400 rounded-2xl">
          <div className="freeshipping w-full h-[80px] rounded-2xl p-4 border-2 flex items-center justify-between">
            <div className="col1 flex items-center gap-4">
              <TbTruckDelivery className="text-[70px]" />
              <span className="text-3xl">Free shipping</span>
            </div>
            <div className="col2">
              <p className="font-bold">
                Freee delivery now on your first order
              </p>
            </div>
            <div className="col3">
              <span className="font-bold">-Only $200*</span>
            </div>
          </div>
        </div>
      </section>
      <Slider3rd items={4} />

      <section>

         <Blog/>
      </section>
      
     
        
     
       <hr className=" bg-amber-300 my-4 border-t border-gray-400" />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
