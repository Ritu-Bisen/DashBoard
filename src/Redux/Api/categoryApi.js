import supabase from "../../SupaBaseClient"


export const fetchCategoryApi = async () =>{
    try {
        const{data,error}= await supabase
        .from("categories")
        .select("*")
        .eq("section","mart")
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