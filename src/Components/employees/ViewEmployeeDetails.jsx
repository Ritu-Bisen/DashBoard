import React from 'react'
import Carousel from '../UI/Carousel'

const ViewEmployeeDetails = ({employeeData,onClose}) => {
const image =[ employeeData.profile_image_url,
  employeeData.passbook_image_url,
  employeeData.cancelled_cheqce_image_url,
  employeeData.pan_card_image_url,
  employeeData.aadhaar_image_urls[0],
  employeeData.aadhaar_image_urls[1]

]

  return (
    <div className="fixed top-1/2 right-1/2 transition translate-x-1/2 -translate-y-1/2  overflow-y-scroll  h-150 w-250 bg-white ">
        <div className="border-b border-gray-700  py-8 flex justify-between p-5">
        <h3 className="font-bold text-3xl">Employee Details</h3>
        <button
          onClick={onClose}
          className="bg-red-500 p-2 rounded-full w-30 text-white"
        >
          Close
        </button>
      </div>
      <div className="flex p-10 gap-10">
       
        
            <Carousel className="h-80 w-100" image={image} />
    
  
          <table>
            <tr>
              <th className="border-gray-300 border p-2">Name:</th>
              <td className="border-gray-300 border p-2">{employeeData.name}</td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-2">Id:</th>
              <td className="border-gray-300 border p-2">{employeeData.id}</td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-2">Phone No.:</th>
              <td className="border-gray-300 border p-2">{employeeData.phone}</td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-2">Email:</th>
              <td className="border-gray-300 border p-2">{employeeData.email}</td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-2">Date Of Birth:</th>
              <td className="border-gray-300 border p-2">{employeeData.date_of_birth}</td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-2">Address:</th>
              <td className="border-gray-300 border p-2">{employeeData.address}</td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-2">Designation:</th>
              <td className="border-gray-300 border p-2">{employeeData.role}</td>
            </tr>
           
           
            
           
          </table>
     
        
       
      </div>
      <div className="flex ml-30  mb-10">
        <table>
        
        <tr>
              <th className="border-gray-300 border py-3 px-10 ">Aadhar No.</th>
              <td className="border-gray-300 border  py-3 px-10">{employeeData.aadhaar_number}</td>
            </tr>
           
            <tr>
              <th className="border-gray-300 border py-3 px-10 ">Account No.</th>
              <td className="border-gray-300 border py-3 px-10">{employeeData.bank_account_number}</td>
            </tr>
            <tr>
              <th className="border-gray-300 border py-3 px-10">Bank Holder Name</th>
              <td className="border-gray-300 border py-3 px-10">{employeeData.account_holder_name}</td>
            </tr>
          
             <tr>
              <th className="border-gray-300 border py-3 px-10">IFSC Code</th>
              <td className="border-gray-300 border py-3 px-10">{employeeData.ifsc_code}</td>
            </tr>
           
          
        </table>
        <table className=''>
       
        
            <tr>
              <th className="border-gray-300 border py-2 px-6">Active</th>
              <td className="border-gray-300 border py-2 px-6">{employeeData.is_active === true ?
              (<p>Active</p>):(<p>Inactive</p>)}</td>
            </tr>
           
           
            <tr>
              <th className="border-gray-300 border py-2 px-6">Verified</th>
              <td className="border-gray-300 border py-2 px-6">{employeeData.is_verified === true ?
              (<p>Verified</p>):(<p>Not Verified</p>)}</td>
            </tr> 
             <tr>
              <th className="border-gray-300 border py-2 px-6">Bank Name</th>
              <td className="border-gray-300 border py-2 px-6">{employeeData.bank_name}</td>
            </tr>
             <tr>
              <th className="border-gray-300 border py-2 px-6">pan No.</th>
              <td className="border-gray-300 border py-2 px-6">{employeeData.pan_number}</td>
            </tr>
        </table>
      </div>
    </div>
  )
}

export default ViewEmployeeDetails
