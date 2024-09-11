import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import Card2 from './Card2'
function Cart() {
    const datas = useSelector((state) => state.cards)

    // const data = {
    //   name ,
    //    cuisines,
    //    cloudinaryImageId,
    //     areaName, 
    //     avgRating,
    //      slaString,
    //      width,
    //      slide,
    //      cart,
    //      header,
    //      subHeader
    // }
 
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
              name={data.name}
              cuisines={data.cuisines}
              cloudinaryImageId={data.cloudinaryImageId}
              areaName={data.areaName}
              avgRating={data.avgRating}
              slaString={data.slaString}
              width={data.width}
              slide={data.slide}
              header={data.header}
              subHeader={data.subHeader}
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
















