import React from 'react'
import Sidebar from '../Components/MartSection/Sidebar'
import OrderTable from '../Components/MartSection/OrderTable'
import StockManagementForm from '../Components/MartSection/StockManagementForm'
import ProductManagement from '../Components/MartSection/ProductManagement'
import CategoryManagement from '../Components/MartSection/CategoryManagement'
import CategoryOfferTable from '../Components/MartSection/CategoryOfferTable'


//import DeliveryBoyManaged from '../Components/MartSection/DeliveryBoyManaged'
import DeliveryBoyCash from '../Components/MartSection/DeliveryBoyCash'
import { Outlet, Route, Routes } from 'react-router-dom'

//import OderRequest from '../Components/MartSection/OderRequest'
import Reports from '../Components/MartSection/Reports'
import Dashboard from '../Components/MartSection/Dashboard'
import Employee from '../Components/MartSection/Employee'
import AddDeliveryBoy from '../Components/MartSection/AddDeliveryBoy'
import DeliveryBoyList from '../Components/MartSection/DeliveryBoyList'
import OrderRequest from '../Components/MartSection/OrderRequest'
import AddEmployee from '../Components/MartSection/AddEmployee'
import EmployeeList from '../Components/MartSection/EmployeeList'


const MartLayout = () => {
    return (
      <div >
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
        <Route index element={<Dashboard />} /> {/* Default page at /mart */}
        <Route path="stockmanagement" element={<StockManagementForm />} />
        <Route path="product" element={<ProductManagement />} />
        <Route path='order/order-request' element={<OrderRequest/>}/>
        <Route path='reports' element={<Reports/>}/>
        <Route path="category/category" element={<CategoryManagement />} />
        <Route path="category/category-offer" element={<CategoryOfferTable />} />
        <Route path="order/orders" element={<OrderTable />} />
        <Route path="employee" element={<Employee/>} />
        <Route path="deliveryboy/delivery-boy-add" element={<AddDeliveryBoy />} />
        {/* <Route path="deliveryboy/delivery-boy-request" element={<DeliveryBoyRequest />} /> */}
        <Route path="deliveryboy/delivery-boy-list" element={<DeliveryBoyList />} />
        <Route path="deliveryboy/delivery-boy-cash" element={<DeliveryBoyCash />} />
        <Route path="employee/add-employee" element={<AddEmployee />} />
        <Route path="employee/employee-list" element={<EmployeeList />} />
      </Route>
    </Routes>
  )
}

export default MartRoutes
