import supabase from "../../../SupaBaseClient"

export const fetchGymOrdersApi=async (sellerDetails) =>{
    try {
         const { data, error } = await supabase
    .from("orders")
    .select('*,users(*)')
    .eq("order_type",sellerDetails.segment)
    .eq("seller_id",sellerDetails.id)
        if (!error) {
           console.log("fetch succefully",data)
            
        } else {
           console.log("error when fetching data",error) 
        } 
        return data;
    } catch (error) {
       console.log("error from supabase",error);
        
    }
}


export const fetchGymOrderDetailsAPI = async ({orderId,sellerDetails}) => {
  try {
    console.log(orderId);
    
    const { data, error } = await supabase
      .from("gym_order_items")
      .select(`*,orders(*,users(*)),gym_products(*)`)
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