import React from 'react'

const SalonAddEmployee = () => {
  return (
    <div className='fixed w-[calc(100%-300px)] ml-[300px] h-screen pt-35  '>
      <div className=' px-35'>
      <div className='grid grid-cols-2 space-y-3'>
        <div className='flex flex-col'>
        <label className='font-semibold'>Name</label>
        <input className='bg-gray-300 rounded-full h-10 w-90' />
      </div>
      <div className='flex flex-col'>
        <label className='font-semibold'>Email</label>
        <input className='bg-gray-300 rounded-full h-10 w-90' />
      </div>
      <div className='flex flex-col'>
        <label className='font-semibold'>Mobile</label>
        <input className='bg-gray-300 rounded-full h-10 w-90' />
      </div>
      <div className='flex flex-col'>
        <label className='font-semibold'>Address</label>
        <input className='bg-gray-300 rounded-full h-10 w-90' />
      </div>
      </div>

      <h1 className='font-bold text-xl mt-5'>Information</h1>
      <div className='grid grid-cols-2 space-y-3 mt-5'>
        <div className='flex flex-col'>
        <label className='font-semibold'>Designation</label>
        <input className='bg-gray-300 rounded-full h-10 w-90' />
      </div>
      <div className='flex flex-col'>
        <label className='font-semibold'>Aadhar No</label>
        <input className='bg-gray-300 rounded-full h-10 w-90' />
      </div>
      <div className='flex flex-col'>
        <label className='font-semibold'>PAN Number</label>
        <input className='bg-gray-300 rounded-full h-10 w-90' />
      </div>
      <div className='flex flex-col'>
        <label className='font-semibold'>Address Proof</label>
        <input className='bg-gray-300 rounded-full h-10 w-90 p-3' placeholder='Drop Files here or click to upload'/>
      </div>
      </div>


      <h1 className='font-bold text-xl mt-5'>Bank Information</h1>
      <div className='grid grid-cols-2 space-y-3 mt-5'>
        <div className='flex flex-col'>
        <label className='font-semibold'>Bank Name</label>
        <input className='bg-gray-300 rounded-full h-10 w-90' />
      </div>
      <div className='flex flex-col'>
        <label className='font-semibold'>Account Number</label>
        <input className='bg-gray-300 rounded-full h-10 w-90' />
      </div>
      <div className='flex flex-col'>
        <label className='font-semibold'>Bank's IFSC code</label>
        <input className='bg-gray-300 rounded-full h-10 w-90' />
      </div>
      <div className='flex flex-col'>
        <label className='font-semibold'>Bank Account Name</label>
        <input className='bg-gray-300 rounded-full h-10 w-90' />
      </div>
      </div>
      <div className='grid grid-cols-2 mt-5'>
        <button className='rounded-full h-10 w-90 bg-red-800'>Clear</button>
        <button className='rounded-full h-10  w-90 bg-green-800'>Submit</button>
      </div>
      </div>
    </div>
  )
}

export default SalonAddEmployee
