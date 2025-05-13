import { toast } from "react-toastify";
//import { seller_id } from "../../Components/MartSection/StockManagementForm";
import supabase from "../../SupaBaseClient"

// const deliveryBoyApi= async (deliveryBoy_id,deliveryBoyDocumentPhoto)=>{
//     try {
        
//     } catch (error) {
        
//     }
// }

export const checkExistingDeliveryBoy = async (phone) => {
  try {
    const results = [];

    // Check in employees table
    const { data: employeeData, error: employeeError } = await supabase
      .from("employees")
      .select("phone")
      .eq("phone", phone);
    if (employeeError) throw employeeError;
    if (employeeData.length > 0) {
      results.push({ table: "employees", data: employeeData });
    }

    // Check in delivery_boys table
    const { data: deliveryData, error: deliveryError } = await supabase
      .from("delivery_boys")
      .select("phone_number")
      .eq("phone_number",phone)
    if (deliveryError) throw deliveryError;
    if (deliveryData.length > 0) {
      results.push({ table: "delivery_boys", data: deliveryData });
    }

    // Check in sellers table
    const { data: sellerData, error: sellerError } = await supabase
      .from("sellers")
      .select("seller_contact")
      .eq("seller_contact", phone);
    if (sellerError) throw sellerError;
    if (sellerData.length > 0) {
      results.push({ table: "sellers", data: sellerData });
    }

    return results; // contains matched tables and phone data
  } catch (error) {
    console.error("Error checking phone number in all tables:", error);
    return [];
  }
};

const uploadDeliveryBoyPhoto = async(id,deliveryBoyPhoto,sellerDetails)=>{
    try {
        const filepath = `${sellerDetails.segment}/${sellerDetails.id}/${id}/deliveryBoy_profile`;

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

const uploadAadhar = async(id, aadharPhoto,sellerDetails) =>{
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
          const filePath = `${sellerDetails.segment}/${sellerDetails.id}/${id}/${fileName}`
  
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

const uploadPanCardPhoto = async (id,panCardPhoto,sellerDetails)=>{
    try {
        const filePath = `${sellerDetails.segment}/${sellerDetails.id}/${id}/panCard`;

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

const uploadRcPhoto = async (id,rcPhoto,sellerDetails)=>{
    try {
        const filePath = `${sellerDetails.segment}/${sellerDetails.id}/${id}/rcPhoto`;

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

const uploadDrivingLicensePhoto = async (id,drivingLicensePhoto,sellerDetails)=>{
    try {
        const filePath = `${sellerDetails.segment}/${sellerDetails.id}/${id}/driving_License`;

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

const uploadPassBookPhoto = async (id,passBookPhoto,sellerDetails)=>{
    try {
        const filePath = `${sellerDetails.segment}/${sellerDetails.id}/${id}/passBook_image`;

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

export const deliveryBoyRegisterApi = async ({formData,sellerDetails})=>{
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
         

const ProfilePicUrl = await uploadDeliveryBoyPhoto(id,deliveryBoyPhoto,sellerDetails);
const AadharUrl = await uploadAadhar(id,aadharPhoto,sellerDetails);
const RcUrl = await uploadRcPhoto(id,rcPhoto,sellerDetails);
const panCardUrl = await uploadPanCardPhoto(id,panCardPhoto,sellerDetails);
const drivingLicenseUrl= await uploadDrivingLicensePhoto(id,drivingLicensePhoto,sellerDetails);
const passBookUrl = await uploadPassBookPhoto(id,passBookPhoto,sellerDetails);

const {data , error }= await supabase
.from("delivery_boys")
.insert([
    {
        id,
        full_name:formData.name,
        phone_number:formData.phone,
        email:formData.email,
        profile_image_url:ProfilePicUrl,
        is_active:false,
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
        section:sellerDetails.segment,
        seller_id:sellerDetails.id,
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

export const fetchDeliveryBoyData = async (sellerDetails) =>{
    try {
        const{data,error}= await supabase
        .from("delivery_boys")
        .select('*')
       .match({"seller_id":sellerDetails.id,"section":sellerDetails.segment})
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

export const fetchDeliveryBoyDataRequestApi = async (sellerDetails) =>{
  try {
      const{data,error}= await supabase
      .from("delivery_boys")
      .select('*')
      .eq("is_verified",false)
     .match({"seller_id":sellerDetails.id,"section":sellerDetails.segment})
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

export const fetchVerifiedDeliveryBoyApi = async (sellerDetails) =>{
  try {
      const{data,error}= await supabase
      .from("delivery_boys")
      .select('*')
      .eq("is_verified",true)
     .match({"seller_id":sellerDetails.id,"section":sellerDetails.segment})
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
export const fetchActiveVerifiedDeliveryBoyApi = async (sellerDetails) =>{
  try {
      const{data,error}= await supabase
      .from("delivery_boys")
      .select('*')
      .eq("is_verified",true)
      .eq("is_active",true)
     .match({"seller_id":sellerDetails.id,"section":sellerDetails.segment})
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
export const fetchInactiveVerifiedDeliveryBoyApi = async (sellerDetails) =>{
  try {
      const{data,error}= await supabase
      .from("delivery_boys")
      .select('*')
      .eq("is_verified",true)
      .eq("is_active",false)
     .match({"seller_id":sellerDetails.id,"section":sellerDetails.segment})
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

export const updateActiveDeliveryBoysAPI= async(deliveryBoyId)=>{
  try{ 
   
    
    const {data,error}=await supabase
    .from("delivery_boys")
    .update({is_active: true})
    .eq("id", deliveryBoyId)
    .single();
    if (error) {
      console.error(" error when update", error);
    } else {
      console.log("update successful",data);
    
    }
  } catch (error) {
    console.error("Error updating assigned", error.message);
    
    throw error;
  }
};


export const updateInactiveDeliveryBoysAPI= async(deliveryBoyId)=>{
  try{ 
    const {data,error}=await supabase
    .from("delivery_boys")
    .update({is_active: false})
    .eq("id", deliveryBoyId)
    .single();
    if (error) {
      console.error(" error when update", error);
    } else {
      console.log("update successful",data);
    
    }
  } catch (error) {
    console.error("Error updating assigned", error.message);
    
    throw error;
  }
};

