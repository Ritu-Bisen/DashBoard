import React from 'react'
import Sidebar from '../Components/MartSection/Sidebar'
import OrderTable from '../Components/MartSection/OrderTable'
import StockManagementForm from '../Components/MartSection/StockManagementForm'
import ProductManagement from '../Components/MartSection/ProductManagement'
import CategoryManagement from '../Components/categories/CategoryManagement'
import CategoryOfferTable from '../Components/categories/CategoryOfferTable'
import { Outlet, Route, Routes } from 'react-router-dom'
import SellerProfile from '../Components/SellerProfile';
import Reports from '../Components/MartSection/Reports'
import Dashboard from '../Components/MartSection/Dashboard'
import AddDeliveryBoy from '../Components/deliveryboy/AddDeliveryBoy'
import DeliveryBoyList from '../Components/deliveryboy/DeliveryBoyList'
import OrderRequest from '../Components/MartSection/OrderRequest'
import DeliveryBoyManagement from '../Components/deliveryboy/DeliveryBoyManagement'
import Header from '../Components/MartSection/Header'
import DeliveryBoyRequest from '../Components/deliveryboy/DeliveryBoyRequest'
import AddEmployee from "../Components/employees/AddEmployee";
import EmployeeList from "../Components/employees/EmployeeList";


const MartLayout = () => {
    return (
      <div >
        <Header/>
        <Sidebar/>
        
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
        <Route index element={<Dashboard />} />
          <Route path='profile' element={<SellerProfile/>}/> {/* Default page at /mart */}
        <Route path="stockmanagement" element={<StockManagementForm />} />
        
        <Route path="product" element={<ProductManagement />} />
        <Route path='order/order-request' element={<OrderRequest/>}/>
        <Route path='reports' element={<Reports/>}/>
        <Route path="category/category" element={<CategoryManagement />} />
        <Route path="category/category-offer" element={<CategoryOfferTable />} />
        <Route path="order/orders" element={<OrderTable />} />
      
        <Route path="deliveryboy/delivery-boy-add" element={<AddDeliveryBoy />} />
        <Route path="deliveryboy/delivery-boy-management" element={<DeliveryBoyManagement/>} /> 
        <Route path="deliveryboy/delivery-boy-list" element={<DeliveryBoyList />} />
        <Route path="deliveryboy/delivery-boy-request" element={<DeliveryBoyRequest />} />
        <Route path="employee/add-employee" element={<AddEmployee />} />
        <Route path="employee/employee-list" element={<EmployeeList />} />
      </Route>
    </Routes>
  )
}

export default MartRoutes
