import React, { useState } from 'react'
import Card from './Card';
import { FaArrowRight,FaArrowLeft } from "react-icons/fa6";
function TopRest() {
    const [slide,setslide] = useState(0)

   const datas = [
    {
        src:"image/Pizza.jpeg",
        name:"Pizzas",
        discount:'Items ₹179',
        rating:4.2,
        mintime:30,
        maxtime:40,
        place:"New Jodhpur",
        tittle:"Pizza Hut",

    },
    {
        src:"image/Kajju Katli.jpeg",
        name:"Sweets,South Indian",
        discount:'₹50 OFF ABOVE ₹199 ',
        rating:4.5,
        mintime:35,
        maxtime:40,
        place:"Shastri Nagar",
        tittle:" Janta Sweet Home",
    },
    {
        src:"image/panner.jpeg",
        name:"North India, Thails",
        discount:'₹85 OFF ABOVE ₹149 ',
        rating:4.3,
        mintime:35,
        maxtime:40,
        place:"Sardarpura",
        tittle:"Parihaar Bhojnalay",
    },
    {
        src:"image/Icecream2.jpeg",
        name:"Desserts,Ice Cream",
        discount:'₹70 OFF ABOVE ₹149 ',
        rating:4.5,
        mintime:25,
        maxtime:25,
        place:"Chopsani housing Board",
        tittle:"Kwality Walls Frozen",
    },
    {
        src:"image/BiryaniNorth.jpeg",
        name:"Biryani, North India",
        discount:'₹1-5 OFF ABOVE ₹179 ',
        rating:4.4,
        mintime:30,
        maxtime:35,
        place:"Shastri Nagar",
        tittle:"The Good Bowl",
    },
    {
        src:"image/Deserticecream.jpeg",
        name:"Desserts, Ice Cream",
        discount:'₹100 OFF ABOVE ₹499 ',
        rating:4.7,
        mintime:25,
        maxtime:30,
        place:"Sardarpura",
        tittle:"NIC Ice Creams",
    },
    {
        src:"image/dosh.jpeg",
        name:"South Indian",
        discount:'Items at ₹109 ',
        rating:4.0,
        mintime:35,
        maxtime:40,
        place:"Chapsani Housing Board",
        tittle:"Dosh Center",
    },
    {
        src:"image/Lunchbox.jpeg",
        name:"South Indian",
        discount: "₹125 OFF ABOVE ₹349",
        rating: 4.3,
        minTime: 30,
        maxTime: 35,
        place: "Shastri Nagar",
        tittle:"Lunch Box - Meals and Thalis",
    },
    {
        src: "image/McD.jpeg",
        name: "American",
        discount: "₹70 OFF ABOVE ₹249",
        rating: 4.4,
        minTime: 30,
        maxTime: 35,
        place: "Rawaton Ka Bass",
        tittle: "McDonald's",
    },
    {
        src: "image/Kajalcake.jpeg",
        name: "Cake",
        discount: "₹100 OFF ABOVE ₹449",
        rating: 4.5,
        minTime: 35,
        maxTime: 40,
        place: "Chopsani Housing Board",
        tittle: "Kajal's Cake",
    }
   ]

   const nextslide = () =>{
    if(datas.length -4 == slide) return 
    setslide(slide + 3);
   }
   const prevslide = () =>{
    setslide(slide-3)
   }


  return (
    <div className='max-w-[1200px] mx-auto  px-2 '>
    <div className='flex my-3 items-center justify-between'>
    <div className='text-[25px] font-bold'>Top restaurant chains in Jodhpur</div>
    <div className='flex '>
        <div onClick={prevslide}  className=' cursor-pointer w-[30px] h-[30px] flex justify-center items-center bg-[#e2e2e7] rounded-full mx-2' >
          <FaArrowLeft />
        </div>
        <div  onClick={nextslide} className='  cursor-pointer w-[30px] h-[30px] flex justify-center items-center bg-[#e2e2e7] rounded-full mx-2' >
          <FaArrowRight />
        </div>
    </div>
    </div>
    <div className='flex gap-3 overflow-hidden'>
    {
        datas.map((d,i) => (
             <Card key={i} width={"w-full md:w-[273px]"} {...d} slide={slide} cart={true} value={1} />
        ))
    }
    </div>
    <hr className='my-4 border-[1px]'/>
    </div>
  )
}

export default TopRest


// {
//     src: "image/Lunchbox.jpeg",
//     name: "Biryani, North India",
//     discount: "₹125 OFF ABOVE ₹349",
//     rating: 4.3,
//     minTime: 30,
//     maxTime: 35,
//     place: "Shastri Nagar",
//     title: "Lunch Box - Meals and Thalis",
// },