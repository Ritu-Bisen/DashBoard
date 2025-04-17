import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { TbLogout } from "react-icons/tb";
import { MdDashboard } from "react-icons/md";
import { FaBoxOpen } from "react-icons/fa";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { HiOutlineClipboardDocumentList, HiUsers } from "react-icons/hi2";
import { MdMiscellaneousServices } from "react-icons/md";
import { RiScissorsFill } from "react-icons/ri";

const GymSideBar = () => {
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
        path: "/gym",
      },
      {
        id: 2,
        name: "Member",
        icon: <MdMiscellaneousServices size={30} />,
        path: "/gym/member",
      },
      {
        id: 3,
        name: "Product",
        icon: <FaBoxOpen size={30} />,
        path: "/gym/product",
      },
      {
        id: 4,
        name: "Order",
        icon: <RiScissorsFill size={30} />,
        path: "/gym/order",
      },
      {
        id: 5,
        name: "Employee",
        icon: <HiUsers size={30} />,
        subroute: [  
            { title: "Add Employee", path: "/gym/employee/add-employee" },
          { title: "Employee List", path: "/gym/employee/employee-list" },
        ],
      },
      {
        id: 6,
        name: "Reports",
        icon: <HiOutlineClipboardDocumentList size={30} />,
        path: "/gym/reports",
      },
      {
        id: 7,
        name: "Logout",
        icon: <TbLogout size={30} />,
        path: "/",
      },
    ];
  
    return (
      <div className="fixed w-[300px] h-screen mt-30 rounded-tr-4xl rounded-br-4xl shadow-gray-900 shadow-lg  bg-white">
        <div className="pt-15">
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
  
  export default GymSideBar;
  
