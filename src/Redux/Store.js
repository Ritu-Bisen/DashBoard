import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./Slices/OrderSlice";
import productreducer from "./Slices/productSlice";
import categoriesReducer from './Slices/categoriesSlice'
import stockReducer from './Slices/stockmanagementSlice'
import quantityReducer from './Slices/stockQuantitySlice'
import salonReducer from './Slices/salonSlicees/salonServicesSlice'
import employeeDetailReducer from './Slices/salonSlicees/salonEmployeeDataSlice'
import appointmentReducer from './Slices/salonSlicees/salonAappointmentSlice'
import billingReducer from './Slices/salonSlicees/salonBillingSlice';
import authReducer from './Slices/salonSlicees/authSlice';
import deliveryBoyReducer from './Slices/deliveryBoyDataSlice';
import gymProductsReducer from './Slices/gymSlice/gymProductSlice'

const store = configureStore({
    reducer:{
        order : orderReducer,
        product : productreducer,
        category : categoriesReducer ,
        stock : stockReducer , 
        quantity :quantityReducer,
        service : salonReducer,
       employeeDetail : employeeDetailReducer ,
       appointmentList: appointmentReducer,
       billing: billingReducer,
       auth : authReducer,
       deliveryBoyData: deliveryBoyReducer,
       gymProducts:gymProductsReducer

    }
})

export default store;