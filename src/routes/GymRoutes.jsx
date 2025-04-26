import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom';
import GymSideBar from '../Components/GymSection/GymSideBar';
import GymHeader from '../Components/GymSection/GymHeader';
import GymDashBoard from '../Components/GymSection/GymDashBoard';
import GymMembers from '../Components/GymSection/GymMembers';
import GymProduct from '../Components/GymSection/GymProduct';
import SalonAddEmployee from '../Components/SalonSection/SalonAddEmployee';
import GymOrders from '../Components/GymSection/GymOrders';
import GymAddEmployee from '../Components/GymSection/GymAddEmployee';


const GymLayout = () => {
  return (
    <div >
      <GymHeader/>
      <GymSideBar/>
      
      <div className='ml-2' >
        <Outlet />
      </div>
    </div>
  );
};
const GymRoutes = () => {
  

  return (
    <div>
      <Routes>
        <Route element={<GymLayout/>}> 
        <Route index element={<GymDashBoard/>}/>
        <Route path="member" element={<GymMembers/>}/>
        <Route path='product' element={<GymProduct/>}/>
        <Route path='order' element={<GymOrders/>}/>
        <Route path='employee/add-employee' element={<GymAddEmployee/>}/>
        {/* <Route path='kit-request' element={<SalonKitRequest/>}/>
        <Route path='appointment' element={<SalonAppointment/>}/>
        <Route path='billing' element={<SalonBillingList/>}/>
        
        <Route path='employee/employee-list' element={<SalonEmployeeList/>}/>
       
        <Route path='reports' element={<SalonReport/>}/> */}
        </Route>
       
       
      </Routes>
    </div>
  )
}

export default GymRoutes
