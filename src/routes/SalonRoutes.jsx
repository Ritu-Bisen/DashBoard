import React from 'react'
import SalonSideBar from '../Components/sidebar/SalonSideBar';
import { Outlet, Route, Routes } from 'react-router-dom';
import SalonDashboard from '../pages/dashboard/SalonDashboard';
import SalonServices from '../pages/services/SalonServices';
import SalonProduct from '../pages/product/SalonProduct';
import SalonStockManagemnet from '../pages/stockManagement/SalonStockManagemnet';
import SalonAppointment from '../pages/SalonAppointment';
import SalonReport from '../pages/reports/SalonReports';
import SalonBillingList from '../pages/SalonBilling';

import Category from '../pages/category/Category'
 import CategoryOffer from '../pages/category/CategoryOffer'

 import CreateEmployee from "../pages/employee/CreateEmployee";
 import EmployeeList from "../pages/employee/EmployeeList";
 import SellerProfile from "../pages/SellerProfile";
 import WhiteHeader from "../Components/headers/WhiteHeader";
const SalonLayout = () => {
    return (
      <div >
        <WhiteHeader/>
        <SalonSideBar/>
        
        <div className='ml-2' >
          <Outlet />
        </div>
      </div>
    );
  };

const SalonRoutes = () => {
  return (
    <div>
      <Routes>
        <Route element={<SalonLayout/>}> 
        <Route index element={<SalonDashboard/>}/>
        <Route path='profile' element={<SellerProfile/>}/>
        <Route path="service" element={<SalonServices/>}/>
        <Route path='product' element={<SalonProduct/>}/>
        <Route path='kit-request' element={<SalonStockManagemnet/>}/>
        <Route path='appointment' element={<SalonAppointment/>}/>
        <Route path='billing' element={<SalonBillingList/>}/>
         <Route path="category/category" element={<Category />} />
        <Route path="category/category-offer" element={<CategoryOffer />} />
        <Route path='employee/employee-list' element={<EmployeeList/>}/>
        <Route path='employee/add-employee' element={<CreateEmployee/>}/>
        <Route path='reports' element={<SalonReport/>}/>
        </Route>
       
       
      </Routes>
    </div>
  )
}

export default SalonRoutes
