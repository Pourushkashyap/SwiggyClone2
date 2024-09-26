import React from 'react'
import Restaurent from './Restaurent'
import { useDispatch } from 'react-redux'
import { adddata,deletecart,addvalue,countdec } from '../redux/counter/counterSlice'

function RestCardMenu( {imageId , name , category, price }) {
 
   price = price/100;

  const dispatch = useDispatch();
   const data ={
    imageId,
    name,
    category,
    price,
    value:0
   }

   const handlecard = () =>{
    dispatch(adddata(data))
    console.log(data)
    
   
  }



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
        alt={name}
        className="h-44 w-44 object-cover rounded-lg"
      />
      <button onClick={handlecard} className=" absolute bottom-0 mx-10 px-8 bg-white text-green-700 font-bold py-1 rounded-lg">
        ADD
      </button>
    </div>
    
  </div>
  )
}

export default RestCardMenu
