import React from "react";
import img from "../sliderimg/productitem1.webp";
import img12 from '../sliderimg/banner2.jpg'
import Rating from "@mui/material/Rating";
import { FaHeartbeat } from "react-icons/fa";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";
import Button from "@mui/material/Button";

function Productitem() {
  return (
    <div className="productitem ">
      <div className="imgrapper p-1.5 relative w-[220px] group bg-amber-50">
        <img className="h-[200px] w-full " src={img} />
        <img className=" transition-all duration-500 h-[212px] w-full absolute top-0  left-0 opacity-0 group-hover:opacity-1000" src={img12} />
        <span className="  discount  top-[10px] left-[10px] absolute bg-red-600 font-bold rounded-sm">
          -10%
        </span>
        <div className=" transition-all duration-400 actions absolute top-[-20px]  group-hover:top-[15px] right-[-8px] flex flex-col opacity-0 group-hover:opacity-100 ">
          <Button>
            <MdOutlineZoomOutMap className="text-2xl text-black hover:bg-red-500 rounded-sm hover:text-white " />
          </Button>
          <Button>
            <IoGitCompareOutline className="text-2xl text-black hover:bg-red-500 rounded-sm hover:text-white" />
          </Button>
          <Button>
            <FaHeartbeat className="text-2xl text-black hover:bg-red-500 rounded-sm hover:text-white hover:rounded-4xl" />
          </Button>
        </div>
      </div>
      <div className="info">
        <h5>brand name</h5>
        <h3>Saree with blouse piece</h3>
      </div>
      <Rating
        name="half-rating-read"
        defaultValue={2.5}
        precision={0.5}
        readOnly
      />

      <div className="itemprice">
        <span
          className="line-through mr-2
        "
        >
          $58.00
        </span>
        <span>%50.00</span>
      </div>
    </div>
  );
}

export default Productitem;




