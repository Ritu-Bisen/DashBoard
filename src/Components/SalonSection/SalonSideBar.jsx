import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { CgStyle } from "react-icons/cg";
import { RiBillLine, RiUserSettingsFill } from "react-icons/ri";
import { FaBoxOpen } from "react-icons/fa";
import { PiUserSwitchBold } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

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
      icon: <PiUserSwitchBold size={30} />,
      path: "/salon/service",
    },
    {
      id: 3,
      name: "Product",
      icon: <CgStyle size={30} />,
      path: "/salon/product",
    },
    {
      id: 4,
      name: "Kit Request",
      icon: <RiBillLine size={30} />,
      path: "/salon/kit-request",
    },
    {
      id: 5,
      name: "Appointment",
      icon: <FaBoxOpen size={30} />,
      path: "/salon/appointment",
    },
    {
      id: 6,
      name: "Billing",
      icon: <RiUserSettingsFill size={30} />,
      subroute: [
        { title: "Billing List", path: "/salon/billing/billing-list" },
        { title: "Billing Invoice", path: "/salon/billing/billing-invoice" },
      ],
    },
    {
      id: 7,
      name: "Employee",
      icon: <RiUserSettingsFill size={30} />,
      subroute: [
        { title: "Employee List", path: "/salon/employee/employee-list" },
        { title: "Add Employee", path: "/salon/employee/add-employee" },
      ],
    },
    {
      id: 8,
      name: "Reports",
      icon: <RiUserSettingsFill size={30} />,
      path: "/salon/reports",
    },
  ];

  return (
    <div className="fixed w-[300px] h-screen mt-30 rounded-tr-4xl rounded-br-4xl shadow-gray-900 shadow-lg z-50 bg-white">
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
                    <span className="font-bold text-xl">{item.name}</span>
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
                <span className="font-bold text-xl">{item.name}</span>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalonSideBar;
