import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Card from './Card'
import Card2 from './Card2'
import { deleteallcart } from '../redux/counter/counterSlice'

function Cart() {
    const datas = useSelector((state) => state.cards) 
     const dispatch = useDispatch();
    const removeallcart = () =>{
        dispatch(deleteallcart());
    }
 
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
              
              category={data.category}
              name={data.name}
              imageId={data.imageId}
              price={data.price}
             
              value={data.value}
            />
          ))}
        </div>
        <button onClick={removeallcart} className='bg-orange-600 rounded-xl p-4 mt-4'>Remove all item from cart</button>
      </div>
    </>
  );
}

export default Cart;
















