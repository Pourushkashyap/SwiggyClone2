import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { adddata,deletecart,addvalue,countdec } from '../redux/counter/counterSlice'

function Card({src,name,discount,tittle,rating,mintime,maxtime,place,slide,width,cart,value }) {
  const dispatch = useDispatch();
  const [visible,setvisible]  = useState(true);
  
  const data = {
    src,
    name,
    discount,
    tittle,
    rating,
    mintime,
    maxtime,
    place,
    slide,
    width,value
  }

  const handlecard = () =>{
    dispatch(adddata(data))
    console.log(data)
    setvisible(false)
    setTimeout(()=>{
      setvisible(true)
    },1000)
  }

 

  
  
  return (
    <div  className={`${width} shrink-0  mb-3 `} style={{
      transform: `translateX(-${slide * 100}%)` 
    }}>
        <div className='group h-[182px] rounded-[15px] overflow-hidden relative  ' >
            <img className='group-hover:scale-110  object-cover w-full h-full' src={src} alt={name} />
       <div className='image-overlay absolute w-full h-full top-0 flex items-end p-2 text-[16px] md:text-[25px] font-bold text-white tracking-tighter'>
         {discount}
       </div>
        </div>
       <div className='mt-3 text-xl font-bold'>
        {tittle}
        
       </div>
       <div>
       <Star className="inline"/> {rating}
       <span className='ml-2'> {mintime}-{maxtime} mins</span>
       </div >
       <div className="text-slate-700">
        {name}
        <br />
        {place}
       </div>
      {cart && <div onClick={handlecard} className='cursor:pointer h-10  px-4 py-2 shadow-lg rounded-[20px] bg-blue-950 flex text-center text-white w-[200px]'>
       {   visible && <div className='flex text-center justify-center h-full w-full'>Add to Cart</div>}
       {!visible && <div className='flex text-center justify-center h-full w-full font-bold'>. . .</div>}
       </div>}

       
    </div>
  )
}

export default Card

{/* <button onClick={handlecard}  className='cursor:pointer  px-4 py-2 shadow-lg rounded-[20px] bg-blue-950 text-white'>
{ visible && <div>Add to Cart</div> }</button> */}


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
