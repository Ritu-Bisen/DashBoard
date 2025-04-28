import React from 'react'
import RestaurantHeader from '../Components/RestaurantSection/RestaurantHeader';
import RestaurantSidebar from '../Components/RestaurantSection/RestaurantSidebar';
import { Outlet, Route, Routes } from 'react-router-dom';
import RestaurantDashboard from '../Components/RestaurantSection/RestaurantDashboard';



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
        {/* <Route path="service" element={<SalonServices/>}/>
        <Route path='product' element={<SalonProduct_kit/>}/>
        <Route path='kit-request' element={<SalonKitRequest/>}/>
        <Route path='appointment' element={<SalonAppointment/>}/>
        <Route path='billing' element={<SalonBillingList/>}/>
        
        <Route path='employee/employee-list' element={<SalonEmployeeList/>}/>
        <Route path='employee/add-employee' element={<SalonAddEmployee/>}/>
        <Route path='reports' element={<SalonReport/>}/> */}
        </Route>
       
       
      </Routes>
    </div>
  )
}

export default RestaurantRoutes
