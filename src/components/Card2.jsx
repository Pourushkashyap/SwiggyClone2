
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { adddata, deletecart, addvalue, countdec } from '../redux/counter/counterSlice'

function Card2({imageId , name , category, price,value }) {

   const data ={
    name,
    imageId,
    category,
    price,
   }
  
  const dispatch = useDispatch()
  

  

  

  const removecard = () => {
    dispatch(deletecart(name))
   
  }

  const additem = () => {
    dispatch(addvalue(name))
  }
  const subtractitem = () => {
    dispatch(countdec(name))
  }

  return (
    <div className="flex justify-between max-w-[1200px] mx-auto items-center border-b p-4">
    <div className="flex flex-col items-center ">
      {/* <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-green-500"
      /> */}
      <div className="ml-4">
        <h3 className="text-lg font-medium"> {name}</h3>
        <p className="text-gray-600">{price}</p>
        <button onClick={removecard} className=" px-2 border border-gray-700 flex justify-center items-center rounded-lg">
        Remove to Cart.
      </button>
      </div>
      
    </div>
    <div className="relative">
      <img
       src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/" +  imageId }
        alt={name}
        className="h-44 w-44 object-cover rounded-lg"
      />
        <div className="absolute bottom-2 right-4 bg-white py-1 px-4 rounded-lg flex items-center shadow-lg">
          <button
            onClick={subtractitem}
            className="px-2 py-1 text-lg bg-gray-200 rounded-lg hover:bg-gray-300 transition"
          >
            -
          </button>
          <span className="mx-4 text-lg">{value}</span>
          <button
            onClick={additem}
            className="px-2 py-1 text-lg bg-gray-200 rounded-lg hover:bg-gray-300 transition"
          >
            +
          </button>
        </div>
           

      
    </div>
    
  </div>
  )
}

export default Card2


{/* <div className="flex gap-2 ">
              <button
                onClick={additem}
                className="px-2 border border-gray-700 flex justify-center items-center rounded-lg"
              >
                +
              </button>
              {value}
              <button
                onClick={subtractitem}
                className="px-2 border border-gray-700 flex justify-center items-center rounded-lg"
              >
                -
              </button>
            </div> */}



// const Star = (props) => {
//   return (
//     <svg
//       className={props.className}
//       width={20}
//       height={20}
//       viewBox="0 0 20 20"
//       fill="none"
//       role="img"
//       aria-hidden="true"
//       strokecolor="rgba(2, 6, 12, 0.92)"
//       fillcolor="rgba(2, 6, 12, 0.92)"
//     >
//       <circle
//         cx={10}
//         cy={10}
//         r={9}
//         fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
//       />
//       <path
//         d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
//         fill="white"
//       />
//       <defs>
//         <linearGradient
//           id="StoreRating20_svg__paint0_linear_32982_71567"
//           x1={10}
//           y1={1}
//           x2={10}
//           y2={19}
//           gradientUnits="userSpaceOnUse"
//         >
//           <stop stopColor="#21973B" />
//           <stop offset={1} stopColor="#128540" />
//         </linearGradient>
//       </defs>
//     </svg>
//   )
// }

// {!cart && (
//   <div className="flex gap-2 mt-2">
//     <button
//       onClick={additem}
//       className="px-2 border border-gray-700 flex justify-center items-center rounded-lg"
//     >
//       +
//     </button>
//     {value}
//     <button
//       onClick={subtractitem}
//       className="px-2 border border-gray-700 flex justify-center items-center rounded-lg"
//     >
//       -
//     </button>
//   </div>
// )}
// {!cart && (
//   <div
//     onClick={removecard}
//     className="cursor:pointer h-10 px-4 py-2 shadow-lg rounded-[20px] bg-blue-950 flex text-center text-white w-[200px] mt-2"
//   >
//     <div className="flex text-center justify-center h-full w-full">
//       Remove to Cart
//     </div>
//   </div>
// )}