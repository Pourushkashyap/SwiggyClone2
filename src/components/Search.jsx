import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { useDispatch } from 'react-redux';

import Card2 from './Card2';

function Search() {
  const data = [];
  const [input, setInput] = useState('');
  const dispatch = useDispatch()

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

   


   
  

  const searchdata = (e) => {
    e.preventDefault();
    console.log(input)
   
    for(let i=0;i<datas.length;i++){
      if(datas[i].name === input){
        data.push(datas[i])
         console.log(data)
      }
     }
  };

  return (
    <div className="max-w-[1000px]  mx-auto mt-[70px] p-2 rounded-sm">
      <form onSubmit={searchdata}  className="border border-gray-500 w-[900px] m-4 flex mx-auto">
        <input
          className="h-full w-full border-none focus:outline-none p-2"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search for restaurant and good"
        />
        <button type="submit" className="font-bold p-2">
          <IoIosSearch className="font-bold text-2xl" />
        </button>
      </form>
      <div>
      <Card2 width={"w-full md:w-[273px]"} {...data}  cart={true} value={1} />
      </div>
    </div>
  );
}

export default Search;
