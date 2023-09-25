import {configureStore} from '@reduxjs/toolkit'
import { createSlice } from "@reduxjs/toolkit";
import { Stack } from 'react-bootstrap';

const initialState = {
    cart: []
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart: (state, action)=>{

            let index = state.cart.findIndex((item)=> item.id === action.payload.id)

            if(index>=0){
                state.cart[index].qnty += 1
            }
            else{

            let tem = {...action.payload, qnty:1}
            state.cart = [...state.cart,tem]
        
           
            }
        },
        removeItem : (state, action)=>{
            state.cart.splice(action.payload, 1)

        },
        removeAllItems:(state, action)=>{
            state.cart = []
        },
        increaseItem: (state, action)=>{
            let index = state.cart.findIndex((item)=> item.id === action.payload.id)
            state.cart[index].qnty += 1
        },
        decreaseItem: (state, action)=>{
            let index = state.cart.findIndex((item)=> item.id === action.payload.id)
            state.cart[index].qnty -= 1
        }
    }
})

const Store = configureStore({
reducer: cartSlice.reducer
})

export const {addToCart, removeItem, removeAllItems, decreaseItem, increaseItem} = cartSlice.actions

export default Store