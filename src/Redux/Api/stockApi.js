
import supabase from "../../SupaBaseClient";


export const stockApi = async (order,seller_id)=>{
   try {
    console.log(order, seller_id);

   
    

    const stock_data =order.map((item,index)=>( {
        product_id: item.id,
        request_stock: item.quantity,
        seller_id: seller_id,
    }))
    const {data,error} =await supabase
    .from('stock_management')
    .insert(stock_data)
    if(!error){
        console.log("post successfully",data)
    }
    else{
        console.log("error when post data",error)
    } 
    return data;
   } catch (error) {
    console.log("data is not post",error)
   }
    


}