import React from 'react'
import Carousel from '../UI/Carousel'

const ViewGymProductDetails = ({gymProducts,onClose}) => {


  return (
    <div className="fixed top-25 right-60   h-[80vh] w-[120vh] overflow-hidden bg-white z-50">
       <div className="border-b border-gray-700  py-8 flex justify-between p-5 ">
        <h3 className="font-bold text-3xl">Gym Products Details</h3>
        <button
          onClick={onClose}
          className="bg-red-500 p-2 rounded-full w-30 text-white"
        >
          Close
        </button>
      </div>
      <div className="overflow-y-auto h-[calc(90vh-80px)] px-6 py-10 ">
      <div className='flex justify-between '>
         <div>
            <table>
            <tr>
                    <th className="border-gray-300 border p-2 px-5">Id</th>
                    <td className="border-gray-300 border p-2 px-5">{gymProducts.id}</td>
                </tr>
                <tr>
                    <th className="border-gray-300 border p-2 px-5">Name</th>
                    <td className="border-gray-300 border p-2 px-5">{gymProducts.name}</td>
                </tr>
                  <tr>
                    <th className="border-gray-300 border p-2 px-5">Discounted %</th>
                    <td className="border-gray-300 border p-2 px-5">{gymProducts.discount_percentage}</td>
                </tr>
                <tr>
                    <th className="border-gray-300 border p-2 px-5">Discounted Price</th>
                    <td className="border-gray-300 border p-2 px-5">{gymProducts.discount_price}</td>
                </tr>
                <tr>
                    <th className="border-gray-300 border p-2 px-5">CGST INR</th>
                    <td className="border-gray-300 border p-2 px-5">{gymProducts.cgst_inr}</td>
                </tr>
                <tr>
                    <th className="border-gray-300 border p-2 px-5">SGST INR</th>
                    <td className="border-gray-300 border p-2 px-5">{gymProducts.sgst_inr}</td>
                </tr>
                <tr>
                    <th className="border-gray-300 border p-2 px-5">GST </th>
                    <td className="border-gray-300 border p-2 px-5">{gymProducts.gst}</td>
                </tr>
                <tr>
                    <th className="border-gray-300 border p-2 px-5">HSN Code</th>
                    <td className="border-gray-300 border p-2 px-5">{gymProducts.hsn_code}</td>
                </tr>
                 <tr>
                    <th className="border-gray-300 border p-2 px-5">Taxable Price</th>
                    <td className="border-gray-300 border p-2 px-5">{gymProducts.taxable_price}</td>
                </tr>
                <tr>
                    <th className="border-gray-300 border p-2 px-5">Price</th>
                    <td className="border-gray-300 border p-2 px-5">{gymProducts.price}</td>
                </tr>
                <tr>
                    <th className="border-gray-300 border p-2 px-5">Stock Quantity</th>
                    <td className="border-gray-300 border p-2 px-5">{gymProducts.stock_quantity}</td>
                </tr>
            </table>
         </div>
         <div>
            <Carousel  image={gymProducts.image_urls} className="h-85 w-90" />
         </div>
     </div>
     <div>
      <table className='mb-20 '>
        <tr>
            <th className="border-gray-300 border p-2 px-5">Benefits</th>
            <td className="border-gray-300 border p-2 px-5"> {gymProducts?.benefits.map((list, index) => (
                      <p key={index}>
                        <span className="font-bold">{index + 1}.</span> {list}
                      </p>
                    ))}</td>
        </tr>
        <tr>
            <th className="border-gray-300 border p-2 px-5">Description</th>
            <td className="border-gray-300 border p-2 px-5"> {gymProducts.description} </td>
        </tr>
      </table>
       
     </div>
     </div>
    </div>
  )
}

export default ViewGymProductDetails
