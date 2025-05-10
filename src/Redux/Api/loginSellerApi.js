import supabase from "../../SupaBaseClient"

export const loginSellerApi=async(phone)=>{
  try{
    const {data,error}=await supabase
    .from("sellers")
    .select('seller_contact,segment,id')
    .eq("is_activate",true)
    .eq("seller_contact",phone)
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

export const fetchSellerDetailsAPI=async (sellerDetails)=>{
   try {
   const {data,error}=await supabase
    .from("sellers")
    .select('*')
    .eq("is_activate",true)
    .match({"id":sellerDetails.id,"segment":sellerDetails.segment}) 
    
    if (!error) {
      console.log("fetch succefully",data)
       
   } else {
      console.log("error when fetching data",error) 
   } 
   return data;
} catch (error) {
  console.log("error from supabase",error);
   
}}
