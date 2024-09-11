import React from 'react'
import Card from './Card'
import { useState,useEffect } from 'react'

function OnlineDelivery() {
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
            src: "image/Lunchbox.jpeg",
            discount: "₹125 OFF ABOVE ₹349",
            tittle: "Lunch Box - Meals and Thalis",
            rating: 4.3,
            minTime: 30,
            maxTime: 35,
            name: "Biryani, North India",
            place: "Shastri Nagar"
        },
        {
            src: "image/McD.jpeg",
            discount: "₹70 OFF ABOVE ₹249",
            tittle: "McDonald's",
            rating: 4.4,
            minTime: 30,
            maxTime: 35,
            name: "American",
            place: "Rawaton Ka Bass"
        },
        {
            src: "image/Kajalcake.jpeg",
             discount: "₹100 OFF ABOVE ₹449",
            tittle: "Kajal's Cake",
            rating: 4.5,
            minTime: 35,
            maxTime: 40,
            name: "Cake",
            place: "Chopsani Housing Board"
        }
       ]
       const [data,setdata] = useState([])

       useEffect( ()=>{
        const fetchdata = async () => {
            // https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.00480&lng=75.94630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
    
        try{
          const response =await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.00480&lng=75.94630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
          const d =await response.json();
          console.log(d);
          
           const grid = d?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
           console.log("grid is: ",grid);
          
          setdata(grid);
          console.log("the data is",data);
        }
        catch(err){
            console.log("the error is: ",err) 
        }
        
    }
    fetchdata();
       },[])

       return (
        <div className="max-w-[1200px] px-4 mx-auto">
          <div className="flex flex-col sm:flex-row my-3 items-center justify-between">
            <div className="text-[20px] sm:text-[25px] font-bold text-center sm:text-left">
              Restaurants with online food delivery in Ludhiana
            </div>
          </div>
          
         
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {data.map((restaurant, index) => {
              return (
                <Card
                  key={index}
                  width={"w-full"}
                  {...restaurant}
                  {...restaurant?.info}
                  cart={true}
                  slide={null}
                  {...restaurant?.info?.badgesV2}
                  {...restaurant?.info?.sla}
                  {...restaurant?.info?.aggregatedDiscountInfoV3}
                />
              );
            })}
          </div>
          <hr className="my-4 border-[1px]" />
        </div>
      );
    }
    
    export default OnlineDelivery;
