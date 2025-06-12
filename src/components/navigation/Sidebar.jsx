// // material ui -drawer
// import * as React from "react";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import Button from "@mui/material/Button";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
// import { CiMenuBurger } from "react-icons/ci";
// import { IoCloseSharp } from "react-icons/io5";
// export default function Sidebar() {
//   const [open, setOpen] = React.useState(false);
//   const [openSubmenu, setOpenSubmenu] = React.useState(false);
//   const toggleDrawer = (newOpen) => () => {
//     setOpen(newOpen);
//   };
//   const toggleSubmenu = () => {
//     setOpenSubmenu(!openSubmenu);
//   };

//   const DrawerList = (
//     <Box sx={{ width: 250 }} role="presentation">
//       <div className="flex items-center gap-18 ">
//         <h1>Shop by catagories</h1>
//         <IoCloseSharp fontSize={"21px"} onClick={toggleDrawer(false)} />
//       </div>
//       <ul style={{ listStyle: "none", padding: 0 }}>
//         <li>
//           <button
//             onClick={toggleSubmenu}
//             style={{ background: "none", border: "none", cursor: "pointer" }}
//           >
//             Fashion1 {openSubmenu ? "▲" : "▼"}
//           </button>
//           {openSubmenu && (
//             <ul style={{ marginLeft: "20px", listStyle: "circle" }}>
//               <li
//                 onClick={() => {
//                   console.log("men 1 clicked");
//                 }}
//               >
//                 Men1
//               </li>
//               <li>Women1</li>
//               <li>Accessories1</li>
//             </ul>
//           )}
//         </li>
//         <li>
//           <button
//             onClick={toggleSubmenu}
//             style={{ background: "none", border: "none", cursor: "pointer" }}
//           >
//             Fashion2 {openSubmenu ? "▲" : "▼"}
//           </button>
//           {openSubmenu && (
//             <ul style={{ marginLeft: "20px", listStyle: "circle" }}>
//               <li
//                 className="cursor-pointer"
//                 onClick={() => {
//                   console.log("men 2 clicked");
//                 }}
//               >
//                 Men2
//               </li>
//               <li>Women2</li>
//               <li>Accessories2</li>
//             </ul>
//           )}
//         </li>
//       </ul>
//     </Box>
//   );

//   return (
//     <div>
//       {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
//       <button onClick={toggleDrawer(true)} className="shop_cat_btn">
//         <CiMenuBurger className="text-[10px]" />
//         shop by catagories
//       </button>
//       <Drawer open={open} onClose={toggleDrawer(false)}>
//         {DrawerList}
//       </Drawer>
//     </div>
//   );
// }



// Sidebar.jsx
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
    if (!newOpen) setOpenSubmenuIndex(null);
  };

  const handleSubmenuToggle = (index) => {
    setOpenSubmenuIndex(openSubmenuIndex === index ? null : index);
  };

  const categories = [
    {
      title: "Fashion1",
      subItems: ["Men1", "Women1", "Accessories1"],
    },
    {
      title: "Fashion2",
      subItems: ["Men2", "Women2", "Accessories2"],
    },
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <div className="flex justify-between items-center p-4">
        <h1 className="font-semibold text-lg">Shop by Categories</h1>
        <IoCloseSharp fontSize={24} onClick={toggleDrawer(false)} className="cursor-pointer" />
      </div>
      <ul className="pl-4">
        {categories.map((category, index) => (
          <li key={index} className="mb-2">
            <button
              onClick={() => handleSubmenuToggle(index)}
              className="w-full text-left text-sm font-medium"
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              {category.title} {openSubmenuIndex === index ? "▲" : "▼"}
            </button>
            {openSubmenuIndex === index && (
              <ul className="pl-4 list-disc">
                {category.subItems.map((item, i) => (
                  <li key={i} className="cursor-pointer" onClick={() => console.log(`${item} clicked`)}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </Box>
  );

  return (
    <div>
      <button onClick={toggleDrawer(true)} className="shop_cat_btn flex items-center gap-1">
        <CiMenuBurger className="text-base" />
        Shop by Categories
      </button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default Sidebar;
