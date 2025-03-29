import React from "react";
import DataTable from "react-data-table-component";
import { IoMdSearch } from "react-icons/io";
import Header from "../Header";

const OrderTable = () => {
  const columns = [
    {
      name: "id",
      selector: (row) => row.order_id,
      width: "300px",
    },
    {
      name: "User Id",
      selector: (row) => row.user_id,
      width: "300px",
    },
    {
      name: "Order Type",
      selector: (row) => row.order_type,
    },
    {
      name: "Total Amount",
      selector: (row) => row.total_amount,
    },
    {
      name: "Payment Status",
      selector: (row) => row.payment_status,
    },
    {
      name: "Order Status",
      selector: (row) => row.order_status,
    },
    {
      name: "Payment Method",
      selector: (row) => row.payment_method,
      width: "130px",
    },
    {
      name: "Address",
      selector: (row) => row.address,
    },
    {
      name: "Placed",
      selector: (row) => row.placed_at,
    },
    {
      name: "Update",
      selector: (row) => row.updated_at,
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

  const data = Array(25).fill({
    order_id: "12d45ce8-9b58-49d3-85f0-1c5f6645b36f",
    user_id: "34600685-4977-483d-a663-c3c5a2024488",
    order_type: "mart",
    total_amount: "405.50",
    payment_status: "pending",
    order_status:'processing',
    payment_method: "cod",
    address: "Shiv Nagar, Mahadeva talab, Raipur, Chhattisgarh 492001",
    placed_at: "2025-03-27 15:29:37.614046",
    updated_at: "2025-03-27 15:29:37.614079",
  });
  return (
   <div className="w-[calc(100%-300px)]"> <Header/>
    <div className="  mt-25 ">
      <div className="flex gap-5 justify-between">
        <h1 className=" mt-9 ml-2  text-3xl font-bold ">Latest Orders</h1>
        <div className="flex gap-8 mt-3">
          <label className="flex-col  flex font-semibold  ml-5">
            Placed Date
            <input
              className="border-2 border-gray-400 rounded-full h-10 w-50 p-3"
              type="date"
              placeholder="Search by Date"
            />
          </label>

          <div>
            <label className="flex-col font-semibold flex  ml-5">
              Order Status
              <select className="border-2 border-gray-400 rounded-full h-10 w-50 p-2">
                <option>All Order</option>
                <option>Payment Painding</option>
                <option>Received</option>
                <option>Processed</option>
                <option>Delivered</option>
                <option>Out Of Delivery</option>
              </select>
            </label>
          </div>

          <label className="flex-col font-semibold flex ml-5">
            Search By Name{" "}
            <input
              className="border-2 border-gray-400 w-95 h-10 rounded-full  p-3 "
              placeholder="Search"
              type="text"
            />
          </label>
        </div>
      </div>
      <div className="overflow-x mt-9">
        <DataTable
          fixedHeader
          columns={columns}
          data={data}
          customStyles={customStyles}
          fixedHeaderScrollHeight="67vh"
          pagination
          defaultSortFieldId={1}
        />
      </div>
    </div>
    </div>
  );
};

export default OrderTable;


