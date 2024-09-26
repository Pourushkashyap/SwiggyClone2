import React, { useEffect, useState } from 'react';
import { IoIosSearch } from 'react-icons/io';

import Card from './Card';



function Search() {
  const [data1,setdata1] = useState([]);
  const [cicleDish , setCircleDish] = useState([])


  const [data,setdata] = useState([])
   const [input,setinput] = useState('');

  useEffect(()=>{
     const fetchdata = async () =>{
   try{
    
    const datas =await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.00480&lng=75.94630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    const json =await datas.json();
    const grid = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log(grid);
    setdata1(grid);
    
   }
   catch(err){
    console.log("error is: ",err);
   }
     }
     fetchdata();
     fetchDishData()

  },[])


  async  function fetchDishData() {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=31.00480&lng=75.94630");
      const jsonDishData = await data.json();
      console.log(jsonDishData)
      const gridDish = await jsonDishData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info
      console.log( "grid dish ", gridDish)

      setCircleDish(gridDish)

    } catch (error) {
      console.log("Dish Data error",error)
    }
  }


  const handleform = (e) => {
    e.preventDefault();
    console.log(input);
   
    const filteredData = data1.filter((restaurant) => {
      const cuisines = restaurant?.info?.cuisines; 
   console.log(cuisines[0]);
      // if (cuisines && cuisines.length > 0) {
      //   return cuisines[0].toLowerCase() === input.toLowerCase(); 
      // }
      if (cuisines && cuisines.length > 0) {
        // Check if any cuisine in the array matches the input
        return cuisines.some((cuisine) =>
          cuisine.toLowerCase().includes(input.toLowerCase())
        );
      }
      return false;
    });

    console.log(filteredData);
    setdata(filteredData); 
  };
  // const handleform = (e) =>{
  //   e.preventDefault();
  //   const filterdata = data1.filter((restaurent) =>{
  //     const restname = restaurent?.info?.name;
  //     if(restname && (restname.toLowerCase() === input.toLowerCase())){
  //       return restaurent;
  //     }
  //     else{
  //       return false;
  //     }
  //   });
  //   setdata(filterdata)
  // }
  


  return (
    <>
    <div className="max-w-[1000px]  mx-auto mt-[70px] p-2 rounded-sm">
      <form
       onSubmit={handleform}
        className="border border-gray-500 w-[900px] m-4 flex mx-auto">
        <input
          className="h-full w-full border-none focus:outline-none p-2"
          type="text"
          value={input}
          onChange={(e) =>setinput(e.target.value)}
         
          placeholder="Search for restaurant and good"
        />
        <button type="submit" className="font-bold p-2">
          <IoIosSearch className="font-bold text-2xl" />
        </button>
      </form>
     

      <div className='max-w-[1200px] px-2 mx-auto   '>
      
      <h1 className='font-bold text-2xl ml-80 mt-7 mb-4'>Populer Cousines</h1>
      <div className='flex max-w-[900px] mx-auto  overflow-hidden '>
      {cicleDish.map((dish, i) => {
            return (
              <img  className='w-20 mb-4'
                key={i} // Ensure each element has a unique key
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${dish.imageId}`}
                alt={`dish.name || Dish image ${i}`} // Add alt attribute for accessibility
              />
            );
          })}
      </div>
      {/* <div className='flex my-3 items-center justify-between'></div> */}
      <div className='flex gap-3 '>
{
        data.map((restaurant , index) => {
            return <Card
             key={index} 
             width={"w-full md:w-[273px]"}
               {...restaurant}
                {...restaurant?.info}
                 cart={true} 
                 slide={null} 
                  {...restaurant?.info?.badgesV2}
                   {...restaurant?.info?.sla} 
                    {...restaurant?.info?.aggregatedDiscountInfoV3} />
        })
    }
</div>
        </div>
    </div>
    </>
  );
}

export default Search;
