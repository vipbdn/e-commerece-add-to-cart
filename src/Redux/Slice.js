import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart: ()=>{

        }
    }
})

export default cartSlice.reducer