import supabase from "../../SupaBaseClient";

export const fetchorderAPI = async () => {
  try {
    const { data, error } = await supabase
      .from("mart_order_items")
      .select(`* ,orders(*,users(*)),mart_products(*)`)
     
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

