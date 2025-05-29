import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
//import { getMartAssignedOrders } from "../../Redux/Slices/OrderSlice";
import { FaEye } from "react-icons/fa";
import ViewOrderDetails from "../preview/ViewOrderDetails";
import { getMartDeliveredOrders, getMartProcessingOrders } from "../../Redux/Slices/OrderSlice";

const MartOrderTable = () => {
  const [isShowDetail, setIsShowDetail] = useState(false);
  const [showOrder, setShowOrder] = useState(null);
  const [section,setSection]=useState("processing")

  const handleViewDetails = (orderId) => {
    setIsShowDetail(true);
    setShowOrder(orderId);
  };

  const handleProductDetailClose = () => {
    setIsShowDetail(false);
  };

  const { assignOrders } = useSelector((state) => state.order); 
  const{sellerDetails}=useSelector((state)=>state.seller) 
  //console.log("login",sellerDetails);
  

 
  console.log(assignOrders);
  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMartProcessingOrders(sellerDetails));
 
  }, [dispatch]);

  const columns = [
    {
      name: "S.no",
      selector: (row) => row.serialNo,
    },
    {
      name: "Order Id",
      selector: (row) => row.order_id,
      width: "90px",
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

  const data = assignOrders.map((item, index) => ({
     serialNo: index + 1,
     order_id: item?.id.slice(0,8),
     total_amount: item?.total_amount,
     payment_status: item?.payment_status,
     order_status: item?.order_status,
     payment_method: item?.payment_method,
     address: item?.address,
 
     view: (
       <button onClick={() => handleViewDetails(item?.id)}>
         <FaEye size={25} />
       </button>
     ),
   }));
 

  return (
    <div className="relative w-[calc(100%-300px)] ml-[300px]">
      {" "}
   
      <div className=" pt-[120px]">
        <div className="flex gap-5 justify-between">
          <h1 className=" mt-9 ml-2  text-3xl font-bold ">Latest Orders</h1>
        <div className="flex bg-gray-200 w-[30vh] px-5 py-2 rounded-full m-5 justify-between">
             <button  className={`rounded-full px-2 text-lg font-semibold ${
                section === "processing"
                  ? "bg-white text-green-500"
                  : "text-black"
              }`}
               onClick={()=>{setSection("processing");
dispatch(getMartProcessingOrders(sellerDetails))}
        }>Processing</button>
         <button  className={`rounded-full px-2 text-lg font-semibold ${
                section === "delivered"
                  ? "bg-white text-green-500"
                  : "text-black"
              }`}
               onClick={()=>{setSection("delivered");
          dispatch(getMartDeliveredOrders(sellerDetails))
         }}>Delivered</button>
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
              sellerDetails={sellerDetails}
                orderId={showOrder}
                onClose={handleProductDetailClose}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MartOrderTable;
