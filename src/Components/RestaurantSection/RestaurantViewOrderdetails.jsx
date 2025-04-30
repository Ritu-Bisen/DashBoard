import React from 'react'

const RestaurantViewOrderdetails = ({onClose,orders}) => {
    console.log(orders)
  return (
    <div className="fixed top-20 right-30  h-150 w-250  overflow-y-scroll bg-gray-300 p-5 ">
      <div className="border-b border-gray-500  py-8 flex justify-between p-5">
        <h1 className='text-3xl font-bold'>View Details</h1>
        <button className="bg-red-500 p-2 rounded-full w-20 text-white" onClick={onClose} >Close</button>

      </div>
      <div className='flex gap-8 mt-5'>
       <div className='ml-5 '>
        <h1 className='font-semibold text-xl  '>Order Details :</h1>
        <table className='mt-5 bg-white rounded-xl'>
            
            <tbody>
                <tr>
                    <th  className="border-gray-300 border p-2 px-5">Order Id :</th>
                    <td className="border-gray-300 border p-2 px-5">{orders.orders.id}</td>
                </tr>
                <tr>
                    <th className="border-gray-300 border p-2 px-5">Address :</th>
                    <td className="border-gray-300 border p-2 px-5">{orders.orders.address}</td>
                </tr>
                <tr>
                    <th className="border-gray-300 border p-2 px-5">Order Status :</th>
                    <td className="border-gray-300 border p-2 px-5">{orders.orders.order_status}</td>
                </tr>
                <tr>
                    <th className="border-gray-300 border p-2 px-5">Order Type :</th>
                    <td className="border-gray-300 border p-2 px-5">{orders.orders.order_type}</td>
                </tr>
                <tr>
                    <th className="border-gray-300 border p-2 px-5">Payment Method :</th>
                    <td className="border-gray-300 border p-2 px-5">{orders.orders.payment_method}</td>
                </tr>
                <tr>
                    <th className="border-gray-300 border p-2 px-5">Payment Status :</th>
                    <td className="border-gray-300 border p-2 px-5">{orders.orders.payment_status}</td>
                </tr>
                <tr>
                    <th className="border-gray-300 border p-2 px-5">Total Amount :</th>
                    <td className="border-gray-300 border p-2 px-5">{orders.orders.total_amount}</td>
                </tr>
            </tbody>
        </table>
       </div>
       <div>
        <h1 className='font-semibold text-xl'>Users Details :</h1>
        <table className='mt-5 bg-white rounded-xl'>
            
            <tbody>
                <tr>
                    <th className="border-gray-300 border p-2 px-5">User Name :</th>
                    <td className="border-gray-300 border p-2 px-5">{orders.orders.users.name}</td>
                </tr>
                <tr>
                    <th className="border-gray-300 border p-2 px-5">Email Id :</th>
                    <td className="border-gray-300 border p-2 px-5">{orders.orders.users.email}</td>
                </tr>
                <tr>
                    <th className="border-gray-300 border p-2 px-5">Address :</th>
                    <td className="border-gray-300 border p-2 px-5">{orders.orders.users.address_line}</td>
                </tr>
                <tr>
                    <th className="border-gray-300 border p-2 px-5">City :</th>
                    <td className="border-gray-300 border p-2 px-5">{orders.orders.users.city}</td>
                </tr>
                <tr>
                    <th className="border-gray-300 border p-2 px-5">Postal Code :</th>
                    <td className="border-gray-300 border p-2 px-5">{orders.orders.users.postal_code}</td>
                </tr>
                <tr>
                    <th className="border-gray-300 border p-2 px-5">Phone No. :</th>
                    <td className="border-gray-300 border p-2 px-5">{orders.orders.users.phone_number}</td>
                </tr>
                
                <tr>
                    <th className="border-gray-300 border p-2 px-5">State :</th>
                    <td className="border-gray-300 border p-2 px-5">{orders.orders.users.state}</td>
                </tr>
               
            </tbody>
        </table>
       </div>
      </div>
      <div className='mt-5 ml-5 items-center justify-center flex flex-col'>
        <h1 className='font-semibold text-xl'>Product Details :</h1>
        <table className='mt-5 bg-white rounded-xl'>
            
            <tbody>
                <tr>
                    <th className="border-gray-300 border p-2 px-5">Product Id :</th>
                    <td className="border-gray-300 border p-2 px-5">{orders.restaurant_products.id}</td>
                </tr>
                <tr>
                    <th className="border-gray-300 border p-2 px-5">Product Name :</th>
                    <td className="border-gray-300 border p-2 px-5">{orders.restaurant_products.name}</td>
                </tr>
                <tr>
                    <th className="border-gray-300 border p-2 px-5">Discount %:</th>
                    <td className="border-gray-300 border p-2 px-5">{orders.restaurant_products.discount_percentage}</td>
                </tr>
                <tr>
                    <th className="border-gray-300 border p-2 px-5">Discounted Price :</th>
                    <td className="border-gray-300 border p-2 px-5">{orders.restaurant_products.discounted_price}</td>
                </tr>
                <tr>
                    <th className="border-gray-300 border p-2 px-5">Price :</th>
                    <td className="border-gray-300 border p-2 px-5">{orders.restaurant_products.price}</td>
                </tr>
                <tr>
                    <th className="border-gray-300 border p-2 px-5">Quantity :</th>
                    <td className="border-gray-300 border p-2 px-5">{orders.quantity}</td>
                </tr>
                
                
               
            </tbody>
        </table>
       </div>
    </div>
  )
}

export default RestaurantViewOrderdetails
