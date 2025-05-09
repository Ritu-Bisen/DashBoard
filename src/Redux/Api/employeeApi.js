import { toast } from "react-toastify";
//import { seller_id } from "../../../Components/MartSection/StockManagementForm";
//import supabase from "../../../SupaBaseClient";
import { v4 as uuidv4 } from 'uuid';
import { seller_id } from "../../Components/MartSection/StockManagementForm";
import supabase from "../../SupaBaseClient";

export const checkExistingEmployee = async(phone)=>{
  try {
      const {data,error}= await supabase
      .from("employees")
      .select("phone")
      .eq("phone",phone)
      if(error) throw error ;
      return data ;
  } catch (error) {
      console.log("Error to checking existing employee",error);
      
  }
}


const uploadEmployeePhoto = async (employee_id,employeePhoto,sellerDetails)=>{
    try{

        console.log(employeePhoto);
        console.log(employee_id);
        
        
        const filePath=`${sellerDetails.segment}/${sellerDetails.id}/${employee_id}/profile_pic`;

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


const uploadAadhar = async(employee_id, aadharPhoto,sellerDetails) =>{
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
        const filePath = `${sellerDetails.segment}/${sellerDetails.id}/${employee_id}/${fileName}`

        const {error} = await supabase.storage
        .from("employees")
        .upload(filePath, file , { upsert: true })

        if (error) {
          console.error("Error uploading image", error)
          return null
        }else{
          toast.success("Aadhar Uploaded Successfully")
        }
        return supabase.storage.from("employees").getPublicUrl(filePath).data.publicUrl
      })
    )
    return uploadUrls.filter((url)=> url !== null)

  } catch (error) {
    console.error("Unexpected error uploading Aadhar:", error);
    return null;
  }
}

const uploadPanCardPhoto = async (employee_id,employeePanCard,sellerDetails)=>{
  try{

      const filePath=`${sellerDetails.segment}/${sellerDetails.id}/${employee_id}/PanCard_image`;

      const {error} = await supabase.storage
      .from("employees")
     .upload(filePath,employeePanCard,{upsert:true});
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


const uploadPassbookPhoto = async (employee_id,employeePassBook,sellerDetails)=>{
  try{

      const filePath=`${sellerDetails.segment}/${sellerDetails.id}/${employee_id}/Passbook`;

      const {error} = await supabase.storage
      .from("employees")
     .upload(filePath,employeePassBook,{upsert:true});
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

// const uploadCancelChequePhoto = async (employee_id,employeeCancelCheque,sellerDetails)=>{
//   try{

//       const filePath=`${sellerDetails.segment}/${sellerDetails.id}/${employee_id}/Cancel_cheque`;

//       const {error} = await supabase.storage
//       .from("employees")
//      .upload(filePath,employeeCancelCheque,{upsert:true});
//      if (error) {
//       console.error("Error uploading image:", error);
//       return null;
//      }
//      const {data} = await supabase.storage
//      .from("employees")
//      .getPublicUrl(filePath)
//      return data.publicUrl;
//   }
//   catch(error){
//       console.error("Unexpected error uploading image:", error);
//       return null;
//   }
// };

// const uploadBankStatementPhoto = async (employee_id,employeeBankStatementImage,sellerDetails)=>{
//   try{

//       const filePath=`${sellerDetails.segment}/${sellerDetails.id}/${employee_id}/bank_Statement`;

//       const {error} = await supabase.storage
//       .from("employees")
//      .upload(filePath,employeeBankStatementImage,{upsert:true});
//      if (error) {
//       console.error("Error uploading image:", error);
//       return null;
//      }
//      const {data} = await supabase.storage
//      .from("employees")
//      .getPublicUrl(filePath)
//      return data.publicUrl;
//   }
//   catch(error){
//       console.error("Unexpected error uploading image:", error);
//       return null;
//   }
// };

export const createEmployeeApi = async (formData,sellerDetails) => {

  try {
    const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError) throw authError;

  const id = user.id;
    const employeePhoto = formData.profile_image;
    console.log(employeePhoto);
    
   const aadharPhoto = formData.aadhar_image;
   console.log(aadharPhoto)
    const employeePanCard=formData.panCard_image;
    const employeePassBook=formData.passbook_image;
    console.log(employeePassBook);
    
    const employeeBankStatementImage=formData.bank_statement_image;
    const employeeCancelCheque=formData. cancel_cheque_image;
    const employee_id = uuidv4();
    const ProfileImageUrl = await uploadEmployeePhoto(employee_id, employeePhoto,sellerDetails);
   const AadharImageUrl = await uploadAadhar(employee_id,aadharPhoto,sellerDetails)
    const PanCardUrl = await uploadPanCardPhoto(employee_id,employeePanCard,sellerDetails);
    const PassBookUrl = await uploadPassbookPhoto(employee_id,employeePassBook,sellerDetails);
    console.log(PassBookUrl);
    
    // const cancelChequeUrl = await uploadCancelChequePhoto(employee_id,employeeCancelCheque,sellerDetails);
    // const BankStatementUrl = await uploadBankStatementPhoto(employee_id,employeeBankStatementImage,sellerDetails)

    console.log("Profile Image URL:", ProfileImageUrl);
  
    
      const employee_data = {
        id,
        name: formData.name,
         seller_id: sellerDetails.id,
        phone: formData.phone,
        email: formData.email,
        section: sellerDetails.segment,
        role: formData.designation,
        aadhaar_number: formData.aadhar_no,
        pan_number: formData.pan_no,
        bank_account_number:formData.account_no,
        ifsc_code : formData.bank_ifsc,
        account_holder_name:formData.bank_account_name,
        bank_name:formData.bank_name,
        passbook_image_url:PassBookUrl,
        // cancelled_cheqce_image_url:cancelChequeUrl,
        // account_statement:BankStatementUrl,
        profile_image_url: ProfileImageUrl,
        address: formData.address,
        date_of_birth:formData.dateOfBirth,
        pan_card_image_url:PanCardUrl,
        aadhaar_image_urls:AadharImageUrl,
        active:false
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
  

  export const fetchEmployeeDetailsAPI = async (sellerDetails) => {
    try {
      const { data, error } = await supabase
      .from("employees")
      .select('*')
      .match({section:sellerDetails.segment,seller_id:sellerDetails.id})
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
  