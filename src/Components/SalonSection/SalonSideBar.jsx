import React from 'react'
import { MdDashboard } from "react-icons/md";
import { CgStyle } from "react-icons/cg";
import { RiBillLine } from "react-icons/ri";
import { FaBoxOpen } from "react-icons/fa";
import { PiUserSwitchBold } from "react-icons/pi";
import { RiUserSettingsFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const SalonSideBar = () => {
    const itemList =[{
        id:1,
        name:"Dashboard",
        icon:<MdDashboard size={30}/>,
        path:"/salon"
    },
{
    id:2,
    name:"Services",
    icon:<PiUserSwitchBold size={30}/>,
     path:"/salon/service"
},
{
    id:3,
    name:"Product",
    icon:<CgStyle size={30}/>,
     path:"/salon/product"
},
{
    id:4,
    name:"Kit Request",
    icon:<RiBillLine size={30}/>,
     path:"/salon/kit-request"
},
{
    id:5,
    name:"Appointment",
    icon:<FaBoxOpen size={30}/>,
    path:"/salon/appointment"
},
{
    id:6,
    name:"Billing",
    icon:<RiUserSettingsFill size={30}/>,
    path:"/salon/billing"
},

{
    id:7,
    name:"Employee",
    icon:<RiUserSettingsFill size={30}/>,
    path:"/salon/employee"
},
{
    id:8,
    name:"Reports",
    icon:<RiUserSettingsFill size={30}/>,
    path:"/salon/reports"
},
]
  return (
    <div className= 'fixed w-[300px] h-screen  mt-30 rounded-tr-4xl rounded-br-4xl shadow-gray-900 shadow-lg '>
        
     <div className='pt-10     '>
        {
            itemList.map((item,index)=>(
                <div key={index} className=' flex size={25} gap-5'>
                   
                 
                   <div className=' w-full '>
                   <Link className='flex py-3 px-6 hover:bg-red-600  hover:text-white gap-5' to={item.path}>
                    {item.icon}<span className='font-bold text-xl'>{item.name}</span>
                    </Link>
                   </div>
                </div>
            ))
        }
     </div>
    </div>
  )
}

export default SalonSideBar
