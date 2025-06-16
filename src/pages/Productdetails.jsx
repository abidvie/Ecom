import React, { useState } from "react";
import ProductZoomer from "../components/productzoom/ProductZoomer";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { FaCartArrowDown } from "react-icons/fa";
import Productreview from "../components/productreview/Productreview";
function Productdetails() {
  const [qty, setqty] = useState("1");
  const [sizebg, setsizebg] = useState("");
  return (
    <>
      <div className="container flex gap-3 ">
        <div className="productxoomercontainer w-[30%] p-1.5 h-[55vh] overflow-hidden">
          <ProductZoomer />
        </div>

        <div className="productcontent bg-amber-100 w-[70%] p-1.5">
          <h1 className="text-3xl font-bold"> product name</h1>
          <div className="flex flex-col gap-2.5">
            <span className="text-gray-400">Brands:brands name</span>
            <Stack spacing={1}>
              {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}

              <Rating
                name="half-rating-read"
                defaultValue={2}
                precision={0.5}
                readOnly
              />
            </Stack>
            <span className="price">$58.00</span>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloribus at vel corporis reprehenderit fugit maxime fugiat.
              Pariatur officiis sequi incidunt facilis possimus neque ipsum id
              corrupti explicabo. Similique, ratione sapiente?
            </p>

            <div className="flex">
              <h1>SIze:</h1>

              <div
                className={`border-1 m-0.5 ${
                  sizebg === "1" ? "bg-red-500" : "bg-white"
                }`}
              >
                <Button onClick={() => setsizebg("1")}>S</Button>
              </div>
              <div
                className={`border-1 m-0.5 ${
                  sizebg === "2" ? "bg-red-500" : "bg-white"
                }`}
              >
                <Button onClick={() => setsizebg("2")}>L</Button>
              </div>

              <div
                className={`border-1 m-0.5 ${
                  sizebg === "3" ? "bg-red-500" : "bg-white"
                }`}
              >
                <Button onClick={() => setsizebg("3")}>M</Button>
              </div>
              <div
                className={`border-1 m-0.5 ${
                  sizebg === "4" ? "bg-red-500" : "bg-white"
                }`}
              >
                <Button onClick={() => setsizebg("4")}>XL</Button>
              </div>
            </div>

            <div className="quantitysection mt-4">
              <label className="mr-2 font-semibold">Quantity:</label>
              <input
                type="number"
                min="1"
                value={qty}
                onChange={(e) => setqty(e.target.value)}
                className="border px-2 py-1 w-20 rounded"
              />
              <p className="mt-2 text-sm text-gray-600">
                Selected Quantity: {qty}
              </p>
              <Button>Add to cart<FaCartArrowDown/></Button>
            </div>
          </div>
        </div>

     
      </div>
         <section className="reviewsection">
             <Productreview/>
        </section>
    </>
  );
}

export default Productdetails;
