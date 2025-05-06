import React, { useState } from 'react'

import { TbCategoryPlus, TbTruckDelivery } from 'react-icons/tb';

import { MdDashboard } from "react-icons/md";

import { FaBoxOpen } from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { HiOutlineClipboardDocumentList, HiUsers } from "react-icons/hi2";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { RiScissorsFill } from "react-icons/ri";
import { GiProgression } from 'react-icons/gi';


const RestaurantSidebar = () => {
    const location = useLocation();
    const [openMenu, setOpenMenu] = useState(null);
  
    const toggleMenu = (id) => {
      setOpenMenu((prev) => (prev === id ? null : id));
    };
  
    const itemList = [
      {
        id: 1,
        name: "Dashboard",
        icon: <MdDashboard size={30} />,
        path: "/restaurant",
      },
      {
        id: 2,
        name: "Menu",
        icon:  <FaBoxOpen size={30} />,
        path: "/restaurant/menu",
      },
      {
        id: 3,
        name: "Stock Management",
        icon:  <GiProgression size={25} />,
        path: "/restaurant/stock-management",
      },
     
     
       {
        id: 4,
        name: "Category",
        icon:  <TbCategoryPlus size={25} />,
        subroute: [  
            { title: "Category", path: "/restaurant/category/category" },
          { title: "Category Offer", path: "/restaurant/category/category-offer" },
        ],
      },
       {
        id: 5,
        name: "Order",
        icon: <MdMiscellaneousServices size={30} />,
        subroute: [  
            { title: "Orders", path: "/restaurant/order/orders" },
          { title: "Order Request", path: "/restaurant/order/order-request" },
        ],
      },
      {
        id: 6,
        name: "Delivery Boys",
        icon: <TbTruckDelivery size={25} />,
        subroute: [  
          { title: "Add Delivery Boy ", path: "/restaurant/deliveryboy/add-delivery-boy" },
        
        { title: "Delivery Boy List", path: "/restaurant/deliveryboy/delivery-boy-list" },
        { title: "Delivery Boy Management", path: "/restaurant/deliveryboy/delivery-boy-management" },
        ],
      },
      {
        id: 7,
        name: "Employee",
        icon: <HiUsers size={30} />,
        subroute: [  
            { title: "Add Employee", path: "/restaurant/employee/add-employee" },
          { title: "Employee List", path: "/restaurant/employee/employee-list" },
        ],
      },
      {
        id: 8,
        name: "Reports",
        icon: <HiOutlineClipboardDocumentList size={30} />,
        path: "/restaurant/reports",
      },
    ];
  
    return (
      <div className="fixed mt-26 w-[300px] h-full  rounded-tr-4xl rounded-br-4xl shadow-gray-900 shadow-lg  bg-white">
        <div className="pt-10">
          {itemList.map((item) => (
            <div key={item.id}>
              {item.subroute ? (
                <>
                  <div
                    className={`flex items-center justify-between py-3 px-6 gap-5 cursor-pointer ${
                      openMenu === item.id ||
                      item.subroute.some((sub) => sub.path === location.pathname)
                        ? "bg-white text-black"
                        : "bg-white text-black"
                    }`}
                    onClick={() => toggleMenu(item.id)}
                  >
                    <div className="flex items-center gap-5">
                      {item.icon}
                      <span className="font-semibold text-xl">{item.name}</span>
                    </div>
                    <div>
                      {openMenu === item.id ? <MdExpandLess /> : <MdExpandMore />}
                    </div>
                  </div>
  
                  {openMenu === item.id && (
                    <div className="ml-10">
                      {item.subroute.map((sub, idx) => (
                        <Link
                          key={idx}
                          to={sub.path}
                          className={`block py-2 px-6 text-lg rounded cursor-pointer ${
                            location.pathname === sub.path
                              ? "bg-red-500 text-white"
                              : "bg-gray-100 text-black"
                          }`}
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  className={`flex items-center py-3 px-6 gap-5 cursor-pointer ${
                    location.pathname === item.path
                      ? "bg-red-500 text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {item.icon}
                  <span className="font-semibold text-xl">{item.name}</span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };
  

export default RestaurantSidebar
