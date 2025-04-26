import React, { useState } from "react";
import { ImUsers } from "react-icons/im";
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
import { TbCategoryPlus, TbTruckDelivery } from "react-icons/tb";
import { FaBoxOpen } from "react-icons/fa";
import { HiOutlineClipboardDocumentList, HiUsers } from "react-icons/hi2";
import { CiEdit } from "react-icons/ci";
import logo from '../../assets/pictures/snba-logo-black.png';

const Sidebar = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);

  // Ensure only one menu can be open at a time
  const toggleMenu = (menu) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

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
      title: "Delivery Boys",
      icon: <TbTruckDelivery size={25} />,
      subroute: [
        { title: "Delivery Boy Add", path: "/mart/deliveryboy/delivery-boy-add" },
        // { title: "Delivery Boy Request", path: "/mart/deliveryboy/delivery-boy-request" },
        { title: "Delivery Boy List", path: "/mart/deliveryboy/delivery-boy-list" },
        { title: "Delivery Boy Cash", path: "/mart/deliveryboy/delivery-boy-cash" },
      ],
    },
    {
      id: 7,
      title: "Reports",
      icon: <HiOutlineClipboardDocumentList size={25} />,
      path: "/mart/reports",
    },
    {
      id: 8,
      title: "Employee",
      icon: <RiUserSettingsFill size={25} />,
      path: "/mart/employee",
    },
  ];
  

  return (
    
      <div className="fixed top-0 left-0 w-[300px] bg-[#ad011d] h-screen text-white pt-5 overflow-hidden">
       
          <img className="bg-white w-44 h-15 m-auto object-cover text-2xl text-black font-bold text-center mb-5" src={logo}/>
      

        {/* Profile Section */}
        <div className="flex flex-col items-center justify-center">
          <ImUsers className="border-2 rounded-full" size={50} />
          <h1 className="font-bold text-xl mt-3">Aditya Sahu</h1>
          <button className="text-sm flex gap-2">
            Edit Profile <CiEdit className="mt-1" size={15} />
          </button>
          <h1>Mart Section</h1>
        </div>

        {/* Sidebar Menu */}
        <ul className="space-y-2 mt-5">
          {listItems.map((item) => (
            <li key={item.id}>
              {item.subroute ? (
                <div>
                  <button
                    className={`w-full flex items-center justify-between px-6 py-3 cursor-pointer`}
                    onClick={() => toggleMenu(item.title)}
                  >
                    <div className="flex items-center gap-3">
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
              ) : (
                <Link
                  to={item.path}
                  className={` px-6 py-3 flex items-center gap-3 cursor-pointer ${
                    location.pathname === item.path
                      ? "bg-red-300 text-black"
                      : "bg-[#ad011d]"
                  }`}
                  onClick={() => setOpenMenu(null)} // Close dropdown if a main menu is clicked
                >
                  {item.icon} <span>{item.title}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
  );
};

export default Sidebar;
