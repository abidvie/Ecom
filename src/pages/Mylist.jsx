import React from 'react';
import Myaccountsidebar from '../components/myaccountbar/Myaccountsidebar';
import { FaHeart, FaTrash } from 'react-icons/fa';

export default function MyList() {
  const wishlistItems = [
    {
      id: 1,
      name: 'Leather Backpack',
      price: '$89.99',
      image: 'https://via.placeholder.com/100',
    },
    {
      id: 2,
      name: 'Wireless Headphones',
      price: '$129.99',
      image: 'https://via.placeholder.com/100',
    },
    {
      id: 3,
      name: 'Smart Watch',
      price: '$199.99',
      image: 'https://via.placeholder.com/100',
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Myaccountsidebar />

      <div className="flex-1 p-8">
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">My Wishlist</h2>

          {wishlistItems.length === 0 ? (
            <p className="text-gray-500">Your wishlist is empty.</p>
          ) : (
            <div className="space-y-6">
              {wishlistItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="w-20 h-20 rounded-md object-cover" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
                      <p className="text-sm text-gray-600">{item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="p-2 bg-red-100 text-red-500 rounded-full hover:bg-red-200">
                      <FaTrash />
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
                      Move to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
