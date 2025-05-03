import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantOrders } from "../../Redux/Slices/restaurantSlice/restaurantOrderSlice";

import { fetchRestaurantOrderAPI } from '../../Redux/Api/restaurantApi/restaurantOrderApi';

const RestaurantViewOrderdetails = ({orderId, onClose}) => {
    console.log(orderId);
    
  const { orders } = useSelector((state) => state.restaurantOrder);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRestaurantOrders(orderId));
  }, [dispatch]);

  console.log("hlo", orders);

  return (
    <div className="fixed top-20 right-30  h-150 w-250  overflow-y-scroll bg-gray-300 p-5 ">
     
    </div>
  );
};

export default RestaurantViewOrderdetails;
