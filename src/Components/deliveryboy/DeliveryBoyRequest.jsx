import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';

import { useDispatch, useSelector } from 'react-redux';
import { getDeliveryBoyRequest } from '../../Redux/Slices/deliveryBoyDataSlice';
import { FaEye } from 'react-icons/fa';
import ViewDeliveryBoyDEtails from './ViewDeliveryBoyDEtails';

const DeliveryBoyRequest = () => {
  const [isShowDetail, setIsShowDetail] = useState(false);
      const [showDeliveryBoy, setShowDeliveryBoy] = useState(null);
    
      const handleViewDetails = (deliveryBoys) => {
        setIsShowDetail(true);
        setShowDeliveryBoy(deliveryBoys);
      };
  
      const handleDeliveryBoyDetailClose = () => {
        setIsShowDetail(false);
      };

  const { deliveryBoys}=useSelector((state)=>state.deliveryBoyData);
  const{sellerDetails}=useSelector((state)=>state.seller)
  const dispatch = useDispatch();
useEffect(() => {
dispatch(getDeliveryBoyRequest(sellerDetails))
}, [dispatch])
console.log(deliveryBoys);


    const columns = [
      {
        name: "S.No.",
        selector: (row) => row.serialNo,
        width: "100px",
      },
        {
          name: "Id",
          selector: (row) => row.deliveryBoy_id,
          width: "150px",
        },
        {
          name: "Profile",
          selector: (row) => row.profile_image,
         
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


      

      const data = deliveryBoys.map((item, index) => ({
        serialNo: index + 1,
        deliveryBoy_id: item?.id,
        profile_image: (<img src={item.profile_image_url}/>),
        name: item?.full_name,
        email: item?.email,
        phone: item?.phone_number,
        address: item?.address,
       view:( <button onClick={() => handleViewDetails(item)}>
                     <FaEye size={25} />
                   </button>),
      }));
      

  return (
    <div  className="w-[calc(100%-300px)] ml-[300px]">
       
        <div className='pt-[120px]'>
        <div className="flex justify-between gap-3">
          <h1 className="  ml-2  text-3xl font-bold ">Delivery Boys Request</h1>
          <input
            className="border-2 border-gray-400 w-95 h-10 rounded-full p-3"
            placeholder="Search"
            type="text"
          />
        </div>
        <div className='overflow-x mt-9'>
            <DataTable fixedHeader columns={columns} data={data} pagination customStyles={customStyles} defaultSortFieldId={1} fixedHeaderScrollHeight='67vh' />

        </div>
        {
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
          )}
             </div>
    
    </div>
  ) 
}

export default DeliveryBoyRequest
