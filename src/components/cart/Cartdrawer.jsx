import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Cartdrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };



const DrawerList = (
  <div className="p-4 h-full flex flex-col justify-between">
    {/* Cart Header */}
    <div className="mb-4 border-b pb-2">
      <h2 className="text-xl font-semibold text-white">🛒 Shopping Cart</h2>
    </div>

    {/* Cart Items */}
    <div className="flex-1 overflow-y-auto space-y-4">
      {[1, 2, 3].map((item, index) => (
        <div key={index} className="flex items-center justify-between bg-white p-3 rounded-lg shadow">
          <div className="flex items-center gap-3">
            <img
              src="https://via.placeholder.com/60"
              alt="product"
              className="w-14 h-14 rounded object-cover"
            />
            <div>
              <h4 className="text-base font-medium">Product Name</h4>
              <p className="text-sm text-gray-500">$25.00</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-2 py-1 bg-gray-200 rounded">-</button>
            <span>1</span>
            <button className="px-2 py-1 bg-gray-200 rounded">+</button>
          </div>
        </div>
      ))}
    </div>

    {/* Cart Footer */}
    <div className="pt-4 border-t">
      <div className="flex justify-between text-white text-lg mb-2">
        <span>Total:</span>
        <span>$75.00</span>
      </div>
      <button className="w-full bg-white text-black font-semibold py-2 rounded hover:bg-gray-100 transition">
        Proceed to Checkout
      </button>
         <button className="w-full bg-white text-black font-semibold py-2 rounded hover:bg-gray-100 transition mt-2.5">
        <Link to={'/cart'}>View Cart</Link>
      </button>
    </div>
  </div>
);


  return (
    <div>
      <Button className='' onClick={toggleDrawer(true)}><FaCartPlus className='text-[25px]'/></Button>
     
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
  <Box
    sx={{ width: 500, bgcolor: 'amber.300' }} 
    role="presentation"
   
    className="bg-amber-800" 
  >
    {DrawerList}
  </Box>
</Drawer>
    </div>
  );
}

export default Cartdrawer