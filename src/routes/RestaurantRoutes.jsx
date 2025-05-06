import React from 'react'
import RestaurantHeader from '../Components/RestaurantSection/RestaurantHeader';
import RestaurantSidebar from '../Components/RestaurantSection/RestaurantSidebar';
import { Outlet, Route, Routes } from 'react-router-dom';
import RestaurantDashboard from '../Components/RestaurantSection/RestaurantDashboard';

import RestaurantMenu from '../Components/RestaurantSection/RestaurantMenu';
import RestaurantCategory from '../Components/RestaurantSection/RestaurantCategory';
import RestaurantCategoryOffer from '../Components/RestaurantSection/RestaurantCategoryOffer';
import RestaurantAddDeliveryBoy from '../Components/RestaurantSection/RestaurantAddDeliveryBoy';
import RestaurantDeliveryBoysList from '../Components/RestaurantSection/RestaurantDeliveryBoysList';
import RestaurantEmployeeDataList from '../Components/RestaurantSection/RestaurantEmployeeDataList';
import RestaurantAddEmployee from '../Components/RestaurantSection/RestaurantAddEmployee';
import RestaurantOrders from '../Components/RestaurantSection/RestaurantOrders';
import RestaurantStockManagement from '../Components/RestaurantSection/RestaurantStockManagement';
import RestaurantReports from '../Components/RestaurantSection/RestaurantReports';
import RestaurantOrderRequest from '../Components/RestaurantSection/RestaurantOrderRequest';
import RestaurantDeliveryBoysManagement from '../Components/RestaurantSection/RestaurantDeliveryBoysManagement';



const RestaurantLayout = () => {
  return (
    <div >
      <RestaurantHeader/>
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
        <Route path='menu' element={<RestaurantMenu/>}/>
        <Route path="category/category" element={<RestaurantCategory/>}/>
         <Route path='category/category-offer' element={<RestaurantCategoryOffer/>}/>
      <Route path='deliveryboy/add-delivery-boy' element={<RestaurantAddDeliveryBoy/>}/>
      <Route path='deliveryboy/delivery-boy-management' element={<RestaurantDeliveryBoysManagement/>}/>
        <Route path='deliveryboy/delivery-boy-list' element={<RestaurantDeliveryBoysList/>}/>
        <Route path='employee/employee-list' element={<RestaurantEmployeeDataList/>}/>
        <Route path='employee/add-employee' element={<RestaurantAddEmployee/>}/>
        <Route path='order/orders' element={<RestaurantOrders/>}/>
        <Route path='order/order-request' element={<RestaurantOrderRequest/>}/>
        <Route path='stock-management' element={<RestaurantStockManagement/>}/>
        
      
         <Route path='reports' element={<RestaurantReports/>}/> 
        </Route>
       
       
      </Routes>
    </div>
  )
}

export default RestaurantRoutes
