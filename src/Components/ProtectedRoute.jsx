import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({children,segment}) => {
    const seller = JSON.parse(localStorage.getItem("seller"));

    if(!seller || seller.segment !== segment){
      return <Navigate to='/'/>;
    }
  return children;
}

export default ProtectedRoute

