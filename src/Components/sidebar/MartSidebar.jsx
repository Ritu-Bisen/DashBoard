import React, { useEffect, useState } from "react";
import {
  MdDashboard,
  MdBorderColor,
  MdOutlineAddShoppingCart,
  MdExpandLess,
  MdExpandMore,
} from "react-icons/md";
import { RiUserSettingsFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { GiProgression } from "react-icons/gi";
import { TbCategoryPlus, TbLogout, TbTruckDelivery } from "react-icons/tb";
import { FaBoxOpen } from "react-icons/fa";
import { HiOutlineClipboardDocumentList, HiUsers } from "react-icons/hi2";
import { CiEdit } from "react-icons/ci";
import logo from '../../assets/pictures/snba-logo-black.png';
import { useDispatch, useSelector } from "react-redux";
import { getSellerDetails } from "../../Redux/Slices/loginSellerSlice";

const MartSidebar = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);

  // Ensure only one menu can be open at a time
  const toggleMenu = (menu) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

    const {sellerProfileData}=useSelector((state)=>state.seller)
  const{sellerDetails}=useSelector((state)=>state.seller)
  const dispatch =useDispatch()
useEffect(() => {
 dispatch(getSellerDetails(sellerDetails))
}, [dispatch])
console.log(sellerProfileData);

  const listItems = [
    { id: 1, title: "DashBoard", icon: <MdDashboard size={25} />, path: "/mart" },
    {
      id: 2,
      title: "Stock Management",
      icon: <GiProgression size={25} />,
      path: "/mart/stockmanagement",
    },
    {
      id: 3,
      title: "Product",
      icon: <FaBoxOpen size={25} />,
      path: "/mart/product",
    },
    {
      id: 4,
      title: "Order",
      icon: <MdOutlineAddShoppingCart size={25} />,
      subroute: [
        { title: " Orders", path: "/mart/order/orders" },
        { title: "Order Request ", path: "/mart/order/order-request" },
      ],
    },
    {
      id: 5,
      title: "Category",
      icon: <TbCategoryPlus size={25} />,
      subroute: [
        { title: "Category", path: "/mart/category/category" },
        { title: "Category Offer", path: "/mart/category/category-offer" },
      ],
    },
    {
      id: 6,
      title: "Employee",
      icon: <RiUserSettingsFill size={25} />,
      subroute: [  
        { title: "Add Employee", path: "/mart/employee/add-employee" },
      { title: "Employee List", path: "/mart/employee/employee-list" },
    ],
    },
    {
      id: 7,
      title: "Delivery Boys",
      icon: <TbTruckDelivery size={25} />,
      subroute: [
        { title: "Delivery Boy Add", path: "/mart/deliveryboy/delivery-boy-add" },
        { title: "Delivery Boy List", path: "/mart/deliveryboy/delivery-boy-list" },
        { title: "Delivery Boy Request", path: "/mart/deliveryboy/delivery-boy-request" },
        { title: "Delivery Boy Management", path: "/mart/deliveryboy/delivery-boy-management" },
      ],
    },
    {
      id: 8,
      title: "Reports",
      icon: <HiOutlineClipboardDocumentList size={25} />,
      path: "/mart/reports",
    },
    {
         id: 9,
         title: "Logout",
         icon: <TbLogout size={30} />,
         path: "/",
       },
  ];
  

  return (
    
      <div className="fixed top-0 left-0 w-[300px] bg-[#ad011d] h-screen text-white pt-5 overflow-hidden overflow-y-scroll ">
       
          <img className="bg-white w-44 h-15 m-auto object-cover text-2xl text-black font-bold text-center mb-5" src={logo}/>
      

        {/* Profile Section */}
        <div className="flex flex-col items-center justify-center">
         <img className="h-25 w-25 rounded-full" src={sellerProfileData[0]?.profile_urls}/>
          <h1 className="font-bold text-xl mt-3">{sellerProfileData[0]?.seller_name}</h1>
          <Link to={`/${sellerDetails.segment}/profile`}>  <button className="text-sm flex gap-2 hover:text-black"  >
            View Profile <CiEdit className="mt-1 " size={15} />
          </button></Link>
        
          <h1>Mart Section</h1>
        </div>

        {/* Sidebar Menu */}
        <ul className="space-y-2 mt-5 mb-10">
          {listItems.map((item) => (
            <li key={item.id}>
              {item.subroute ? (
                <div>
                  <button
                    className={`w-full flex items-center justify-between px-6 py-3 cursor-pointer`}
                    onClick={() => toggleMenu(item.title)}
                  >
                    <div className="flex items-center gap-3 font-semibold text-lg">
                      {item.icon} <span>{item.title}</span>
                    </div>
                    {openMenu === item.title ? (
                      <MdExpandLess />
                    ) : (
                      <MdExpandMore />
                    )}
                  </button>

                  {openMenu === item.title && (
                    <ul className="ml-8 space-y-2">
                      {item.subroute.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            to={subItem.path}
                            className={`block px-4 py-2 text-sm rounded transition-transform hover:translate-x-2 ${
                              location.pathname === subItem.path
                                ? "bg-gray-300 text-black "
                                : "text-white"
                            }`}
                            // onClick={() => setOpenMenu(null)} // Close submenu on click
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : item.title === "Logout" ? (
                            <div
                              onClick={() => {
                                localStorage.clear();
                                window.location.href = "/";
                              }}
                              className="flex items-center py-3 px-6 gap-5 cursor-pointer  text-white hover:bg-red-500 hover:text-black transition"
                            >
                              {item.icon}
                              <span className="font-semibold text-lg">{item.title}</span>
                            </div>
                          ) : (
                            <Link
                              to={item.path}
                              className={`flex items-center py-3 px-6 gap-5 cursor-pointer ${
                                location.pathname === item.path
                                  ? "bg-red-500 text-black"
                                  : " text-white"
                              }`}
                            >
                              {item.icon}
                              <span className="font-semibold text-lg">{item.title}</span>
                            </Link>
                         
              )}
            </li>
          ))}
        </ul>
      </div>
  );
};

export default MartSidebar;
