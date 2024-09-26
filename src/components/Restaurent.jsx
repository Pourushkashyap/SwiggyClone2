import React from 'react'
import { useState , useEffect } from 'react'
import RestCardMenu from './RestCardMenu.jsx';
import { useLocation } from "react-router-dom";
import { useParams } from 'react-router-dom';

function Restaurent() {
  const [restMenu , setRestMenu] = useState([]);
  const [data,setdata] = useState({});
  const [offer,setoffer] = useState([]);
  const [input,setinput] = useState('');

  const {id} = useParams();
  

  useEffect( () =>{
    const fetchdata = async() =>{
      try {
        const fetchdata = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.00480&lng=75.94630&restaurantId=${id}`)
        const data = await fetchdata.json();

        const element = await data.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
        const element2 = await data?.data?.cards[2]?.card?.card?.info;
        const element3 = await data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers
        setdata(element2)
        setoffer(element3);

        console.log(" data ", data)
        console.log("this is a element data ", element)

        setRestMenu(element)

        

      } catch (error) {
    console.log("error is: ",error) 
      }
    }
    fetchdata();
    
  },[] )


   const handlesearch  = (e) =>{
    e.preventDefault();
   if(!restMenu.length) return;

   const filteredData = restMenu.filter((restaurant) => {
    const name = restaurant?.card?.info.name?.toLowerCase();
    return name && name.includes(input.toLowerCase()); // Use includes for partial match
  });
    setRestMenu(filteredData)

   }

  return (
    <>
                 {/* <h1>Restraunt id: {resId}</h1> */}
    
          <div className="p-6 max-w-4xl mx-auto">
           <h1 className="text-3xl font-bold mb-2">{data.name}</h1>
           <p className="text-gray-500">{data?.sla?.minDeliveryTime}-{data?.sla?.maxDeliveryTime} mins</p>
          
          {/* Restaurant Card */}
          <div className="mt-4 p-6 rounded-3xl  shadow-lg bg-white">
            <div className=" justify-between items-center">
              <div>
                <span className=" font-bold"> <Star className="inline" /> {data.avgRating} {data.totalRatingsString}</span>
                <span className="ml-2 font-bold"> <span className='text-gray-500'>•</span> {data.costForTwoMessage}</span>
                <p className="mt-2 font-bold text-orange-500">{data.cuisines}</p>
                <p className="text-black-600"><b>Outlet </b> {data.areaName}</p>
                <p className="text-black-600 font-bold">{data?.sla?.minDeliveryTime}-{data?.sla?.maxDeliveryTime} mins</p>
              </div>
              {/* <div>
                <img  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restaurent.info.cloudinaryImageId} alt="" />
               </div> */}
              <hr className="my-4 border-[1px]" />
              <div>
                <p className="text-gray-600">{data?.expectationNotifiers?.[0]?.enrichedText ? (
      <p className="text-gray-600">{data.expectationNotifiers[0].enrichedText}</p>
    ) : null}</p>
              </div>
            </div>
          </div>
    
        
    <div className="mt-6">
    <h2 className="text-2xl font-bold mb-4">Deals for you</h2>
    <div className="flex gap-9xl space-x-4 overflow-hidden">
          {offer.map((offer,index) =>{
            return (
              
                <div className="px-[60px] py-2 border rounded-[20px] flex items-left shadow-lg bg-white text-center">
                  <div>
                  <p className="text-black-900 float-left font-bold">{offer.info.header}</p>
                  <p className="text-gray-500">{offer.info.couponCode}</p>
                  </div>
                </div>
             
             )
          })}
           </div>
          </div>
    
          {/* Search Bar */}
          <div className="mt-6 ">
            <div className='w-full flex text-center font-bold  items-center'> 🍽 MENU 🍽</div>
            <form onSubmit={handlesearch}>
              <input
               value={input}
               onChange={(e) => setinput(e.target.value)}
               type="text"
               placeholder="Search for dishes"
               className="w-full p-3 border items-center text-center flex border-gray-300 rounded-lg"
  />
</form>
          </div>
        
        <hr className="my-4 border-[1px]" />
        
    
        <div>
          <div className='pl-[150px] font-bold'>Recommended ({restMenu.length})</div>
          {
            restMenu.map(( restaurant , index) => (
    
              <RestCardMenu key={index} {...restaurant} {...restaurant?.card?.info}/>
            ))
          }
        </div>
        </div>
        </>
  )
}

export default Restaurent

const Star = (props) => {
  return (
      <svg
      className={props.className}
width={20}
height={20}
viewBox="0 0 20 20"
fill="none"
role="img"
aria-hidden="true"
strokecolor="rgba(2, 6, 12, 0.92)"
fillcolor="rgba(2, 6, 12, 0.92)"
>
<circle
  cx={10}
  cy={10}
  r={9}
  fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
/>
<path
  d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
  fill="white"
/>
<defs>
  <linearGradient
    id="StoreRating20_svg__paint0_linear_32982_71567"
    x1={10}
    y1={1}
    x2={10}
    y2={19}
    gradientUnits="userSpaceOnUse"
  >
    <stop stopColor="#21973B" />
    <stop offset={1} stopColor="#128540" />
  </linearGradient>
</defs>
</svg>
  )
}


