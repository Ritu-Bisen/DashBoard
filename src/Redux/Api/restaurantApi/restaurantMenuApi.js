

import supabase from "../../../SupaBaseClient";


export const fetchRestaurantMenuApi = async (page) =>{
  const limit=10;
  const offset =page * limit;
    try {
   
    const { data, error } = await supabase
      .from("restaurant_products")
      .select(`*, categories(id, name)`)
      .order("name", { ascending: true })
        .range(offset, offset + limit - 1);

    if (error) {
      console.log("Error fetching paginated data", error);
     throw result.error;
    }

    return data;
  } catch (err) {
    console.error("Error from Supabase:", err);

  }

}


export const searchProductApi = async (page,  searchQuery) => {
    const limit = 10;
  const offset = page * limit;
  try {
      const { data, error } = await supabase
         .from("restaurant_products")
      .select(`*, categories(id, name)`)
        .ilike("name", `%${searchQuery}%`)
        .range(offset, offset + limit - 1);

      if (error) {
        console.error(`Error fetching from supabase`, error);
        throw error;
      }

      return data;
    
  }catch (err) {
    console.error("Error from Supabase:", err);
    return [];
  }
};

