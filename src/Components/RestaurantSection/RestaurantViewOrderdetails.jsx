import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAssignedDeliveryBoy, getRestaurantOrders } from "../../Redux/Slices/restaurantSlice/restaurantOrderSlice";



const RestaurantViewOrderdetails = ({orderId, onClose}) => {
   console.log(orderId);
    
  const { orders } = useSelector((state) => state.restaurantOrder);
   const { assignedDeliveryBoy } = useSelector((state) => state.restaurantOrder); 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRestaurantOrders(orderId));
    dispatch(getAssignedDeliveryBoy(orderId));
  }, [dispatch]);

  console.log("hli", assignedDeliveryBoy);

  if (!orders || orders.length === 0 || !orders[0]?.orders) {
    return (
      <div className="fixed top-20 right-30 h-150 w-250 overflow-y-scroll bg-gray-300 p-5">
        <p>Loading order details...</p>
        <button onClick={onClose} className="mt-4 bg-red-500 p-2 rounded-full text-white">
          Close
        </button>
      </div>
    );
  }

  const orderInfo = orders[0].orders;
  const userInfo = orderInfo.users;
  const deliveryBoy = assignedDeliveryBoy[0].delivery_boys 
console.log("orders",orders);

  console.log(deliveryBoy);
  

  return (
    <div className="fixed top-1/2 right-1/2 transition translate-x-1/2 -translate-y-1/2 h-150 w-250 overflow-y-scroll bg-gray-300 pb-5">
      <div className="border-b border-gray-700 py-8 flex justify-between p-5">
        <h3 className="font-bold text-3xl">Order Products Details</h3>
        <button onClick={onClose} className="bg-red-500 p-2 rounded-full w-20 text-white">
          Close
        </button>
      </div>

      <div className="flex gap-8 mt-5">
        <div className="ml-5">
          <h1 className="font-semibold text-xl">Order Details :</h1>
          <table className="mt-5 bg-white rounded-xl">
            <tbody>
              <tr><th className="border p-2">Order Id :</th><td className="border p-2">{orderInfo.id}</td></tr>
              <tr><th className="border p-2">Address :</th><td className="border p-2">{orderInfo.address}</td></tr>
              <tr><th className="border p-2">Order Status :</th><td className="border p-2">{orderInfo.order_status}</td></tr>
              <tr><th className="border p-2">Order Type :</th><td className="border p-2">{orderInfo.order_type}</td></tr>
              <tr><th className="border p-2">Payment Method :</th><td className="border p-2">{orderInfo.payment_method}</td></tr>
              <tr><th className="border p-2">Payment Status :</th><td className="border p-2">{orderInfo.payment_status}</td></tr>
              <tr><th className="border p-2">Delivery Boys :</th><td className="border p-2">{deliveryBoy.full_name}</td></tr>
              <tr><th className="border p-2">Total Amount :</th><td className="border p-2">{orderInfo.total_amount}</td></tr>
            </tbody>
          </table>
        </div>

        <div>
          <h1 className="font-semibold text-xl">Users Details :</h1>
          <table className="mt-5 bg-white rounded-xl">
            <tbody>
              <tr><th className="border p-2">User Name :</th><td className="border p-2">{userInfo.name}</td></tr>
              <tr><th className="border p-2">Email Id :</th><td className="border p-2">{userInfo.email}</td></tr>
              <tr><th className="border p-2">Address :</th><td className="border p-2">{userInfo.address_line}</td></tr>
              <tr><th className="border p-2">City :</th><td className="border p-2">{userInfo.city}</td></tr>
              <tr><th className="border p-2">Postal Code :</th><td className="border p-2">{userInfo.postal_code}</td></tr>
              <tr><th className="border p-2">Phone No. :</th><td className="border p-2">{userInfo.phone_number}</td></tr>
              <tr><th className="border p-2">State :</th><td className="border p-2">{userInfo.state}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <table className="w-full text-left ">
        <thead>
          <tr className=" ">
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
              <td className="p-2 border-gray-300 border">{item.restaurant_products?.name || "N/A"}</td>
              <td className="p-2 border-gray-300 border">{item.quantity}</td>
              <td className="p-2 border-gray-300 border">{item.restaurant_products.discounted_price}</td>
              <td className="p-2 border-gray-300 border">{item.restaurant_products.sgst}</td>
              <td className="p-2 border-gray-300 border">{item.restaurant_products.cgst}</td>
              <td className="p-2 border-gray-300 border">{item.restaurant_products.tax_amount}</td>
              <td className="p-2 border-gray-300 border">{item.restaurant_products.final_price}</td>
            
            </tr>
          ))}
            <tr>
              <th colSpan={6} className="bg-white p-2 border-gray-300 border text-end">Total Amount:</th> 
            
            <td className="bg-white p-2 border-gray-300 border">{orders[0].orders.total_amount}</td>
            </tr>
         
        </tbody>

      </table>
    
     
    </div>
  );
};

export default RestaurantViewOrderdetails;