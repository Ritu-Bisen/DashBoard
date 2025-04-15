import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./Slices/OrderSlice";
import productreducer from "./Slices/productSlice";
import categoriesReducer from './Slices/categoriesSlice'
import stockReducer from './Slices/stockmanagementSlice'
import quantityReducer from './Slices/stockQuantitySlice'
import salonReducer from './Slices/salonSlicees/salonServicesSlice'
import employeeDetail from './Slices/salonSlicees/salonEmployeeDataSlice'
 
const store = configureStore({
    reducer:{
        order : orderReducer,
        product : productreducer,
        category : categoriesReducer ,
        stock : stockReducer , 
        quantity :quantityReducer,
        service : salonReducer,
       employeeDetails : employeeDetail 

    }
})

export default store;