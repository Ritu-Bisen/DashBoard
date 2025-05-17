

import supabase from "../../../SupaBaseClient";


export const fetchRestaurantMenuApi = async (page) =>{
    try {
     const pageSize=7;
         const from = page * pageSize;
    const to = from + pageSize - 1;

    const { data, error } = await supabase
      .from("restaurant_products")
      .select(`*, categories(id, name)`)
      .range(from, to);

    if (error) {
      console.log("Error fetching paginated data", error);
      return [];
    }

    return data;
  } catch (err) {
    console.error("Error from Supabase:", err);
    return [];
  }

}

