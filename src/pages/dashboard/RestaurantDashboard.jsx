import React, { useEffect, useState } from 'react'
import { FaUsers } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa";
import { getVerifiedDeliveryBoy } from '../../Redux/Slices/deliveryBoyDataSlice';
import { getVerifiedEmployee } from '../../Redux/Slices/employeeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantmenus } from '../../Redux/Slices/restaurantSlice/restaurantMenuSlice';
import {  getOrderProcessingData } from '../../Redux/Slices/restaurantSlice/restaurantOrderSlice';


const RestaurantDashboard = () => {
  const { deliveryBoys}=useSelector((state)=>state.deliveryBoyData);
  const{sellerDetails}=useSelector((state)=>state.seller)
  const {employees} =useSelector((state)=>state.employee)

  const { assignedOrder } = useSelector((state) => state.restaurantOrder);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVerifiedDeliveryBoy(sellerDetails))
      dispatch(getVerifiedEmployee(sellerDetails));
       dispatch(getRestaurantmenus())
         dispatch(getOrderProcessingData(sellerDetails));
  }, [dispatch]);

   const [revenue, setRevenue] = useState(0);
    useEffect(() => {
       if (assignedOrder?.length > 0) {
         const total = assignedOrder.reduce((acc, item) => acc + item.total_amount, 0);
         setRevenue(total);
       }
     }, [assignedOrder]);
     

 const cartitem=[{
  id:1,
  icon:<HiUsers size={30}/>,
  title:"Total Orders",
  Date_time:"January 25,2025",
  numberOfperson:assignedOrder.length,
  client:"Order"

 },
 {
  id:2,
  icon:<MdOutlineMiscellaneousServices size={30}/>,
  title:"Total DeliveryBoys",
  numberOfperson:deliveryBoys.length,
  client:"DeliveryBoys"

 },
 {
  id:3,
  icon:<FaUsers size={30}/>,
  title:"Total Employees",
  numberOfperson:employees.length,
  client:"Employees"

 },
 {
  id:4,
  icon:<FaRegCalendarCheck size={30}/>,
  title:"Revenue",
  Date_time:"January 25,2025",
  numberOfperson:Math.floor(revenue),
  client:"Revenue"

 },]
 
 
  return (
    <div className='w-[calc(100%-300px)] ml-[300px]  pt-[120px] '>
       <div className='flex items-center justify-center flex-col'>
       <div className='grid grid-cols-2 gap-20 py-15  '>
           {
             cartitem.map((item,index)=>(
               <div key={index} className='shadow-gray-500 shadow-lg  h-40 w-80 bg-white p-5 rounded-3xl'>
                 <div className='flex gap-3'>
                 <div className='rounded-full border p-1 bg-red-700 text-white' >{item.icon}</div>
                 <h1 className='text-2xl font-bold '>{item.title}</h1>
                 </div>
           
               
                <div className='flex gap-3 text-2xl font-semibold mt-10 ml-10'>
                <p>{item.numberOfperson}</p>
                <p>{item.client}</p>
               
                 </div>
               </div>
             ))
           }
         </div>
         <div className='shadow-gray-500 shadow-lg  h-40 w-80 bg-white p-5 rounded-3xl '>
         <div className='flex gap-3'>
                 <div className='rounded-full border p-1 bg-red-700 text-white' ><FaRegCalendarCheck size={30}/> </div>
                 <h1 className='text-2xl font-bold '>Total Product</h1>
                 </div>
                <div className='mt-10 ml-10'>
                {/* <p className='text-2xl font-semibold'>{menu.length} Product</p> */}
               <p className='text-2xl font-semibold'>143 Product</p>
                 </div>
         </div>
       </div>
       </div>
     )
   }

export default RestaurantDashboard
