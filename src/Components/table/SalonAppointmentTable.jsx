import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { FaEye } from "react-icons/fa";
import ViewSalonAppointmentDetails from "../preview/ViewSalonAppointmentDetails";
import { getAppointment } from "../../Redux/Slices/salonSlicees/salonAppointmentSlice";

const SalonAppointmentTable = () => {
  const [isShowDetails,setIsShowDetails]=useState(false);
       const [showDetails,setShowDetails]=useState(null)
  

   const {appointment} = useSelector((state)=>state.appointment);
      const {sellerDetails}=useSelector((state)=>state.seller)
  //console.log(billingList);
  
 
      const dispatch = useDispatch();
      useEffect(() => {
        dispatch(getAppointment(sellerDetails))
       
      }, [dispatch])

const onhandleViewInvoice =(orderId)=>{
  setIsShowDetails(true);
  setShowDetails(orderId);

}

const handleCloseInvoice =()=>{
  setIsShowDetails(false)
}

  const columns = [
    {
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
      selector: (row) => row.user_contact,
    },
    
    {
      name: "Price",
      selector: (row) => row.price,
    },
    {
      name: "Date,Time",
      selector: (row) => row.booked_for,
    },
     {
      name: "View",
      selector: (row) => row.view,
      center:true
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

  const data = appointment.map((item,index)=>({
    serialNo:index+1,
    order_id:item.id,
    user_name:item.users.name,
    user_contact:item.users.phone_number,
    price:item.total_amount,
    booked_for:item.placed_at,
     view: (
                  <button  onClick={()=>onhandleViewInvoice(item.id)}>
                    <FaEye size={25} />
                  </button>
                ),
  }))

  return (
    <div className="w-[calc(100%-300px)] ml-[300px] h-screen pt-30">
     
        <div className="justify-between flex border-b border-gray-300  ">
          <div>
            {" "}
            <h1 className="text-2xl font-bold px-10 py-2 ">Booking Status</h1>
          </div>
          {/* <div className="bg-gray-300 h-12 rounded-full  justify-center w-120 gap-6 flex mb-2">
            <button className="rounded-full  hover:px-5 hover:py-3 hover:bg-red-500">All Bookings</button>
            <button className="rounded-full   hover:px-5 hover:py-3 hover:bg-red-500">Upcoming Bookings</button>
            <button className="rounded-full   hover:px-5 hover:py-3 hover:bg-red-500">Canceled Bookings</button>
          </div> */}
        </div>
        <div className="mt-10">
          <DataTable
            data={data}
            pagination
            columns={columns}
            fixedHeader
            fixedHeaderScrollHeight="67vh"
            defaultSortFieldId={1}
            customStyles={customStyles}
          />
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
            <ViewSalonAppointmentDetails
              orderId={showDetails}
              sellerDetails={sellerDetails}
              onClose={handleCloseInvoice}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default SalonAppointmentTable;
