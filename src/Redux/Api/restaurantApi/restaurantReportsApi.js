import supabase from "../../../SupaBaseClient"

export const fetchRestaurantReportApi=async()=>{
    try {
        const {data,error}=await supabase
        .from("restaurant_order_items")
        .select('*')
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