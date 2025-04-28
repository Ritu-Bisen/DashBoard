import React, { useEffect, useState } from 'react'

import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
//import  getdeliveryBoyData  from '../../Redux/Slices/deliveryBoyDataSlice';
//import { fetchDeliveryBoyData } from '../../Redux/Api/deliveryBoyApi';
//import { getdeliveryBoyData } from '../../Redux/Slices/deliveryBoyDataSlice';
import { FaEye } from "react-icons/fa";
//import ViewDeliveryBoyDEtails from './ViewDeliveryBoyDEtails';
import { getRestaurantDeliveryBoyData } from '../../Redux/Slices/restaurantSlice/restaurantDeliveryBoySlice';


const RestaurantDeliveryBoysList  = () => {

  const [isShowDetail, setIsShowDetail] = useState(false);
    const [showDeliveryBoy, setShowDeliveryBoy] = useState(null);
  
    const handleViewDetails = (deliveryBoys) => {
      setIsShowDetail(true);
      setShowDeliveryBoy(deliveryBoys);
    };

    const handleDeliveryBoyDetailClose = () => {
      setIsShowDetail(false);
    };

const { deliveryBoys}=useSelector((state)=>state.restaurantDeliveryBoy);
console.log( deliveryBoys);

const dispatch =useDispatch();

useEffect(() => {
dispatch(getRestaurantDeliveryBoyData())
}, [dispatch])




    const columns = [
      {
        name: "Serial No.",
        selector: (row) => row.serial_no,
      },
      {
          name: "Id",
          selector: (row) => row.deliveryBoy_id,
          width: "150px",
        },
        
        {
          name: "Name",
          selector: (row) => row.name,
        },
        {
          name: "email",
          selector: (row) => row.email,
        },
       
       
        {
          name: "Phone No",
          selector: (row) => row.phone,
        },
         {
            name: "Address",
            selector: (row) => row.address,
          },
        {
            name: "Active",
            selector: (row) => row.active,
          },

          {
            name: "Verified",
            selector: (row) => row.verified,
          },

         
        
          {
            name: "View",
            selector: (row) => row.view,
            center:true,
          },
         
      ]; 

      const customStyles = {
        headCells: {
          style: {
            borderBottom: "1px solid black", // Bottom border for header cells
            borderRight: "1px solid gray", // Right border for header cells
            backgroundColor: "#f4f4f4", // Light gray background
            fontWeight: "bold",
            borderTop: "1px solid black",
            justifyContent: "center",
          },
        },
        cells: {
          style: {
            "&:not(:last-of-type)": {
              borderRightStyle: "solid",
              borderRightWidth: "1px",
              borderRightColor: "gray",
              justifyContent: "center",
            },
          },
        },
      };


      const data =  deliveryBoys.map((item,index)=>({
        
        serial_no:index+1,
        deliveryBoy_id:item.id,
        name:item.full_name,
        phone:item.phone_number,
        email:item.email,
       active:item.is_active,
       verified:item.is_verified,
       address:item.address,
    //    view:( <button onClick={() => handleViewDetails(item)}>
    //            <FaEye size={25} />
    //          </button>),
       active:(item.is_active === true ?
        (<p>Active</p>):(<p>Inactive</p>)),
        verified:(item.is_verified === true ?
          (<p>Verified</p>):(<p>Not Verified</p>))
      }))

  return (
    <div className=" w-[calc(100%-300px)] ml-[300px] h-screen flex flex-col mt-2  ">
      <div className=" overflow-y-auto flex-1 pt-[100px] ">
        <div className='flex justify-between '> 
        <h1 className="  ml-2  text-3xl font-bold ">Delivery Boys Management</h1>
          <input className="border-2 border-gray-400 w-95 h-10 rounded-full p-3" type='text' placeholder='Search'/>
          </div>
       
        <div className='overflow-x mt-9'>
         <DataTable data={data} columns={columns} customStyles={customStyles} pagination fixedHeader fixedHeaderScrollHeight='67vh' defaultSortFieldId={1} />
        </div>
        {/* {
          isShowDetail && (
            <>
              <div
                className="fixed inset-0 z-50 bg-black/70 "
                onClick={() => {
                  setIsShowDetail(false);
                }}
              ></div>
              <div className="absolute z-1000">
                <ViewDeliveryBoyDEtails
                  deliveryBoys={showDeliveryBoy}
                  onClose={handleDeliveryBoyDetailClose}
                />
              </div>
            </>
          )} */}
        
      </div>
      
    </div>
  )
}

export default RestaurantDeliveryBoysList
