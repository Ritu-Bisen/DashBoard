import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { IoMdSearch } from "react-icons/io";
import Header from "../MartSection/Header";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../Redux/Slices/OrderSlice";
import { FaEye } from "react-icons/fa";
import ViewDetails from "./ViewDetails";
import ViewOrderDetails from "./ViewOrderDetails";
import supabase from "../../SupaBaseClient";
import { getdeliveryBoyData } from "../../Redux/Slices/deliveryBoyDataSlice";

const OrderTable = () => {
  const [isShowDetail, setIsShowDetail] = useState(false);
  const [showOrder, setShowOrder] = useState(null);

  const handleViewDetails = (orders) => {
    setIsShowDetail(true);
    setShowOrder(orders);
  };

  const handleProductDetailClose = () => {
    setIsShowDetail(false);
  };

  const { orders } = useSelector((state) => state.order); //order=store,orders=initialstate
 
  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
 
  }, [dispatch]);

  const columns = [
    {
      name: "S.no",
      selector: (row) => row.serialNo,
    },
    {
      name: "Order Id",
      selector: (row) => row.order_id,
      width: "300px",
    },
    {
      name: "User Name",
      selector: (row) => row.user_name,
    },
    {
      name: "User Contact",
      selector: (row) => row.user_contact,
      width: "150px",
    },
    {
      name: "Order Type",
      selector: (row) => row.order_type,
    },
    {
      name: "Quantity",
      selector: (row) => row.quantity,
    },
    {
      name: "Product Name",
      selector: (row) => row.product_name,
      width: "150px",
    },

    {
      name: "Total Amount",
      selector: (row) => row.total_amount,
      width: "120px",
    },

    {
      name: "Payment Status",
      selector: (row) => row.payment_status,
      width: "150px",
    },
    {
      name: "Order Status",
      selector: (row) => row.order_status,
      width: "120px",
    },
    {
      name: "Payment Method",
      selector: (row) => row.payment_method,
      width: "150px",
    },
    {
      name: "Address",
      selector: (row) => row.address,
      width: "300px",
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

  const data = orders.map((item, index) => ({
    serialNo: index + 1,

    order_id: item.order_id,

    quantity: item.quantity,
    user_name: item.orders.users.name,
    user_contact: item.orders.users.phone_number,

    product_name: item.mart_products.name,

    order_type: item.orders.order_type,
    total_amount: item.orders.total_amount,
    payment_status: item.orders.payment_status,
    order_status: item.orders.order_status,
    payment_method: item.orders.payment_method,
    address: item.orders.address,
   
    view:(
      <button onClick={() => handleViewDetails(item)}>
        <FaEye size={25} />
      </button>
    ),
  }));

  return (
    <div className="relative w-[calc(100%-300px)] ml-[300px]">
      {" "}
      <Header />
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
        <div className="overflow-x mt-9 ">
          <DataTable
            fixedHeader
            columns={columns}
            data={data}
            customStyles={customStyles}
            fixedHeaderScrollHeight="90vh"
            pagination
            defaultSortFieldId={1}
          />
        </div>
        {isShowDetail && (
          <>
            <div
              className="fixed inset-0 z-50 bg-black/70 "
              onClick={() => {
                setIsShowDetail(false);
              }}
            ></div>
            <div className="absolute z-1000">
              <ViewOrderDetails
                orders={showOrder}
                onClose={handleProductDetailClose}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OrderTable;
