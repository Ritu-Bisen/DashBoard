import supabase from "../../SupaBaseClient"


export const fetchProductApi = async () =>{
    try {
        const{data,error}= await supabase
        .from("mart_products")
        .select(`*,categories(id,name)`)
        .order("name", {ascending:true})
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

