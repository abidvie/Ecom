import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ReviewTabPanel from "./ReviewTabPanel";

function Productreview() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="container">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="productdescription" value="1" />
                <Tab label="product Details" value="2" />
                <Tab label="Reviews" value="3" />
              </TabList>
            </Box>
       
            <TabPanel value="1">
  <div className="container">
    <div className="productdescription space-y-3 text-gray-700">
      <h2 className="text-xl font-semibold">Product Description</h2>
      <p>
        This premium-quality product is designed to deliver optimal performance and exceptional durability. Whether for daily use or special occasions, it offers unmatched style and comfort.
      </p>
      <ul className="list-disc list-inside">
        <li>Made from eco-friendly materials</li>
        <li>Lightweight and easy to carry</li>
        <li>Modern design suitable for all ages</li>
        <li>Backed by a 1-year warranty</li>
      </ul>
    </div>
  </div>
</TabPanel>

<TabPanel value="2">
  <div className="container">
    <div className="productDetails space-y-3 text-gray-700">
      <h2 className="text-xl font-semibold">Product Details</h2>
      <table className="table-auto w-full text-sm">
        <tbody>
          <tr className="border-b">
            <td className="py-2 font-medium">Brand</td>
            <td>XYZ Corp</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 font-medium">Material</td>
            <td>100% Cotton</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 font-medium">Color</td>
            <td>Black, White, Blue</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 font-medium">Weight</td>
            <td>500g</td>
          </tr>
          <tr>
            <td className="py-2 font-medium">Dimensions</td>
            <td>25cm x 15cm x 10cm</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</TabPanel>

<TabPanel value="3">
  
  <ReviewTabPanel/>
 
</TabPanel>

          </TabContext>
        </Box>
      </div>
    </>
  );
}

export default Productreview;
