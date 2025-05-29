import supabase from "../../../SupaBaseClient"

export const fetchCompletedAppointmentApi = async (sellerDetails) =>{
    try {
        const {data,error}= await supabase
        .from("orders")
        .select(`*,users(*)`)
        .eq("seller_id",sellerDetails.id)
        .eq("order_type",sellerDetails.segment)
        .eq("order_status","completed")
       
        if (!error) {
            console.log("fetching data succesfully", data);
          } else {
            console.log("fetching data from supabse", error);
          }
          return data;
        } catch (error) {
          console.log("supabase error", error);
        }

}


export const fetchProcessingAppointmentApi = async (sellerDetails) =>{
    try {
        const {data,error}= await supabase
        .from("orders")
        .select(`*,users(*)`)
        .eq("seller_id",sellerDetails.id)
        .eq("order_type",sellerDetails.segment)
         .eq("order_status","processing")
       
        if (!error) {
            console.log("fetching data succesfully", data);
          } else {
            console.log("fetching data from supabse", error);
          }
          return data;
        } catch (error) {
          console.log("supabase error", error);
        }

}

export const fetchAppointmentServicesDataAPI=async({sellerDetails,orderId})=>{
 try {
  const {data,error}=await supabase
  .from("salon_order_items")
  .select(`*,orders(*,users(*)),salon_services(*)`)
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
}