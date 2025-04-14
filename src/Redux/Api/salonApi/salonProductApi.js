import supabase from "../../../SupaBaseClient";

export const fetchSalonProductApi = async () => {
  try {
    const { data, error } = await supabase
    .from("")
    .select('*');
    if (!error) {
      console.log("fetching data succesfully", data);
    } else {
      console.log("fetching data from supabse", error);
    }
    return data;
  } catch (error) {
    console.log("supabase error", error);
  }
};
