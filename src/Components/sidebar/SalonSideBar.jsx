import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { FaBoxOpen } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { HiOutlineClipboardDocumentList, HiUsers } from "react-icons/hi2";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { RiScissorsFill } from "react-icons/ri";
import { TbCategoryPlus, TbLogout } from "react-icons/tb";

const SalonSideBar = () => {
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
      path: "/salon",
    },
    {
      id: 2,
      name: "Services",
      icon: <MdMiscellaneousServices size={30} />,
      path: "/salon/service",
    },
    // {
    //   id: 3,
    //   name: "Product",
    //   icon: <FaBoxOpen size={30} />,
    //   path: "/salon/product",
    // },
    // {
    //   id: 4,
    //   name: "Kit Request",
    //   icon: <RiScissorsFill size={30} />,
    //   path: "/salon/kit-request",
    // },
     {
          id: 3,
          name: "Category",
          icon:  <TbCategoryPlus size={25} />,
          subroute: [
            { title: "Category", path: "/salon/category/category" },
            { title: "Category Offer", path: "/salon/category/category-offer" },
          ],
        },
    {
      id: 4,
      name: "Appointment",
      icon: <FaRegCalendarCheck size={30} />,
      path: "/salon/appointment",
    },
    {
      id: 5,
      name: "Billing",
      icon: <RiBillLine size={30} />,
      path: "/salon/billing",
    },
    {
      id: 6,
      name: "Employee",
      icon: <HiUsers size={30} />,
      subroute: [
        { title: "Add Employee", path: "/salon/employee/add-employee" },
        { title: "Employee List", path: "/salon/employee/employee-list" },
      ],
    },
    {
      id: 7,
      name: "Reports",
      icon: <HiOutlineClipboardDocumentList size={30} />,
      path: "/salon/reports",
    },
      {
          id: 8,
          name: "Logout",
          icon: <TbLogout size={30} />,
          path: "/",
        },
  ];

  return (
    <div className="fixed mt-26 w-[300px] h-[87vh]  rounded-tr-4xl rounded-br-4xl shadow-gray-900 shadow-lg  bg-white">
      <div className="pt-10 mb-5">
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
            ) :  item.name === "Logout" ? (
                          <div
                            onClick={() => {
                              localStorage.clear();
                              window.location.href = "/";
                            }}
                            className="flex items-center py-3 px-6 gap-5 cursor-pointer bg-white text-black hover:bg-red-500 hover:text-white transition"
                          >
                            {item.icon}
                            <span className="font-semibold text-xl">{item.name}</span>
                          </div>
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

export default SalonSideBar;
