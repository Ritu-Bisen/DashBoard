
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdHome, MdInfo, MdExpandLess, MdExpandMore, MdShoppingCart, MdArticle, MdContactMail, MdStore } from "react-icons/md";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Handle main menu click
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setOpenDropdown(menu === openDropdown ? null : menu);
  };

  // Handle submenu click
  const handleSubMenuClick = (menu) => {
    setActiveMenu(menu);
    setOpenDropdown(null); // Close dropdown when submenu is selected
  };

  const menuItems = [
    { id: 1, title: "Home", icon: <MdHome size={25} />, path: "/home" },
    { id: 2, title: "About", icon: <MdInfo size={25} />, path: "/about" },
    {
      id: 3,
      title: "News",
      icon: <MdArticle size={25} />,
      subItems: [
        { title: "Latest News", path: "/news/latest" },
        { title: "Trending News", path: "/news/trending" },
      ],
    },
    { id: 4, title: "Contact", icon: <MdContactMail size={25} />, path: "/contact" },
    {
      id: 5,
      title: "Order",
      icon: <MdShoppingCart size={25} />,
      subItems: [
        { title: "My Orders", path: "/order/my-orders" },
        { title: "Track Order", path: "/order/track" },
      ],
    },
    { id: 6, title: "Product", icon: <MdStore size={25} />, path: "/product" },
  ];

  return (
    <div className="w-[300px] h-screen bg-gray-800 text-white p-4 ">
      <h1 className="text-center text-2xl font-bold mb-5">Logo</h1>

      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.subItems ? (
              // If it has subItems (Dropdown)
              <div>
                <button
                  onClick={() => handleMenuClick(item.title)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded transition ${
                    activeMenu === item.title ? "bg-blue-500" : "bg-gray-800 hover:bg-gray-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {item.icon} <span>{item.title}</span>
                  </div>
                  {openDropdown === item.title ? <MdExpandLess /> : <MdExpandMore />}
                </button>

                {/* Submenu Items */}
                {openDropdown === item.title && (
                  <ul className="ml-6 mt-2 space-y-2">
                    {item.subItems.map((subItem, index) => (
                      <li key={index}>
                        <Link
                          to={subItem.path}
                          onClick={() => handleSubMenuClick(subItem.title)}
                          className={`block px-4 py-2 rounded transition ${
                            activeMenu === subItem.title ? "bg-blue-500" : "hover:bg-gray-700"
                          }`}
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              // Normal menu item
              <Link
                to={item.path}
                onClick={() => handleMenuClick(item.title)}
                className={`flex items-center gap-3 px-4 py-3 rounded transition ${
                  activeMenu === item.title ? "bg-blue-500" : "hover:bg-gray-700"
                }`}
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
