import supabase from "../../SupaBaseClient"

export const fetchStockApi= async () =>{
    try { 
        const {data,error} = await supabase
        .from('stock_management')
        .select(`* , mart_products(id, name, price, image_urls)`)
        .eq('seller_id',"ada0e9bb-b12d-4dc0-9de6-9b9c1576db2b")
        if (!error) {
          console.log('fetch data from supabase',data)            
        } else {
            console.log('error from fetching data',error)
        }
        return data;

    } catch (error) {
        console.log('error from supa base')
    }
}