import supabase from "../../../SupaBaseClient"

export const fetchGymBannerApi=async () =>{
    try {
        const{data,error}= await supabase
        .from("gym_banner")
        .select(`*`)
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
