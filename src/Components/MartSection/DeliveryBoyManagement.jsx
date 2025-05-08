import React, { useEffect, useState } from 'react'

import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { getActiveVerifiedDeliveryBoys, getInactiveVerifiedDeliveryBoys, getVerifiedDeliveryBoy } from '../../Redux/Slices/deliveryBoyDataSlice';
import { FaEye } from 'react-icons/fa';

const DeliveryBoyManagement = () => {
const [active, setActive] = useState("all");

 const [isShowDeliveryBoy, setIsShowDeliveryBoy] = useState(false);
  const [deliveryBoy, setDeliveryBoy] = useState(null);

  const { deliveryBoys}=useSelector((state)=>state.deliveryBoyData);
  const{sellerDetails}=useSelector((state)=>state.seller)
  
  const dispatch=useDispatch();
  useEffect(() => {
   dispatch(getVerifiedDeliveryBoy(sellerDetails))
  }, [dispatch])
  
console.log(deliveryBoys);

  const handleShowDeliveryBoy = (item) => {
    setIsShowDeliveryBoy(true);
    setDeliveryBoy(item);
  };

  const handleOnClose = () => {
    setIsShowDeliveryBoy(false);
    setDeliveryBoy(null);
  };

  const columns = [
    {
      name: "S.no",
      selector: (row) => row.serialNo,
      width: "100px",
    },
    {
      name: "Id",
      selector: (row) => row.id,
     
    },
  
    {
      name: "Profile Pic",
      selector: (row) => row.profile_pic,
      width: "150px",
    },
   
    {
      name: "Name",
      selector: (row) => row.user_name,
    },
    {
      name: "contact No",
      selector: (row) => row.phone_number,
      width: "150px",
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Address",
      selector: (row) => row.address,
    },
    {
      name: "Vehicle Type",
      selector: (row) => row.vehicle_type,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      width: "140px",
      centre: true,
    },
    {
      name: "preview",
      selector: (row) => row.preview,
      centre: true,
     
    },
    { 
      name: "Action",
      selector: (row) => row.action,
      width: "220px",
    }
  ];

  const handleActive=(deliveryBoyId)=>{
    
  }
  const handleInactive=(deliveryBoyId)=>{
    
  }

  const data =deliveryBoys.map((item,index)=>({
    serialNo:index+1,
    id:(item.id).slice(0,8),
    user_name:item.full_name,
    email:item.email,
    phone_number:item.phone_number,
    profile_pic:(<img src={item.profile_image_url}/>),
    address:item.address,
    vehicle_type:item.vehicle_type,
    status: (
          <div className="inline-flex items-center text-white justify-center gap-1 w-full">
            {item.is_active === true ? (
              <p className="bg-green-600 cursor-pointer text-lg rounded-md px-3">
                Active
              </p>
            ) : (
              <p className="bg-red-600 cursor-pointer text-lg rounded-md px-3">
                Not Active
              </p>
            )}
          </div>
        ),
        preview: (
                  <button
                    onClick={() => handleShowDeliveryBoy(item)}
                    className="text-3xl cursor-pointer"
                  >
                    <FaEye />
                  </button>
                ),
                action:(<div className='flex gap-3'>
                  <button className='bg-green-600 text-white text-lg px-5 rounded-md cursor-pointer active:bg-green-800'
                  onClick={()=>handleActive(item.id)}>Active</button>
                  <button className='bg-red-600 text-white text-lg px-3 rounded-md cursor-pointer active:bg-red-800'
                  onClick={()=>handleInactive(item.id)}>Inactive</button>
                </div>)
        
  }))

  const customStyles = {
    headCells: {
      style: {
        borderBottom: "1px solid black", // Bottom border for header cells
        borderRight: "1px solid gray", // Right border for header cells
        backgroundColor: "#f4f4f4", // Light gray background
        fontWeight: "bold",
        borderTop: "1px solid black",
        justifyContent: "center",
        fontSize: "15px",
      },
    },
    cells: {
      style: {
        "&:not(:last-of-type)": {
          borderRightStyle: "solid",
          borderRightWidth: "1px",
          borderRightColor: "gray",
          justifyContent: "center",
          fontSize: "15px",
        },
      },
    },
  };

  return (
    <div className="w-[calc(100%-300px)] ml-[300px] pt-[120px] ">
    <div className="   text-3xl font-semibold  sticky top-0 z-10 ">
      <h1>Manage Delivery Boys</h1>
    </div>
    <div className="flex bg-gray-200 w-54 px-2 py-2 rounded-full m-5 justify-between">
      <button
        type="button"
        className={`rounded-full px-2 text-lg font-semibold ${
          active === "all" ? "bg-white text-black" : "text-black"
        }`}
        onClick={() => {
          setActive("all");
          dispatch(getVerifiedDeliveryBoy(sellerDetails));
        }}
      >
        All
      </button>
      <button
        type="button"
        className={`rounded-full px-2 text-lg font-semibold ${
          active === "active" ? "bg-white text-green-500" : "text-black"
        }`}
        onClick={() => {
          setActive("active");
          dispatch(getActiveVerifiedDeliveryBoys(sellerDetails));
        }}
      >
        Active
      </button>
      <button
        type="button"
        className={`rounded-full px-2 text-lg font-semibold ${
          active === "inactive" ? "bg-white text-red-500" : "text-black"
        }`}
        onClick={() => {
          setActive("inactive");
          dispatch(getInactiveVerifiedDeliveryBoys(sellerDetails));
        }}
      >
        Inactive
      </button>
    </div>
    <div className="max-h-[75vh] max-w-[81vw]">
      <DataTable
        fixedHeader
        columns={columns}
        data={data}
        customStyles={customStyles}
        // fixedHeaderScrollHeight="67vh"
        pagination
        defaultSortFieldId={1}
      />
    </div>
    {/* {isShowDeliveryBoy && (
      <>
        <div
          className="fixed inset-0 bg-black/75 z-20 "
          onClick={() => setIsShowDeliveryBoy(false)}
        ></div>
        <ViewDeliveryBoyRequests
          deliveryBoy={deliveryBoy}
          onClose={() => handleOnClose()}
        />
      </>
    )} */}
  </div>
  )
}

export default DeliveryBoyManagement
