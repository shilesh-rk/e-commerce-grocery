import { configureStore } from "@reduxjs/toolkit";
import cartPage  from "./Slice";


export const store = configureStore({
    reducer:{
        itemsInCart:cartPage,
    }
})