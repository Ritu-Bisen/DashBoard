import React, { useEffect } from 'react'
import Header from '../MartSection/Header';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { getdeliveryBoyData } from '../../Redux/Slices/deliveryBoyDataSlice';


const DeliveryBoyList = () => {
  
const {deliveryBoyData}=useSelector((state)=>state.deliveryBoyData)
const dispatch =useDispatch();
useEffect(() => {
dispatch(getdeliveryBoyData())
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
            name: "Active",
            selector: (row) => row.active,
          },

          {
            name: "Verified",
            selector: (row) => row.verified,
          },

          {
            name: "Address",
            selector: (row) => row.address,
          },
          {
            name: "View",
            selector: (row) => row.view,
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


      const data = deliveryBoyData.map((item,index)=>({
        serial_no:index+1,
        deliveryBoy_id:item.id,
        name:item.full_name,
        phone:item.phone,
        email:item.email,
       active:item.is_active,
       verified:item.is_verified,
       address:item_address,

      }))

  return (
    <div className="w-[calc(100%-300px) ml-[300px]">
      <Header/>
      <div className='mt-25'>
        <div className='flex justify-between '> 
        <h1 className="  ml-2  text-3xl font-bold ">Delivery Boys Management</h1>
          <input className="border-2 border-gray-400 w-95 h-10 rounded-full p-3" type='text' placeholder='Search'/>
          </div>
       
        <div className='overflow-x mt-9'>
          <DataTable data={data} columns={columns} customStyles={customStyles} pagination fixedHeader fixedHeaderScrollHeight='67vh' defaultSortFieldId={1} />
        </div>
      </div>
      
    </div>
  )
}

export default DeliveryBoyList
