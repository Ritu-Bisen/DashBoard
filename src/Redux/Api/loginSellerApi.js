import supabase from "../../SupaBaseClient"

export const loginSellerApi=async(phone)=>{
  try{
    const {data,error}=await supabase
    .from("sellers")
    .select('seller_contact,segment,id')
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