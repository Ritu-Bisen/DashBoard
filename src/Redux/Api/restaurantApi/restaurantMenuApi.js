

import supabase from "../../../SupaBaseClient";


export const fetchRestaurantMenuApi = async () =>{
    try {
        const{data,error}= await supabase
        .from("restaurant_products")
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

