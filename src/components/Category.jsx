import React, { useEffect, useState } from 'react'
import { FaArrowRight,FaArrowLeft } from "react-icons/fa6";
function Category() {
    const [slide,setslide] = useState(0);
    const [category,setcategory] = useState([]);
    const prevslide= () =>{
     
      setslide(slide-3)
      
    }
    const nextslide = () =>{
      if(category.length -8 == slide) return 
      setslide(slide+3)
    }
   
 
  // const category = [
  //   {
  //     src: "assets/Biryani_2(1).jpeg",
  //   },
  //   {
  //       src:"assets/Burger.jpeg"
  //   },
  //   {
  //     src: "assets/Cakes(1).jpeg"
  //   },
  //   {
  //     src:"assets/Chinese.jpeg"
  //   },{
  //       src:"assets/Chole_Bature.jpeg"
  //   },
  //   {
  //     src:"assets/Dosa.jpeg"
  //   },
  //   {
  //     src:"assets/Gulab_Jamun.jpeg"
  //   },
  //   {
  //     src:"assets/Ice_Creams(1).jpeg"
  //   },
  //   {
  //     src:"assets/Idli(1).jpeg",
  //   },{
  //       src:"assets/Khichdi.jpeg"
  //   },
  //   {
  //     src:"assets/Noodles(1).jpeg"
  //   },
  //   {
  //     src:"assets/North_Indian_4(1).jpeg"
  //   },
  //   {
  //     src:"assets/Paratha.jpeg",
  //   },
  //   {
  //     src:"assets/Pasta(1).jpeg"
  //   },
  //   {
  //     src:"assets/Pizza(1).jpeg"
  //   },
  //   {
  //     src:"assets/Poori(2).jpeg"
  //   },
  //   {
  //     src:"assets/Pure_Veg.jpeg"
  //   },
  //   {
  //     src:"assets/Rolls(1).jpeg"
  //   },
  //   {
  //     src:"assets/Salad.jpeg"
  //   },
  //   {
  //     src:"assets/South_Indian_4(1).jpeg"
  //   }
  // ]

  useEffect(() =>{
      const fetchdata = async() =>{
        try{
           const datas =await fetch('https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=31.00480&lng=75.94630')
           const json =await datas.json();
           const grid = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info;
           console.log("categrory is:",grid)
           setcategory(grid);

        }catch(err){
          console.log("error is: ",err);
        }
      }
      fetchdata();
  },[])
  
  return (
    <>
    <div className='max-w-[1200px] mx-auto  '>
        <div className='flex my-3 items-center justify-between'>
        <div className='text-[25px] font-bold'>Whats's on your mind?</div>
        <div className='flex '>
            <div onClick={prevslide} className=' cursor-pointer w-[30px] h-[30px] flex justify-center items-center bg-[#e2e2e7] rounded-full mx-2' >
              <FaArrowLeft />
            </div>
            <div onClick={nextslide} className='  cursor-pointer w-[30px] h-[30px] flex justify-center items-center bg-[#e2e2e7] rounded-full mx-2' >
              <FaArrowRight />
            </div>
        </div>
        </div>
        <div className='flex  overflow-hidden'>
          {
            category.map((cate,index)=>{
                return(
                  <div style={{
                    transform: `translateX(-${slide * 100}%)`
                  }} key={index} className='w-[150px] shrink-0 duration-500'  >
                    <img  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" + cate.imageId} alt="abc" />
                  </div>
                )
            })
          }

        </div>
        <hr className='my-6 border-[1px]'/>
        
    </div>
    </>
  )
}

export default Category