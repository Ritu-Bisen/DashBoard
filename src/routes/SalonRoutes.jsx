import React from 'react'
import SalonHeader from '../Components/SalonSection/SalonHeader';
import SalonSideBar from '../Components/SalonSection/SalonSideBar';
import { Outlet, Route, Routes } from 'react-router-dom';
import SalonDashboard from '../Components/SalonSection/SalonDashboard';
import SalonServices from '../Components/SalonSection/SalonServices';

const SalonLayout = () => {
    return (
      <div >
        <SalonHeader/>
        <SalonSideBar/>
        
        <div >
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
        <Route path="service" element={<SalonServices/>}/>
        </Route>
       
       
      </Routes>
    </div>
  )
}

export default SalonRoutes
