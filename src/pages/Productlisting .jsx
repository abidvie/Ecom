import React, { useState } from "react";

import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

import GrainIcon from "@mui/icons-material/Grain";
import Sidebar from "../components/navigation/Sidebar";
import Itemsidebar from "../components/Sidebarwrapper/Itemsidebar";
import Productitem from "../components/Homeslider/tabcomponenet/Productitem";
import Productslider from "../components/Homeslider/tabcomponenet/Productslider";

function Productlisting() {
   const [selectedOption, setSelectedOption] = useState("");
    const handleChange = (e) => {
    setSelectedOption(e.target.value);
    console.log("Selected:", e.target.value);
  };
  return (
    <section className="bg-red-400 p-1">
      <div className="container pt-2 pb-2">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            href="/"
            className="link"
          >
            Home
          </Link>
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            href="/material-ui/getting-started/installation/"
            className=""
          >
            Fashion
          </Link>
        </Breadcrumbs>
      </div>

      <div className="container flex gap-3">
        <div className="sidebarwrapper w-[25%] max-h-full p-1.5">
          <Itemsidebar />
        </div>

        <div className="rightcontenet w-75% ">
          <div className="bg-amber-300 mt-1 mb-2 flex justify-between items-center">
            <h1>Products</h1>
          
            <div className="fileterby flex gap-2 justify-center  items-center">
              <label for="sort">Sort By</label>

           <select
        id="sort"
        name="option"
        value={selectedOption}
        onChange={handleChange}
        className="border px-2 py-1 rounded"
      >
        <option value="">--Please choose an option--</option>
        <option value="sales">Sales, Highest to Lowest</option>
        <option value="atoz">A to Z</option>
        <option value="priceHigh">Price High to Low</option>
        <option value="priceLow">Price Low to High</option>
      </select>
            </div>
          </div>

          <div className="grid grid-cols-4 md:grid-cols-4 gap-4">
            <Productitem />
            <Productitem />
            <Productitem />
            <Productitem />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Productlisting;
