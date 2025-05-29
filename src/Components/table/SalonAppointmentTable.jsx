import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { FaEye } from "react-icons/fa";
import ViewSalonAppointmentDetails from "../preview/ViewSalonAppointmentDetails";
import {  getCompletedAppointment, getProcessingAppointment } from "../../Redux/Slices/salonSlicees/salonAppointmentSlice";

const SalonAppointmentTable = () => {
  const [isShowDetails,setIsShowDetails]=useState(false);
       const [showDetails,setShowDetails]=useState(null)
        const [selectedDate, setSelectedDate] = useState('');
        const[section,setSection]=useState("processing")
  

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

  const data = appointment
   .filter(item => {
    if (!selectedDate) return true;
    const itemDate = new Date(item.placed_at).toISOString().split('T')[0];
    return itemDate === selectedDate;
  })
  .map((item,index)=>({
    serialNo:index+1,
    order_id:item.id.slice(0,8),
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
    <div className="w-[calc(100%-300px)] ml-[300px] h-screen pt-[120px]">
     
          <div className='flex justify-between '>
            {" "}
            <h1 className="text-2xl font-bold px-10 py-2 ">Booking Status</h1>
             <input
  className='h-10 w-80 p-5 border-gray-300 border-2 rounded-full mr-10'
  type='date'
  value={selectedDate}
  onChange={(e) => setSelectedDate(e.target.value)}
/>

          </div>
          <div className="flex bg-gray-200  rounded-full px-5 py-2 justify-between w-[30vh]">
            <button  className={`rounded-full px-2 text-lg font-semibold ${
                section === "processing"
                  ? "bg-white text-green-500"
                  : "text-black"
              }`} onClick={()=>{setSection("processing");dispatch(getProcessingAppointment(sellerDetails))}}>Processing</button>
              <button  className={`rounded-full px-2 text-lg font-semibold ${
                section === "completed"
                  ? "bg-white text-green-500"
                  : "text-black"
              }`} onClick={()=>{setSection("completed");dispatch(getCompletedAppointment(sellerDetails))}}>Completed</button>
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
