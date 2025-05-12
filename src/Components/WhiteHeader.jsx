import React, { useEffect } from "react";
import { IoMdSearch } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import logo from "../assets/pictures/snba-logo-black.png";
import { ImUsers } from "react-icons/im";
import { CiEdit } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { getSellerDetails } from "../Redux/Slices/loginSellerSlice";
import { Link } from "react-router-dom";

const WhiteHeader = () => {
  const {sellerProfileData}=useSelector((state)=>state.seller)
  const{sellerDetails}=useSelector((state)=>state.seller)
  const dispatch =useDispatch()
useEffect(() => {
 dispatch(getSellerDetails(sellerDetails))
}, [dispatch])
console.log(sellerProfileData);


  return (
   

    <div className= "fixed top-0 w-full  left-0  flex  py-5 px-12 border-b bg-white border-gray-300 shadow-xl justify-between shadow-gray-300 rounded-br-4xl rounded-bl-4xl">
      <img className=" w-44 h-15  object-cover text-black " src={logo} />
      <h1  className="font-bold text-4xl">{sellerProfileData[0]?.store_name}</h1>
      <div className="flex gap-3 justify-end">
     <img className="h-15 w-15 object-cover rounded-full" src={sellerProfileData[0]?.profile_urls}/>
      <div>
      <h1 className="font-bold text-xl">{sellerProfileData[0]?.seller_name}</h1>
     
     <Link to={`/${sellerDetails.segment}/profile`}> <button className="text-sm flex gap-1">View Profile <CiEdit className="mt-1" size={15}/></button></Link>
      </div>
      </div>
     
    </div>
  );
};

export default WhiteHeader;
