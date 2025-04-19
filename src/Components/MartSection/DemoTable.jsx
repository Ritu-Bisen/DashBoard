



// import React, { useState } from "react";

// const DemoTable = () => {
//   const [isOn, setIsOn] = useState(false);

//   return (
//     <div
//       onClick={() => setIsOn(!isOn)}
//       className={`w-12 h-6 flex items-center rounded-full cursor-pointer px-1 transition-colors duration-300 ${
//         isOn ? "bg-green-200" : "bg-red-200"
//       }`}
//     >
//       <div
//         className={`w-4 h-4 rounded-full shadow-md transform duration-300 ${
//           isOn
//             ? "translate-x-6 bg-green-700"
//             : "translate-x-0 bg-red-600"
//         }`}
//       ></div>
//     </div>
//   );
// };

// export default DemoTable;



// import React, { useState } from 'react';

// const DemoTable = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     image: null,
//   });

//   const [imagePreview, setImagePreview] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setFormData(prev => ({
//       ...prev,
//       image: file,
//     }));

//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     } else {
//       setImagePreview(null);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     alert('Form submitted!');
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
//       <h2>User Form</h2>

//       <label>Name:</label>
//       <input
//         type="text"
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//         required
//       />

//       <br /><br />

//       <label>Email:</label>
//       <input
//         type="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         required
//       />

//       <br /><br />

//       <label>Phone:</label>
//       <input
//         type="tel"
//         name="phone"
//         value={formData.phone}
//         onChange={handleChange}
//         required
//       />

//       <br /><br />

//       <label>Upload Image:</label>
//       <div style={{
//         border: '2px dashed #ccc',
//         padding: '20px',
//         textAlign: 'center',
//         position: 'relative',
//         borderRadius: '8px'
//       }}>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleImageChange}
//           style={{ marginBottom: '10px' }}
//         />

//         {imagePreview && (
//           <img
//             src={imagePreview}
//             alt="Preview"
//             style={{ width: '100px', borderRadius: '8px', marginTop: '10px' }}
//           />
//         )}
//       </div>

//       <br />

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default DemoTable;


// import React, { useState } from "react";

// const DemoTable = () => {
//   const [mobile, setMobile] = useState("");
//   const [otp, setOtp] = useState("");
//   const [generatedOtp, setGeneratedOtp] = useState(null);
//   const [step, setStep] = useState(1); // 1 = enter mobile, 2 = enter OTP

//   const generateOTP = () => {
//     if (!mobile || mobile.length !== 10) {
//       alert("Enter a valid 10-digit mobile number");
//       return;
//     }
//     const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
//     setGeneratedOtp(otp);
//     setStep(2);
//     alert(`Your OTP is: ${otp}`); // You would replace this with an SMS sender
//   };

//   const verifyOTP = () => {
//     if (parseInt(otp) === generatedOtp) {
//       alert("OTP verified successfully!");
//       // Proceed to next step like opening the registration form
//     } else {
//       alert("Invalid OTP. Try again.");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-20 p-6 border rounded-lg shadow-lg bg-white">
//       <h2 className="text-xl font-bold mb-4 text-center">
//         {step === 1 ? "Enter Mobile Number" : "Enter OTP"}
//       </h2>

//       {step === 1 && (
//         <div className="flex flex-col gap-4">
//           <input
//             type="text"
//             placeholder="Enter mobile number"
//             className="border rounded p-2"
//             value={mobile}
//             onChange={(e) => setMobile(e.target.value)}
//             maxLength={10}
//           />
//           <button
//             className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//             onClick={generateOTP}
//           >
//             Generate OTP
//           </button>
//         </div>
//       )}

//       {step === 2 && (
//         <div className="flex flex-col gap-4">
//           <input
//             type="text"
//             placeholder="Enter OTP"
//             className="border rounded p-2"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             maxLength={6}
//           />
//           <button
//             className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
//             onClick={verifyOTP}
//           >
//             Verify OTP
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DemoTable;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sellerRegister } from "../../redux/slices/sellerSlice";
//import {
//  sellerRegisterWithOtp,
 // sellerVerifyOtp,
//} from "../../redux/slices/authSellerSlice";
import { checkExistingSeller } from "../../redux/api/sellerApi";
import { toast } from "react-toastify";

