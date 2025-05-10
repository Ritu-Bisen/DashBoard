import React from 'react'
//import RestaurantHeader from '../Components/RestaurantSection/RestaurantHeader';
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
import CategoryManagement from '../Components/MartSection/CategoryManagement';
import CategoryOfferTable from '../Components/MartSection/CategoryOfferTable';
import DeliveryBoyList from '../Components/MartSection/DeliveryBoyList';
import AddDeliveryBoy from '../Components/MartSection/AddDeliveryBoy';
import DeliveryBoyManagement from '../Components/MartSection/DeliveryBoyManagement';
import DeliveryBoyRequest from '../Components/MartSection/DeliveryBoyRequest';
import AddEmployee from '../Components/MartSection/AddEmployee';
import EmployeeList from '../Components/MartSection/EmployeeList';
import SellerProfile from '../Components/SellerProfile';
import WhiteHeader from '../Components/RestaurantSection/WhiteHeader';



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
        <Route path="category/category" element={<CategoryManagement/>}/>
         <Route path='category/category-offer' element={<CategoryOfferTable/>}/>
      <Route path='deliveryboy/add-delivery-boy' element={<AddDeliveryBoy/>}/>
      <Route path='deliveryboy/delivery-boy-management' element={<DeliveryBoyManagement/>}/>
        <Route path='deliveryboy/delivery-boy-list' element={<DeliveryBoyList/>}/>
        <Route path='deliveryboy/delivery-boy-request' element={<DeliveryBoyRequest/>}/>
        <Route path='employee/employee-list' element={<EmployeeList/>}/>
        <Route path='employee/add-employee' element={<AddEmployee/>}/>
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
