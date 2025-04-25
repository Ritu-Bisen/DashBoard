import React from "react";
import Carousel from "../UI/Carousel";

const ViewDeliveryBoyDEtails = ({ deliveryBoys, onClose }) => {
   

    const image=[
        deliveryBoys.profile_image_url,
        deliveryBoys.aadhaar_image_url,
        deliveryBoys.pan_image_url,
        deliveryBoys.rc_image_url,
        deliveryBoys.driving_license_image_url,
        deliveryBoys.bank_passbook_image_url

    ]
    
  return (
    <div className="fixed top-20 right-30  h-150 w-250 bg-white ">
      <div className="border-b border-gray-700  py-8 flex justify-between p-5">
        <h3 className="font-bold text-3xl">DeliveryBoys Details</h3>
        <button
          onClick={onClose}
          className="bg-red-500 p-2 rounded-full w-20 text-white"
        >
          Close
        </button>
      </div>
      <div className="flex pl-10">
        <div>
          <table>
            <tr>
              <th className="border-gray-300 border p-2 px-5">Name:</th>
              <td className="border-gray-300 border p-2 px-5">{deliveryBoys.full_name}</td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-2 px-5">Id:</th>
              <td className="border-gray-300 border p-2 px-5">{deliveryBoys.id}</td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-2 px-5">phone:</th>
              <td className="border-gray-300 border p-2 px-5">{deliveryBoys.phone_number}</td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-2 px-5">email:</th>
              <td className="border-gray-300 border p-2 px-5">{deliveryBoys.email}</td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-2 px-5">Address:</th>
              <td className="border-gray-300 border p-2 px-5">{deliveryBoys.address}</td>
            </tr>
           
           
            
           
          </table>
        </div>
        
        <div className="ml-10" >
            <Carousel className="h-60 w-100"  image={image}/>
        </div>
      </div>
      <div className="flex pl-10">
        <table>
        <tr>
              <th className="border-gray-300 border p-0.5 px-5">Aadhar No.</th>
              <td className="border-gray-300 border p-0.5 px-5">{deliveryBoys.aadhaar_number}</td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-0.5 px-5">pan No.</th>
              <td className="border-gray-300 border p-0.5 px-5">{deliveryBoys.pan_number}</td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-0.5 px-5">Account No.</th>
              <td className="border-gray-300 border p-0.5 px-5">{deliveryBoys.account_number}</td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-0.5 px-5">Bank Holder Name</th>
              <td className="border-gray-300 border p-0.5 px-5">{deliveryBoys.bank_account_name}</td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-0.5 px-5">Bank Name</th>
              <td className="border-gray-300 border p-0.5 px-5">{deliveryBoys.bank_name}</td>
            </tr>
             <tr>
              <th className="border-gray-300 border p-0.5 px-5">IFSC Code</th>
              <td className="border-gray-300 border p-0.5 px-5">{deliveryBoys.ifsc_code}</td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-0.5 px-5">Section</th>
              <td className="border-gray-300 border p-0.5 px-5">{deliveryBoys.section}</td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-0.5 px-5">Seller Id</th>
              <td className="border-gray-300 border p-0.5 px-5">{deliveryBoys.seller_id}</td>
            </tr>
        </table>
        <table>
        <tr>
              <th className="border-gray-300 border p-0.5 px-5">Vehicle Type</th>
              <td className="border-gray-300 border p-0.5 px-5">{deliveryBoys.vehicle_type}</td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-0.5 px-5">Vehicle No.</th>
              <td className="border-gray-300 border p-0.5 px-5">{deliveryBoys.vehicle_number}</td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-0.5 px-5">Driving License No.</th>
              <td className="border-gray-300 border p-0.5 px-5">{deliveryBoys.driving_license_number}</td>
            </tr>
           
            <tr>
              <th className="border-gray-300 border p-0.5 px-5">Driving License No.</th>
              <td className="border-gray-300 border p-0.5 px-5">{deliveryBoys.driving_license_number}</td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-0.5 px-5">Rating</th>
              <td className="border-gray-300 border p-0.5 px-5">{deliveryBoys.rating}</td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-0.5 px-5">RC No.</th>
              <td className="border-gray-300 border p-0.5 px-5">{deliveryBoys.rc_number}</td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-0.5 px-5">Active</th>
              <td className="border-gray-300 border p-0.5 px-5">{deliveryBoys.is_active === true ?
              (<p>Active</p>):(<p>Inactive</p>)}</td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-2 px-5">Verified</th>
              <td className="border-gray-300 border p-2 px-5">{deliveryBoys.is_verified === true ?
              (<p>Verified</p>):(<p>Not Verified</p>)}</td>
            </tr>
        </table>
      </div>
    </div>
  );
};

export default ViewDeliveryBoyDEtails;
