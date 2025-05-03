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

export const fetchAssignedData= async()=>{
  try {
    const {data,error}=await supabase
    .from("orders")
    .select('*')
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