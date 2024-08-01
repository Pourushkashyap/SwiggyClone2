import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { TbRosetteDiscount } from "react-icons/tb";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

function Header() {
  const [toggle,settoggle] = useState(false)
  const datas = useSelector((stata) => stata.cards)
  
  

  const handletoggle =() =>{
    settoggle((prevtoggle) => !prevtoggle);
  }

  const links =[
    {
       icon:"",
       name:'',
       route:'/'

    },
    {
      icon:<IoIosSearch/>,
      name:"Search",
      route:"/search",

    },
    {
      icon:<TbRosetteDiscount/>,
      name:"Offers",
      route:"/offer",
      sup: "New"
    },{
      icon:<IoHelpBuoyOutline/>,
      name:"Help",
      route:"/help"

    },
    {
      icon:<FontAwesomeIcon icon={faUser} className="inline" />,
      name:"Signin",
      route:"/signin",
    },{
      icon:"",
      name:'Cart',
      route:"cart",
      sup:`(${datas.length})`

    }
  ]


  return (
 
    <>
   <div className=' black-overplay h-full w-full fixed duration-500  ' style={{
    opacity:toggle ? 1 : 0,
    visibility:toggle ? "visible" : "hidden",
    zIndex:99999
    
   }} onClick={handletoggle}  >
          <div onClick={(e) =>{
            e.stopPropagation();
          }} className='w-[500px] bg-white h-full absolute duration-[400ms]' style={{
            left:toggle ? '0%' : "-100%"
          }}>
             
          </div>

   </div>

   <header className='p-[15px]  shadow-xl text-[#686b78] sticky top-0 bg-white z-[9999]  '>
   <div className='max-w-[1200px] mx-auto  items-center flex '>

    <div className='w-[100px] h-[60px] flex items-center justify-center '>
       <img src='assets/logo.png' className='w-[50%] h-full' alt="" />
    </div>
    <div >
      <span className='font-bold border-b-[3px] border-[black]'>Ratanada </span> Jodhpur, Rajasthan, India <RxCaretDown onClick={handletoggle} fontSize={25} className='inline font-bold text-[#fc8019] cursor-pointer'/>
    </div>

    <nav className='hidden md:flex list-none gap-10   ml-auto text-[18px] font-semibold'>
    
      {
         links.map((link,index) =>{
          return <NavLink to={link.route} key={index} className={({isActive}) =>`${isActive ? "text-[#fc8019]" : "text-gray-700"} flex cursor-pointer hover:text-[#fc8019] items-center gap-2`}  >
            {link.icon}
            {link.name}
         <sup>{link.sup}</sup>
          </NavLink>
          
         }) 


      }
     

    </nav>
   </div>
   </header>
   </>
   
  )
}

export default Header

{/* <li key={index} className='flex cursor-pointer hover:text-[#fc8019] items-center gap-2'>
{link.icon}
{link.name}
</li> */}

{/* <i class="fa-solid fa-cart-shopping"></i> */}

{/* <FontAwesomeIcon icon="fa-regular fa-user" /> */}
{/* <FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> */}
// className='flex cursor-pointer hover:text-[#fc8019] items-center gap-2'
