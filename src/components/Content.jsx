import React from 'react'

function Content() {
    return (
        <div className="flex-grow p-8 bg-white text-center">
          <div className="mt-8">
            <p className="text-orange-500 mb-4">Your orders with Swiggy will be listed here.</p>
            <div className="mb-8">
              <img 
                src="https://via.placeholder.com/100" 
                alt="No orders" 
                className="mx-auto mb-4"
              />
              <p className="text-gray-500">Go ahead and find some awesome restaurants near you...</p>
              <h2 className="text-gray-500 font-bold text-xl">No Orders</h2>
              <p className="text-gray-400">You haven't placed any order yet.</p>
            </div>
          </div>
        </div>
      );
}

export default Content