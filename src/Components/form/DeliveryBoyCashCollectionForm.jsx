import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { cashCollectionRecord, getCashCollectionOrder, updateCashCollectionOrder } from '../../Redux/Slices/cashCollectionSlice';
import { FaEye } from 'react-icons/fa';
import { getActiveVerifiedDeliveryBoys } from '../../Redux/Slices/deliveryBoyDataSlice';
import RestaurantViewOrderRequest from '../preview/RestaurantViewOrderRequest';

const DeliveryBoyCashCollectionForm = () => {
 const [selectedDeliveryBoy, setSelectedDeliveryBoy] = useState({});

   const [localOrders, setLocalOrders] = useState([]);



    const {sellerDetails}=useSelector((state)=>state.seller)
const {orders}=useSelector((state)=>state.cashCollection);
const { deliveryBoys } = useSelector((state) => state.deliveryBoyData);
const dispatch =useDispatch();
useEffect(()=>{
    dispatch(getCashCollectionOrder(sellerDetails))
     dispatch(getActiveVerifiedDeliveryBoys(sellerDetails));
},[dispatch])

useEffect(() => {
 setLocalOrders(orders.filter((item) => item)); // removes null/undefined

}, [orders]);

const handleSubmit = async (orderId) => {
  const deliveryBoyId = selectedDeliveryBoy[orderId];
  if (!deliveryBoyId) {
    alert("Please select a delivery boy before assigning.");
    return;
  }

  try {
    await dispatch(cashCollectionRecord({ orderId, deliveryBoyId })).unwrap();
          dispatch(updateCashCollectionOrder(orderId))
    // Remove order from localOrders
   setLocalOrders((prev) =>
  prev.filter((item) => item && item.id !== orderId)
);

  } catch (error) {
    console.error("Error submitting cash collection:", error);
    alert("Failed to submit. Please try again.");
  }
};



//   const handleSubmit=(orderId)=>{
//     const deliveryBoyId = selectedDeliveryBoy[orderId];
//      if (!deliveryBoyId) {
//       alert("Please select a delivery boy before assigning.");
//       return;
//     }
//     dispatch(cashCollectionRecord({orderId,deliveryBoyId}))
//      console.log("Order ID:", orderId);
//     console.log("Delivery Boy ID:", deliveryBoyId);

//   }

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
    
      const data =localOrders  // Ensure item and item.id are valid
      .map((item, index) => ({
        serialNo: index + 1,
        order_id: item.id.slice(0,8),
       
        total_amount: item.total_amount,
        payment_status: item.payment_status,
        payment_method: item.payment_method,
        order_status: item.order_status,
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
              onClick={() => handleSubmit(item.id)}
              className="bg-green-500 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-lg"
            >
              Submit
            </button>
          </div>
        ),
       
      }));
  return (
    <div className="w-[calc(100%-300px) ml-[300px] pt-[120px]">
      <div className='text-3xl font-semibold m-5'>Delivery Boy Cash Collection</div>
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
  )
}

export default DeliveryBoyCashCollectionForm
