import React from "react";
import ProductZoomer from "../components/productzoom/ProductZoomer";

function Productdetails() {
  return (
   <>
   <div className="container flex gap-3 ">
    <div className="productxoomercontainer w-[30%] bg-red-600 p-1.5 h-[55vh] overflow-hidden">
      <ProductZoomer/>
    </div>
   </div>
   </>
  );
}

export default Productdetails;
