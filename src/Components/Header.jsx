import React from "react";
import { IoMdNotifications } from "react-icons/io";

const Header = () => {
  return (
    <div
      className={`w-[calc(100%-300px)] flex text-black border-b  border-gray-400 top-20 fixed left-75 justify-between `}
    >
      <div className=" flex justify-between gap-8 mr-5 fixed right-20 top-8 ">
        <button className="  border-gray-400 border-1 rounded-full p-2  ">
          <IoMdNotifications />
        </button>
        <button className="  border-gray-400 border-1 rounded-full p-1 w-30 ">
          SIGNOUT
        </button>
      </div>
    </div>
  );
};

export default Header;
