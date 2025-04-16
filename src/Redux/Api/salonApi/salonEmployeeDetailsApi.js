import { seller_id } from "../../../Components/MartSection/StockManagementForm";
import supabase from "../../../SupaBaseClient";
import { v4 as uuidv4 } from 'uuid';

const employee_id = uuidv4();
const uploadEmployeePhoto = async (employee_id,employeePhoto)=>{
    try{

        console.log(employeePhoto);
        console.log(employee_id);
        
        
        const filePath=`salon/${seller_id}/${employee_id}`;

        const {error} = await supabase.storage
        .from("employees")
       .upload(filePath,employeePhoto,{upsert:true});
       if (error) {
        console.error("Error uploading image:", error);
        return null;
       }
       const {data} = await supabase.storage
       .from("employees")
       .getPublicUrl(filePath)
       return data.publicUrl;
    }
    catch(error){
        console.error("Unexpected error uploading image:", error);
        return null;
    }
};






export const employeeDataApi = async (formData, seller_id) => {
    const employeePhoto = formData.image;
    const employee_id = uuidv4();
    const ProfileImageUrl = await uploadEmployeePhoto(employee_id, employeePhoto);
    console.log("Profile Image URL:", ProfileImageUrl);
  
    try {
      const employee_data = {
       id: employee_id,
        name: formData.name,
         seller_id: seller_id,
        phone: formData.phone,
        email: formData.email,
        section: formData.section,
        role: formData.role,
        active: formData.active,
        profile_image_url: ProfileImageUrl,
        address: formData.address,
      };
  
      const { data, error } = await supabase
        .from("employees")
        .insert([employee_data]);
     
      if (!error) {
        console.log("Post successful", data);
      } else {
        console.log("Error when posting data", error);
      }
  
      return data;
    } catch (error) {
      console.log("Data not posted", error);
    }
  };
  

  export const fetchEployeeData = async () => {
    try {
      const { data, error } = await supabase
      .from("employees")
      .select('*');
      if (!error) {
        console.log("fetching data succesfully", data);
      } else {
        console.log("fetching data from supabse", error);
      }
      return data;
    } catch (error) {
      console.log("supabase error", error);
    }
  };
  