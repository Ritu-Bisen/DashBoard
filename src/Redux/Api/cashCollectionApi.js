import supabase from "../../SupaBaseClient";
import { v4 as uuidv4 } from 'uuid';

export const fetchCashCollectionOrderAPI= async(sellerDetails)=>{
  try {
    
    const {data,error}=await supabase
    .from("orders")
    .select('*')
    .eq("order_type",sellerDetails.segment)
    .eq("seller_id",sellerDetails.id)
    .eq("payment_method","cod")
     .eq("payment_status","paid")
        .eq("order_status","delivered")
        .eq("is_collected","false")
    
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

export const cashCollectionRecordsApi = async({orderId,deliveryBoyId})=>{
    try {
        const id = uuidv4();
  const {data , error }= await supabase
.from("delivery_boy_cash_collection")
.insert([
    {
        id,
      delivery_boy_id:deliveryBoyId,
      order_id:orderId,
    }
]).single();
if (error) throw error ;
return data; 
    } catch (error) {
        console.error("Error registering seller:", error);
        throw error; 
    }
};

export const updateCashCollectionOrderApi= async(orderId)=>{
    try{ 
       console.log(orderId);
      
      const {data,error}=await supabase
      .from("orders")
      
      .update({is_collected: true})
       .eq("payment_method","cod")
      .eq("id", orderId)
      .single();
      if (error) {
        console.error(" error when update", error);
      } else {
        console.log("update successful",data);
      
      }
    } catch (error) {
      console.error("Error updating assigned", error.message);
      
      throw error;
    }
  };
  