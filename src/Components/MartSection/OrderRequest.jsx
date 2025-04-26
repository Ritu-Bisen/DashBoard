import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderRequest } from "../../Redux/Slices/OrderRequestSlice";
import { getdeliveryBoyData } from "../../Redux/Slices/deliveryBoyDataSlice";
import Header from "./Header";
import DataTable from "react-data-table-component";
import { FaEye } from "react-icons/fa";
import { fetchorderRequestAPI } from "../../Redux/Api/orderRequestApi";
import ViewOrderRequestProducts from "./ViewOrderRequestProducts";
//import { fetchOrderItemsAPI } from '../../Redux/Api/orderRequestApi';

const OrderRequest = () => {
  const [assignStatus, setAssignStatus] = useState({});
  const [isShowDetail, setIsShowDetail] = useState(false);
  const [showProducts, setShowProducts] = useState(null);

  const handleViewDetails = (orderRequest) => {
    setIsShowDetail(true);
    setShowProducts(orderRequest);
  };

  const handleProductsClose = () => {
    setIsShowDetail(false);
  };

  const { orderRequest } = useSelector((state) => state.orderRequest);
  const { deliveryBoys } = useSelector((state) => state.deliveryBoyData);

  console.log(fetchorderRequestAPI());

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrderRequest());
    dispatch(getdeliveryBoyData());
  }, [dispatch]);

  const handleAssigned = (orderId) => {
    setAssignStatus((prev) => ({
      ...prev,
      [orderId]: true, // set assigned true for only that order_id
    }));
  };

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
      name: "Quantity",
      selector: (row) => row.quantity,
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
      center: true,
    },

    {
      name: "Delivery Boy",
      selector: (row) => row.delivery_boy,
      width: "300px",
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

  const data = orderRequest
    ? Object.entries(orderRequest).map(([orderId, items], index) => ({
        serialNo: index + 1,
        order_id: orderId,
        user_name: items[0]?.orders?.users?.name,
        user_contact: items[0]?.orders?.users?.phone_number,
        delivery_boy: (
          <div className="space-x-3">
            <select className="w-40 h-8 border-b-gray-300 border-1">
              <option value="">Select</option>
              {deliveryBoys.map((boy, index) => (
                <option value={boy.full_name} key={index}>
                  {boy.full_name}
                </option>
              ))}
            </select>
            <button
              onClick={() => handleAssigned(orderId)}
              className="bg-green-500 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-lg"
            >
              Assign
            </button>
          </div>
        ),

        total_amount: items[0]?.orders?.total_amount,
        payment_status: items[0]?.orders?.payment_status,
        order_status: assignStatus[orderId] ? "Assigned" : "Processing",

        payment_method: items[0]?.orders?.payment_method,
        address: items[0]?.orders?.address,
        quantity: items.length,
        view: (
          <button onClick={() => handleViewDetails(items)}>
            <FaEye size={25} />
          </button>
        ),
      }))
    : [];

  return (
    <div className="w-[calc(100%-300px) ml-[300px]">
      <Header />
      <div className=" mt-25">
        <div className="flex justify-between gap-3">
          <h1 className="  ml-2  text-3xl font-bold ">Order Requests</h1>
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
        {isShowDetail && (
          <>
            <div
              className="fixed inset-0 z-50 bg-black/70 "
              onClick={() => {
                setIsShowDetail(false);
              }}
            ></div>
            <div className="absolute z-1000">
              <ViewOrderRequestProducts
                orderProducts={showProducts}
                onClose={handleProductsClose}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OrderRequest;
