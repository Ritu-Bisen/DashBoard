//import supabase from "../../SupaBaseClient";

import supabase from "../../../SupaBaseClient";

export const fetchRestaurantOrderAPI = async () => {
  try {
    const { data, error } = await supabase
      .from("restaurant_order_items")
      .select(`*,orders(*,users(*)),restaurant_products(*)`)
     
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

