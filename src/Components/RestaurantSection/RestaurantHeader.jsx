import React from "react";
import { IoMdSearch } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import logo from "../../assets/pictures/snba-logo-black.png";
import { ImUsers } from "react-icons/im";
import { CiEdit } from "react-icons/ci";

const RestaurantHeader = () => {
  return (
   

    <div className= "fixed top-0 w-full  left-0  flex justify-between py-5 px-12 border-b bg-white border-gray-300 shadow-xl  shadow-gray-300 rounded-br-4xl rounded-bl-4xl">
      <img className=" w-44 h-15  object-cover text-black " src={logo} />
      <div className="flex  gap-8">
      <button className=" ">
        <IoMdSearch className="text-gray-600 rounded-full border-gray-400 border-2 p-2 " size={35} />
      </button>
      <button className="    ">
        <IoMdNotifications className="text-gray-600 rounded-full border-gray-400 border-2 p-2" size={35} />
      </button>
      <div className="flex gap-3">
      <ImUsers className='border-2 rounded-full' size={50}/>
      <div>
      <h1 className="font-bold text-xl">Aditya Sahu</h1>
      <button className="text-sm flex gap-1">Edit Profile <CiEdit className="mt-1" size={15}/></button>
      </div>
      </div>
      </div>
    </div>
  );
};

export default RestaurantHeader;
