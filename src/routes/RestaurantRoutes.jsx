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
        <Route path='menus' element={<RestaurantMenu/>}/>
        <Route path="category/category" element={<RestaurantCategory/>}/>
         <Route path='category/category-offer' element={<RestaurantCategoryOffer/>}/>
      <Route path='deliveryboy/add-delivery-boy' element={<RestaurantAddDeliveryBoy/>}/>
        <Route path='deliveryboy/delivery-boy-list' element={<RestaurantDeliveryBoysList/>}/>
        <Route path='employee/employee-list' element={<RestaurantEmployeeDataList/>}/>
        <Route path='employee/add-employee' element={<RestaurantAddEmployee/>}/>
        <Route path='order/orders' element={<RestaurantOrders/>}/>
       {/*   <Route path='billing' element={<SalonBillingList/>}/>
        
      
        <Route path='reports' element={<SalonReport/>}/> */}
        </Route>
       
       
      </Routes>
    </div>
  )
}

export default RestaurantRoutes
