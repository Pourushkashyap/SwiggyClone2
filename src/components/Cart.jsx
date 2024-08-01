import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import Card2 from './Card2'
function Cart() {
    const datas = useSelector((state) => state.cards)
 
    return (
      <>
      <div className='max-w-[1200px] mx-auto px-2'>
        <div className='flex my-3 items-center justify-between'>
          <div className='text-[25px] font-bold'>Itmes in Cart</div>
        </div>
        <div className='space-y-3'>
          {datas.map((data, index) => (
            <Card2
              key={index}
              src={data.src}
              name={data.name}
              discount={data.discount}
              tittle={data.tittle}
              rating={data.rating}
              mintime={data.mintime}
              maxtime={data.maxtime}
              place={data.place}
              slide={data.slide}
              width={data.width}
              cart={false}
              value={data.value}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Cart;
















