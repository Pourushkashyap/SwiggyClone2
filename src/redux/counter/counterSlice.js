import { createSlice } from "@reduxjs/toolkit";

 const initialState ={
    cards:[]
 }

 export const counterSlice = createSlice({
    name:'card',
    initialState,
    reducers:{
        adddata:(state,action) =>{
             state.cards.push(action.payload);
           console.log(action.payload);
        },

        addvalue : (state,action)=>{
           const key = action.payload
           state.cards.map((card) =>{
            if(card.src === key){
               card.value = card.value+1
            }
           })
        },

        
       
        
        countdec : (state,action) =>{
         const key = action.payload
         state.cards.map((card)=>{
            if(card.src === key){
               if(card.value >1){
               card.value = card.value-1
               }
            }
         })
        },
      

        deletecart :(state,action)=>{
           const key = action.payload;
           console.log(key)
           state.cards = state.cards.filter((data) => data.src !== action.payload);
        }
    }

 })
 export const {adddata,addvalue,deletecart,countdec} = counterSlice.actions

 

 export default counterSlice.reducer