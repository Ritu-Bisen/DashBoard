import { restaurant_seller_id } from "../../../Components/RestaurantSection/RestaurantAddDeliveryBoy";
import supabase from "../../../SupaBaseClient";


export const RestaurantOrdersAssigned = async ({deliveryBoyId,orderId})=>{
  console.log("jhgh",deliveryBoyId,orderId);
  
    try {
        const ordersAssignedDeliveryBoy={
            delivery_boy_id:deliveryBoyId,
            order_id:orderId,
            status:"assigned",
        }
        const { data, error } = await supabase
        .from("delivery_boy_orders")
        .insert([ordersAssignedDeliveryBoy]);
     
      if (!error) {
        console.log("Post successful", data);
      } else {
        console.log("Error when posting data", error);
      }
  
      return data;
    } catch (error) {
      console.log("Data not posted", error);
    }
}


export const fetchRestaurantOrderRequestAPI = async () => {
    try {
      const groupByOrderId = (items) => {
        return items.reduce((acc, item) => {
          const { order_id } = item;
          if (!acc[order_id]) {
            acc[order_id] = [];
          }
          acc[order_id].push(item);
          return acc;
        }, {});
      };
      
      const { data, error } = await supabase
        .from('restaurant_order_items')  // Corrected table name (no "s")
        .select('*,orders(*,users(*)),restaurant_products(*)')
        .eq('orders.order_type', 'restaurant')  // condition 1
        .eq('orders.seller_id', restaurant_seller_id)
        .order('order_id', { ascending: true });
        
      
      if (error) {
        console.error("Supabase fetch error:", error);
        return null;  // Return early if fetch failed
      }
      
      if (data) {
        const groupedData = groupByOrderId(data);
        console.log(groupedData);
        return groupedData;  // Return the grouped data
      }
  
      return null;
    } catch (error) {
      console.error("Unexpected error from supabase", error);
      return null;
    }
  };
  

  

