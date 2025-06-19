import React from 'react';
import Myaccountsidebar from '../components/myaccountbar/Myaccountsidebar';

export default function MyOrder() {
  const orders = [
    {
      id: 'ORD123456',
      date: '2024-06-10',
      status: 'Delivered',
      total: '$129.99',
      items: 3,
    },
    {
      id: 'ORD123457',
      date: '2024-06-05',
      status: 'Shipped',
      total: '$89.49',
      items: 2,
    },
    {
      id: 'ORD123458',
      date: '2024-06-01',
      status: 'Processing',
      total: '$54.00',
      items: 1,
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Myaccountsidebar />

      <div className="flex-1 p-8">
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-6">My Orders</h2>

          {orders.length === 0 ? (
            <p className="text-gray-500">You have no orders yet.</p>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="p-4 border border-gray-200 rounded-lg flex flex-col md:flex-row md:items-center justify-between hover:shadow-sm transition"
                >
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Order ID: <span className="text-gray-800 font-medium">{order.id}</span></p>
                    <p className="text-sm text-gray-500">Date: {order.date}</p>
                    <p className="text-sm text-gray-500">Items: {order.items}</p>
                  </div>
                  <div className="text-right md:text-left mt-4 md:mt-0">
                    <p className="text-sm font-semibold text-gray-700">Total: {order.total}</p>
                    <p className={`text-sm font-medium mt-1 ${
                      order.status === 'Delivered'
                        ? 'text-green-600'
                        : order.status === 'Shipped'
                        ? 'text-blue-600'
                        : 'text-yellow-600'
                    }`}>
                      Status: {order.status}
                    </p>
                    <button className="mt-2 text-sm text-blue-600 hover:underline">View Details</button>
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
