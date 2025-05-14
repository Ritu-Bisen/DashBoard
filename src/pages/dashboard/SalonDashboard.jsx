import React, { useEffect } from 'react'
import { FaUsers } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { getEmployeeDetails } from '../../Redux/Slices/employeeSlice';
import { getAppointment } from '../../Redux/Slices/salonSlicees/salonAappointmentSlice';
import { getServices } from '../../Redux/Slices/salonSlicees/salonServicesSlice';

const SalonDashboard = () => {
const {employees} =useSelector((state)=>state.employee)
 const { sellerDetails } = useSelector((state) => state.seller);
const {appointmentList} = useSelector((state)=>state.appointmentList)
 const { services } = useSelector((state) => state.service);
 
const dispatch =useDispatch();
useEffect(() => {
  dispatch(getEmployeeDetails(sellerDetails))
dispatch(getAppointment())
dispatch(getServices());
}, [dispatch])

 const cartitem=[{
  id:1,
  icon:<HiUsers size={30}/>,
  title:"Total Client",
  numberOfperson:appointmentList.length,
  client:"Person"

 },
 {
  id:2,
  icon:<MdOutlineMiscellaneousServices size={30}/>,
  title:"Total Services",
  numberOfperson:services.length,
  client:"Services"

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
  title:"Appointment",
  numberOfperson:appointmentList.length,
  client:"Appointment"

 },]
  return (
    <div className='w-[calc(100%-300px)] ml-[300px]  py-30'>
      <div className='grid grid-cols-2 gap-20 py-20  ml-40 '>
        {
          cartitem.map((item,index)=>(
            <div key={index} className='shadow-gray-500 shadow-lg  h-50 w-80 bg-white p-5 rounded-3xl'>
              <div className='flex gap-3'>
              <div className='rounded-full border p-1 bg-red-700 text-white' >{item.icon}</div>
              <h1 className='text-2xl font-bold '>{item.title}</h1>
              </div>
             <div className='mt-10'>
             <p className='text-lg'>{item.Date_time}</p>
             <div className='flex gap-3 text-2xl mt-2'>
             <p>{item.numberOfperson}</p>
             <p>{item.client}</p>
             </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default SalonDashboard
