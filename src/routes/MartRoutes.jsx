import React from 'react'
import MartOrders from '../pages/orders/MartOrders'
 import MartStockManagement from '../pages/stockManagement/MartStockManagement'
 import MartProduct from '../pages/product/MartProduct'
 import Category from '../pages/category/Category'
 import CategoryOffer from '../pages/category/CategoryOffer'
import { Outlet, Route, Routes } from 'react-router-dom'
 import SellerProfile from '../pages/SellerProfile';
 import MartReports from '../pages/reports/MartReports'
 import DeliveryBoyList from '../pages/deliveryBoy/DeliverBoyList'
 import MartOrderRequest from '../pages/orders/MartOrderRequest'
 import DeliveryBoyManagement from '../pages/deliveryBoy/DeliveryBoyManagement'
import Header from '../Components/headers/Header'
 import DeliveryBoyRequest from '../pages/deliveryBoy/DeliveryBoyRequest'
 import CreateDeliveryBoy from "../pages/deliveryBoy/CreateDeliveryBoy";
 import EmployeeList from "../pages/employee/EmployeeList";
 import MartDashboard from '../pages/dashboard/MartDashboard'
import MartSidebar from '../Components/sidebar/MartSidebar'
import CreateEmployee from '../pages/employee/CreateEmployee'
import DeliveryBoyCashCollection from '../pages/deliveryBoy/DeliveryBoyCashCollection'


const MartLayout = () => {
    return (
      <div >
        <Header/>
        <MartSidebar/>
        
        <div >
          <Outlet />
        </div>
      </div>
    );
  };

const MartRoutes = () => {
  return (
    <Routes >
      <Route element={<MartLayout />}>
        <Route index element={<MartDashboard/>} />
          <Route path='profile' element={<SellerProfile/>}/> {/* Default page at /mart */}
        <Route path="stockmanagement" element={<MartStockManagement />} />
        
        <Route path="product" element={<MartProduct />} />
        <Route path='order/order-request' element={<MartOrderRequest/>}/>
        <Route path='reports' element={<MartReports/>}/>
        <Route path="category/category" element={<Category />} />
        <Route path="category/category-offer" element={<CategoryOffer />} />
        <Route path="order/orders" element={<MartOrders />} />
      
         <Route path='deliveryboy/delivery-boy-cash-collection' element={<DeliveryBoyCashCollection/>}/>
        <Route path="deliveryboy/delivery-boy-add" element={<CreateDeliveryBoy />} />
        <Route path="deliveryboy/delivery-boy-management" element={<DeliveryBoyManagement/>} /> 
        <Route path="deliveryboy/delivery-boy-list" element={<DeliveryBoyList />} />
        <Route path="deliveryboy/delivery-boy-request" element={<DeliveryBoyRequest />} />
        <Route path="employee/add-employee" element={<CreateEmployee/>} />
        <Route path="employee/employee-list" element={<EmployeeList />} />

      </Route>
    </Routes>
  )
}

export default MartRoutes
