import React, { useEffect } from "react";
import logo from "../../assets/pictures/snba-logo-black.png";
import { useDispatch, useSelector } from "react-redux";
import { getAppointmentServiceData } from "../../Redux/Slices/salonSlicees/salonAppointmentSlice";

const ViewSalonBillingInvoice = ({ orderId, onClose,sellerDetails }) => {
   const {serviceList} = useSelector((state)=>state.appointment);

     const dispatch = useDispatch();
     useEffect(() => {
       dispatch(getAppointmentServiceData({sellerDetails,orderId}))
      
     }, [dispatch])
     

    if (!serviceList || serviceList.length === 0) {
    return (
      <div className="fixed bg-white rounded-xl w-full max-w-3xl p-10 text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl">
        <p className="text-gray-600 text-lg">Loading order details...</p>
      </div>
    );
  }

  const orderInfo = serviceList[0]?.orders || {};
  const userInfo = orderInfo?.users || {};  

  return (
    <div className="fixed w-full max-w-4xl max-h-[90vh] shadow-2xl top-1/2 left-1/2 transition -translate-x-1/2 -translate-y-1/2  overflow-auto overflow-y-scroll rounded-4xl h-180 bg-white z-50  p-5">
      <div className="ml-5 ">
       <div className="flex justify-between p-5">
        <div>
       <h1 className="font-semibold text-xl">Invoice #2020-05-0001</h1>
       <p className="text-sm">paid on {serviceList[0]?.booked_for} </p>
       </div>
       <div><button onClick={onClose} className=" rounded-full bg-red-500 h-10 w-40 p-2 text-white">Clear</button></div></div>

        <div className="h-140 mt-5 w-210  shadow-gray-400 shadow-lg rounded-4xl p-5">
          <div className="flex">
            <img className=" w-44 h-15  object-cover text-black " src={logo} />

            <div className="text-sm ml-5">
              <h1 className="">SNBA Consumer</h1>
              <p>{userInfo.name}</p>
              <p>{orderInfo.address}</p>
              <p>
                {userInfo.phone_number} |{" "}
                {userInfo.email}
              </p>
              <p>GSTIN: 365 438 457 83447 </p>
            </div>
            <div className="text-sm ml-50 ">
              <p>Invoice Number</p>
              <p className=" font-semibold">#2020-50-0001</p>
              <p>Total Amount</p>
              <p className=" font-semibold">₹ {orderInfo.total_amount}</p>
            </div>
          </div>

          <div className="w-200 h-95 mt-5  rounded-4xl shadow-sm shadow-gray-400 text-sm p-5 ">
            <div className="flex justify-between px-5 py-2">
              <div className="bg-gray-200 p-2 rounded-xl">
                <p>Bill Date</p>
                <p className=" font-semibold">{serviceList[0]?.booked_for}</p>
                <p>Order ID</p>
                <p className=" font-semibold">{(orderInfo.id).slice(0,8)}</p>
              </div>
              <div className="text-sm">
                <p>Billing Address</p>
                <p className="text-lg font-semibold">
                  {userInfo.name}
                </p>
                <p>{orderInfo.address}</p>
                <p>
                  {userInfo.phone_number} |{" "}
                  {userInfo.email}
                </p>
              </div>
            </div>
           
             <table className="border-collapse bg-white rounded-lg overflow-hidden shadow-md mb-6 w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border border-gray-300">Product Name</th>
            <th className="p-2 border border-gray-300">Quantity</th>
            <th className="p-2 border border-gray-300">Discount %</th>
            <th className="p-2 border border-gray-300">SGST INR</th>
            <th className="p-2 border border-gray-300">CGST INR</th>
            <th className="p-2 border border-gray-300">GST</th>
            <th className="p-2 border border-gray-300">HSN Code</th>
            <th className="p-2 border border-gray-300">Taxable Price</th>
            <th className="p-2 border border-gray-300">Discounted Price</th>
            <th className="p-2 border border-gray-300">Final Price</th>
            
          </tr>
        </thead>
        <tbody>
          {serviceList.map((item, index) => (
            <tr key={index}>
              <td className="p-2 border border-gray-300">{item.salon_services?.name || "N/A"}</td>
              <td className="p-2 border border-gray-300">{item.quantity}</td>
              <td className="p-2 border border-gray-300">{item.salon_services?.discount_percentage}</td>
              <td className="p-2 border border-gray-300">{item.salon_services?.sgst}</td>
              <td className="p-2 border border-gray-300">{item.salon_services?.cgst}</td>
              <td className="p-2 border border-gray-300">{item.salon_services?.gst}</td>
              <td className="p-2 border border-gray-300">{item.salon_services?.hsn_code}</td>
              <td className="p-2 border border-gray-300">{item.salon_services?.taxable_price}</td>
              <td className="p-2 border border-gray-300">{item.salon_services?.discounted_price}</td>
              <td className="p-2 border border-gray-300">{item.salon_services?.final_price}</td>
              
            </tr>
          ))}
          <tr>
            <th colSpan={9} className="text-end p-2 border border-gray-300">Total Amount:</th>
            <td className="p-2 border border-gray-300">{orderInfo.total_amount}</td>
          </tr>
        </tbody>
      </table>
           
          </div>
        </div>
      </div> 
    </div>
  );
};

export default ViewSalonBillingInvoice;
