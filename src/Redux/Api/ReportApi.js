import supabase from "../../SupaBaseClient";


export const fetchReportApi=async(sellerDetails)=>{
    try {
        const {data,error}=await supabase
        .from("orders")
        .select('*')
        .eq("seller_id",sellerDetails.id)
        .eq("order_type",sellerDetails.segment)
        .eq("payment_status","paid")
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