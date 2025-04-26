import supabase from "../../../SupaBaseClient"

export const fetchGymOrdersApi=async () =>{
    try {
        const{data,error}= await supabase
        .from("orders")
        .select(`*,users(*),seller_id(*)`)
        .match({order_type:"gym"})
        if (!error) {
           console.log("fetch succefully",data)
            
        } else {
           console.log("error when fetching data",error) 
        } 
        return data;
    } catch (error) {
       console.log("error from supabase",error);
        
    }
}
