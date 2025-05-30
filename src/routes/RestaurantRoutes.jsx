import React from 'react'
import RestaurantSidebar from '../Components/sidebar/RestaurantSidebar';
import { Outlet, Route, Routes } from 'react-router-dom';

import RestaurantDashboard from '../pages/dashboard/RestaurantDashboard';

import RestaurantMenu from '../pages/product/RestaurantMenu';
import RestaurantOrders from '../pages/orders/RestaurantOrders';
import RestaurantStockManagement from '../pages/stockManagement/RestaurantStockManagement';
import RestaurantReports from '../pages/reports/RestaurantReports';
import RestaurantOrderRequest from '../pages/orders/RestaurantOrderRequest';

 import Category from '../pages/category/Category'
 import CategoryOffer from '../pages/category/CategoryOffer'
import DeliveryBoyList from '../pages/deliveryBoy/DeliverBoyList'
 import DeliveryBoyManagement from '../pages/deliveryBoy/DeliveryBoyManagement'
 import DeliveryBoyRequest from '../pages/deliveryBoy/DeliveryBoyRequest'
 import CreateDeliveryBoy from "../pages/deliveryBoy/CreateDeliveryBoy";
 import CreateEmployee from "../pages/employee/CreateEmployee";
 import EmployeeList from "../pages/employee/EmployeeList";
 import SellerProfile from "../pages/SellerProfile";
 import WhiteHeader from "../Components/headers/WhiteHeader";
import DeliveryBoyCashCollectionForm from '../Components/form/DeliveryBoyCashCollectionForm';



const RestaurantLayout = () => {
  return (
    <div >
      <WhiteHeader/>
      <RestaurantSidebar/>
      
      <div className='ml-2' >
        <Outlet />
      </div>
    </div>
  );
};
const RestaurantRoutes = () => {
  return (
    <div>
      <Routes>
        <Route element={<RestaurantLayout/>}> 
        <Route index element={<RestaurantDashboard/>}/>
        <Route path='profile' element={<SellerProfile/>}/>
        <Route path='menu' element={<RestaurantMenu/>}/>
        <Route path="category/category" element={<Category/>}/>
         <Route path='category/category-offer' element={<CategoryOffer/>}/>
      <Route path='deliveryboy/add-delivery-boy' element={<CreateDeliveryBoy/>}/>
      <Route path='deliveryboy/delivery-boy-management' element={<DeliveryBoyManagement/>}/>
        <Route path='deliveryboy/delivery-boy-list' element={<DeliveryBoyList/>}/>
        <Route path='deliveryboy/delivery-boy-request' element={<DeliveryBoyRequest/>}/>
        <Route path='employee/employee-list' element={<EmployeeList/>}/>
        <Route path='employee/add-employee' element={<CreateEmployee/>}/>
        <Route path='order/orders' element={<RestaurantOrders/>}/>
        <Route path='order/order-request' element={<RestaurantOrderRequest/>}/>
         <Route path='deliveryboy/delivery-boy-cash-collection' element={<DeliveryBoyCashCollectionForm/>}/>
        {/* <Route path='stock-management' element={<RestaurantStockManagement/>}/> */}
        
      
         <Route path='reports' element={<RestaurantReports/>}/> 
        </Route>
       
       
      </Routes>
    </div>
  )
}

export default RestaurantRoutes
