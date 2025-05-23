import React from 'react'
import { FiUser } from "react-icons/fi";
import { RxCross1 } from 'react-icons/rx'

const ViewGymMemberDetails = ({member,onClose}) => {
  return (
    <div className="fixed bg-white rounded-xl w-full max-w-5xl max-h-[90vh] overflow-auto shadow-2xl top-1/2 left-1/2 transition -translate-x-1/2 -translate-y-1/2 z-50">
            
             <div className="bg-gradient-to-r from-red-400 to-red-500 sticky top-0 z-10 flex justify-between items-center px-6 py-2 border-b border-orange-300">
               <h3 className="font-bold text-2xl text-white flex items-center gap-2">
                 <FiUser className="text-white" />
                 Members Details
               </h3>
               <button
                 onClick={onClose}
                 className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-1 transition-all duration-200"
                 aria-label="Close"
               >
                 <RxCross1 size={25} className="text-black font-bold" />
               </button>
             </div>
             <div className='flex mt-5 ml-5'>
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-3 border-l-4 border-amber-500 pl-3 flex items-center gap-2">Order Details</h4> 
                <table className="border-collapse bg-white rounded-lg overflow-hidden shadow-md mb-6 w-full">
                  <tbody>
                    <tr >
                      <th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">
                       Order Id
                      </th>
                      <td className="border border-gray-200 px-4 py-3 text-gray-800 font-mono">
                        {member.order_id}
                      </td>
                    </tr>
                      <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">
                      Service
                      </th>
                      <td className="border border-gray-200 px-4 py-3 text-gray-800 ">
                        {member.gym_services.name}
                      </td>
                    </tr>
                    <tr >
                      <th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">
                     Total Amount
                      </th>
                      <td className="border border-gray-200 px-4 py-3 text-gray-800">
                        {member.orders.total_amount}
                      </td>
                    </tr>
                         <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">
                      Payment Status
                      </th>
                      <td className="border border-gray-200 px-4 py-3 text-gray-800">
                        {member.orders.payment_status}
                      </td>
                    </tr>
                  
                    <tr >
                      <th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">
                       Order Status
                      </th>
                      <td className="border border-gray-200 px-4 py-3 text-gray-800">
                        {member.orders.order_status}
                      </td>
                    </tr> 
                    <tr className="bg-gray-50" >
                      <th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">
                       Payment Method
                      </th>
                      <td className="border border-gray-200 px-4 py-3 text-gray-800">
                        {member.orders.payment_method}
                      </td>
                    </tr> 
                   
                      
                  </tbody>
                </table></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-3 border-l-4 border-amber-500 pl-3 flex items-center gap-2">Users Details</h4>
                 <table className="border-collapse bg-white rounded-lg overflow-hidden shadow-md mb-6 w-full">
                  <tbody>
                    <tr >
                      <th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">
                       User Id
                      </th>
                      <td className="border border-gray-200 px-4 py-3 text-gray-800 font-mono">
                        {member.orders.users.user_id}
                      </td>
                    </tr>
                      <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">
                      Name
                      </th>
                      <td className="border border-gray-200 px-4 py-3 text-gray-800 ">
                        {member.orders.users.name}
                      </td>
                    </tr>
                    <tr >
                      <th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">
                    Email
                      </th>
                      <td className="border border-gray-200 px-4 py-3 text-gray-800">
                        {member.orders.users.email}
                      </td>
                    </tr>
                         <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">
                     Contact
                      </th>
                      <td className="border border-gray-200 px-4 py-3 text-gray-800">
                        {member.orders.users.phone_number}
                      </td>
                    </tr>
                  
                    <tr >
                      <th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">
                       Address
                      </th>
                      <td className="border border-gray-200 px-4 py-3 text-gray-800">
                        {member.orders.users.address_line}
                      </td>
                    </tr> 
                    <tr className="bg-gray-50" >
                      <th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">
                       City
                      </th>
                      <td className="border border-gray-200 px-4 py-3 text-gray-800">
                        {member.orders.users.city},{member.orders.users.state}, postal Code {member.orders.users.postal_code}
                      </td>
                    </tr> 
                  </tbody>
                </table></div>
               
                </div>
                <h4 className="text-lg font-semibold text-gray-700 mb-3 border-l-4 border-amber-500 pl-3 flex items-center gap-2 ml-5">Product Details</h4>
               <table className="border-collapse bg-white rounded-lg overflow-hidden shadow-md mb-6 w-full  ml-5">
                  <tbody>
                    <tr >
                      <th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">
                       Service Id
                      </th>
                      <td className="border border-gray-200 px-4 py-3 text-gray-800 font-mono">
                        {member.gym_services.id}
                      </td>
                    </tr>
                      <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">
                      Name
                      </th>
                      <td className="border border-gray-200 px-4 py-3 text-gray-800 ">
                        {member.gym_services.name}
                      </td>
                    </tr>
                    <tr >
                      <th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">
                    Price
                      </th>
                      <td className="border border-gray-200 px-4 py-3 text-gray-800">
                        {member.gym_services.price}
                      </td>
                    </tr>
                         <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">
                    Discount %
                      </th>
                      <td className="border border-gray-200 px-4 py-3 text-gray-800">
                        {member.gym_services.discount_percentage}
                      </td>
                    </tr>
                  
                    <tr >
                      <th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">
                      Discounted Price
                      </th>
                      <td className="border border-gray-200 px-4 py-3 text-gray-800">
                        {member.gym_services.discounted_price}
                      </td>
                    </tr> 
                    <tr className="bg-gray-50" >
                      <th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">
                       Duration
                      </th>
                      <td className="border border-gray-200 px-4 py-3 text-gray-800">
                        {member.gym_services.duration}
                      </td>
                    </tr> 
                     <tr className="bg-gray-50" >
                      <th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">
                       GST
                      </th>
                      <td className="border border-gray-200 px-4 py-3 text-gray-800">
                        {member.gym_services.gst}
                      </td>
                    </tr> 
                     <tr className="bg-gray-50" >
                      <th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">
                       CGST INR
                      </th>
                      <td className="border border-gray-200 px-4 py-3 text-gray-800">
                        {member.gym_services.cgst_inr}
                      </td>
                    </tr> 
                     <tr className="bg-gray-50" >
                      <th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">
                       SGST INR
                      </th>
                      <td className="border border-gray-200 px-4 py-3 text-gray-800">
                        {member.gym_services.sgst_inr}
                      </td>
                    </tr> 
                     <tr className="bg-gray-50" >
                      <th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">
                       HSN Code
                      </th>
                      <td className="border border-gray-200 px-4 py-3 text-gray-800">
                        {member.gym_services.hsn_code}
                      </td>
                    </tr> 
                     <tr className="bg-gray-50" >
                      <th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">
                       Taxable Amount
                      </th>
                      <td className="border border-gray-200 px-4 py-3 text-gray-800">
                        {member.gym_services.taxable_price}
                      </td>
                    </tr> 
                  </tbody>
                </table>
      
    </div>
  )
}

export default ViewGymMemberDetails
