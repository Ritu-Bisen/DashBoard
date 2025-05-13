import React from "react";
import logo from "../../assets/pictures/snba-logo-black.png";

const ViewSalonBillingInvoice = ({ billing, onClose }) => {
  console.log(billing);

  return (
    <div className="fixed top-25 right-55 rounded-4xl h-180 w-230 bg-white z-[1000]  p-5">
      <div className="ml-5 ">
       <div className="flex justify-between p-5">
        <div>
       <h1 className="font-semibold text-xl">Invoice #2020-05-0001</h1>
       <p className="text-sm">paid on {billing.booked_for} </p>
       </div>
       <div><button onClick={onClose} className=" rounded-full bg-red-500 h-10 w-40 p-2 text-white">Clear</button></div></div>

        <div className="h-140 mt-5 w-210  shadow-gray-400 shadow-lg rounded-4xl p-5">
          <div className="flex">
            <img className=" w-44 h-15  object-cover text-black " src={logo} />

            <div className="text-sm ml-5">
              <h1 className="">SNBA Consumer</h1>
              <p>{billing.orders.users.name}</p>
              <p>{billing.orders.address}</p>
              <p>
                {billing.orders.users.phone_number} |{" "}
                {billing.orders.users.email}
              </p>
              <p>GSTIN: 365 438 457 83447 </p>
            </div>
            <div className="text-sm ml-50 ">
              <p>Invoice Number</p>
              <p className=" font-semibold">#2020-50-0001</p>
              <p>Total Amount</p>
              <p className=" font-semibold">₹ {billing.price}</p>
            </div>
          </div>

          <div className="w-200 h-95 mt-5  rounded-4xl shadow-sm shadow-gray-400 text-sm p-5 ">
            <div className="flex justify-between px-5 py-2">
              <div className="bg-gray-200 p-2 rounded-xl">
                <p>Bill Date</p>
                <p className=" font-semibold">{billing.booked_for}</p>
                <p>Order ID</p>
                <p className=" font-semibold">{(billing.order_id).slice(0,8)}</p>
              </div>
              <div className="text-sm">
                <p>Billing Address</p>
                <p className="text-lg font-semibold">
                  {billing.orders.users.name}
                </p>
                <p>{billing.orders.address}</p>
                <p>
                  {billing.orders.users.phone_number} |{" "}
                  {billing.orders.users.email}
                </p>
              </div>
            </div>
            <table className="text-sm ml-5 h-40 w-150 mt-5">
              <tbody>
                <tr>
                  {" "}
                  <th className="border-gray-300 border  px-2">S.No</th>
                  <td className="border-gray-300 border  px-2">1</td>
                </tr>

                <tr>
                  {" "}
                  <th className="border-gray-300 border  px-2">SERVICES</th>
                  <td className="border-gray-300 border  px-2">{billing.salon_services.name}</td>
                </tr>
                <tr>
                  <th className="border-gray-300 border  px-2">DISCOUNT PERCENTAGE</th>
                  <td className="border-gray-300 border  px-2">{billing.salon_services.discount_percentage}</td>
                </tr>
                <tr>
                  <th className="border-gray-300 border  px-2">DISCOUNT PRICE</th>
                  <td className="border-gray-300 border  px-2">₹ {billing.salon_services.discounted_price}</td>
                </tr>

                <tr>
                  {" "}
                  <th className="border-gray-300 border  px-2">TOTAL AMOUNT</th>
                  <td className="border-gray-300 border  px-2">₹  {billing.price}</td>
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
