import { seller_id } from "../../Components/MartSection/StockManagementForm";
import supabase from "../../SupaBaseClient";

export const fetchMartAssignedOrderAPI = async () => {
  try {
    const { data, error } = await supabase
    .from("orders")
    .select('*')
    .eq("order_type","mart")
    .eq("seller_id",seller_id)
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
};

export const fetchMartOrderDetailsAPI = async (orderId) => {
  try {
    console.log(orderId);
    
    const { data, error } = await supabase
      .from("mart_order_items")
      .select(`*,orders(*,users(*)),mart_products(*)`)
      .eq('orders.order_type', 'mart')  // condition 1
     .eq('orders.seller_id',seller_id)
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