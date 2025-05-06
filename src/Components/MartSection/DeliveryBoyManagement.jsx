import React from 'react'
import Header from './Header'

const DeliveryBoyManagement = () => {
  return (
    <div className="w-[calc(100%-300px) ml-[300px]">
      <Header/>
      <div className='mt-25'>
        <div className='flex justify-between '> 
        <h1 className="  ml-5  text-3xl font-bold ">Delivery Boys Management</h1>
          <input className="border-2 border-gray-400 w-95 h-10 rounded-full p-3" type='text' placeholder='Search'/>
          </div>
          </div>
      
    </div>
  )
}

export default DeliveryBoyManagement
