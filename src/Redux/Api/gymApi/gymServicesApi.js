import supabase from "../../../SupaBaseClient"

export const fetchGymServicesApi=async (page) =>{
    try {
       const pageSize=10;
         const from = page * pageSize;
    const to = from + pageSize - 1;
        const{data,error}= await supabase
        .from("gym_services")
        .select(`*,categories(id,name)`)
        .order("name", {ascending:true})
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

export const searchGymServicesApi = async ({page, searchQuery}) => {
  const limit = 10;
  const offset = page * limit;

  const { data, error } = await supabase
   .from("gym_services")
        .select(`*,categories(id,name)`)
    .ilike("name", `%${searchQuery}%`) // wildcard match
    .range(offset, offset + limit - 1);

  if (error) {
    console.error("Supabase search error:", error);
    return [];
  }

  return data;
};