import React from 'react'

const ViewGymEmployeeDeatils = ({employeeData,onClose}) => {
    const image =[ employeeData.profile_image_url,
        employeeData.passbook_image_url,
        employeeData.cancelled_cheqce_image_url,
        employeeData.pan_card_image_url,
        employeeData.aadhaar_image_urls[0],
        employeeData.aadhaar_image_urls[1]
      
      ]
      
  return (
    <div className="fixed top-25 right-60  h-150 w-250 bg-white ">
        <div className="border-b border-gray-700  py-8 flex justify-between p-5">
        <h3 className="font-bold text-3xl">Employee Details</h3>
        <button
          onClick={onClose}
          className="bg-red-500 p-2 rounded-full w-30 text-white"
        >
          Close
        </button>
      </div>
      <div className="flex pl-10">
        <div>
          <table>
            <tr>
              <th className="border-gray-300 border p-2 px-5">Name:</th>
              <td className="border-gray-300 border p-2 px-5">{employeeData.name}</td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-2 px-5">Id:</th>
              <td className="border-gray-300 border p-2 px-5">{employeeData.id}</td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-2 px-5">Phone No.:</th>
              <td className="border-gray-300 border p-2 px-5">{employeeData.phone}</td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-2 px-5">Email:</th>
              <td className="border-gray-300 border p-2 px-5">{employeeData.email}</td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-2 px-5">Address:</th>
              <td className="border-gray-300 border p-2 px-5">{employeeData.address}</td>
            </tr>
           
           
            
           
          </table>
        </div>
        
        <div className="ml-10" >
        
            <Carousel className="h-60 w-100" image={image} />
        </div>
      </div>
      <div className="flex pl-10">
        <table>
        <tr>
              <th className="border-gray-300 border p-0.5 px-5">Aadhar No.</th>
              <td className="border-gray-300 border p-0.5 px-5">{employeeData.aadhaar_number}</td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-0.5 px-5">pan No.</th>
              <td className="border-gray-300 border p-0.5 px-5">{employeeData.pan_number}</td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-0.5 px-5">Account No.</th>
              <td className="border-gray-300 border p-0.5 px-5">{employeeData.account_number}</td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-0.5 px-5">Bank Holder Name</th>
              <td className="border-gray-300 border p-0.5 px-5">{employeeData.bank_account_name}</td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-0.5 px-5">Bank Name</th>
              <td className="border-gray-300 border p-0.5 px-5">{employeeData.bank_name}</td>
            </tr>
             <tr>
              <th className="border-gray-300 border p-0.5 px-5">IFSC Code</th>
              <td className="border-gray-300 border p-0.5 px-5">{employeeData.ifsc_code}</td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-0.5 px-5">Section</th>
              <td className="border-gray-300 border p-0.5 px-5">{employeeData.section}</td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-0.5 px-5">Seller Id</th>
              <td className="border-gray-300 border p-0.5 px-5">{employeeData.seller_id}</td>
            </tr>
        </table>
        <table>
        <tr>
              <th className="border-gray-300 border p-0.5 px-5">Vehicle Type</th>
              <td className="border-gray-300 border p-0.5 px-5">{employeeData.vehicle_type}</td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-0.5 px-5">Vehicle No.</th>
              <td className="border-gray-300 border p-0.5 px-5">{employeeData.vehicle_number}</td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-0.5 px-5">Driving License No.</th>
              <td className="border-gray-300 border p-0.5 px-5">{employeeData.driving_license_number}</td>
            </tr>
           
            <tr>
              <th className="border-gray-300 border p-0.5 px-5">Driving License No.</th>
              <td className="border-gray-300 border p-0.5 px-5">{employeeData.driving_license_number}</td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-0.5 px-5">Rating</th>
              <td className="border-gray-300 border p-0.5 px-5">{employeeData.rating}</td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-0.5 px-5">RC No.</th>
              <td className="border-gray-300 border p-0.5 px-5">{employeeData.rc_number}</td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-0.5 px-5">Active</th>
              <td className="border-gray-300 border p-0.5 px-5">{employeeData.is_active === true ?
              (<p>Active</p>):(<p>Inactive</p>)}</td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-2 px-5">Verified</th>
              <td className="border-gray-300 border p-2 px-5">{employeeData.is_verified === true ?
              (<p>Verified</p>):(<p>Not Verified</p>)}</td>
            </tr>
        </table>
      </div>
    </div>
  )
}

export default ViewGymEmployeeDeatils
