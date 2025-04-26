import { seller_id } from "../../Components/MartSection/StockManagementForm";
import supabase from "../../SupaBaseClient";

export const fetchorderRequestAPI = async () => {
    try {
      const groupByOrderId = (items) => {
        return items.reduce((acc, item) => {
          const { order_id } = item;
          if (!acc[order_id]) {
            acc[order_id] = [];
          }
          acc[order_id].push(item);
          return acc;
        }, {});
      };
      
      const { data, error } = await supabase
        .from('mart_order_items')  // Corrected table name (no "s")
        .select('*,orders(*,users(*)),mart_products(*)')
        .eq('orders.order_type', 'mart')  // condition 1
        .eq('orders.seller_id', seller_id)
        .order('order_id', { ascending: true });
        
      
      if (error) {
        console.error("Supabase fetch error:", error);
        return null;  // Return early if fetch failed
      }
      
      if (data) {
        const groupedData = groupByOrderId(data);
        console.log(groupedData);
        return groupedData;  // Return the grouped data
      }
  
      return null;
    } catch (error) {
      console.error("Unexpected error from supabase", error);
      return null;
    }
  };
  

  

