import React, { useEffect, useState } from 'react'
import { FaUsers } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { getGymServices } from '../../Redux/Slices/gymSlice/gymServicesSlice';
import { getEmployeeDetails, getVerifiedEmployee } from '../../Redux/Slices/employeeSlice';
import { getGymOrders } from '../../Redux/Slices/gymSlice/gymOrdersSlice';
import { getGymMember } from '../../Redux/Slices/gymSlice/gymMemberSlice';

const GymDashBoard = () => {
 const { services } = useSelector((state) => state.gymservices);
 const {employees} =useSelector((state)=>state.employee)
 const { sellerDetails } = useSelector((state) => state.seller);
  const {gymOrders} = useSelector((state)=>state.gymOrders)
   const {member}=useSelector((state)=>state.gymMember)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGymServices());
    dispatch(getVerifiedEmployee(sellerDetails))
        dispatch(getGymOrders(sellerDetails))
        dispatch(getGymMember(sellerDetails))
  }, [dispatch]);

  const [revenue, setRevenue] = useState(0);

useEffect(() => {
  if (gymOrders?.length > 0) {
    const total = gymOrders.reduce((acc, item) => acc + item.total_amount, 0);
    setRevenue(total);
  }
}, [gymOrders]);


    const cartitem=[{
      id:1,
      icon:<HiUsers size={30}/>,
      title:"Total Member",
    
      numberOfperson:member.length,
      client:"Members"
    
     },
     {
      id:2,
      icon:<MdOutlineMiscellaneousServices size={30}/>,
      title:"Revenue",
      numberOfperson:revenue,
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
              <h1 className='text-2xl font-bold '>Orders</h1>
              </div>
             <div className='mt-10 ml-10'>
             <p className='text-2xl font-semibold'>{gymOrders.length} Orders</p>
            
              </div>
      </div>
    </div>
    </div>
  )
}

export default GymDashBoard
