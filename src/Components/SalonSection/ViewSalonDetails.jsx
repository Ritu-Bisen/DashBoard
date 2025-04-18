import React from "react";
import Carousel from "../UI/Carousel";

const ViewSalonDetails = ({ services, onClose }) => {
  return (
    <div className="fixed top-35 right-55 rounded-4xl h-150 w-200 bg-white z-[1000]  p-5">
     <div className="flex justify-between p-5 border-b ">
        <h1 className="text-2xl font-bold">View Details</h1>
        <button className="bg-red-600 text-white py-2 px-10 rounded-full " onClick={onClose}>Clear</button>
        </div>
      <div className="flex gap-3">
        {/* <img className="h-65 w-65 object-cover" src={services.image_urls[0]} /> */}
        <Carousel image={services.image_urls}/>
        <div>
          <table >
            <th  className="border-gray-300 border p-2 px-5">Name:</th>
            <td className="border-gray-300 border p-1">{services.name}</td>
            <tr>
              <th className="border-gray-300 border p-1">Category:</th>
              <td className="border-gray-300 border p-1">{services.category_id}</td>
            </tr>
            <tr>
              {" "}
              <th className="border-gray-300 border p-1">Duration:</th>
              <td className="border-gray-300 border p-1">{services.duration}</td>
            </tr>
            <tr>
              {" "}
              <th className='border-gray-300 border p-1'>Highlights:</th>
             <div className="flex flex-col border-gray-300 border p-1">
                 {(services.highlights).map((item,index)=>(
                    <td><span>{index+1}. </span>{item}</td>
                 )
                )}</div>
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
            {/* <tr>
              <th className="border-gray-300 border p-1">Description:</th>
              <td className="border-gray-300 border p-1">{services.description}</td>
            </tr> */}
          </table>
    </div> 
      </div>
       <div  className="mt-5">
            <h1 className="font-semibold">Description:</h1>
            <p>{services.description}</p>
         </div>
    </div>
  );
};

export default ViewSalonDetails;
