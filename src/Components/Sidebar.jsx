import React, { useState } from 'react'
import Header from './Header'
import { ImUsers } from "react-icons/im";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { MdBorderColor } from "react-icons/md";
import { SiShutterstock } from "react-icons/si";
import { TbCategoryFilled } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { TbCategoryPlus } from "react-icons/tb";
import { FaBoxOpen } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { CiEdit } from "react-icons/ci";

const Sidebar = () => {

  const [selectorMenu,setSelectorMenu]=useState(null);

  

  const listItems = [   
    {
      id: 1,
      title: "DashBoard",
      icon: <MdDashboard size={25} />,
      path: '/'
    },
    {
      id: 2,
      title: "Order",
      icon: < MdOutlineAddShoppingCart size={25} />,
      path: '/order'
    },
    {
      id: 3,
      title: "Stock Management",
      icon: <GiProgression size={25} />,
      path: '/stockmanagement'
    },
    {
      id: 4,
      title: "Category",
      icon: <TbCategoryPlus size={25} />,
      path: '/category'
    },
    {
      id: 5,
      title: "Product",
      icon: <FaBoxOpen size={25} />,
      path: '/product'
    },
    {
      id: 6,
      title: "Order Request",
      icon: <MdBorderColor size={25} />,
      path: '/orderrequest'
    },
    {
      id: 7,
      title: "Delivery Boys",
      icon: <TbTruckDelivery size={25} />,
      path: '/deliveryboys'
    },
    {
      id: 8,
      title: "Reports",
      icon: <HiOutlineClipboardDocumentList size={25} />,
      path: '/reports'
    },
  ]

  return (
    <div className='relative '>
      <div className='top-0 left-0 w-[300px] bg-[#ad011d] h-screen text-white pt-5'>
        <div className='bg-gray-300 w-44 h-10  m-auto text-2xl text-black font-bold text-center mb-5'>Logo</div>
        <div className='flex flex-col items-center justify-center '><ImUsers className='border-2 rounded-full ' size={50} />
          <h1 className='font-bold text-xl mt-3 '>Aditya Sahu</h1>
          <button className='text-sm flex gap-2'>Edit Profile <CiEdit className='mt-1' size={15}/></button>

        </div>
        <div className='mt-5'>
          {
            listItems.map(( item, index ) => (
              <div key={index} >
                <Link to={item.path} className='flex hover:bg-red-300 hover:text-black'  >  
                 <button  className={`flex items-center gap-3 px-4 py-4 w-full text-left  ${
              selectorMenu === item.title ? "bg-red-300 text-black" : "bg-[#ad011d]"
            } hover:bg-red-300  transition`}
            onClick={() => setSelectorMenu(item.title)}  >
                 <span>{item.icon}</span>
                 <p className='font-semibold'  >{item.title}</p>
                 </button>
                  </Link>
              </div>
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default Sidebar
