import React from 'react'

const DeliveryBoy = () => {
  return (
    <div className="w-[calc(100%-300px)] bg-gray-300 ">
       <div className='mt-5 flex justify-between border-b border-gray-500 py-5 '>
       <h1 className='text-3xl font-bold ml-3'> Create Delivery Boy</h1>
       <button className='bg-green-600 rounded-full h-10 w-50 mr-5  '>View Delivery Boy</button>
       </div>
       <div className='bg-white h-175 w-300 m-auto mt-4 p-5  rounded-xl  '>
        <div className='grid grid-cols-3   gap-5'>
            <div className='flex flex-col'>
            <label className='font-semibold '>Name</label>
            <input className='bg-gray-300 rounded-full h-10 w-70'/>
            </div>

            <div className='flex flex-col'>
            <label className='font-semibold '>Date Of Birth</label>
            <input className='bg-gray-300 rounded-full h-10 w-70'/>
            </div>

            <div className='flex flex-col'>
            <label className='font-semibold '>Mobile</label>
            <input className='bg-gray-300 rounded-full h-10 w-70'/>
            </div>

            <div className='flex flex-col'>
            <label className='font-semibold '>Email</label>
            <input className='bg-gray-300 rounded-full h-10 w-70'/>
            </div>

            <div className='flex flex-col'>
            <label className='font-semibold '>Password</label>
            <input className='bg-gray-300 rounded-full h-10 w-70'/>
            </div>

            <div className='flex flex-col'>
            <label className='font-semibold '>Confirm Password</label>
            <input className='bg-gray-300 rounded-full h-10 w-70'/>
            </div>

            <div className='flex flex-col'>
            <label className='font-semibold '>Bank's IFCS code</label>
            <input className='bg-gray-300 rounded-full h-10 w-70'/>
            </div>

            <div className='flex flex-col'>
            <label className='font-semibold '>Bank Name</label>
            <input className='bg-gray-300 rounded-full h-10 w-70'/>
            </div>

            <div className='flex flex-col'>
            <label className='font-semibold '>Account Number</label>
            <input className='bg-gray-300 rounded-full h-10 w-70'/>
            </div>

            <div className='flex flex-col'>
            <label className='font-semibold '> Bank Account Name</label>
            <input className='bg-gray-300 rounded-full h-10 w-70'/>
            </div>

            <div className='flex flex-col'>
            <label className='font-semibold '>Select or Search City</label>
            <input className='bg-gray-300 rounded-full h-10 w-70'/>
            </div>

            <div className='flex flex-col'>
            <label className='font-semibold '>Other Payment Information</label>
            <input className='bg-gray-300 rounded-full h-10 w-70'/>
            </div>
          

        </div>

        <div className='flex gap-28 pt-5 '>
            <div className='flex flex-col  '>
            <label className='font-semibold'>Address</label>
            <input className='h-50 w-120 rounded-xl bg-gray-300'/>
            </div>
            <div className='flex flex-col'>
            <label className='font-semibold'>Driving License</label>
            <input className='h-50 w-120 bg-gray-300 rounded-xl text-center' placeholder='Drop Files here or click to upload'/>
            </div>
        </div>

        <div className='flex gap-30  mt-7'>
        <button className='bg-green-600 w-120 h-10 rounded-full text-white font-semibold' >Save</button>
        <button className='w-120 h-10 bg-red-500 rounded-full text-white font-semibold' >Clear</button>
        </div>

       </div>
      
    </div>
  )
}

export default DeliveryBoy
