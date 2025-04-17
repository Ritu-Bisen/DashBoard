import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { getBillingData } from '../../Redux/Slices/salonSlicees/salonBillingSlice';
import { FaEye } from "react-icons/fa";
import SalonBillingInvoice from './SalonBillingInvoice';

const SalonBillingList = () => {
     const [isShowDetails,setIsShowDetails]=useState(false);
     const [showDetails,setShowDetails]=useState(null)


     const {billingList} = useSelector((state)=>state.billing);
 //console.log(billingList);
 

     const dispatch = useDispatch();
     useEffect(() => {
       dispatch(getBillingData())
      
     }, [dispatch])
     
const onhandleViewInvoice =(billing)=>{
  setIsShowDetails(true);
  setShowDetails(billing);

}

const handleCloseInvoice =()=>{
  setIsShowDetails(false)
}

    const columns = [ {
        name: "S.no",
        selector: (row) => row.serialNo,
      },
      {
        name: "Order Id",
        selector: (row) => row.order_id,
      },
      {
        name: "Date,Time",
        selector: (row) => row.date_time,
      },
      {
        name: "User Name",
        selector: (row) => row.user_name,
      },
      {
        name: "User Contact",
        selector: (row) => row.contact,
      },
      {
        name: "Order Type",
        selector: (row) => row.order_type,
      },
      {
        name: "Service Name",
        selector: (row) => row.service_name,
      },
      {
        name: "Quantity",
        selector: (row) => row.quantity,
      },
      
      {
        name: "Total Amount",
        selector: (row) => row.total_amount,
      },
      {
        name: "Pay Status",
        selector: (row) => row.pay_status,
        width:"150px"
      },
      {
        name: "Order Status",
        selector: (row) => row.order_status,
        width:"150px"
      },
      {
        name: "Payment Method",
        selector: (row) => row.payment_method,
        width:"150px"
      },
      {
        name: "Address",
        selector: (row) => row.address,
        width:"150px"
      },
      {
        name: "View",
        selector: (row) => row.view,
        center:"true",
      },
    ]
  
  
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

    const quantity = 10;
    
      const data =billingList.map((item,index)=>({
        serialNo:index+1,
        order_id:item.order_id,
        date_time: item.booked_for,
        user_name:item.orders.users.name,
        contact:item.orders.users.phone_number,
        order_type:item.orders.order_type,
        service_name:item.salon_services.name,
        quantity:item.quantity,
        total_amount:item.price,
        pay_status:item.orders.payment_status,
        order_status:item.orders.order_status,
        payment_method:item.orders.payment_method,
        address:item.orders.address,
        view: (
              <button  onClick={()=>onhandleViewInvoice(item)}>
                <FaEye size={25} />
              </button>
            ),
      }))
  return (
    <div className='w-[calc(100%-300px)] ml-[300px]  pt-30'>
     <h1 className=' font-bold text-3xl ml-5'>Services</h1>
      <div className='overflow-x mt-9'>
      <DataTable data={data} fixedHeaderScrollHeight='67vh' defaultSortFieldId={1} customStyles={customStyles} pagination fixedHeader columns={columns}/>
      </div>
      {isShowDetails && (
        <>
          <div
            className="inset-0  z-50 bg-black/70 fixed"
            onClick={() => {
              setIsShowDetails(false);
            }}
          ></div>
          <div className="absolute z-[10000]">
            <SalonBillingInvoice
              billing={showDetails}
              onClose={handleCloseInvoice}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default SalonBillingList
