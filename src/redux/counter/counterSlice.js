import { createSlice } from "@reduxjs/toolkit";

 const initialState ={
    cards:[],
    username:"Signin",
    email:""
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
            if(card.name === key){
               card.value = card.value+1
            }
           })
        },

        
       
        
        countdec : (state,action) =>{
         const key = action.payload
         state.cards.map((card)=>{
            if(card.name === key){
               if(card.value >1){
               card.value = card.value-1
               }
            }
         })
        },
      

        deletecart :(state,action)=>{
           const key = action.payload;
           console.log(key)
           state.cards = state.cards.filter((data) => data.name !== action.payload);
        },
        deleteallcart:(state,action) =>{
           state.cards = [];
        },
        addusername:(state,action) =>{
         state.username = action.payload
        },
        addemail:(state,action) =>{
         state.email = action.payload
        }
        
    }

 })
 export const {adddata,addvalue,deletecart,countdec,deleteallcart,addusername,addemail} = counterSlice.actions

 

 export default counterSlice.reducer