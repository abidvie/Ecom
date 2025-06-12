// import React, { useState } from "react";
// import FormGroup from "@mui/material/FormGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";

// function Itemsidebar() {
//   return (
//     <aside className="sidebaritem">
//       <div className="box">
//         <h3 className="">Shop By Category</h3>
//         <div className="scroll">
//           <FormGroup>
//             <FormControlLabel
//               control={<Checkbox  size="small"/>}
//               label="Fashion"
//             />
//               <FormControlLabel
//               control={<Checkbox  size="small"/>}
//               label="Electronics"
//             />
//               <FormControlLabel
//               control={<Checkbox  size="small"/>}
//               label="Bags"
//             />
//               <FormControlLabel
//               control={<Checkbox  size="small"/>}
//               label="Footware"
//             />
//               <FormControlLabel
//               control={<Checkbox size="small" />}
//               label="Groceries"
//             />
//               <FormControlLabel
//               control={<Checkbox size="small" />}
//               label="Beauty"
//             />
//               <FormControlLabel
//               control={<Checkbox  size="small"/>}
//               label="Wellness"
//             />
//               <FormControlLabel
//               control={<Checkbox  size="small"/>}
//               label="Jewellery"
//             />

//           </FormGroup>
//         </div>
//       </div>
//     </aside>
//   );
// }

// export default Itemsidebar;

import { Collapse } from "react-collapse";
import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./itemsidebar.css";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import Button from "@mui/material/Button";

function Itemsidebar() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [catagoty,setcatagory]=useState(false);
  const [availible,setavailible]=useState(false);
  const [size,setsize]=useState(false);

  const categories = [
    "Fashion",
    "Electronics",
    "Bags",
    "Footware",
    "Groceries",
    "Beauty",
    "Wellness",
    "Jewellery",
    "abid",
    "ajkshd",
  ];
    const availibility = [
  "In stock",
  "Not in stock"
  ];
      const sizecatagories = [
  "Small",
  "Medium",
  "Large",
  "XL"
  ];

  const handleCheckboxChange = (category) => (event) => {
    if (event.target.checked) {
      setSelectedCategories((prev) => [...prev, category]);
    } else {
      setSelectedCategories((prev) => prev.filter((item) => item !== category));
    }
  };

  console.log("Selected:", selectedCategories); // This logs selected items

  return (
    <>
    <div className="filter1">
      <h3 className="mb-2">Shop By Category
        <Button onClick={()=>{setcatagory(!catagoty)}}>{catagoty?<FaAngleUp/>:<FaAngleDown/>}</Button>
      </h3>
      
      <aside className="sidebaritem ">
        <Collapse isOpened={catagoty}>
          <div className="box">
            <div className="scroll">
              <FormGroup className="">
                {categories.map((category, index) => (
                  <FormControlLabel
                    className="bg-amber-300"
                    key={index}
                    control={
                      <Checkbox
                        size="small"
                        checked={selectedCategories.includes(category)}
                        onChange={handleCheckboxChange(category)}
                      />
                    }
                    label={category}
                  />
                ))}
              </FormGroup>
            </div>
          </div>
        </Collapse>
      </aside>
    </div>
    <div className="filter2">
      <h3 className="mb-2 flex items-center gap-16">Availibility
        <Button onClick={()=>{setavailible(!availible)}}>{availible?<FaAngleUp/>:<FaAngleDown/>}</Button>
      </h3>
      
      <aside className="sidebaritem ">
        <Collapse isOpened={availible}>
          <div className="box">
            <div className="scroll">
              <FormGroup className="">
                {availibility.map((category, index) => (
                  <FormControlLabel
                    className="bg-amber-300"
                    key={index}
                    control={
                      <Checkbox
                        size="small"
                        checked={selectedCategories.includes(category)}
                        onChange={handleCheckboxChange(category)}
                      />
                    }
                    label={category}
                  />
                ))}
              </FormGroup>
            </div>
          </div>
        </Collapse>
      </aside>
    </div>
     <div className="filter3">
      <h3 className="mb-2 flex items-center gap-16">Size
        <Button onClick={()=>{setsize(!size)}}>{size?<FaAngleUp/>:<FaAngleDown/>}</Button>
      </h3>
      
      <aside className="sidebaritem ">
        <Collapse isOpened={size}>
          <div className="box">
            <div className="scroll">
              <FormGroup className="">
                {sizecatagories.map((category, index) => (
                  <FormControlLabel
                    className="bg-amber-300"
                    key={index}
                    control={
                      <Checkbox
                        size="small"
                        checked={selectedCategories.includes(category)}
                        onChange={handleCheckboxChange(category)}
                      />
                    }
                    label={category}
                  />
                ))}
              </FormGroup>
            </div>
          </div>
        </Collapse>
      </aside>
    </div>


    </> 
     );
}

export default Itemsidebar;
