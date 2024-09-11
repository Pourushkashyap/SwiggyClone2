import React from 'react';

const RestaurantSection = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-2">
      <div className="bg-white p-8 max-w-6xl w-full">
        {/* Best Places to Eat Across Cities */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Best Places to Eat Across Cities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <button className="border p-4 rounded-2xl">Best Restaurants in Bangalore</button>
            <button className="border p-4 rounded-2xl">Best Restaurants in Pune</button>
            <button className="border p-4 rounded-2xl">Best Restaurants in Mumbai</button>
            <button className="border p-4 rounded-2xl">Best Restaurants in Delhi</button>
            <button className="border p-4 rounded-2xl">Best Restaurants in Hyderabad</button>
            <button className="border p-4 rounded-2xl">Best Restaurants in Kolkata</button>
            <button className="border p-4 rounded-2xl">Best Restaurants in Chennai</button>
            <button className="border p-4 rounded-2xl">Best Restaurants in Chandigarh</button>
            <button className="border p-4 rounded-2xl">Best Restaurants in Ahmedabad</button>
            <button className="border p-4 rounded-2xl">Best Restaurants in Jaipur</button>
            <button className="border p-4 rounded-2xl">Best Restaurants in Nagpur</button>
            <button className="border p-4 rounded-2xl">Show More</button>
          </div>
        </div>

        {/* Best Cuisines Near Me */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Best Cuisines Near Me</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <button className="border p-4 rounded-2xl">Chinese Restaurant Near Me</button>
            <button className="border p-4 rounded-2xl">South Indian Restaurant Near Me</button>
            <button className="border p-4 rounded-2xl">Indian Restaurant Near Me</button>
            <button className="border p-4 rounded-2xl">Kerala Restaurant Near Me</button>
            <button className="border p-4 rounded-2xl">Korean Restaurant Near Me</button>
            <button className="border p-4 rounded-2xl">North Indian Restaurant Near Me</button>
            <button className="border p-4 rounded-2xl">Seafood Restaurant Near Me</button>
            <button className="border p-4 rounded-2xl">Bengali Restaurant Near Me</button>
            <button className="border p-4 rounded-2xl">Punjabi Restaurant Near Me</button>
            <button className="border p-4 rounded-2xl">Italian Restaurant Near Me</button>
            <button className="border p-4 rounded-2xl">Andhra Restaurant Near Me</button>
            <button className="border p-4 rounded-2xl">Show More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantSection;
