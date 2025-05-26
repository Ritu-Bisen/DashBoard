import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAppointmentServiceData } from "../../Redux/Slices/salonSlicees/salonAppointmentSlice";

const ViewSalonAppointmentDetails = ({ orderId, onClose,sellerDetails }) => {
   const {serviceList} = useSelector((state)=>state.appointment);
 //console.log(billingList);
 

     const dispatch = useDispatch();
     useEffect(() => {
       dispatch(getAppointmentServiceData({sellerDetails,orderId}))
      
     }, [dispatch])
     

    if (!serviceList || serviceList.length === 0) {
    return (
      <div className="fixed bg-white rounded-xl w-full max-w-3xl p-10 text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl">
        <p className="text-gray-600 text-lg">Loading order details...</p>
      </div>
    );
  }

  const orderInfo = serviceList[0]?.orders || {};
  const userInfo = orderInfo?.users || {};  

  return (
   <div className="fixed top-1/2 right-1/2 transition translate-x-1/2 -translate-y-1/2 h-150 w-250 overflow-y-scroll bg-white ">
       <div className="border-b border-gray-700 py-8 flex justify-between p-5">
        <h3 className="font-bold text-3xl">Order Products Details</h3>
        <button onClick={onClose} className="bg-red-500 p-2 rounded-full w-20 text-white">
          Close
        </button>
      </div>
      <table className="w-full text-left ">
        <thead>
          <tr className=" ">
          <th className="p-2 border-gray-300 border">Product Name</th>
                    <th className="p-2 border-gray-300 border">Quantity</th>
                    <th className="p-2 border-gray-300 border">Discount %</th>
                    <th className="p-2 border-gray-300 border">Discounted Price</th>
                    <th className="p-2 border-gray-300 border">SGST INR</th>
                    <th className="p-2 border-gray-300 border">CGST INR</th>
                    <th className="p-2 border-gray-300 border">GST</th>
                    <th className="p-2 border-gray-300 border">HSN Code</th>
                    <th className="p-2 border-gray-300 border">Taxable Price</th>
                    <th className="p-2 border-gray-300 border">Final Price</th>
           
          </tr>
        </thead>
        <tbody>
                  {serviceList?.map((item, index) => (
                    <tr key={index} className="bg-white">
                      <td className="p-2 border-gray-300 border">{item.salon_services?.name || "N/A"}</td>
                      <td className="p-2 border-gray-300 border">{item.quantity}</td>
                      <td className="p-2 border-gray-300 border">{item.salon_services.discount_percentage}</td>
                      <td className="p-2 border-gray-300 border">{item.salon_services.discounted_price}</td>
                      <td className="p-2 border-gray-300 border">{item.salon_services.sgst}</td>
                      <td className="p-2 border-gray-300 border">{item.salon_services.cgst}</td>
                      <td className="p-2 border-gray-300 border">{item.salon_services.gst}</td>
                      <td className="p-2 border-gray-300 border">{item.salon_services.hsn_code}</td>
                      <td className="p-2 border-gray-300 border">{item.salon_services.taxable_price}</td>
                      <td className="p-2 border-gray-300 border">{item.salon_services.price}</td>
                    
                    </tr>
                  ))}
              
                 
                </tbody>

      </table>
    
    </div>
  );
};

export default ViewSalonAppointmentDetails;
