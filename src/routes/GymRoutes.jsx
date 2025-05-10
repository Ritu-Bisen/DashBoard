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
import GymEmployeeList from '../Components/GymSection/GymEmployeeList';
import GymReport from '../Components/GymSection/GymReport';
import WhiteHeader from '../Components/RestaurantSection/WhiteHeader';
import SellerProfile from '../Components/SellerProfile';


const GymLayout = () => {
  return (
    <div >
      <WhiteHeader/>
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
        <Route path='profile' element={<SellerProfile/>}/>
        <Route path="member" element={<GymMembers/>}/>
        <Route path='product' element={<GymProduct/>}/>
        <Route path='order' element={<GymOrders/>}/>
        <Route path='employee/add-employee' element={<GymAddEmployee/>}/>
        <Route path='employee/employee-list' element={<GymEmployeeList/>}/>
        <Route path='reports' element={<GymReport/>}/>
        {/* <Route path='kit-request' element={<SalonKitRequest/>}/>
        <Route path='appointment' element={<SalonAppointment/>}/>
        <Route path='billing' element={<SalonBillingList/>}/>
        
        <Route path='employee/employee-list' element={<SalonEmployeeList/>}/>
       
       */}
        </Route>
       
       
      </Routes>
    </div>
  )
}

export default GymRoutes
