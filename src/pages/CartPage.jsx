import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Product One',
      price: 25.0,
      quantity: 1,
      size: 'M',
      image: 'https://via.placeholder.com/80',
    },
    {
      id: 2,
      name: 'Product Two',
      price: 35.0,
      quantity: 2,
      size: 'L',
      image: 'https://via.placeholder.com/80',
    },
    {
      id: 3,
      name: 'Product Three',
      price: 35.0,
      quantity: 2,
      size: 'XL',
      image: 'https://via.placeholder.com/80',
    },
    {
      id: 4,
      name: 'Product Four',
      price: 35.0,
      quantity: 2,
      size: 'S',
      image: 'https://via.placeholder.com/80',
    },
  ]);

  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6">🛒 Shopping Cart</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-4">
            {cartItems.length === 0 ? (
              <p className="text-gray-600">Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-gray-500">Size: {item.size}</p>
                      <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="px-3 py-1 bg-gray-200 rounded">−</button>
                    <span>{item.quantity}</span>
                    <button className="px-3 py-1 bg-gray-200 rounded">+</button>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Summary */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md h-fit">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="border-t pt-4 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-50" disabled={cartItems.length === 0}>
             <Link to={'/billingdetails'}> Proceed to Checkout</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
