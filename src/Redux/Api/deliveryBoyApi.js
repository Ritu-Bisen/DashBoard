import { toast } from "react-toastify";
import { seller_id } from "../../Components/MartSection/StockManagementForm";
import supabase from "../../SupaBaseClient"

// const deliveryBoyApi= async (deliveryBoy_id,deliveryBoyDocumentPhoto)=>{
//     try {
        
//     } catch (error) {
        
//     }
// }

export const checkExistingDeliveryBoy = async(phone)=>{
    try {
        const {data,error}= await supabase
        .from("delivery_boys")
        .select("phone_number")
        .eq("phone_number",phone)

        if(error) throw error ;
        return data ;
    } catch (error) {
        console.log("Error to checking existing delivery boys",error);
        
    }
}

const uploadDeliveryBoyPhoto = async(id,deliveryBoyPhoto)=>{
    try {
        const filepath = `mart/${seller_id}/${id}/deliveryBoy_profile`;

        const {error}= await supabase.storage
        .from("delivery-boys")
        .upload(filepath,deliveryBoyPhoto,{upsert:true});

        if(error){
            console.log("Error uploading image:", error);
            return null;
            
        }

        const {data} = await supabase.storage
        .from("delivery-boys")
        .getPublicUrl(filepath);
        return data.publicUrl;

    } catch (error) {
        console.error("Unexpected error uploading image:", error);
        return null 
    }
}

const uploadAadhar = async(id, aadharPhoto) =>{
    try {
      console.log(aadharPhoto);
      
      const uploadUrls = await Promise.all(
        aadharPhoto.map(async(file, index)=> {
          if (!file || !file.name) {
            console.error("Invalid file detected:", file);
            return null;
          }
  
          let fileLabel = ""
          if (index === 0) {
            fileLabel = `AadharCardFront`
          }
           else  {
            fileLabel = `AadharCardBack`
          }
          const fileName = fileLabel
          const filePath = `mart/${seller_id}/${id}/${fileName}`
  
          const {error} = await supabase.storage
          .from("delivery-boys")
          .upload(filePath, file , { upsert: true })
  
          if (error) {
            console.error("Error uploading image", error)
            return null
          }else{
            toast.success("Addhar Uploaded Successfully")
          }
          return supabase.storage.from("delivery-boys").getPublicUrl(filePath).data.publicUrl
        })
      )
      return uploadUrls.filter((url)=> url !== null)
  
    } catch (error) {
      console.error("Unexpected error uploading Aadhar:", error);
      return null;
    }
  }

const uploadPanCardPhoto = async (id,panCardPhoto)=>{
    try {
        const filePath = `mart/${seller_id}/${id}/panCard`;

        const { error } = await supabase.storage
        .from("delivery-boys")
        .upload(filePath, panCardPhoto,  { upsert: true });
  
      if (error) {
        console.error("Error uploading panCard Documents:", error);
        return null;
      }

      const { data } = await supabase.storage
      .from("delivery-boys")
      .getPublicUrl(filePath);
    return data.publicUrl;

    } catch (error) {
        console.error("Unexpected error uploading panCard documents:", error); 
    }
}

const uploadRcPhoto = async (id,rcPhoto)=>{
    try {
        const filePath = `mart/${seller_id}/${id}/rcPhoto`;

        const { error } = await supabase.storage
        .from("delivery-boys")
        .upload(filePath, rcPhoto,  { upsert: true });
  
      if (error) {
        console.error("Error uploading Rc Documents:", error);
        return null;
      }

      const { data } = await supabase.storage
      .from("delivery-boys")
      .getPublicUrl(filePath);
    return data.publicUrl;

    } catch (error) {
        console.error("Unexpected error uploading Rc documents:", error); 
    }
}

const uploadDrivingLicensePhoto = async (id,drivingLicensePhoto)=>{
    try {
        const filePath = `mart/${seller_id}/${id}/driving_License`;

        const { error } = await supabase.storage
        .from("delivery-boys")
        .upload(filePath, drivingLicensePhoto,  { upsert: true });
  
      if (error) {
        console.error("Error uploading driving License Documents:", error);
        return null;
      }

      const { data } = await supabase.storage
      .from("delivery-boys")
      .getPublicUrl(filePath);
    return data.publicUrl;

    } catch (error) {
        console.error("Unexpected error uploading driving License documents:", error); 
    }
}

const uploadPassBookPhoto = async (id,passBookPhoto)=>{
    try {
        const filePath = `mart/${seller_id}/${id}/passBook_image`;

        const { error } = await supabase.storage
        .from("delivery-boys")
        .upload(filePath, passBookPhoto,  { upsert: true });
  
      if (error) {
        console.error("Error uploading passBook Photo Documents:", error);
        return null;
      }

      const { data } = await supabase.storage
      .from("delivery-boys")
      .getPublicUrl(filePath);
    return data.publicUrl;

    } catch (error) {
        console.error("Unexpected error uploading passBook Photo documents:", error); 
    }
}

export const deliveryBoyRegisterApi = async ({formData,seller_id})=>{
    try {
        const{data:{user},error:authError}=await supabase.auth.getUser();

        if(authError) throw authError;

        const id = user.id;
            // Optional: upload files first to Supabase Storage and get their URLs
          const aadharPhoto =formData.aadhar_image;
          const rcPhoto =formData.rc_image;
          const panCardPhoto = formData.panCard_image;
          const drivingLicensePhoto  = formData.driving_license_image;  
          const passBookPhoto = formData.passbook_image;
          const deliveryBoyPhoto = formData.profile_image;

const ProfilePicUrl = await uploadDeliveryBoyPhoto(id,deliveryBoyPhoto);
const AadharUrl = await uploadAadhar(id,aadharPhoto);
const RcUrl = await uploadRcPhoto(id,rcPhoto);
const panCardUrl = await uploadPanCardPhoto(id,panCardPhoto);
const drivingLicenseUrl= await uploadDeliveryBoyPhoto(id,drivingLicensePhoto);
const passBookUrl = await uploadPassBookPhoto(id,passBookPhoto);

const {data , error }= await supabase
.from("delivery_boys")
.insert([
    {
        id,
        full_name:formData.name,
        phone_number:formData.phone,
        email:formData.email,
        profile_image_url:ProfilePicUrl,
        is_active:true,
        is_verified:false,
        vehicle_type:formData.vehicle_type,
        vehicle_number:formData.vehicle_no,
        aadhaar_number:formData.aadhar_no,
        aadhaar_image_url:AadharUrl,
        pan_number:formData.pan_no,
        pan_image_url:RcUrl,
        rc_number:formData.rc_no,
        rc_image_url:panCardUrl,
        driving_license_number:formData.driving_license_no,
        driving_license_image_url:drivingLicenseUrl,
        bank_name:formData.bank_name,
        bank_account_name:formData.bank_account_name,
        account_number:formData.account_no,
        ifsc_code:formData.bank_ifsc,
        bank_passbook_image_url:passBookUrl,
        section:"mart",
        seller_id:"1b5e07c8-7e20-4728-ac91-a100546bc1b1",
        address:formData.address,


    }
]).single();
if (error) throw error ;
return data;


         
        
    } catch (error) {
        console.error("Error registering seller:", error);
        throw error; 
    }
};

export const fetchDeliveryBoyData = async () =>{
    try {
        const{data,error}= await supabase
        .from("delivery_boys")
        .select('*')
       .match({"seller_id":seller_id,"section":"mart"})
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

