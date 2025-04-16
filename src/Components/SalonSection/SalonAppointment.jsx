import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { getAppointment } from "../../Redux/Slices/salonSlicees/salonAappointmentSlice";

const SalonAppointment = () => {

  const {appointmentList} = useSelector((state)=>state.appointmentList)
  console.log(appointmentList);
  
const dispatch =useDispatch();

useEffect(() => {
dispatch(getAppointment())
}, dispatch)


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
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Date,Time",
      selector: (row) => row.date_time,
    },
    {
      name: "Services",
      selector: (row) => row.services,
    },
    {
      name: "Phone no.",
      selector: (row) => row.phone_no,
    },
    {
      name: "Pay Mode",
      selector: (row) => row.pay_mode,
    },
    {
      name: "Amount",
      selector: (row) => row.amount,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      width: "150px",
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

  const data = Array(15).fill({
    serialNo: "1",
    order_id: "5767t7gugh",
    name: "Rohan",
    date_time: (
      <p className="flex flex-col">
        12/03/2025<span>12:40 pm</span>
      </p>
    ),
    services: "Haircut",
    phone_no: "9868756654",
    pay_mode: "Online",
    amount: "200",
    status: "Edit",
  });

  return (
    <div className="w-[calc(100%-300px)] ml-[300px] h-screen pt-30">
      <div className="fixed h-175 w-285 shadow-lg py-10 shadow-gray-400 ml-10">
        <div className="justify-between flex border-b border-gray-300  ">
          <div>
            {" "}
            <h1 className="text-2xl font-bold px-10 py-2 ">Booking Status</h1>
          </div>
          <div className="bg-gray-300 h-12 rounded-full  justify-center w-120 gap-6 flex mb-2">
            <button className="rounded-full  hover:px-5 hover:py-3 hover:bg-red-500">All Bookings</button>
            <button className="rounded-full   hover:px-5 hover:py-3 hover:bg-red-500">Upcoming Bookings</button>
            <button className="rounded-full   hover:px-5 hover:py-3 hover:bg-red-500">Canceled Bookings</button>
          </div>
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
      </div>
    </div>
  );
};

export default SalonAppointment;
