//import supabase from "../../SupaBaseClient";

import { restaurant_seller_id } from "../../../Components/RestaurantSection/RestaurantAddDeliveryBoy";
import supabase from "../../../SupaBaseClient";

export const fetchRestaurantOrderAPI = async (orderId) => {
  try {
    console.log(orderId);
    
    const { data, error } = await supabase
      .from("restaurant_order_items")
      .select(`*,orders(*,users(*)),restaurant_products(*)`)
      .eq('orders.order_type', 'restaurant')  // condition 1
     .eq('orders.seller_id', restaurant_seller_id)
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


export const fetchAssignedDeliveryBoy=async(orderId)=>{
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



export const fetchAssignedData= async()=>{
  try {
    const {data,error}=await supabase
    .from("orders")
    .select('*')
    .eq("order_type","restaurant")
    .eq("seller_id","a10d0cab-e757-4f32-bc91-6adf2c79b786")
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