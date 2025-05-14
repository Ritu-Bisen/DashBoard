import React, { useEffect } from 'react'
import { RxCross1 } from 'react-icons/rx'
import { MdOutlineBorderStyle } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { getGymOrderDetails } from '../../Redux/Slices/gymSlice/gymOrdersSlice';

const ViewGymOrdersDetails = ({onClose,orderId,sellerDetails}) => {
     const {orderDetails} = useSelector((state)=>state.gymOrders)
    const dispatch = useDispatch();
console.log(orderDetails);

    useEffect(() => {
    dispatch(getGymOrderDetails({orderId,sellerDetails}))
    }, [dispatch])
     const orderInfo = orderDetails[0].orders;
          const userInfo = orderInfo.users;

  return (
     <div className="fixed bg-white rounded-xl w-full max-w-5xl max-h-[90vh] overflow-auto shadow-2xl top-1/2 left-1/2 transition -translate-x-1/2 -translate-y-1/2 z-50">
            
             <div className="bg-gradient-to-r from-red-400 to-red-500 sticky top-0 z-10 flex justify-between items-center px-6 py-2 border-b border-orange-300">
               <h3 className="font-bold text-2xl text-white flex items-center gap-2">
                 <MdOutlineBorderStyle className="text-white" />
                 Orders Details
               </h3>
               <button
                 onClick={onClose}
                 className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-1 transition-all duration-200"
                 aria-label="Close"
               >
                 <RxCross1 size={25} className="text-black font-bold" />
               </button>
             </div>
             
             <div className='flex'>
                 <table className="border-collapse bg-white rounded-lg overflow-hidden shadow-md mb-6 w-full">
                  <tbody>
                    <tr><th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">Order Id :</th><td className="border border-gray-200 px-4 py-3 text-gray-800 font-mono">{orderInfo.id}</td></tr>
                      <tr><th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">Address :</th><td className="border border-gray-200 px-4 py-3 text-gray-800">{orderInfo.address}</td></tr>
                      <tr><th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">Order Status :</th><td className="border border-gray-200 px-4 py-3 text-gray-800">{orderInfo.order_status}</td></tr>
                      <tr><th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">Order Type :</th><td className="border border-gray-200 px-4 py-3 text-gray-800">{orderInfo.order_type}</td></tr>
                      <tr><th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">Payment Method :</th><td className="border border-gray-200 px-4 py-3 text-gray-800">{orderInfo.payment_method}</td></tr>
                      <tr><th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">Payment Status :</th><td className="border border-gray-200 px-4 py-3 text-gray-800">{orderInfo.payment_status}</td></tr>
                      <tr><th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">Total Amount :</th><td className="border border-gray-200 px-4 py-3 text-gray-800">{orderInfo.total_amount}</td></tr>
                   
                      
                  </tbody>
                </table>
                 <table className="border-collapse bg-white rounded-lg overflow-hidden shadow-md mb-6 w-full">
                  <tbody>
                      <tr><th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">User Name :</th><td className="border border-gray-200 px-4 py-3 text-gray-800">{userInfo.name}</td></tr>
                      <tr><th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">Email Id :</th><td className="border border-gray-200 px-4 py-3 text-gray-800">{userInfo.email}</td></tr>
                      <tr><th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">Address :</th><td className="border border-gray-200 px-4 py-3 text-gray-800">{userInfo.address_line}</td></tr>
                      <tr><th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">City :</th><td className="border border-gray-200 px-4 py-3 text-gray-800">{userInfo.city}</td></tr>
                      <tr><th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">Postal Code :</th><td className="border border-gray-200 px-4 py-3 text-gray-800">{userInfo.postal_code}</td></tr>
                      <tr><th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">Phone No. :</th><td className="border border-gray-200 px-4 py-3 text-gray-800">{userInfo.phone_number}</td></tr>
                      <tr><th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">State :</th><td className="border border-gray-200 px-4 py-3 text-gray-800">{userInfo.state}</td></tr>
                  
                      
                  </tbody>
                </table>
             </div> 
              <table className="border-collapse bg-white rounded-lg overflow-hidden shadow-md mb-6 w-full">
                <thead className="bg-white">
                  <tr >
                    <th className="p-2 border-gray-300 border">Product Name</th>
                    <th className="p-2 border-gray-300 border">Quantity</th>
                    <th className="p-2 border-gray-300 border">Discount %</th>
                    <th className="p-2 border-gray-300 border">SGST INR</th>
                    <th className="p-2 border-gray-300 border">CGST INR</th>
                    <th className="p-2 border-gray-300 border">GST</th>
                    <th className="p-2 border-gray-300 border">HSN Code</th>
                    <th className="p-2 border-gray-300 border">Taxable Price</th>
                    <th className="p-2 border-gray-300 border">Final Price</th>
                    <th className="p-2 border-gray-300 border">Discounted Price</th>
                   
                  </tr>
                </thead>
                <tbody>
                  {orderDetails?.map((item, index) => (
                    <tr key={index} className="bg-white">
                      <td className="p-2 border-gray-300 border">{item.gym_products?.name || "N/A"}</td>
                      <td className="p-2 border-gray-300 border">{item.quantity}</td>
                      <td className="p-2 border-gray-300 border">{item.gym_products.discount_percentage}</td>
                      <td className="p-2 border-gray-300 border">{item.gym_products.sgst_inr}</td>
                      <td className="p-2 border-gray-300 border">{item.gym_products.cgst_inr}</td>
                      <td className="p-2 border-gray-300 border">{item.gym_products.gst}</td>
                      <td className="p-2 border-gray-300 border">{item.gym_products.hsn_code}</td>
                      <td className="p-2 border-gray-300 border">{item.gym_products.taxable_price}</td>
                      <td className="p-2 border-gray-300 border">{item.gym_products.price}</td>
                      <td className="p-2 border-gray-300 border">{item.gym_products.discount_price}</td>
                    </tr>
                  ))}
                    <tr>
                      <th colSpan={9} className="bg-white p-2 border-gray-300 border text-end">Total Amount:</th> 
                    
                    <td className="bg-white p-2 border-gray-300 border">{orderDetails[0].orders.total_amount}</td>
                    </tr>
                 
                </tbody>
        
              </table>
      
    </div>
  )
}

export default ViewGymOrdersDetails
