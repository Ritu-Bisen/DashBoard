import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMartOrdersDetails } from '../../Redux/Slices/OrderSlice';

const ViewOrderRequestProducts = ({orderId,onClose,sellerDetails} ) => {
  const { orders } = useSelector((state) => state.order); //order=store,orders=initialstate
  const dispatch=useDispatch();
  useEffect(() => {
  dispatch(getMartOrdersDetails({orderId,sellerDetails}))
  }, [dispatch])
    
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
            <tr >
                     <th className="p-2 border-gray-300 border">S.no</th>
                    <th className="p-2 border-gray-300 border">Product Name</th>
                    <th className="p-2 border-gray-300 border">Quantity</th>
                    <th className="p-2 border-gray-300 border">MRP</th>
                    <th className="p-2 border-gray-300 border">Discount %</th>
                  
                    <th className="p-2 border-gray-300 border">GST</th>
                    <th className="p-2 border-gray-300 border">HSN Code</th>
                        <th className="p-2 border-gray-300 border">Discounted Price</th>
                    <th className="p-2 border-gray-300 border">Taxable Price</th>
                    <th className="p-2 border-gray-300 border">Final Price</th>
                
                  </tr>
        </thead>
        <tbody>
                  {orders?.map((item, index) => (
                   <tr key={index} className="bg-white">
                       <td className="p-2 border-gray-300 border">{index+1}</td>
                      <td className="p-2 border-gray-300 border">{item.mart_products?.name || "N/A"}</td>
                      <td className="p-2 border-gray-300 border">{item.quantity}</td>
                                  <td className="p-2 border-gray-300 border">{item.mart_products.price}</td>
                      <td className="p-2 border-gray-300 border">{item.mart_products.discount_percentage}</td>
                    
                      <td className="p-2 border-gray-300 border">{item.mart_products.gst}</td>
                      <td className="p-2 border-gray-300 border">{item.mart_products.hsn_code}</td>
                        <td className="p-2 border-gray-300 border">{item.mart_products.discounted_price}</td>
                      <td className="p-2 border-gray-300 border">{item.mart_products.taxable_price}</td>
                      <td className="p-2 border-gray-300 border">{item.mart_products.final_price}</td>
                    
                    </tr>
                  ))}
              
                 
                </tbody>

      </table>
    
    </div>
  )
}

export default ViewOrderRequestProducts
