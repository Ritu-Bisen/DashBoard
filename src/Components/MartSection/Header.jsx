import React, { useEffect } from "react";
import { IoMdNotifications } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getSellerDetails } from "../../Redux/Slices/loginSellerSlice";

const Header = () => {
   const {sellerProfileData}=useSelector((state)=>state.seller)
  const{sellerDetails}=useSelector((state)=>state.seller)
  const dispatch =useDispatch()
useEffect(() => {
 dispatch(getSellerDetails(sellerDetails))
}, [dispatch])
console.log(sellerProfileData);
  return (
    <div
      className={`w-[calc(100%-300px)] flex  border-b  border-gray-400 h-25 fixed left-75 justify-between `}
    >
    <h1  className="font-bold text-4xl mt-10 ml-5">{sellerProfileData[0]?.store_name}</h1>
      <div className=" flex gap-8 mr-5 fixed right-20 top-8 ">
   
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
