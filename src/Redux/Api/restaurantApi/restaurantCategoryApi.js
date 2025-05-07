

import { useSelector } from "react-redux";
import supabase from "../../../SupaBaseClient";


export const fetchRestaurantCategoryApi = async (segment) =>{
    try {
      // const{sellerDetails}=useSelector((state)=>state.seller)
      // console.log(sellerDetails.segment);
      
        const{data,error}= await supabase
        .from("categories")
        .select(`*`)
        .eq("section",segment)
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

