import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="container">
      <div className="flex items-center justify-evenly w-full  mt-3 bg-amber-500">
        <div className="col1 flex flex-col items-center group">
          <FaShippingFast className="text-5xl group-hover:-translate-y-3 group-hover:duration-500 group-hover:text-red-500" />
          <p className="font-[500] text-2xl">free shipping</p>
          <p className="">for all ordrs over $100</p>
        </div>
        <div className="col1 flex flex-col items-center group">
          <FaShippingFast className="text-5xl group-hover:-translate-y-3 group-hover:duration-500 group-hover:text-red-500" />
          <p className="font-[500] text-2xl">free shipping</p>
          <p className="">for all ordrs over $100</p>
        </div>
        <div className="col1 flex flex-col items-center group">
          <FaShippingFast className="text-5xl group-hover:-translate-y-3 group-hover:duration-500 group-hover:text-red-500" />
          <p className="font-[500] text-2xl">free shipping</p>
          <p className="">for all ordrs over $100</p>
        </div>
        <div className="col1 flex flex-col items-center group">
          <FaShippingFast className="text-5xl group-hover:-translate-y-3 group-hover:duration-500 group-hover:text-red-500" />
          <p className="font-[500] text-2xl">free shipping</p>
          <p className="">for all ordrs over $100</p>
        </div>
      </div>

      <div className="belofooter flex items-center justify-between gap-3">
        <div className="col1 flex flex-col gap-3 w-[25%]">
          <h1>Contact us</h1>
          <p>Classyshop - Mega Super Store 507-Union Trade Centre France</p>
          <Link to={"/"}>sarkerdipto2055@gmail.com</Link>
          <h1>01533027756</h1>
        </div>
        <div className="col2 w-[25%] flex flex-col gap-3">
            <h1>Products</h1>
            <p>price drops</p>
            <p>New products</p>
            <p>Contact us</p>
            <p>Stores</p>
        </div>
        <div className="col3 w-[25%] flex flex-col gap-3">
            <h1>Our company</h1>
            <p>Delivery</p>
            <p>Legal Notice</p>
            <p>Terms and condition of use</p>
            <p>About Us</p>
            <p>Log in</p>
        </div>
        <div className="col4 w-[25%] flex flex-col gap-3">
            <h1>Subscribe to newsletter</h1>
            <p>Subscribe to our latest newsletter to get news about special discounts.</p>
            <form>
                <input type="text" placeholder="Your email address"/>
                <button className="">Subscribe</button>
            </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
