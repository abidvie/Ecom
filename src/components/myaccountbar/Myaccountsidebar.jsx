import React from 'react';
import { FaWallet, FaGift, FaShoppingBag, FaUser, FaMapMarkerAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout, toggleLogin } from '../../store/slices/Loginslice';

export default function  Myaccountsidebar() {
    const logoutdispatch=useDispatch();
  return (
    <aside className="w-65 bg-white shadow-md p-6 min-h-screen">
      <div className="flex flex-col items-center mb-6">
        <div className="w-24 h-24 bg-gray-200 rounded-full mb-3"></div>
        <h2 className="text-lg font-bold">Denis Holland</h2>
        <p className="text-sm text-gray-500">38.00$ Balance</p>
      </div>

      <nav className="space-y-4 text-sm">
        <NavLink to="/myprofile" className={({ isActive }) => `flex items-center gap-2 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}>
          <FaWallet /> My Profile
        </NavLink>

        <NavLink to="/mylist" className={({ isActive }) => `flex items-center gap-2 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}>
          <FaGift /> My List
        </NavLink>

        <NavLink to="/myorders" className={({ isActive }) => `flex items-center gap-2 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}>
          <FaShoppingBag /> My Orders
        </NavLink>

        <NavLink to="/" className={({ isActive }) => `flex items-center gap-2 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}>
          <FaUser /> <span onClick={()=>{alert("are you want to log out")
            logoutdispatch(logout())}}>Log out</span>
        </NavLink>

        {/* <NavLink to="/rewards-details" className={({ isActive }) => `flex items-center gap-2 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}>
          <FaGift /> Rewards
        </NavLink>

        <NavLink to="/addresses" className={({ isActive }) => `flex items-center gap-2 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}>
          <FaMapMarkerAlt /> Addresses
        </NavLink> */}
      </nav>
    </aside>
  );
}

