import React from 'react'
import Carousel from '../UI/Carousel';

const ViewGymServiceDetails = ({onClose,services}) => {
   const image=[
    services.image_urls[0],
    services.image_urls[1],
    services.image_urls[2]
   ]
  return (
    <div className="fixed top-1/2 right-1/2 transition translate-x-1/2 -translate-y-1/2 h-150 w-250 overflow-y-scroll bg-white">
     <div className="flex justify-between p-5 border-b ">
        <h1 className="text-2xl font-bold">View Details</h1>
        <button className="bg-red-600 text-white py-2 px-10 rounded-full " onClick={onClose}>Clear</button>
        </div>
      <div className="flex gap-3">
        {/* <img className="h-65 w-65 object-cover" src={services.image_urls[0]} /> */}
        <Carousel  className="h-65 w-85" image={image}/>
        <div>
          <table >
             <tr> 
             <th  className="border-gray-300 border p-2 px-5">Id:</th>
            <td className="border-gray-300 border p-1">{services.id}</td>
            </tr>
            <tr> 
             <th  className="border-gray-300 border p-2 px-5">Name:</th>
            <td className="border-gray-300 border p-1">{services.name}</td>
            </tr>
          
            <tr>
              <th className="border-gray-300 border p-1">Category:</th>
              <td className="border-gray-300 border p-1">{services.categories.name}</td>
            </tr>
            <tr>
              {" "}
              <th className="border-gray-300 border p-1">Duration:</th>
              <td className="border-gray-300 border p-1">{services.duration}</td>
            </tr>
             <tr>
              {" "}
              <th className="border-gray-300 border p-1">Available:</th>
              <td className="border-gray-300 border p-1">{services.is_available?"Available":"Not Available"}</td>
            </tr>
           
            <tr>
              {" "}
              <th className="border-gray-300 border p-1">Discounted Price:</th>
              <td className="border-gray-300 border p-1">{services.discounted_price}</td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-1">Discount Percentage:</th>
              <td className="border-gray-300 border p-1">{services.discount_percentage}</td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-1">Price:</th>
              <td className="border-gray-300 border p-1">{services.price}</td>
            </tr>
             <tr>
              <th className="border-gray-300 border p-1">GST:</th>
              <td className="border-gray-300 border p-1">{services.gst||"N/A"}</td>
            </tr> <tr>
              <th className="border-gray-300 border p-1">SGST INR:</th>
              <td className="border-gray-300 border p-1">{services.sgst_inr||"N/A"}</td>
            </tr> <tr>
              <th className="border-gray-300 border p-1">CGST INR:</th>
              <td className="border-gray-300 border p-1">{services.cgst_inr||"N/A"}</td>
            </tr>
              <tr>
              <th className="border-gray-300 border p-1">HSN Code:</th>
              <td className="border-gray-300 border p-1">{services.hsn_code||"N/A"}</td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-1">Taxable Price:</th>
              <td className="border-gray-300 border p-1">{services.taxable_price||"N/A"}</td>
            </tr>
          </table>
    </div> 
      </div>
       <div  className="mt-5">
            <h1 className="font-semibold">Description:</h1>
            <p>{services.description}</p>
            
              <h1 className='font-semibold mt-2 '>Facilities:</h1>
             <div className="flex flex-col mb-5 ">
                 {(services.facilities).map((item,index)=>(
                    <p ><span>{index+1}. </span>{item}</p>
                 )
                )}
                </div>
           
         </div>
    </div>
  );
}

export default ViewGymServiceDetails
