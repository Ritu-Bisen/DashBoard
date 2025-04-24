import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { deliveryBoyRegisterWithOtp, deliveryBoyVerifyOtp } from "../../Redux/Slices/salonSlicees/authDeliveryBoySlice";
import { deliveryBoyData } from "../../Redux/Slices/deliveryBoyDataSlice";

const DeliveryBoy = () => {

const dispatch = useDispatch();
const {otpSent, otpVerified}= useSelector((state)=>state.auth);

const [phone,setPhone] = useState("");
const [otp, setOtp] = useState("");
const [errors, setErrors] = useState("");

const handleSendOtp = async () => {
  const phone_no = phone.slice(-10)

  if (phone.length !== 10) {
    alert("Phone Number should be 10 digits")
  }
  
  const existing = await checkExistingDeliveryBoy(phone_no);
  if (existing && existing.length > 0) {
    console.log("DeliveryBoy already exists:", existing);
    alert("DeliveryBoy Already Exist")
    toast.warn("DeliveryBoy Already Exist")
  } else {
    await dispatch(deliveryBoyRegisterWithOtp(phone_no));
    console.log("New DeliveryBoy — continue with registration");
  }
};

const handleVerifyOtp = async () => {
  console.log(phone);
  
  const result = await dispatch(deliveryBoyVerifyOtp({ phoneNumber: phone, token: otp }));
  if (deliveryBoyVerifyOtp.rejected.match(result)) {
    // ❌ OTP failed (wrong or expired)
    alert(`OTP verification failed: ${result.payload}`);
  } else {
    // ✅ OTP verified successfully
    alert("OTP verified successfully!");
  }
};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    profile_image: null,
    bank_name: "",
    bank_account_name: "",
    bank_ifsc: "",
    account_no: "",
    aadhar_no: "",
    pan_no: "",
    passbook_image: null,
    adhar_image: null,
    panCard_image: null,
    rc_no: "",
    rc_image: null,
    driving_license_no: "",
    vehicel_type: "",
    driving_license_image: null,
    vehicel_no: "",
  });

  const [imagePreviews, setImagePreviews] = useState({
    profile_image: null,
    passbook_image: null,
    adhar_image: null,
    panCard_image: null,
    rc_image: null,
    driving_license_image: null,
  });

  const handleImageChange = (e, fieldName) => {
    const file = e.target.files[0];

    setFormData((prev) => ({
      ...prev,
      [fieldName]: file,
    }));

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviews((prev) => ({
          ...prev,
          [fieldName]: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreviews((prev) => ({
        ...prev,
        [fieldName]: null,
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(deliveryBoyData(formData))
  //  console.log("Form Submitted:", formData);
    handleClear();
  };

    // Handle aadhar_urls[0], aadhar_urls[1], etc.
    const aadharMatch = name.match(/aadhar_urls\[(\d+)\]/);
    if (aadharMatch) {
      const index = parseInt(aadharMatch[1], 10);
      setSellerInfo((prev) => {
        const newAadhar = [...prev.aadhar_urls];
        newAadhar[index] = file;
        return {
          ...prev,
          aadhar_urls: newAadhar,
        };
      });
    }
  
      if (name === "address_document") {
        setStoreInfo((prev) => ({
          ...prev,
          address_document: file,
        }));
      }
  
      if (name === "bank_document") {
        setbankInfo((prev) => ({
          ...prev,
          bank_document: file,
        }));
      }
    };

  const handleClear = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      profile_image: null,
      bank_name: "",
      bank_account_name: "",
      bank_ifsc: "",
      account_no: "",
      aadhar_no: "",
      pan_no: "",
      passbook_image: null,
      adhar_image: null,
      panCard_image: null,
      rc_no: "",
      rc_image: null,
      driving_license_no: "",
      vehicel_type: "",
      driving_license_image: null,
      vehicel_no: "",
    });

    setImagePreviews({
      profile_image: null,
      passbook_image: null,
      adhar_image: null,
      panCard_image: null,
      rc_image: null,
      driving_license_image: null,
    });
  


  return (
    <div className="w-[calc(100%-300px)] ml-[300px] bg-gray-300 h-screen">
      <div></div>
      <div></div>
      <div></div>
    </div>
//     <div className="w-[calc(100%-300px)] ml-[300px] bg-gray-300 h-screen ">
//       <div className=" flex justify-between border-b border-gray-500 py-5">
//         <h1 className="text-3xl font-bold ml-3">Create Delivery Boy</h1>
//       </div>
//       <div className="fixed top-50 left-180 mt-5  bg-white h-90 w-90 rounded-4xl shadow-lg shadow-gray-400 p-5">
//         <h1 className="text-2xl font-bold ml-15">Add Delivery Boy</h1>
        
//        <form onSubmit={(e)=>{handleSubmit}} className="flex flex-col mt-10 items-center justify-center space-y-5">
//         <div>
// <label className="text-lg font-semibold"> Phone No.(for OTP) </label>
// <input type="number" value={phone} onChange={(e)=>setPhone(e.target.value)} className="bg-gray-300 rounded-lg h-10 w-70 p-2" placeholder="Enter Phone No."/>
// <button type="button" onClick={handleSendOtp} className="bg-gray-500 h-10 w-40 rounded-full mt-5 ">Send OTP</button>
// {errors.phone && <p>{errors.phone}</p>}
// {
//   otpSent && (
//     <>
//                   <input
//                 type="text"
//                 value={otp}
//                 placeholder="Enter OTP"
//                 onChange={(e) => setOtp(e.target.value)}
//                 className="rounded-full pl-3 py-2 bg-gray-200 mt-3"
//               />
//               <button
//                 type="button"
//                 onClick={handleVerifyOtp}
//                 className="bg-green-600 text-white px-4 py-1 rounded-full ml-2"
//               >
//                 Verify OTP
//               </button>

//     </>
//   )
// }  </div>
// {
//   otpVerified && (
//     <div  className="bg-white m-auto mt-4 p-10 rounded-xl">
//        <div className="flex">
//           <div className="grid-cols-2 grid gap-x-20 ml-10">
//             <div>
//               <label className="font-semibold">Full Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="bg-gray-300 rounded-full h-10 w-70"
//               />
//             </div>

//             <div>
//               <label className="font-semibold">Email Id</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="bg-gray-300 rounded-full h-10 w-70"
//               />
//             </div>

//             <div>
//               <label className="font-semibold">Mobile No.</label>
//               <input
//                 type="number"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="bg-gray-300 rounded-full h-10 w-70"
//               />
//             </div>

//             <div>
//               <label className="font-semibold">Address</label>
//               <textarea
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 className="h-20 w-70 rounded-xl bg-gray-300"
//               />
//             </div>
//           </div>

//           <div className="flex flex-col ml-30">
//             <label className="font-semibold">Upload Profile Photo</label>
//             <div className="relative bg-gray-100 border-2 border-dashed border-gray-400 rounded-lg h-60 w-60 flex items-center justify-center overflow-hidden object-cover">
//               {imagePreviews.profile_image ? (
//                 <img
//                   src={imagePreviews.profile_image}
//                   alt="Preview"
//                   className="h-full w-full object-cover"
//                 />
//               ) : (
//                 <span className="text-gray-500">No image selected</span>
//               )}
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) => handleImageChange(e, "profile_image")}
//                 className="absolute inset-0 opacity-0 cursor-pointer"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-3 mt-7 ml-10 gap-5">
//           <div>
//             <label className="font-semibold">Bank Name</label>
//             <input
//               type="text"
//               name="bank_name"
//               value={formData.bank_name}
//               onChange={handleChange}
//               className="bg-gray-300 rounded-full h-10 w-70"
//             />
//           </div>

//           <div>
//             <label className="font-semibold">Bank Account Name</label>
//             <input
//               type="text"
//               name="bank_account_name"
//               value={formData.bank_account_name}
//               onChange={handleChange}
//               className="bg-gray-300 rounded-full h-10 w-70"
//             />
//           </div>

//           <div>
//             <label className="font-semibold">Bank IFSC Code</label>
//             <input
//               type="text"
//               name="bank_ifsc"
//               value={formData.bank_ifsc}
//               onChange={handleChange}
//               className="bg-gray-300 rounded-full h-10 w-70"
//             />
//           </div>

//           <div>
//             <label className="font-semibold">Account Number</label>
//             <input
//               type="text"
//               name="account_no"
//               value={formData.account_no}
//               onChange={handleChange}
//               className="bg-gray-300 rounded-full h-10 w-70"
//             />
//           </div>

//           <div>
//             <label className="font-semibold">Aadhar Number</label>
//             <input
//               type="text"
//               name="aadhar_no"
//               value={formData.aadhar_no}
//               onChange={handleChange}
//               className="bg-gray-300 rounded-full h-10 w-70"
//             />
//           </div>

//           <div>
//             <label className="font-semibold">PAN Number</label>
//             <input
//               type="text"
//               name="pan_no"
//               value={formData.pan_no}
//               onChange={handleChange}
//               className="bg-gray-300 rounded-full h-10 w-70"
//             />
//           </div>

//           <div>
//             <label className="font-semibold">RC Number</label>
//             <input
//               type="text"
//               name="rc_no"
//               value={formData.rc_no}
//               onChange={handleChange}
//               className="bg-gray-300 rounded-full h-10 w-70"
//             />
//           </div>

//           <div>
//             <label className="font-semibold">Driving License Number</label>
//             <input
//               type="text"
//               name="driving_license_no"
//               value={formData.driving_license_no}
//               onChange={handleChange}
//               className="bg-gray-300 rounded-full h-10 w-70"
//             />
//           </div>

//           <div>
//             <label className="font-semibold">Vehicle Type</label>
//             <input
//               type="text"
//               name="vehicel_type"
//               value={formData.vehicel_type}
//               onChange={handleChange}
//               className="bg-gray-300 rounded-full h-10 w-70"
//             />
//           </div>

//           <div>
//             <label className="font-semibold">Vehicle Number</label>
//             <input
//               type="text"
//               name="vehicel_no"
//               value={formData.vehicel_no}
//               onChange={handleChange}
//               className="bg-gray-300 rounded-full h-10 w-70"
//             />
//           </div>
// </div>
//           {/* Image Uploads */}

//          <div className="grid grid-cols-3 mt-7 ml-10 gap-10">
 
//   <div>
//     <label className="font-semibold">Passbook Image</label>
//     <div className="relative bg-gray-100 border-2 border-dashed border-gray-400 rounded-lg h-60 w-60 flex items-center justify-center overflow-hidden object-cover">
//       {imagePreviews.passbook_image ? (
//         <img
//           src={imagePreviews.passbook_image}
//           alt="Preview"
//           className="h-full w-full object-cover"
//         />
//       ) : (
//         <span className="text-gray-500">No image selected</span>
//       )}
//       <input
//         type="file"
//         accept="image/*"
//         onChange={(e) => handleImageChange(e, "passbook_image")}
//         className="absolute inset-0 opacity-0 cursor-pointer"
//       />
//     </div>
//   </div>


//   <div>
//     <label className="font-semibold">Aadhar Image</label>
//     <div className="relative bg-gray-100 border-2 border-dashed border-gray-400 rounded-lg h-60 w-60 flex items-center justify-center overflow-hidden object-cover">
//       {imagePreviews.adhar_image ? (
//         <img
//           src={imagePreviews.adhar_image}
//           alt="Preview"
//           className="h-full w-full object-cover"
//         />
//       ) : (
//         <span className="text-gray-500">No image selected</span>
//       )}
//       <input
//         type="file"
//         accept="image/*"
//         onChange={(e) => handleImageChange(e, "adhar_image")}
//         className="absolute inset-0 opacity-0 cursor-pointer"
//       />
//     </div>
//   </div>


//   <div>
//     <label className="font-semibold">PAN Card Image</label>
//     <div className="relative bg-gray-100 border-2 border-dashed border-gray-400 rounded-lg h-60 w-60 flex items-center justify-center overflow-hidden object-cover">
//       {imagePreviews.panCard_image ? (
//         <img
//           src={imagePreviews.panCard_image}
//           alt="Preview"
//           className="h-full w-full object-cover"
//         />
//       ) : (
//         <span className="text-gray-500">No image selected</span>
//       )}
//       <input
//         type="file"
//         accept="image/*"
//         onChange={(e) => handleImageChange(e, "panCard_image")}
//         className="absolute inset-0 opacity-0 cursor-pointer"
//       />
//     </div>
//   </div>

//   <div>
//     <label className="font-semibold">RC Image</label>
//     <div className="relative bg-gray-100 border-2 border-dashed border-gray-400 rounded-lg h-60 w-60 flex items-center justify-center overflow-hidden object-cover">
//       {imagePreviews.rc_image ? (
//         <img
//           src={imagePreviews.rc_image}
//           alt="Preview"
//           className="h-full w-full object-cover"
//         />
//       ) : (
//         <span className="text-gray-500">No image selected</span>
//       )}
//       <input
//         type="file"
//         accept="image/*"
//         onChange={(e) => handleImageChange(e, "rc_image")}
//         className="absolute inset-0 opacity-0 cursor-pointer"
//       />
//     </div>
//   </div>

//   <div>
//     <label className="font-semibold">Driving License Image</label>
//     <div className="relative bg-gray-100 border-2 border-dashed border-gray-400 rounded-lg h-60 w-60 flex items-center justify-center overflow-hidden object-cover">
//       {imagePreviews.driving_license_image ? (
//         <img
//           src={imagePreviews.driving_license_image}
//           alt="Preview"
//           className="h-full w-full object-cover"
//         />
//       ) : (
//         <span className="text-gray-500">No image selected</span>
//       )}
//       <input
//         type="file"
//         accept="image/*"
//         onChange={(e) => handleImageChange(e, "driving_license_image")}
//         className="absolute inset-0 opacity-0 cursor-pointer"
//       />
//     </div>
//   </div>
// </div>


       
//         <div className="flex gap-10 mt-7">
//           <button
//             type="submit"
//             onClick={handleSubmit}
//             className="bg-green-600 w-40 h-10 rounded-full text-white font-semibold"
//           >
//             Save
//           </button>
//           <button
//             type="button"
//             onClick={handleClear}
//             className="w-40 h-10 bg-red-500 rounded-full text-white font-semibold"
//           >
//             Clear
//           </button>
//         </div>
//     </div>
//   )}

//        </form>
//       </div>

    
//     </div>
  
  );
}

export default DeliveryBoy;
