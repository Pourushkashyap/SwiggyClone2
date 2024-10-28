import React from 'react'

function sidebar() {
    return (
        <div className="w-64 bg-white p-4 shadow-lg">
          <ul>
            <li className="font-bold text-lg mb-4">Orders</li>
            <li className="text-gray-500 hover:text-black mb-4">Swiggy One</li>
            <li className="text-gray-500 hover:text-black mb-4">Favourites</li>
            <li className="text-gray-500 hover:text-black mb-4">Payments</li>
            <li className="text-gray-500 hover:text-black mb-4">Addresses</li>
            <li className="text-gray-500 hover:text-black">Settings</li>
          </ul>
        </div>
      );
}

export default sidebar