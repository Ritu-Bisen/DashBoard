import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
 import GymSideBar from "../Components/sidebar/GymSideBar";
import GymDashBoard from "../pages/dashboard/GymDashBoard";
 import GymMembers from "../pages/GymMember";
 import GymProduct from "../pages/product/GymProduct";
 import GymOrders from "../pages/orders/GymOrders";
 import GymReport from "../pages/reports/GymReports";
 import WhiteHeader from "../Components/headers/WhiteHeader";
 import SellerProfile from "../pages/SellerProfile";
 import CreateEmployee from "../pages/employee/CreateEmployee";
 import EmployeeList from "../pages/employee/EmployeeList";
 import GymServices from "../pages/services/GymServices";
 import GymWorkout from "../pages/GymWorkout";
 import Category from '../pages/category/Category'
 import CategoryOffer from '../pages/category/CategoryOffer'

const GymLayout = () => {
  return (
    <div>
      <WhiteHeader/>
      <GymSideBar />

      <div className="ml-2">
        <Outlet />
      </div>
    </div>
  );
};
const GymRoutes = () => {
  return (
    <div>
      <Routes>
        <Route element={<GymLayout />}>
          <Route index element={<GymDashBoard />} />
          <Route path="profile" element={<SellerProfile />} />
          <Route path="member" element={<GymMembers />} />
           <Route path="services" element={<GymServices />} />
           <Route path="workout" element={<GymWorkout />} />
          <Route path="product" element={<GymProduct />} />
          <Route path="order" element={<GymOrders />} />
          
          <Route path="employee/add-employee" element={<CreateEmployee />} />
          <Route path="employee/employee-list" element={<EmployeeList />} />
          <Route path="reports" element={<GymReport />} />
           <Route path="category/category" element={<Category />} />
        <Route path="category/category-offer" element={<CategoryOffer />} />
          
          {/* <Route path='kit-request' element={<SalonKitRequest/>}/>
        <Route path='appointment' element={<SalonAppointment/>}/>
        <Route path='billing' element={<SalonBillingList/>}/>
        
        <Route path='employee/employee-list' element={<SalonEmployeeList/>}/>
       
       */}
        </Route>
      </Routes>
    </div>
  );
};

export default GymRoutes;
