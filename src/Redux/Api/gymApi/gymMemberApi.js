import supabase from "../../../SupaBaseClient"

export const fetchGymMemberApi=async (sellerDetails) =>{
    try {
        const{data,error}= await supabase
        .from("gym_order_services")
        .select(`*,orders(*,users(*)),gym_services(*)`)
        .eq('orders.order_type', sellerDetails.segment)  // condition 1
     .eq('orders.seller_id',sellerDetails.id)

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
