import React from 'react'

const ViewOrderRequestProducts = (orderProducts,onClose ) => {
    console.log(orderProducts);
    
  return (
    <div className="fixed top-25 right-60 h-150 w-250 bg-white ">
      <div className="border-b border-gray-700 py-8 flex justify-between p-5">
        <h3 className="font-bold text-3xl">Order Products Details</h3>
        <button onClick={onClose} className="bg-red-500 p-2 rounded-full w-20 text-white">
          Close
        </button>
      </div>
      <div className='px-10'>
        <table border="1">
          <thead>
            <tr>
              <th className="border-gray-300 border p-2 px-5">S. No.</th>
              <th className="border-gray-300 border p-2 px-5">Product Name</th>
              <th className="border-gray-300 border p-2 px-5">Quantity</th>
              <th className="border-gray-300 border p-2 px-5">Price</th>
            </tr>
          </thead>
          <tbody>
            {orderProducts &&
              Object.entries(orderProducts).map(([orderId, items], index) => (
                Array.isArray(items) ? (
                  items.map((item, subIndex) => (
                    <tr key={`${orderId}-${subIndex}`}>
                      <td className="border-gray-300 border p-2 px-5">{subIndex + 1}</td>
                      <td className="border-gray-300 border p-2 px-5">{item.mart_products?.name}</td>
                      <td className="border-gray-300 border p-2 px-5">{item.quantity}</td>
                      <td className="border-gray-300 border p-2 px-5">{item.price}</td>
                    </tr>
                  ))
                ) : null
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewOrderRequestProducts
