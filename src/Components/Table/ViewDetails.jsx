import React from "react";
import { RxCross2 } from "react-icons/rx";

const ViewDetails = ({ product,onClose }) => {
  console.log(product);
  return (
    <div className="fixed top-20 right-30  h-150 w-250 bg-white ">
      <div className="border-b border-gray-700  py-8 flex justify-between p-5">
        <h3 className="font-bold text-3xl">Product Details</h3>
        <button onClick={onClose} className="bg-red-500 p-2 rounded-full w-20 text-white">
          Close
        </button>
      </div>
      <div className="justify-between flex flex-row  ">
        <table className="mt-5 ml-5 ">
          <tbody >
            <tr>
              <th className="border-gray-300 border p-2 px-5">Product Id :</th>
              <td className="border-gray-300 border p-2 px-5">{product.id}</td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-2 px-5">Name :</th>
              <td className="border-gray-300 border p-2 px-5">
                {product.name}
              </td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-2 px-5">Category :</th>
              <td className="border-gray-300 border p-2 px-5">
                {product.categories.name}
              </td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-2 px-5">Price :</th>
              <td className="border-gray-300 border p-2 px-5">
                {product.price}
              </td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-2 px-5">
                Discounted Price :
              </th>
              <td className="border-gray-300 border p-2 px-5">
                {product.discounted_price}
              </td>
            </tr>
            <tr>
              <th className="pr-5 border-gray-300 border p-2 px-5">
                Discount Percentage :
              </th>
              <td className="border-gray-300 border p-2 px-5">
                {product.discount_percentage}
              </td>
            </tr>
            <tr>
              <th className="border-gray-300 border p-2 px-5">Quantity :</th>
              <td className="border-gray-300 border p-2 px-5">
                {product.stock_quantity}
              </td>
            </tr>
            
          </tbody>
        </table>

        <div className="pr-5 flex flex-col justify-center items-center text-2xl font-semibold">
          <h1>Image</h1>
          <img className="h-65 w-65" src={product.image_urls[0]} />
        </div>
       
      </div>
      <div className="flex border border-gray-300  gap-3 ml-5 mr-5 ">
          <p className="font-semibold border-r border-gray-300 p-5">Description :</p>
          <p className="p-5">{product.description}</p>
        </div>
     
    </div>
  );
};

export default ViewDetails;
