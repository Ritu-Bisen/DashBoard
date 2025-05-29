import React, { useEffect, useState } from 'react'
import { FaRegCalendarCheck, FaUsers } from 'react-icons/fa'
import { HiUsers } from 'react-icons/hi'
import { MdOutlineMiscellaneousServices } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { getVerifiedDeliveryBoy } from '../../Redux/Slices/deliveryBoyDataSlice'
import { getVerifiedEmployee } from '../../Redux/Slices/employeeSlice'
import { getproduct } from '../../Redux/Slices/productSlice'
import { getOrderRequest, martOrderRequest } from '../../Redux/Slices/OrderRequestSlice'
import {  getMartProcessingOrders } from '../../Redux/Slices/OrderSlice'

const MartDashboard = () => {
 const { deliveryBoys}=useSelector((state)=>state.deliveryBoyData);
  const{sellerDetails}=useSelector((state)=>state.seller)
  const {employees} =useSelector((state)=>state.employee)
   
     const { assignOrders } = useSelector((state) => state.order); 
const dispatch=useDispatch();
  useEffect(() => {
   dispatch(getVerifiedDeliveryBoy(sellerDetails))
   dispatch(getVerifiedEmployee(sellerDetails));
 
       dispatch(getMartProcessingOrders(sellerDetails));
  }, [dispatch])

   const [revenue, setRevenue] = useState(0);
  
  useEffect(() => {
    if (assignOrders?.length > 0) {
      const total = assignOrders.reduce((acc, item) => acc + item.total_amount, 0);
      setRevenue(total);
    }
  }, [assignOrders]);
  

 const cartitem=[{
   id:1,
   icon:<HiUsers size={30}/>,
   title:"Total Orders",
   numberOfperson:assignOrders.length,
   client:"orders"
 
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
   title:"Sales",
   numberOfperson:Math.floor(revenue),
   client:"sales"
 
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
            
                
                 <div className='flex gap-3 text-xl font-semibold mt-10 ml-5'>
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
                 <div className='mt-10 ml-5'>
                 <p className='text-xl font-semibold'>804 Product</p>
                
                  </div>
          </div>
        </div>
        </div>
      )
  
}

export default MartDashboard
