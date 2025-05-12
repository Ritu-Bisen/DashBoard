import React from 'react'
import SalonSideBar from '../Components/SalonSection/SalonSideBar';
import { Outlet, Route, Routes } from 'react-router-dom';
import SalonDashboard from '../Components/SalonSection/SalonDashboard';
import SalonServices from '../Components/SalonSection/SalonServices';
import SalonProduct_kit from '../Components/SalonSection/SalonProduct_kit';
import SalonKitRequest from '../Components/SalonSection/SalonKitRequest';
import SalonAppointment from '../Components/SalonSection/SalonAppointment';
import SalonReport from '../Components/SalonSection/SalonReport';
import SalonBillingList from '../Components/SalonSection/SalonBillingList';
import AddEmployee from '../Components/employees/AddEmployee';
import EmployeeList from '../Components/employees/EmployeeList';
import SellerProfile from '../Components/SellerProfile';
import WhiteHeader from '../Components/WhiteHeader';

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
