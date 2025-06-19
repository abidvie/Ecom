// import React from 'react';
// import { FaWallet, FaGift, FaShoppingBag, FaUser, FaMapMarkerAlt } from 'react-icons/fa';

// export default function MyAccount() {
//   return (
//     <div className="min-h-screen bg-gray-50 flex mt-3">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white shadow-md p-6">
//         <div className="flex flex-col items-center">
//           <div className="w-24 h-24 bg-gray-200 rounded-full mb-3"></div>
//           <h2 className="text-lg font-semibold">Denis Holland</h2>
//           <p className="text-sm text-gray-500">38.00$ Balance</p>
//         </div>

//         <nav className="mt-10 space-y-4 text-sm">
//           <div className="flex items-center gap-2 text-gray-700 cursor-pointer"><FaWallet /> My Wallet</div>
//           <div className="flex items-center gap-2 text-gray-700 cursor-pointer"><FaGift /> My Rewards</div>
//           <div className="flex items-center gap-2 text-gray-700 cursor-pointer"><FaShoppingBag /> My Orders</div>
//           <div className="flex items-center gap-2 text-blue-500 font-semibold cursor-pointer"><FaUser /> Personal Information</div>
//           <div className="flex items-center gap-2 text-gray-700 cursor-pointer"><FaGift /> Rewards</div>
//           <div className="flex items-center gap-2 text-gray-700 cursor-pointer"><FaMapMarkerAlt /> Addresses</div>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-10">
//         <div className="bg-white shadow-md rounded-lg p-8">
//           <h1 className="text-2xl font-semibold mb-1">Personal Information</h1>
//           <p className="text-sm text-gray-500 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

//           <div className="grid grid-cols-2 gap-6">
//             <div>
//               <label className="text-sm font-medium text-gray-700">First name</label>
//               <input type="text" defaultValue="Denis" className="mt-1 block w-full border rounded-md p-2 border-gray-300" />
//             </div>
//             <div>
//               <label className="text-sm font-medium text-gray-700">Last name</label>
//               <input type="text" className="mt-1 block w-full border rounded-md p-2 border-gray-300" />
//             </div>
//             <div className="col-span-2">
//               <label className="text-sm font-medium text-gray-700">Email</label>
//               <input type="email" defaultValue="denis.holland@company.com" className="mt-1 block w-full border rounded-md p-2 border-gray-300" />
//             </div>
//             <div>
//               <label className="text-sm font-medium text-gray-700">Phone</label>
//               <div className="flex gap-2">
//                 <select className="border p-2 rounded-md border-gray-300">
//                   <option value="EG">🇪🇬 +20</option>
//                   <option value="BD">🇧🇩 +880</option>
//                   <option value="US">🇺🇸 +1</option>
//                 </select>
//                 <input type="tel" placeholder="(123) 456-7890" className="flex-1 border p-2 rounded-md border-gray-300" />
//               </div>
//             </div>
//             <div>
//               <label className="text-sm font-medium text-gray-700">Date of Birth</label>
//               <input type="date" className="mt-1 block w-full border rounded-md p-2 border-gray-300" />
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }


import React from 'react';
import { FaWallet, FaGift, FaShoppingBag, FaUser, FaMapMarkerAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Myaccountsidebar from '../components/myaccountbar/Myaccountsidebar';

export default function MyAccount() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Myaccountsidebar />

      <div className="flex-1 p-8">
        <div className="bg-white shadow-md rounded-xl p-8">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">Personal Information</h1>
          <p className="text-sm text-gray-500 mb-8">
            Keep your account details up to date. This helps us provide a better service.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-gray-700">First name</label>
              <input type="text" placeholder="Denis" className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Last name</label>
              <input type="text" placeholder="Holland" className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input type="email" placeholder="denis.holland@company.com" className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Phone</label>
              <div className="flex gap-2 mt-1">
                <select className="p-3 border border-gray-300 rounded-lg">
                  <option value="EG">EG +20</option>
                  <option value="BD">BD +880</option>
                  <option value="US">US +1</option>
                </select>
                <input type="tel" placeholder="(123) 456-7890" className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Date of Birth</label>
              <input type="date" className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>

          <div className="mt-8 text-right">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}




