import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSellerDetails } from "../Redux/Slices/loginSellerSlice";
import { getEmployeeDetails } from "../Redux/Slices/employeeSlice";
import { getdeliveryBoyData } from "../Redux/Slices/deliveryBoyDataSlice";
import { FiCreditCard, FiUser } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { SiGooglemaps } from "react-icons/si";
import { FaStore, FaAddressCard } from "react-icons/fa";

const SellerProfile = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  const { deliveryBoys } = useSelector((state) => state.deliveryBoyData);
  const { employees } = useSelector((state) => state.employee);
  const { sellerProfileData } = useSelector((state) => state.seller);
  const { sellerDetails } = useSelector((state) => state.seller);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSellerDetails(sellerDetails));
    dispatch(getdeliveryBoyData(sellerDetails));
    dispatch(getEmployeeDetails(sellerDetails));
  }, [dispatch]);

  const tabData = [
    {
      id: "Profile",
      image: sellerProfileData[0]?.profile_urls,
      title: "Profile Photo",
      icon: <FiUser size={16} />,
    },
    {
      id: "Address Document",
      image: sellerProfileData[0]?.address_doc_url,
      title: "Address Document",
      icon: <IoDocumentTextOutline size={16} />,
    },
    {
      id: "Aadhaar Front",
      image: sellerProfileData[0]?.aadhaar_urls?.[0],
      title: "Aadhaar Card Front",
      icon: <IoDocumentTextOutline size={16} />,
    },
    {
      id: "Aadhaar Back",
      image: sellerProfileData[0]?.aadhaar_urls?.[1],
      title: "Aadhaar Card Back",
      icon: <IoDocumentTextOutline size={16} />,
    },
    {
      id: "Passbook",
      image: sellerProfileData[0]?.bank_doc_url,
      title: "Bank Passbook",
      icon: <FiCreditCard size={16} />,
    },
  ];

  const activeImage =
    tabData.find((tab) => tab.id === activeTab)?.image || "";

  return (
    <div className="w-[calc(100%-300px) ml-[300px] pt-[120px]">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-6 items-center">
        <img
          src={sellerProfileData[0]?.profile_urls}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover "
        />
        <div>
          <h2 className="text-2xl font-bold">{sellerProfileData[0]?.seller_name}</h2>
          <p className="text-gray-700">Email: {sellerProfileData[0]?.seller_email}</p>
          <p className="text-gray-700">Phone: {sellerProfileData[0]?.seller_contact}</p>
          <p className="text-sm text-gray-500">ID: {sellerProfileData[0]?.id}</p>
        </div>
        <div className="ml-auto text-right space-y-1">
          <p className="font-semibold">Employees: {employees?.length || 0}</p>
          <p className="font-semibold">Delivery Boys: {deliveryBoys?.length || 0}</p>
        </div>
      </div>

      {/* Tabs and Image Preview */}
      <div className="flex gap-6 mt-8">
        <div className="bg-white rounded-lg shadow-md p-4 w-[30vw]">
          <div className="mb-4">
            <img
              src={activeImage}
              alt={activeTab}
              className="rounded-lg object-contain w-full h-64 border"
            />
            <p className="text-center font-semibold mt-2  ">{activeTab}</p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {tabData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-xs p-2 rounded flex flex-col items-center justify-center border
                  ${activeTab === tab.id ? "bg-orange-100 border-orange-400 font-bold" : "bg-gray-50 hover:bg-gray-100"}`}
              >
                {tab.icon}
                <span className="mt-1">{tab.id}</span>
              </button>
            ))}
          </div>
        </div>

    

<div className="grid grid-cols-2 gap-3 w-[60vw]">
        {/* Store Details */}
        <div className="bg-white rounded-lg shadow-md p-6 ">
          <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
            <FaStore /> Store Info
          </h3>
          <p><strong>Store Name:</strong> {sellerProfileData[0]?.store_name}</p>
          <p><strong>GST Number:</strong> {sellerProfileData[0]?.gst_number}</p>
          <p><strong>GST Type:</strong> {sellerProfileData[0]?.gst_type}</p>
          <p><strong>Pan Number:</strong> {sellerProfileData[0]?.business_pan_number}</p>
          <p><strong>Aadhaar Number:</strong> {sellerProfileData[0]?.aadhaar_number}</p>
        </div>

        {/* Address & Bank Info */}
        <div className="bg-white rounded-lg shadow-md p-6 ">
          <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
            <FaAddressCard />Seller Address Info
          </h3>
          <p><strong>Address:</strong> {sellerProfileData[0]?.seller_address}</p>
          <p><strong>City:</strong> {sellerProfileData[0]?.seller_city}</p>
          <p><strong>District:</strong> {sellerProfileData[0]?.seller_district}</p>
          <p><strong>State:</strong> {sellerProfileData[0]?.seller_state}</p>
          <p><strong>Postal Code:</strong> {sellerProfileData[0]?.seller_postal_code}</p>
         
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
            <FaAddressCard />Store Address Info
          </h3>
          <p><strong>Address:</strong> {sellerProfileData[0]?.address_line_1}</p>
          <p><strong>City:</strong> {sellerProfileData[0]?.store_city}</p>
          <p><strong>District:</strong> {sellerProfileData[0]?.store_district}</p>
          <p><strong>State:</strong> {sellerProfileData[0]?.store_state}</p>
          <p><strong>Postal Code:</strong> {sellerProfileData[0]?.store_postal_code}</p>
          <div className="flex items-center gap-2 mt-2">
            <a
              href={sellerProfileData[0]?.store_address_url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 flex items-center gap-1 hover:underline"
            >
              <SiGooglemaps size={20} />
              View on Map
            </a>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
            <FiCreditCard /> Bank Info
          </h3>
          <p><strong>Bank Name:</strong> {sellerProfileData[0]?.bank_name}</p>
          <p><strong>IFSC:</strong> {sellerProfileData[0]?.bank_ifsc_code}</p>
          <p><strong>Account No:</strong> {sellerProfileData[0]?.account_number}</p>
          <p><strong>Account Holder:</strong> {sellerProfileData[0]?.bank_account_name}</p>
        </div>
        </div>
      </div>

      
    
    </div>
  );
};

export default SellerProfile;
