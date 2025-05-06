import React, { useEffect } from 'react'
import { getRestaurantOrders } from '../../Redux/Slices/restaurantSlice/restaurantOrderSlice';
import { useDispatch, useSelector } from 'react-redux';

const RestaurantViewOrderRequest = ({orderId ,onClose}) => {
  console.log(orderId);
  const { orders } = useSelector((state) => state.restaurantOrder);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRestaurantOrders(orderId));
 
  }, [dispatch]);

  console.log("hli", orders);
    
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
          <th className="p-2 border-gray-300 border">S.No.</th>
            <th className="p-2 border-gray-300 border">Product Name</th>
            <th className="p-2 border-gray-300 border">Quantity</th>
            <th className="p-2 border-gray-300 border">Taxable Amount</th>
            <th className="p-2 border-gray-300 border">SGST</th>
            <th className="p-2 border-gray-300 border">CGST</th>
            <th className="p-2 border-gray-300 border">Tax Amount</th>
            <th className="p-2 border-gray-300 border">Final Price</th>
           
          </tr>
        </thead>
        <tbody>
          {orders?.map((item, index) => (
            <tr key={index} className="bg-white">
               <td className="p-2 border-gray-300 border">{index+1}.</td>
              <td className="p-2 border-gray-300 border">{item.restaurant_products?.name || "N/A"}</td>
              <td className="p-2 border-gray-300 border">{item.quantity}</td>
              <td className="p-2 border-gray-300 border">{item.restaurant_products.discounted_price}</td>
              <td className="p-2 border-gray-300 border">{item.restaurant_products.sgst}</td>
              <td className="p-2 border-gray-300 border">{item.restaurant_products.cgst}</td>
              <td className="p-2 border-gray-300 border">{item.restaurant_products.tax_amount}</td>
              <td className="p-2 border-gray-300 border">{item.restaurant_products.final_price}</td>
            
            </tr>
          ))}
          
         
        </tbody>

      </table>
    
    </div>
  )
}

export default RestaurantViewOrderRequest
