import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({children,role}) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if(!user || user.role !== role){
      return <Navigate to='/'/>;
    }
  return children;
}

export default ProtectedRoute

