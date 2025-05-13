//import { seller_id } from "../../Components/MartSection/StockManagementForm";
import supabase from "../../SupaBaseClient";

export const fetchorderRequestAPI = async (sellerDetails) => {
  try {
    const {data,error}=await supabase
    .from("orders")
    .select(`*,users(*)`)
    .eq("order_type",sellerDetails.segment)
    .eq("seller_id",sellerDetails.id)
    .eq("is_assigned",false)
    if (!error) {
      console.log("fetch the order data", data);
    } else {
      console.log("error when fetching data", error);
    }
    return data
  } catch (error) {
    console.error("Unexpected error from supabase", error);
    return null;
  }
  };
  

  export const MartOrdersAssigned = async ({deliveryBoyId,orderId})=>{
    console.log(deliveryBoyId,orderId);
    
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

  export const updateMartAssignedOrder= async(orderId)=>{
    try{ 
       console.log(orderId);
      
      const {data,error}=await supabase
      .from("orders")
      .update({is_assigned: true})
      .eq("id", orderId)
      .single();
      if (error) {
        console.error(" error when update", error);
      } else {
        console.log("update successful",data);
      
      }
      return data
    } catch (error) {
      console.error("Error updating assigned", error.message);
      
      throw error;
    }
  };
  

