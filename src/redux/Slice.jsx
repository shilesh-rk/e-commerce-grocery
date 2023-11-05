import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems:[],
    totalQuantity:0,
}

export const cartPage = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addToCart : (state, action)=>{
            let find = state.cartItems.findIndex((itemIndex)=>itemIndex.id === action.payload.id)
            if(find>=0){
                state.cartItems[find].quantity +=1
            }else{
                state.cartItems.push(action.payload)
            }
            state.totalQuantity= state.totalQuantity+1
        },
        removeFromCart: (state, action)=>{
            return {...state,
            cartItems: state.cartItems.filter((item) => item.id !== action.payload.id),
        }
          },
    }
})

export const {addToCart, removeFromCart} = cartPage.actions

export default cartPage.reducer;