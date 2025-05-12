import supabase from "../../../SupaBaseClient"

export const fetchGymServicesApi=async () =>{
    try {
        const{data,error}= await supabase
        .from("gym_services")
        .select(`*,categories(*)`)
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
