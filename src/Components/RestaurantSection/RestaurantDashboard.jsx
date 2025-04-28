import React from 'react'
import { FaUsers } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa";

const RestaurantDashboard = () => {
 const cartitem=[{
  id:1,
  icon:<HiUsers size={30}/>,
  title:"Total Orders",
  Date_time:"January 25,2025",
  numberOfperson:100,
  client:"Person"

 },
 {
  id:2,
  icon:<MdOutlineMiscellaneousServices size={30}/>,
  title:"Total Deliveries",
  Date_time:"January 25,2025",
  numberOfperson:100,
  client:"Services"

 },
 {
  id:3,
  icon:<FaUsers size={30}/>,
  title:"Total Employees",
  Date_time:"January 25,2025",
  numberOfperson:100,
  client:"Employees"

 },
 {
  id:4,
  icon:<FaRegCalendarCheck size={30}/>,
  title:"Revenue",
  Date_time:"January 25,2025",
  numberOfperson:100,
  client:"Person"

 },]
  return (
    <div className='w-[calc(100%-300px)] ml-[300px]  py-30 '>
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
                <p className='text-2xl font-semibold'>100 Person</p>
               
                 </div>
         </div>
       </div>
       </div>
     )
   }

export default RestaurantDashboard