const AddSellerForm = () => {
  const dispatch = useDispatch();
  const { otpSent, otpVerified } = useSelector((state) => state.auth);

  console.log(otpSent);
  console.log(otpVerified);

  const [errors, setErrors] = useState({});
  const [phone, setPhone] = useState(""); // seller's phone
  const [otp, setOtp] = useState("");

  const handleSendOtp = async () => {
    const phone_no = phone.slice(-10)

    if (phone.length !== 10) {
      alert("Phone Number should be 10 digits")
    }
    
    const existing = await checkExistingSeller(phone_no);
    if (existing && existing.length > 0) {
      console.log("Seller already exists:", existing);
      alert("Seller Already Exist")
      toast.warn("Seller Already Exist")
    } else {
      await dispatch(sellerRegisterWithOtp(phone_no));
      console.log("New seller — continue with registration");
    }
  };

  const handleVerifyOtp = async () => {
    console.log(phone);
    
    const result = await dispatch(sellerVerifyOtp({ phoneNumber: phone, token: otp }));
    if (sellerVerifyOtp.rejected.match(result)) {
      // ❌ OTP failed (wrong or expired)
      alert(`OTP verification failed: ${result.payload}`);
    } else {
      // ✅ OTP verified successfully
      alert("OTP verified successfully!");
    }
  };

  const [sellerInfo, setSellerInfo] = useState({
    seller_name: "",
    seller_email: "",
    seller_contact: "",
    seller_address: "",
    seller_city: "",
    seller_district: "",
    seller_state: "",
    seller_postal_code: "",
    profile_pic: "",
    aadhar_urls: []
  });

  const [storeInfo, setStoreInfo] = useState({
    store_name: "",
    sagment: "",
    business_pan_number: "",
    gst_type: "",
    gst_number: "",
    address_line_1: "",
    store_landmark: "",
    store_city: "",
    store_district: "",
    store_state: "",
    store_postal_code: "",
    store_address_url: "",
    address_document: "",
  });

  const [bankInfo, setbankInfo] = useState({
    bank_name: "",
    account_number: "",
    confirm_ac_no: "",
    bank_ifsc_code: "",
    bank_account_name: "",
    bank_document: "",
  });

  const validation = () => {
    let newErrors = {};
    // ✅ correct
    if (!sellerInfo.seller_name.trim())
      newErrors.seller_name = "Name is required.";
    if (!sellerInfo.seller_email.trim())
      newErrors.seller_email = "Email is requiresss.";
    if (!sellerInfo.seller_contact.trim()) {
      newErrors.seller_contact = "Phone number is required.";
    } else if (sellerInfo.seller_contact.length !== 10) {
      newErrors.seller_contact = "Phone number should be 10 digits.";
    }
    if (!sellerInfo.seller_address.trim())
      newErrors.seller_address = "Address is required.";
    if (!sellerInfo.seller_city.trim())
      newErrors.seller_city = "City is required.";
    if (!sellerInfo.seller_state.trim())
      newErrors.seller_state = "State is required.";
    if (!sellerInfo.seller_postal_code.trim())
      newErrors.seller_postal_code = "Postal Code is required.";
    if (!sellerInfo.profile_pic)
      newErrors.profile_pic = "Profile picture is required.";

    // Confirm account numbers match
    if (bankInfo.account_number !== bankInfo.confirm_ac_no) {
      newErrors.confirm_ac_no = "Account numbers do not match.";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name in sellerInfo) {
      setSellerInfo((prev) => ({ ...prev, [name]: value }));
    } else if (name in storeInfo) {
      setStoreInfo((prev) => ({ ...prev, [name]: value }));
    } else if (name in bankInfo) {
      setbankInfo((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    if (name === "profile_pic") {
      setSellerInfo((prev) => ({
        ...prev,
        profile_pic: file,
      }));
    }

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

  const handleClearForm = () => {
    setSellerInfo({
      seller_name: "",
      seller_email: "",
      seller_contact: "",
      seller_address: "",
      seller_city: "",
      seller_district: "",
      seller_state: "",
      seller_postal_code: "",
      profile_pic: "",
      aadhar_urls: []
    });
  
    setStoreInfo({
      store_name: "",
      sagment: "",
      business_pan_number: "",
      gst_type: "",
      gst_number: "",
      address_line_1: "",
      store_landmark: "",
      store_city: "",
      store_state: "",
      store_postal_code: "",
      store_address_url: "",
      address_document: "",
    });
  
    setbankInfo({
      bank_name: "",
      account_number: "",
      confirm_ac_no: "",
      bank_ifsc_code: "",
      bank_account_name: "",
      bank_document: "",
    });
  
  
  };
  

  const handleSubmit = () => {
    if (bankInfo.account_number !== bankInfo.confirm_ac_no) {
      alert("Account Number is not same");
    }

    console.log(sellerInfo.aadhar_urls);
    

    // const errors = validation();
    // if (Object.keys(errors).length > 0) {
    //   console.log("Validation failed:", errors);
    //   setErrors(errors); // ✅ store them
    //   return;
    // }
    // setErrors({});
    dispatch(sellerRegister({ sellerInfo, storeInfo, bankInfo }));
    // console.log(sellerInfo);
    // console.log(storeInfo);
    // console.log(bankInfo);
  };
  return (
    <div className="">
      <div className=" p-5 text-4xl font-semibold bg-white sticky top-0 z-10 border-b border-gray-300  ">
        <h1>Add Seller</h1>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="flex flex-col gap-5 p-5  bg-gray-100 overflow-y-auto"
      >
        <div className="p-5 bg-white ">
          <label className="font-semibold">Phone Number (for OTP)</label>
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="rounded-full pl-3 py-2 bg-gray-200"
          />
          <button
            type="button"
            onClick={handleSendOtp}
            className="bg-blue-600 text-white px-4 py-1 rounded-full ml-2"
          >
            Send OTP
          </button>
          {
            errors.seller_contact && <p>{errors.seller_contact}</p>
          }
          {otpSent && (
            <>
              <input
                type="text"
                value={otp}
                placeholder="Enter OTP"
                onChange={(e) => setOtp(e.target.value)}
                className="rounded-full pl-3 py-2 bg-gray-200 mt-3"
              />
              <button
                type="button"
                onClick={handleVerifyOtp}
                className="bg-green-600 text-white px-4 py-1 rounded-full ml-2"
              >
                Verify OTP
              </button>
            </>
           )} 
        </div>

         {otpVerified && ( 
          <div>
            <div className="flex flex-col gap-5 p-10 rounded-lg bg-white ">
              <h3 className="text-3xl font-semibold">Seller Information</h3>
              <div className="grid grid-cols-3 px-10 gap-5">
                <div className="flex flex-col font-semibold">
                  <label htmlFor="">Seller Name*</label>
                  <input
                    type="text"
                    name="seller_name"
                    value={sellerInfo.seller_name}
                    onChange={handleChange}
                    className=" rounded-full pl-3 py-2 max-w-[20vw] bg-gray-200"
                  />
                  {errors.seller_name && (
                    <p className="text-red-500 text-sm">{errors.seller_name}</p>
                  )}
                </div>

                <div className="flex flex-col font-semibold">
                  <label htmlFor="">Email</label>
                  <input
                    name="seller_email"
                    value={sellerInfo.seller_email}
                    onChange={handleChange}
                    type="text"
                    className=" rounded-full pl-3 py-2 max-w-[20vw] bg-gray-200"
                  />
                  {errors.seller_email && (
                    <p className="text-red-500 text-sm capitalize">
                      {errors.seller_email}
                    </p>
                  )}
                </div>

                <div className="flex flex-col font-semibold">
                  <label htmlFor="">Contact </label>
                  <div className="flex items-center  max-w-[20vw] ">
                    <span className=" px-3 py-2 bg-gray-200 rounded-l-full border-r border-gray-400">
                      +91
                    </span>
                    <input
                      name="seller_contact"
                      value={sellerInfo.seller_contact}
                      onChange={handleChange}
                      type="text"
                      className=" rounded-r-full pl-3 py-2 bg-gray-200"
                    />
                  </div>
                  {errors.seller_contact && (
                    <p className="text-red-500 text-sm">
                      {errors.seller_contact}
                    </p>
                  )}
                </div>
                <div className="flex flex-col font-semibold">
                  <label htmlFor="">Address </label>
                  <input
                    name="seller_address"
                    value={sellerInfo.seller_address}
                    onChange={handleChange}
                    type="text"
                    className=" rounded-full pl-3 py-2 max-w-[20vw] bg-gray-200"
                  />
                  {errors.seller_address && (
                    <p className="text-red-500 text-sm">
                      {errors.seller_address}
                    </p>
                  )}
                </div>
                <div className="flex flex-col font-semibold">
                  <label htmlFor="">City </label>
                  <input
                    name="seller_city"
                    value={sellerInfo.seller_city}
                    onChange={handleChange}
                    type="text"
                    className=" rounded-full pl-3 py-2 max-w-[20vw] bg-gray-200"
                  />
                  {errors.seller_city && (
                    <p className="text-red-500 text-sm">{errors.seller_city}</p>
                  )}
                </div>
                <div className="flex flex-col font-semibold">
                  <label htmlFor="">District </label>
                  <input
                    name="seller_district"
                    value={sellerInfo.seller_district}
                    onChange={handleChange}
                    type="text"
                    className=" rounded-full pl-3 py-2 max-w-[20vw] bg-gray-200"
                  />
                  {errors.seller_district && (
                    <p className="text-red-500 text-sm">{errors.seller_city}</p>
                  )}
                </div>
                <div className="flex flex-col font-semibold">
                  <label htmlFor="">State </label>
                  <input
                    name="seller_state"
                    value={sellerInfo.seller_state}
                    onChange={handleChange}
                    type="text"
                    className=" rounded-full pl-3 py-2 max-w-[20vw] bg-gray-200"
                  />
                  {errors.seller_state && (
                    <p className="text-red-500 text-sm">
                      {errors.seller_state}
                    </p>
                  )}
                </div>
                <div className="flex flex-col font-semibold">
                  <label htmlFor="">Postal Code </label>
                  <input
                    name="seller_postal_code"
                    value={sellerInfo.seller_postal_code}
                    onChange={handleChange}
                    type="text"
                    className=" rounded-full pl-3 py-2 max-w-[20vw] bg-gray-200"
                  />
                  {errors.seller_postal_code && (
                    <p className="text-red-500 text-sm">
                      {errors.seller_postal_code}
                    </p>
                  )}
                </div>
                <div className="flex flex-col font-semibold">
                  <label htmlFor="">Photo</label>
                  <input
                    type="file"
                    name="profile_pic"
                    onChange={handleFileChange}
                    className="file:bg-gray-400 file:rounded file:px-1 file:cursor-pointer rounded-lg pl-3 py-2 max-w-[20vw] bg-gray-200"
                  />
                  {errors.profile_pic && (
                    <p className="text-red-500 text-sm">{errors.profile_pic}</p>
                  )}
                </div>
                <div className="flex flex-col font-semibold">
                  <label htmlFor="">Aadhar Front</label>
                  <input
                    type="file"
                    name="aadhar_urls[0]"
                    onChange={handleFileChange}
                    className="file:bg-gray-400 file:rounded file:px-1 file:cursor-pointer rounded-lg pl-3 py-2 max-w-[20vw] bg-gray-200"
                  />
                  {errors.profile_pic && (
                    <p className="text-red-500 text-sm">{errors.profile_pic}</p>
                  )}
                </div>
                <div className="flex flex-col font-semibold">
                  <label htmlFor="">Aadhar Back</label>
                  <input
                    type="file"
                    name="aadhar_urls[1]"
                    onChange={handleFileChange}
                    className="file:bg-gray-400 file:rounded file:px-1 file:cursor-pointer rounded-lg pl-3 py-2 max-w-[20vw] bg-gray-200"
                  />
                  {errors.profile_pic && (
                    <p className="text-red-500 text-sm">{errors.profile_pic}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 p-10 rounded-lg bg-white mt-5">
              <h3 className="text-3xl font-semibold">
                Seller Store Information
              </h3>
              <div className="grid grid-cols-3 px-10 gap-5">
                <div className="flex flex-col font-semibold">
                  <label htmlFor="">Store Name</label>
                  <input
                    name="store_name"
                    value={storeInfo.store_name}
                    onChange={handleChange}
                    type="text"
                    className=" rounded-full pl-3 py-2 max-w-[20vw] bg-gray-200"
                  />
                  {errors.store_name && (
                    <p className="text-red-500 text-sm capitalize ">
                      {errors.store_name}
                    </p>
                  )}
                </div>

                <div className="flex flex-col font-semibold">
                  <label htmlFor="">Sagment</label>
                  <select
                    name="sagment"
                    id=""
                    value={storeInfo.sagment}
                    onChange={handleChange}
                    className=" rounded-full pl-3 py-2 max-w-[20vw] bg-gray-200"
                  >
                    <option value="">Select</option>
                    <option value="mart">Mart</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="salon">Salon</option>
                    <option value="gym">Gym</option>
                  </select>
                  {errors.sagment && (
                    <p className="text-red-500 text-sm capitalize">
                      {errors.sagment}
                    </p>
                  )}
                </div>
                <div className="flex flex-col font-semibold">
                  <label htmlFor="">PAN number</label>
                  <input
                    name="business_pan_number"
                    value={storeInfo.business_pan_number}
                    onChange={handleChange}
                    type="text"
                    className=" rounded-full pl-3 py-2 max-w-[20vw] bg-gray-200"
                  />
                  {errors.business_pan_number && (
                    <p className="text-red-500 text-sm capitalize">
                      {errors.business_pan_number}
                    </p>
                  )}
                </div>

                <div className="flex flex-col font-semibold">
                  <label htmlFor="">GST Type</label>
                  <select
                    name="gst_type"
                    value={storeInfo.gst_type}
                    onChange={handleChange}
                    id=""
                    className=" rounded-full pl-3 py-2 max-w-[20vw] bg-gray-200"
                  >
                    <option value="">Select</option>
                    <option value="regular">Regular</option>
                    <option value="composition">Composition</option>
                  </select>
                  {errors.gst_type && (
                    <p className="text-red-500 text-sm capitalize">
                      {errors.gst_type}
                    </p>
                  )}
                </div>

                <div className="flex flex-col font-semibold">
                  <label htmlFor="">GST No</label>
                  <input
                    name="gst_number"
                    value={storeInfo.gst_number}
                    onChange={handleChange}
                    type="text"
                    className=" rounded-full pl-3 py-2 max-w-[20vw] bg-gray-200"
                  />
                  {errors.gst_number && (
                    <p className="text-red-500 text-sm capitalize">
                      {errors.gst_number}
                    </p>
                  )}
                </div>

                <div className="flex flex-col font-semibold">
                  <label htmlFor="">Store Address </label>
                  <input
                    name="address_line_1"
                    value={storeInfo.address_line_1}
                    onChange={handleChange}
                    type="text"
                    className=" rounded-full pl-3 py-2 max-w-[20vw] bg-gray-200"
                  />

                </div>

                <div className="flex flex-col font-semibold">
                  <label htmlFor="">Landmark </label>
                  <input
                    name="store_landmark"
                    value={storeInfo.store_landmark}
                    onChange={handleChange}
                    type="text"
                    className=" rounded-full pl-3 py-2 max-w-[20vw] bg-gray-200"
                  />
                  {errors.store_landmark && (
                    <p className="text-red-500 text-sm capitalize">
                      {errors.store_landmark}
                    </p>
                  )}
                </div>

                <div className="flex flex-col font-semibold">
                  <label htmlFor="">Store City </label>
                  <input
                    name="store_city"
                    value={storeInfo.store_city}
                    onChange={handleChange}
                    type="text"
                    className=" rounded-full pl-3 py-2 max-w-[20vw] bg-gray-200"
                  />
                  {errors.store_city && (
                    <p className="text-red-500 text-sm capitalize">
                      {errors.store_city}
                    </p>
                  )}
                </div>
                <div className="flex flex-col font-semibold">
                  <label htmlFor="">Store District </label>
                  <input
                    name="store_district"
                    value={storeInfo.store_district}
                    onChange={handleChange}
                    type="text"
                    className=" rounded-full pl-3 py-2 max-w-[20vw] bg-gray-200"
                  />
                  {errors.store_district && (
                    <p className="text-red-500 text-sm capitalize">
                      {errors.store_district}
                    </p>
                  )}
                </div>
                <div className="flex flex-col font-semibold">
                  <label htmlFor="">Store State </label>
                  <input
                    name="store_state"
                    value={storeInfo.store_state}
                    onChange={handleChange}
                    type="text"
                    className=" rounded-full pl-3 py-2 max-w-[20vw] bg-gray-200"
                  />
                  {errors.store_state && (
                    <p className="text-red-500 text-sm capitalize">
                      {errors.store_state}
                    </p>
                  )}
                </div>
                <div className="flex flex-col font-semibold">
                  <label htmlFor="">Store Postal Code </label>
                  <input
                    name="store_postal_code"
                    value={storeInfo.store_postal_code}
                    onChange={handleChange}
                    type="number"
                    className=" rounded-full pl-3 py-2 max-w-[20vw] bg-gray-200"
                  />
                  {errors.store_postal_code && (
                    <p className="text-red-500 text-sm capitalize">
                      {errors.store_postal_code}
                    </p>
                  )}
                </div>

                <div className="flex flex-col font-semibold">
                  <label htmlFor="">Store Address URL</label>
                  <input
                    name="store_address_url"
                    value={storeInfo.store_address_url}
                    onChange={handleChange}
                    type="text"
                    className=" rounded-full pl-3 py-2 max-w-[20vw] bg-gray-200"
                  />
                  {errors.store_address_url && (
                    <p className="text-red-500 text-sm capitalize">
                      {errors.store_address_url}
                    </p>
                  )}
                </div>

                <div className="flex flex-col font-semibold">
                  <label htmlFor="">Address Document</label>
                  <input
                    type="file"
                    name="address_document"
                    onChange={handleFileChange}
                    className="file:bg-gray-400 file:rounded file:px-1 file:cursor-pointer rounded-lg pl-3 py-2 max-w-[20vw] bg-gray-200"
                  />
                  {errors.address_document && (
                    <p className="text-red-500 text-sm capitalize">
                      {errors.address_document}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 p-10 rounded-lg bg-white mt-5">
              <h3 className="text-3xl font-semibold">Bank Information</h3>
              <div className="grid grid-cols-3 px-10 gap-5">
                <div className="flex flex-col font-semibold">
                  <label htmlFor="">Bank Name</label>
                  <input
                    name="bank_name"
                    value={bankInfo.bank_name}
                    onChange={handleChange}
                    type="text"
                    className=" rounded-full pl-3 py-2 max-w-[20vw] bg-gray-200 "
                  />
                  {errors.bank_name && (
                    <p className="text-red-500 text-sm capitalize">
                      {errors.bank_name}
                    </p>
                  )}
                </div>

                <div className="flex flex-col font-semibold">
                  <label htmlFor="">Account Number</label>
                  <input
                    name="account_number"
                    type="number"
                    onChange={handleChange}
                    value={bankInfo.account_number}
                    className=" rounded-full pl-3 py-2 max-w-[20vw] bg-gray-200"
                  />
                  {errors.account_number && (
                    <p className="text-red-500 text-sm capitalize">
                      {errors.account_number}
                    </p>
                  )}
                </div>
                <div className="flex flex-col font-semibold">
                  <label htmlFor="">Confirm Account number</label>
                  <input
                    name="confirm_ac_no"
                    value={bankInfo.confirm_ac_no}
                    onChange={handleChange}
                    type="number"
                    className=" rounded-full pl-3 py-2 max-w-[20vw] bg-gray-200"
                  />
                  {errors.confirm_ac_no && (
                    <p className="text-red-500 text-sm capitalize">
                      {errors.confirm_ac_no}
                    </p>
                  )}
                </div>

                <div className="flex flex-col font-semibold">
                  <label htmlFor="">Bank IFSC Code</label>
                  <input
                    name="bank_ifsc_code"
                    value={bankInfo.bank_ifsc_code}
                    onChange={handleChange}
                    type="text"
                    className=" rounded-full pl-3 py-2 max-w-[20vw] bg-gray-200"
                  />
                  {errors.bank_ifsc_code && (
                    <p className="text-red-500 text-sm capitalize">
                      {errors.bank_ifsc_code}
                    </p>
                  )}
                </div>

                <div className="flex flex-col font-semibold">
                  <label htmlFor="">Bank Account Name </label>
                  <input
                    name="bank_account_name"
                    value={bankInfo.bank_account_name}
                    onChange={handleChange}
                    type="text"
                    className=" rounded-full pl-3 py-2 max-w-[20vw] bg-gray-200"
                  />
                  {errors.bank_account_name && (
                    <p className="text-red-500 text-sm capitalize">
                      {errors.bank_account_name}
                    </p>
                  )}
                </div>
                <div className="flex flex-col font-semibold">
                  <label htmlFor="">Bank Document</label>
                  <input
                    type="file"
                    name="bank_document"
                    onChange={handleFileChange}
                    className="file:bg-gray-400 file:rounded file:px-1 file:cursor-pointer rounded-lg pl-3 py-2 max-w-[20vw] bg-gray-200"
                  />
                  {errors.bank_document && (
                    <p className="text-red-500 text-sm capitalize">
                      {errors.bank_document}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex w-full h-20 items-start justify-center gap-5 mt-5">
              <button
                type="submit"
                className=" rounded-full w-72 py-2  bg-green-600 font-semibold text-white cursor-pointer"
              >
                save
              </button>
              <button type="button" onClick={()=> handleClearForm()} className="rounded-full  w-72 py-2  bg-red-600 font-semibold text-white cursor-pointer">
                Clear
              </button>
            </div>
          </div>
        )} 
      </form>
    </div>
  );
};

export default AddSellerForm;