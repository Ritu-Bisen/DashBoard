import React from 'react'
import SalonHeader from '../Components/SalonSection/SalonHeader';
import SalonSideBar from '../Components/SalonSection/SalonSideBar';
import { Outlet, Route, Routes } from 'react-router-dom';
import SalonDashboard from '../Components/SalonSection/SalonDashboard';
import SalonServices from '../Components/SalonSection/SalonServices';
import SalonProduct_kit from '../Components/SalonSection/SalonProduct_kit';
import SalonKitRequest from '../Components/SalonSection/SalonKitRequest';
import SalonAppointment from '../Components/SalonSection/SalonAppointment';

import SalonReport from '../Components/SalonSection/SalonReport';
import SalonAddEmployee from '../Components/SalonSection/SalonAddEmployee';
import SalonBillingInvoice from '../Components/SalonSection/SalonBillingInvoice';
import SalonBillingList from '../Components/SalonSection/SalonBillingList';
import SalonEmployeeList from '../Components/SalonSection/SalonEmployeeList';
import WhiteHeader from '../Components/RestaurantSection/WhiteHeader';
import EmployeeList from '../Components/MartSection/EmployeeList';
import AddEmployee from '../Components/MartSection/AddEmployee';
import SellerProfile from '../Components/SellerProfile';

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
        <Route path='product' element={<SalonProduct_kit/>}/>
        <Route path='kit-request' element={<SalonKitRequest/>}/>
        <Route path='appointment' element={<SalonAppointment/>}/>
        <Route path='billing' element={<SalonBillingList/>}/>
        
        <Route path='employee/employee-list' element={<EmployeeList/>}/>
        <Route path='employee/add-employee' element={<AddEmployee/>}/>
        <Route path='reports' element={<SalonReport/>}/>
        </Route>
       
       
      </Routes>
    </div>
  )
}

export default SalonRoutes
