import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { FaEye } from "react-icons/fa";
import ViewSalonBillingInvoice from '../preview/ViewSalonBillingInvoice';
import { getCompletedAppointment, getProcessingAppointment } from '../../Redux/Slices/salonSlicees/salonAppointmentSlice';

const SalonBillingListTable = () => {
     const [isShowDetails,setIsShowDetails]=useState(false);
     const [showDetails,setShowDetails]=useState(null)


     const {appointment} = useSelector((state)=>state.appointment);
     const {sellerDetails}=useSelector((state)=>state.seller)
 //console.log(billingList);
 

     const dispatch = useDispatch();
     useEffect(() => {
       dispatch(getProcessingAppointment(sellerDetails))
      
     }, [dispatch])
     
const onhandleViewInvoice =(orderId)=>{
  setIsShowDetails(true);
  setShowDetails(orderId);

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
        name: "User Name",
        selector: (row) => row.user_name,
      },
      {
        name: "User Contact",
        selector: (row) => row.contact,
         width:"150px"
      }, 
      {
        name: "Total Amount",
        selector: (row) => row.total_amount,
 width:"150px"
      },
      {
        name: "Pay Status",
        selector: (row) => row.pay_status,
       
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
        width:"250px"
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

    
      const data =appointment
       .filter(item => item.payment_status === "paid")
      .map((item,index)=>({
        serialNo:index+1,
        order_id:item.id.slice(0,8),
        user_name:item.users.name,
        contact:item.users.phone_number,
        total_amount:item.total_amount,
        pay_status:item.payment_status,
        order_status:item.order_status,
        payment_method:item.payment_method,
        address:item.address,
        view: (
              <button  onClick={()=>onhandleViewInvoice(item.id)}>
                <FaEye size={25} />
              </button>
            ),
      }))
  return (
    <div className='w-[calc(100%-300px)] ml-[300px]  pt-30'>
     <h1 className=' font-bold text-3xl ml-5'>Billing</h1>
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
            <ViewSalonBillingInvoice
              orderId={showDetails}
              sellerDetails={sellerDetails}
              onClose={handleCloseInvoice}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default SalonBillingListTable
