//import supabase from "../../SupaBaseClient";

import { useSelector } from "react-redux";
//import { restaurant_seller_id } from "../../../Components/RestaurantSection/RestaurantAddDeliveryBoy";
import supabase from "../../../SupaBaseClient";

export const fetchRestaurantOrderAPI = async ({orderId,sellerDetails}) => {
  try {
   
   
    
    const { data, error } = await supabase
      .from("restaurant_order_items")
      .select(`*,orders(*,users(*)),restaurant_products(*)`)
      .eq('orders.order_type', sellerDetails.segment)  // condition 1
     .eq('orders.seller_id',sellerDetails.id)
     .eq('order_id',`${orderId}`)
    if (!error) {
      console.log("fetch the order data", data);
    } else {
      console.log("error when fetching data", error);
    }
    console.log(data);
    
    return data
  } catch (error) {
    console.error("error from supabase", error);
  }
};


export const fetchRestaurantAssignedDeliveryBoy=async(orderId)=>{
  console.log(orderId);
  
  try{
   
    const{data,error}=await supabase
    .from("delivery_boy_orders")
    .select(`*,delivery_boys(*)`)
    .eq("order_id",`${orderId}`)
    if (!error) {
      console.log("fetch the order data", data);
    } else {
      console.log("error when fetching data", error);
    }
    return data
  } catch (error) {
    console.error("error from supabase", error);
  }
}



export const fetchRestaurantAssignedOrderData= async(sellerDetails)=>{
  try {
    
    const {data,error}=await supabase
    .from("orders")
    .select('*')
    .eq("order_type",sellerDetails.segment)
    .eq("seller_id",sellerDetails.id)
    .eq("is_assigned",true)
    if (!error) {
      console.log("fetch the order data", data);
    } else {
      console.log("error when fetching data", error);
    }
    return data
  } catch (error) {
    console.error("error from supabase", error);
  }
}