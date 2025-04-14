import React from "react";
import logo from "../../assets/pictures/snba-logo-black.png";

const SalonBillingInvoice = () => {
  return (
    <div className="w-[calc(100%-300px)] ml-[300px] h-screen pt-30 ">
      <div className="ml-10 ">
        <h1 className="font-semibold text-xl">Invoice #2020-05-0001</h1>
        <p className="text-sm">paid on June 27,2023</p>

        <div className="h-150 mt-5 w-220 ml-35 shadow-gray-400 shadow-lg rounded-4xl pl-5">
          <div className="flex">
            <img className=" w-44 h-15  object-cover text-black " src={logo} />
         
           <div className="text-sm ml-5">
              <h1 className="">SNBA Consumer</h1>
              <p>John Brandon</p>
              <p>789/1 Sector-2c, 38200 GandhiNagar, France</p>
              <p>2983743487 | contact@vetao.se</p>
              <p>GSTIN: 365 438 457 83447 </p>
            </div>
            <div className="text-sm ml-50 ">
              <p>Invoice Number</p>
              <p className=" font-semibold">#2020-50-0001</p>
              <p>Total Amount</p>
              <p className=" font-semibold">₹ 630.00</p>
            </div>
          
          </div>

        <div className="w-200 h-115 mt-5  rounded-4xl shadow-sm shadow-gray-400 text-sm ">
         <div className="flex justify-between px-5 py-2">
         <div className="bg-gray-200 p-2 rounded-xl">
            <p>Bill Date</p>
            <p className=" font-semibold">03/05/2020</p>
            <p>Order ID</p>
            <p className=" font-semibold">OD1234354567675674</p>
          </div>
          <div className="text-sm">
            <p>Billing Address</p>
            <p className="text-lg font-semibold">Nitesh</p>
            <p>1445 West Norwood Avenue,itasca,llinois,USA</p>
            <p>939864683| om@om.com</p>
          </div>
         </div>
         <table className="text-sm ml-5">
          <tr>
            <th className="border-gray-300 border  px-2">S.No</th>
            <th className="border-gray-300 border  px-2">SERVICES</th>
            <th className="border-gray-300 border  px-2">UNIT PRICE</th>
            <th className="border-gray-300 border  px-2">DISCOUNT</th>
            <th className="border-gray-300 border  px-2">AMOUNT</th>
            <th className="border-gray-300 border  px-2">FINAL AMOUNT</th>
          </tr>
           <tr>
            <td className="border-gray-300 border  px-5">1</td>
            <td className="border-gray-300 border px-5 flex-col flex">Hair Cut<span>Product Description</span></td>
             <td className="border-gray-300 border  px-5">₹ 200</td> 
             <td className="border-gray-300 border  px-5">0 %</td>
              <td className="border-gray-300 border  px-5">₹ 200</td>
              <td className="border-gray-300 border  px-5">₹ 200</td>
           </tr>
           <tr>
            <td className="border-gray-300 border px-5">2</td>
            <td className="border-gray-300 border px-5 flex-col flex">Hair Spa<span>Product Description</span></td>
             <td className="border-gray-300 border px-5">₹ 200</td> 
             <td className="border-gray-300 border px-5">0 %</td>
              <td className="border-gray-300 border px-5">₹ 200</td>
              <td className="border-gray-300 border px-5">₹ 200</td>
           </tr>
           <tr>
            <td className="border-gray-300 border  px-5">3</td>
            <td className="border-gray-300 border px-5 flex-col flex">Hair Color<span>Product Description</span></td>
             <td className="border-gray-300 border px-5">₹ 200</td> 
             <td className="border-gray-300 border px-5">0 %</td>
              <td className="border-gray-300 border px-5">₹ 200</td>
              <td className="border-gray-300 border px-5">₹ 200</td>
           </tr> 
          
         </table>
         <table className="ml-5 mt-3 ">
          <tr>
            <th className="border-gray-300 border p-1 px-5" >Total</th>
            <td className="border-gray-300 border p-1 px-5">₹ 600</td>
          </tr>
          <tr>
            <th className="border-gray-300 border p-1 px-5">GST</th>
            <td className="border-gray-300 border p-1 px-5">₹ 30</td>
          </tr>
          <tr>
            <th className="border-gray-300 border p-1 px-5">Total Discount</th>
            <td className="border-gray-300 border p-1 px-5">₹ 0</td>
          </tr>
          <tr className=" ">
            <th className="border-gray-300 border p-1 px-5">Total Price</th>
            <td className="border-gray-300 border p-1 px-5">₹ 630.00</td>
          </tr>
          </table>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SalonBillingInvoice;
