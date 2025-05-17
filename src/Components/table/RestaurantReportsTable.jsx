import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurantReport } from '../../Redux/Slices/restaurantSlice/restaurantReportSlice';

const RestaurantReportsTable = () => {
const{reports}=useSelector((state)=>state.restaurantReport)
const dispatch =useDispatch();
useEffect(()=>{
getRestaurantReport()
},[])
console.log(reports);


  return (
    <div>
      
    </div>
  )
}

export default RestaurantReportsTable
