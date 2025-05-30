import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./Slices/OrderSlice";
import productreducer from "./Slices/productSlice";
import categoriesReducer from './Slices/categoriesSlice'
import stockReducer from './Slices/stockmanagementSlice'
import quantityReducer from './Slices/stockQuantitySlice'
import salonReducer from './Slices/salonSlicees/salonServicesSlice'

import appointmentReducer from './Slices/salonSlicees/salonAppointmentSlice';
import authReducer from './Slices/salonSlicees/authSlice';
import deliveryBoyReducer from './Slices/deliveryBoyDataSlice';
import gymProductsReducer from './Slices/gymSlice/gymProductSlice';
import gymOrdersReducer from './Slices/gymSlice/gymOrdersSlice';
import orderRequestReducer from './Slices/OrderRequestSlice';
import employeeReducer from './Slices/employeeSlice'
import restaurantMenuReducer from './Slices/restaurantSlice/restaurantMenuSlice'
import restaurantOrderReducer from './Slices/restaurantSlice/restaurantOrderSlice'
import restaurantOrderRequestReducer from './Slices/restaurantSlice/restaurantOrderRequestSlice'
import sellerReducer from './Slices/loginSellerSlice'
import gymServicesReducer from './Slices/gymSlice/gymServicesSlice'
import gymWorkoutReducer from './Slices/gymSlice/gymWorkoutSlice'
import gymNutritionReducer from './Slices/gymSlice/gymNutritionSlice'
import gymBannerReducer from './Slices/gymSlice/gymBannerSlice'
import restaurantReportReducer from './Slices/restaurantSlice/restaurantReportSlice'
import gymMemberReducer from './Slices/gymSlice/gymMemberSlice'
import reportReducer from './Slices/ReportsSlice'
import CashCollectionReducer from './Slices/cashCollectionSlice'

const store = configureStore({
    reducer:{
        order : orderReducer,
        product : productreducer,
        category : categoriesReducer ,
        stock : stockReducer , 
        quantity :quantityReducer,
        service : salonReducer,
       appointment: appointmentReducer,
     cashCollection:CashCollectionReducer,
       auth : authReducer,
       deliveryBoyData: deliveryBoyReducer,
       gymProducts:gymProductsReducer,
       gymOrders:gymOrdersReducer,
       orderRequest:orderRequestReducer,
       employee:employeeReducer,
       restaurantmenu:restaurantMenuReducer,
       restaurantOrder:restaurantOrderReducer,
       restaurantOrderRequest:restaurantOrderRequestReducer,
       seller:sellerReducer,
       gymservices:gymServicesReducer,
       gymworkout:gymWorkoutReducer,
       gymnutrition:gymNutritionReducer,
       gymBanner:gymBannerReducer,
       restaurantReport:restaurantReportReducer,
       gymMember:gymMemberReducer,
       report :reportReducer,

    }
})

export default store;