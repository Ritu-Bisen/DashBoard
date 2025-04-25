import React from 'react'
import Carousel from '../UI/Carousel'

const ViewGymProductDetails = ({gymProducts,onClose}) => {


  return (
    <div className="fixed top-25 right-60   h-[80vh] w-[120vh] overflow-hidden bg-white z-50">
       <div className="border-b border-gray-700  py-8 flex justify-between p-5 ">
        <h3 className="font-bold text-3xl">Gym Products Details</h3>
        <button
          onClick={onClose}
          className="bg-red-500 p-2 rounded-full w-20 text-white"
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
                    <th className="border-gray-300 border p-2 px-5">Category</th>
                    <td className="border-gray-300 border p-2 px-5">{gymProducts.category}</td>
                </tr>
                <tr>
                    <th className="border-gray-300 border p-2 px-5">Price</th>
                    <td className="border-gray-300 border p-2 px-5">{gymProducts.price}</td>
                </tr>
                <tr>
                    <th className="border-gray-300 border p-2 px-5">Discounted %</th>
                    <td className="border-gray-300 border p-2 px-5">{gymProducts.discounted_percentage}</td>
                </tr>
                <tr>
                    <th className="border-gray-300 border p-2 px-5">Discounted Price</th>
                    <td className="border-gray-300 border p-2 px-5">{gymProducts.discounted_price}</td>
                </tr>
                <tr>
                    <th className="border-gray-300 border p-2 px-5">Brand</th>
                    <td className="border-gray-300 border p-2 px-5">{gymProducts.brand}</td>
                </tr>
                <tr>
                    <th className="border-gray-300 border p-2 px-5">Model No.</th>
                    <td className="border-gray-300 border p-2 px-5">{gymProducts.model_number}</td>
                </tr>
                <tr>
                    <th className="border-gray-300 border p-2 px-5">No. of Pack</th>
                    <td className="border-gray-300 border p-2 px-5">{gymProducts.number_of_pack}</td>
                </tr>
                <tr>
                    <th className="border-gray-300 border p-2 px-5">Gender</th>
                    <td className="border-gray-300 border p-2 px-5">{gymProducts.gender}</td>
                </tr>
                <tr>
                    <th className="border-gray-300 border p-2 px-5">Weight</th>
                    <td className="border-gray-300 border p-2 px-5">{gymProducts.weight}</td>
                </tr>
                <tr>
                    <th className="border-gray-300 border p-2 px-5">Stock Quantity</th>
                    <td className="border-gray-300 border p-2 px-5">{gymProducts.stock_quantity}</td>
                </tr>
            </table>
         </div>
         <div>
            <Carousel image={gymProducts.image_urls} className="h-65 w-90" />
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
            <td className="border-gray-300 border p-2 px-5"> {gymProducts?.description.map((list, index) => (
                      <p key={index}>
                        <span className="font-bold">{index + 1}.</span> {list}
                      </p>
                    ))}</td>
        </tr>
      </table>
       
     </div>
     </div>
    </div>
  )
}

export default ViewGymProductDetails
