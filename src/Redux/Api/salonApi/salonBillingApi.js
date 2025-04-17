import supabase from "../../../SupaBaseClient"

export const fetchBillingApi = async () =>{
    try {
        const {data,error}= await supabase
        .from("salon_order_items")
        .select(`*,orders(*,users(*)),salon_services(*)`)
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