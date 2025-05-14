import React, { useEffect } from 'react'
import { FaUsers } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { getGymServices } from '../../Redux/Slices/gymSlice/gymServicesSlice';
import { getEmployeeDetails } from '../../Redux/Slices/employeeSlice';

const GymDashBoard = () => {
 const { services } = useSelector((state) => state.gymservices);
 const {employees} =useSelector((state)=>state.employee)
 const { sellerDetails } = useSelector((state) => state.seller);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGymServices());
    dispatch(getEmployeeDetails(sellerDetails))
  }, [dispatch]);


    const cartitem=[{
      id:1,
      icon:<HiUsers size={30}/>,
      title:"Total Member",
      Date_time:"January 25,2025",
      numberOfperson:100,
      client:"Members"
    
     },
     {
      id:2,
      icon:<MdOutlineMiscellaneousServices size={30}/>,
      title:"Revenue",
      Date_time:"January 25,2025",
      numberOfperson:100,
      client:"Revenue"
    
     },
     {
      id:3,
      icon:<FaUsers size={30}/>,
      title:"Employee",
      numberOfperson:employees.length,
      client:"Employees"
    
     },
     {
      id:4,
      icon:<FaRegCalendarCheck size={30}/>,
      title:"Services",
      numberOfperson:services.length,
      client:"Services"
    
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
              <h1 className='text-2xl font-bold '>Orders</h1>
              </div>
             <div className='mt-10 ml-10'>
             <p className='text-2xl font-semibold'>100 Orders</p>
            
              </div>
      </div>
    </div>
    </div>
  )
}

export default GymDashBoard
