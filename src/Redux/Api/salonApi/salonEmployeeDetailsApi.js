import supabase from "../../../SupaBaseClient"

export const employeeDataApi = async (fromData)=>{
    try {
        const employee_data=FormData.map((item,index)=>({
            seller_id:item.seller_id,
            name:item.name,
            phone:item.phone,
            email:item.email,
            section:item.section,
            role:item.role,
            active:item.active,
            profile_image_url:item.image,
            address:item.address
        }))
        const {data,error}=await supabase
        .from('employee')
        .insert(employee_data)
        if (!error) {
            console.log("post successfully",data)
        } else {
            console.log("error when post data ",error)
        }
        return data;
    } catch (error) {
        console.log("data is not post",error);
        
    }

}