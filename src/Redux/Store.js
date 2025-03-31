import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./Slices/OrderSlice";
import productreducer from "./Slices/productSlice";
import categoriesReducer from './Slices/categoriesSlice'

 
const store = configureStore({
    reducer:{
        order : orderReducer,
        product : productreducer,
        category : categoriesReducer ,
    }
})

export default store;