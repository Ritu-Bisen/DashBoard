import supabase from "../../../SupaBaseClient"

export const fetchGymWorkoutAPI=async (page) =>{
    try {
        const pageSize=10;
         const from = page * pageSize;
    const to = from + pageSize - 1;
        const{data,error}= await supabase
        .from("gym_workout")
        .select(`*`)
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


export const searchGymWorkoutApi = async ({page, searchQuery}) => {
  const limit = 10;
  const offset = page * limit;

  const { data, error } = await supabase
   .from("gym_workout")
        .select(`*`)
    .ilike("name", `%${searchQuery}%`) // wildcard match
    .range(offset, offset + limit - 1);

  if (error) {
    console.error("Supabase search error:", error);
    return [];
  }

  return data;
};