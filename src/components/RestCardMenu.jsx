import React from 'react'
import Restaurent from './Restaurent'

function RestCardMenu( {imageId , name , category, price }) {
  return (
   


    <div className="flex justify-between max-w-[1200px] mx-auto items-center border-b p-4">
    <div className="flex items-center">
      {/* <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-green-500"
      /> */}
      <div className="ml-4">
        <h3 className="text-lg font-medium"> {name}</h3>
        <p className="text-gray-600">{price}</p>
      </div>
    </div>
    <div className="relative">
      <img
       src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/" +  imageId }
        alt="Cheese Pasta"
        className="h-20 w-20 object-cover rounded-lg"
      />
      <button className="absolute bottom-0 left-0 bg-green-500 text-white px-4 py-1 rounded-lg">
        ADD
      </button>
    </div>
    
  </div>
  )
}

export default RestCardMenu
