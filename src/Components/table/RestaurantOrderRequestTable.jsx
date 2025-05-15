import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import DataTable from "react-data-table-component";
import { FaEye } from "react-icons/fa";

import {
  getRestaurantOrderRequest,
  restaurantOrderRequest,
  updateAssignedRestaurantOrder,
} from "../../Redux/Slices/restaurantSlice/restaurantOrderRequestSlice";
import RestaurantViewOrderRequest from "../preview/RestaurantViewOrderRequest";
import { getActiveVerifiedDeliveryBoys } from "../../Redux/Slices/deliveryBoyDataSlice";

const RestaurantOrderRequestTable = () => {
  const [assignStatus, setAssignStatus] = useState({});
  const [isShowDetail, setIsShowDetail] = useState(false);
  const [showProducts, setShowProducts] = useState(null);
  const [selectedDeliveryBoy, setSelectedDeliveryBoy] = useState({});
  const [localOrders, setLocalOrders] = useState({});

  const handleViewDetails = (orderId) => {
    setIsShowDetail(true);
    setShowProducts(orderId);
  };

  const handleProductsClose = () => {
    setIsShowDetail(false);
  };

  const { orderRequest } = useSelector((state) => state.restaurantOrderRequest);
  const { deliveryBoys } = useSelector((state) => state.deliveryBoyData);
    const{sellerDetails}=useSelector((state)=>state.seller)

  console.log("hii",deliveryBoys)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActiveVerifiedDeliveryBoys(sellerDetails));
    dispatch(getRestaurantOrderRequest(sellerDetails));
  }, [dispatch]);

  useEffect(() => {
    if (orderRequest) {
      setLocalOrders(orderRequest);
    }
  }, [orderRequest]);

  const handleAssigned = (orderId) => {
    const deliveryBoyId = selectedDeliveryBoy[orderId];
  
    if (!deliveryBoyId) {
      alert("Please select a delivery boy before assigning.");
      return;
    }
  
    dispatch(restaurantOrderRequest({orderId,deliveryBoyId}));
    dispatch( updateAssignedRestaurantOrder(orderId));
    console.log("Order ID:", orderId);
    console.log("Delivery Boy ID:", deliveryBoyId);
  
    
    setAssignStatus((prev) => ({
      ...prev,
      [orderId]: true,
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
        borderBottom: "1px solid black",
        borderRight: "1px solid gray",
        backgroundColor: "#f4f4f4",
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

  const data = (orderRequest || [])
  .filter(item => item && item.id)  // Ensure item and item.id are valid
  .map((item, index) => ({
    serialNo: index + 1,
    order_id: item.id,
    user_name: item.users?.name || "N/A",
    user_contact: item.users?.phone_number || "N/A",
    total_amount: item.total_amount,
    payment_status: item.payment_status,
    payment_method: item.payment_method,
    order_status: assignStatus[item.id] ? "Assigned" : "Processing",
    address: item.address,
    delivery_boy: (
      <div className="space-x-3">
        <select
          className="w-40 h-8 border-b-gray-300 border-1"
          value={selectedDeliveryBoy[item.id] || ""}
          onChange={(e) =>
            setSelectedDeliveryBoy((prev) => ({
              ...prev,
              [item.id]: e.target.value,
            }))
          }
        >
          <option value="">Select</option>
          {deliveryBoys?.map((boy, index) => (
            <option value={boy.id} key={index}>
              {boy.full_name}
            </option>
          ))}
        </select>

        <button
          onClick={() => handleAssigned(item.id)}
          className="bg-green-500 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-lg"
        >
          Assign
        </button>
      </div>
    ),
    view: (
      <button onClick={() => handleViewDetails(item.id)}>
        <FaEye size={25} />
      </button>
    ),
  }));

  

 

  return (
    <div className="w-[calc(100%-300px) ml-[300px]">
      <div className="pt-[120px]">
        <div className="flex justify-between gap-3">
          <h1 className="ml-2 text-3xl font-bold">Order Requests</h1>
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
              className="fixed inset-0 z-50 bg-black/70"
              onClick={() => setIsShowDetail(false)}
            ></div>
            <div className="absolute z-1000">
              <RestaurantViewOrderRequest
              sellerDetails={sellerDetails}
                orderId={showProducts}
                onClose={handleProductsClose}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RestaurantOrderRequestTable;
