import React, { useEffect, useState } from 'react'
import Card from './Card';

import { FaArrowRight,FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';


function TopRest() {
    const [slide,setslide] = useState(0)
     const [data,setdata] = useState([])
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

   useEffect( ()=>{
    const fetchdata = async () => {
        // https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.00480&lng=75.94630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

    try{
      const response =await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.900965&lng=75.8572758&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING ')
      const d =await response.json();
      // console.log(d);
      
       const grid = d?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      //  console.log("grid is: ",grid);
      
      setdata(grid);
      // console.log("the data is",data);
    }
    catch(err){
        console.log("the error is: ",err) 
    }
    
}
fetchdata();
   },[])

   const nextslide = () => {
    setslide(prevSlide => (prevSlide + 3) % data.length); // Loop back to start
};

const prevslide = () => {
    setslide(prevSlide => (prevSlide - 3 + data.length) % data.length); // Loop back to the end
};


   return (
    <div className="max-w-[1200px] mx-auto px-2">
      {/* Header with navigation arrows */}
      <div className="flex my-3 items-center justify-between">
        <div className="text-[20px] md:text-[25px] font-bold">
          Top restaurant chains in Ludhiana
        </div>
        <div className="flex">
          <div
            onClick={prevslide}
            className="cursor-pointer w-[30px] h-[30px] flex justify-center items-center bg-[#e2e2e7] rounded-full mx-2"
          >
            <FaArrowLeft />
          </div>
          <div
            onClick={nextslide}
            className="cursor-pointer w-[30px] h-[30px] flex justify-center items-center bg-[#e2e2e7] rounded-full mx-2"
          >
            <FaArrowRight />
          </div>
        </div>
      </div>

      {/* Responsive cards grid */}
      <div className="flex gap-3 overflow-x-scroll ">
        {data.map((restaurant, index) => (
         <Link
         key={index}
          to={`/restaurent/${restaurant.info.id}`}
          state={{ restaurant }}
          >
            <Card
              width="w-full md:w-[273px]"
              {...restaurant}
              {...restaurant?.info}
              cart={false}
              slide={slide}
              {...restaurant?.info?.badgesV2}
              {...restaurant?.info?.sla}
              {...restaurant?.info?.aggregatedDiscountInfoV3}
            />
            </Link>
          
        ))}


{/* {data.map((restaurant, index) => (
          <a
            key={index}
            href={restaurant?.cta?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[230px] md:min-w-[270px] lg:min-w-[320px] transition-transform transform hover:scale-105"
          >
            <Card
              width="w-full md:w-[273px]"
              {...restaurant}
              {...restaurant?.info}
              cart={false}
              slide={slide}
              {...restaurant?.info?.badgesV2}
              {...restaurant?.info?.sla}
              {...restaurant?.info?.aggregatedDiscountInfoV3}
            />
          </a>
        ))} */}
      </div>

      <hr className="my-4 border-[1px]" />
    </div>
  );
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