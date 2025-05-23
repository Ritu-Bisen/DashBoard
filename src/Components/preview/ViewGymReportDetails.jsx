import React, { useEffect } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { MdOutlineBorderStyle } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { getGymOrderDetails } from '../../Redux/Slices/gymSlice/gymOrdersSlice';

const ViewGymReportDetails = ({ onClose, orderId, sellerDetails }) => {
  const dispatch = useDispatch();
  const { orderDetails } = useSelector((state) => state.gymOrders);

  useEffect(() => {
    if (
      orderId &&
      sellerDetails &&
      sellerDetails.id &&
      sellerDetails.segment
    ) {
      dispatch(getGymOrderDetails({ orderId, sellerDetails }));
    }
  }, [orderId, sellerDetails, dispatch]);

  // ⛔ Wait for data to load
  if (!orderDetails || orderDetails.length === 0) {
    return (
      <div className="fixed bg-white rounded-xl w-full max-w-3xl p-10 text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl">
        <p className="text-gray-600 text-lg">Loading order details...</p>
      </div>
    );
  }

  const orderInfo = orderDetails[0]?.orders || {};

  return (
    <div className="fixed bg-white rounded-xl w-full max-w-5xl max-h-[90vh] overflow-auto shadow-2xl top-1/2 left-1/2 transition -translate-x-1/2 -translate-y-1/2 z-50">
      <div className="bg-gradient-to-r from-red-400 to-red-500 sticky top-0 z-10 flex justify-between items-center px-6 py-2 border-b border-orange-300">
        <h3 className="font-bold text-2xl text-white flex items-center gap-2">
          <MdOutlineBorderStyle className="text-white" />
          Orders Details
        </h3>
        <button
          onClick={onClose}
          className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-1 transition-all duration-200"
          aria-label="Close"
        >
          <RxCross1 size={25} className="text-black font-bold" />
        </button>
      </div>

    

      <table className="border-collapse bg-white rounded-lg overflow-hidden shadow-md mb-6 w-full">
        <thead>
          <tr className="bg-gray-100">
               <th className="p-2 border">S.No</th>
            <th className="p-2 border">Product Name</th>
            <th className="p-2 border">Quantity</th>
            <th className="p-2 border">Discount %</th>
            <th className="p-2 border">SGST INR</th>
            <th className="p-2 border">CGST INR</th>
            <th className="p-2 border">GST</th>
            <th className="p-2 border">HSN Code</th>
            <th className="p-2 border">Taxable Price</th>
            <th className="p-2 border">Final Price</th>
            <th className="p-2 border">Discounted Price</th>
          </tr>
        </thead>
        <tbody>
          {orderDetails.map((item, index) => (
            <tr key={index}>
                 <td className="p-2 border">{index+1}</td>
              <td className="p-2 border">{item.gym_products?.name || "N/A"}</td>
              <td className="p-2 border">{item.quantity}</td>
              <td className="p-2 border">{item.gym_products?.discount_percentage}</td>
              <td className="p-2 border">{item.gym_products?.sgst_inr}</td>
              <td className="p-2 border">{item.gym_products?.cgst_inr}</td>
              <td className="p-2 border">{item.gym_products?.gst}</td>
              <td className="p-2 border">{item.gym_products?.hsn_code}</td>
              <td className="p-2 border">{item.gym_products?.taxable_price}</td>
              <td className="p-2 border">{item.gym_products?.price}</td>
              <td className="p-2 border">{item.gym_products?.discount_price}</td>
            </tr>
          ))}
          <tr>
            <th colSpan={10} className="text-end p-2 border">Total Amount:</th>
            <td className="p-2 border">{orderInfo.total_amount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ViewGymReportDetails;
