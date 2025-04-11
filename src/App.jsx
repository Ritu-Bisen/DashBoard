import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import MartRoutes from "./routes/MartRoutes";
import ProtectedRoute from "./Components/ProtectedRoute";
import Democomponent from "./Components/SalonSection/Democomponent";
import GymRoutes from "./routes/GymRoutes";
import RestaurantRoutes from "./routes/RestaurantRoutes";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/salon"
            element={
              <ProtectedRoute role="salon">
                <Democomponent />
              </ProtectedRoute>
            }
          />
          <Route
            path="/gym"
            element={
              <ProtectedRoute role="gym">
                <GymRoutes />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mart/*"
            element={
              <ProtectedRoute role="mart">
                <MartRoutes />
              </ProtectedRoute>
            }
          />

          <Route
            path="/restaurant"
            element={
              <ProtectedRoute role="restaurant">
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
