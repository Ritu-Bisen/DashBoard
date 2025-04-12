import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import MartRoutes from "./routes/MartRoutes";
import ProtectedRoute from "./Components/ProtectedRoute";

import GymRoutes from "./routes/GymRoutes";
import RestaurantRoutes from "./routes/RestaurantRoutes";

import SalonDashboard from "./Components/SalonSection/SalonDashboard";
 import SalonHeader from "./Components/SalonSection/SalonHeader";
import Sidebar from "./Components/MartSection/Sidebar";
import SalonSideBar from "./Components/SalonSection/SalonSideBar";
import SalonRoutes from "./routes/SalonRoutes";
import SalonServices from "./Components/SalonSection/SalonServices";

const App = () => {
  return (
    <div>
      <BrowserRouter>
         <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/salon/*"
            element={
              <ProtectedRoute segment="salon">
               
              <SalonRoutes/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/gym"
            element={
              <ProtectedRoute segment="gym">
                <GymRoutes />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mart/*"
            element={
              <ProtectedRoute segment="mart">
                <MartRoutes />
              </ProtectedRoute>
            }
          />

          <Route
            path="/restaurant"
            element={
              <ProtectedRoute segment="restaurant">
                <RestaurantRoutes />
              </ProtectedRoute>
            }
          />
        </Routes> 
        

       
      </BrowserRouter>
    </div>
  );
};

export default App;
