import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";
import {
  deliveryBoyRegisterWithOtp,
  deliveryBoyVerifyOtp,
} from "../../Redux/Slices/salonSlicees/authDeliveryBoySlice";
import { deliveryBoyData, deliveryBoyRegister } from "../../Redux/Slices/deliveryBoyDataSlice";
import { seller_id } from "./StockManagementForm";
import { checkExistingDeliveryBoy } from "../../Redux/Api/deliveryBoyApi";

const AddDeliveryBoy = () => {
  const dispatch = useDispatch();
  const { otpSent, otpVerified } = useSelector((state) => state.auth);

  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [errors, setErrors] = useState({});

 // const {deliveryBoyData}=useSelector((state)=>state.deliveryBoyDetails)
  

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
    vehicle_type: "",
    driving_license_image: null,
    vehicle_no: "",
  });

  const [imagePreviews, setImagePreviews] = useState({
    profile_image: null,
    passbook_image: null,
    adhar_image: null,
    panCard_image: null,
    rc_image: null,
    driving_license_image: null,
  });

  const handleSendOtp = async () => {
    const phone_no = phone.slice(-10);

    if (phone.length !== 10) {
      alert("Phone Number should be 10 digits");
      return;
    }

    const existing = await checkExistingDeliveryBoy(phone_no);
    if (existing && existing.length > 0) {
      console.log('DeliveryBoy already exists:', existing);
      alert('DeliveryBoy Already Exist');
      toast.warn('DeliveryBoy Already Exist');
    }
    else {
      await dispatch(deliveryBoyRegisterWithOtp(phone_no));
      console.log("New DeliveryBoy — continue with registration");
    }
  };

  const handleVerifyOtp = async () => {
    console.log(phone);

    const result = await dispatch(
      deliveryBoyVerifyOtp({ phoneNumber: phone, token: otp })
    );
    if (deliveryBoyVerifyOtp.rejected.match(result)) {
      // ❌ OTP failed (wrong or expired)
      alert(`OTP verification failed: ${result.payload}`);
    } else {
      // ✅ OTP verified successfully
      alert("OTP verified successfully!");
    }
  };

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
      vehicle_type: "",
      driving_license_image: null,
      vehicle_no: "",
    });

    setImagePreviews({
      profile_image: null,
      passbook_image: null,
      adhar_image: null,
      panCard_image: null,
      rc_image: null,
      driving_license_image: null,
    });
  };

useEffect(()=>{
  setFormData((prev)=>({ ...prev,phone:phone}));
},[phone]);

const validation = ()=>{
  let newErrors ={};

  if(!formData.name.trim())
    newErrors.name = "Name is required.";
  if(!formData.email.trim())
    newErrors.email = "Email is required.";
  if(!formData.phone.trim()){
    newErrors.phone =" phone number is required.";
  }else if(formData.phone.length !== 10){
    newErrors.phone ="Phone number should be 10 digits.";
  }
  if(!formData.address.trim())
    newErrors.address = "Address is required.";
  if(!formData.bank_name.trim())
    newErrors.bank_name = "Bank Name is required.";
  if(!formData.bank_ifsc.trim()){
    newErrors.bank_ifsc =" Bank IFSC code  is required.";
  }else if(formData.bank_ifsc.length !== 11){
    newErrors.bank_ifsc ="Bank IFSC code should be 11 digits.";
  }
  if(!formData.bank_account_name.trim())
    newErrors.bank_account_name="Bank Account Name is required.";
if(!formData.account_no.trim())
  newErrors.account_no="Account Number is required.";
if(!formData.aadhar_no.trim())
  newErrors.aadhar_no="Aadhar number is required";
if(!formData.pan_no.trim())
  newErrors.pan_no="Pan Number is required.";
if(!formData.rc_no.trim())
  newErrors.rc_no="Rc Number is required.";
if(!formData.driving_license_no.trim())
  newErrors.driving_license_no="Driving License Number is required.";
if(!formData.vehicle_type.trim())
  newErrors.vehicle_type="Vehicle Type is required.";
if(!formData.vehicle_no.trim())
  newErrors.vehicel_no="Vehicle is required.";
if(!formData.profile_image)
  newErrors.profile_image="Profile Photo is required.";
if(!formData.adhar_image)
  newErrors.adhar_image="Aadhar Photo is required.";
if(!formData.panCard_image)
  newErrors.panCard_image="PanCard Photo is required.";
if(!formData.rc_image)
  newErrors.rc_image="Rc Photo is required.";
if(!formData.driving_license_image)
    newErrors.driving_license_image="Driving License Photo is required.";
  if(!formData.passbook_image)
      newErrors.passbook_image="Passbook Photo is required.";
return newErrors;
}


const handleSubmit = (e) => {
  e.preventDefault();
  const errors = validation();
  if(Object.keys(errors).length > 0){
    console.log("Validation Failed:",errors);
    setErrors(errors);//store them
    return
    
  }
  setErrors({});
  dispatch(deliveryBoyRegister({formData,seller_id}))
 // console.log("Form Submitted:", formData);
  handleClear();
};

  return (
    <div className="w-[calc(100%-300px)] ml-[300px] bg-gray-300  ">
      <div className="">
        <h1 className="text-3xl font-bold"> Create Delivery Boy</h1>
      </div>
      <div className="mt-5 ">
        <form >
          <div className="mt-5 bg-white m-5 rounded-4xl p-5">
            <div className="flex flex-col">
              <label className="text-lg font-semibold">
                {" "}
                Phone No.(for OTP){" "}
              </label>
              <input
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-gray-300 rounded-lg h-10 w-70 p-2"
                placeholder="Enter Phone No."
              />
            </div>
            <button
              type="button"
              onClick={handleSendOtp}
              className="bg-gray-500 h-10 w-40 rounded-full mt-5 "
            >
              Send OTP
            </button>
            {errors.phone && <p>{errors.phone}</p>}
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

          <div className="mt-5 bg-white m-5 rounded-4xl">
            {otpVerified && (
              <div className="bg-white mt-2 p-10 rounded-xl">
                <div className="flex">

                  <div className="grid-cols-2 grid gap-x-20 ml-10">
                    <div className="flex flex-col ">
                      <label className="font-semibold">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-gray-300 rounded-full h-10 w-70 p-5"
                      />
                       {errors.name && (
                    <p className="text-red-500 text-sm">
                      {errors.name}
                    </p>
                  )}
                    </div>

                    <div className="flex flex-col ">
                      <label className="font-semibold">Email Id</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gray-300 rounded-full h-10 w-70"
                      />
                       {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email}
                    </p>
                  )}
                    </div>

                    <div className="flex flex-col ">
                      <label className="font-semibold">Mobile No.</label>
                      <input
                        type="number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-gray-300 rounded-full h-10 w-70"
                      />
                       {errors.phone && (
                    <p className="text-red-500 text-sm">
                      {errors.phone}
                    </p>
                  )}
                    </div>

                    <div className="flex flex-col ">
                      <label className="font-semibold">Address</label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="h-20 w-70 rounded-xl bg-gray-300 p-5"
                      />
                     
                       {errors.address && (
                    <p className="text-red-500 text-sm">
                      {errors.address}
                    </p>
                  )}
                    </div>
                  </div>

                  <div className="flex flex-col ml-30">
                    <label className="font-semibold">
                      Upload Profile Photo
                    </label>
                    <div className="relative bg-gray-100 border-2 border-dashed border-gray-400 rounded-lg h-60 w-60 flex items-center justify-center overflow-hidden object-cover">
                      {imagePreviews.profile_image ? (
                        <img
                          src={imagePreviews.profile_image}
                          alt="Preview"
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <span className="text-gray-500">No image selected</span>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageChange(e, "profile_image")}
                        className="absolute inset-0 opacity-0 cursor-pointer p-5"
                      />
                    </div>
                    {errors.profile_image && (
                    <p className="text-red-500 text-sm">
                      {errors.profile_image}
                    </p>
                  )}
                  </div>
                </div>

                <div className="grid grid-cols-3 mt-7  ">
                  <div className="flex flex-col ">
                    <label className="font-semibold">Bank Name</label>
                    <input
                      type="text"
                      name="bank_name"
                      value={formData.bank_name}
                      onChange={handleChange}
                      className="bg-gray-300 rounded-full h-10 w-70 p-5"
                    />
                     {errors.bank_name && (
                    <p className="text-red-500 text-sm">
                      {errors.bank_name}
                    </p>
                  )}
                  </div>

                  <div className="flex flex-col ">
                    <label className="font-semibold">Bank Account Name</label>
                    <input
                      type="text"
                      name="bank_account_name"
                      value={formData.bank_account_name}
                      onChange={handleChange}
                      className="bg-gray-300 rounded-full h-10 w-70 p-5"
                    />
                     {errors.bank_account_name && (
                    <p className="text-red-500 text-sm">
                      {errors.bank_account_name}
                    </p>
                  )}
                  </div>

                  <div className="flex flex-col ">
                    <label className="font-semibold">Bank IFSC Code</label>
                    <input
                      type="text"
                      name="bank_ifsc"
                      value={formData.bank_ifsc}
                      onChange={handleChange}
                      className="bg-gray-300 rounded-full h-10 w-70 p-5"
                    />
                     {errors.bank_ifsc && (
                    <p className="text-red-500 text-sm">
                      {errors.bank_ifsc}
                    </p>
                  )}
                  </div>

                  <div className="flex flex-col ">
                    <label className="font-semibold">Account Number</label>
                    <input
                      type="text"
                      name="account_no"
                      value={formData.account_no}
                      onChange={handleChange}
                      className="bg-gray-300 rounded-full h-10 w-70 p-5"
                    />
                     {errors.account_no && (
                    <p className="text-red-500 text-sm">
                      {errors.account_no}
                    </p>
                  )}
                  </div>

                  <div className="flex flex-col ">
                    <label className="font-semibold">Aadhar Number</label>
                    <input
                      type="text"
                      name="aadhar_no"
                      value={formData.aadhar_no}
                      onChange={handleChange}
                      className="bg-gray-300 rounded-full h-10 w-70 p-5"
                    />
                     {errors.aadhar_no && (
                    <p className="text-red-500 text-sm">
                      {errors.aadhar_no}
                    </p>
                  )}
                  </div>

                  <div className="flex flex-col ">
                    <label className="font-semibold">PAN Number</label>
                    <input
                      type="text"
                      name="pan_no"
                      value={formData.pan_no}
                      onChange={handleChange}
                      className="bg-gray-300 rounded-full h-10 w-70 p-5"
                    />
                     {errors.pan_no && (
                    <p className="text-red-500 text-sm">
                      {errors.pan_no}
                    </p>
                  )}
                  </div>

                  <div className="flex flex-col ">
                    <label className="font-semibold">RC Number</label>
                    <input
                      type="text"
                      name="rc_no"
                      value={formData.rc_no}
                      onChange={handleChange}
                      className="bg-gray-300 rounded-full h-10 w-70 p-5"
                    />
                     {errors.rc_no && (
                    <p className="text-red-500 text-sm">
                      {errors.rc_no}
                    </p>
                  )}
                  </div>

                  <div className="flex flex-col ">
                    <label className="font-semibold">
                      Driving License Number
                    </label>
                    <input
                      type="text"
                      name="driving_license_no"
                      value={formData.driving_license_no}
                      onChange={handleChange}
                      className="bg-gray-300 rounded-full h-10 w-70 p-5"
                    />
                     {errors.driving_license_no && (
                    <p className="text-red-500 text-sm">
                      {errors.driving_license_no}
                    </p>
                  )}
                  </div>

                  <div className="flex flex-col">
  <label className="font-semibold">Vehicle Type</label>
  <select
    name="vehicle_type"
    value={formData.vehicle_type}
    onChange={handleChange}
    className="bg-gray-300 text-black appearance-none rounded-full h-10 w-70 px-4"
  >
    <option value="">Select</option>
    <option value="two_wheeler">two_wheeler</option>
    <option value="four_wheeler">four_wheeler</option>
  </select>
  {errors.vehicle_type && (
    <p className="text-red-500 text-sm">{errors.vehicle_type}</p>
  )}
</div>


             
                  <div className="flex flex-col ">
                    <label className="font-semibold">Vehicle Number</label>
                    <input
                      type="text"
                      name="vehicle_no"
                      value={formData.vehicle_no}
                      onChange={handleChange}
                      className="bg-gray-300 rounded-full h-10 w-70 p-5"
                    />
                     {errors.vehicle_no && (
                    <p className="text-red-500 text-sm">
                      {errors.vehicle_no}
                    </p>
                  )}
                  </div>
                </div>
                {/* Image Uploads */}

                <div className="grid grid-cols-3 mt-7 ml-10 gap-10">
                  <div>
                    <label className="font-semibold">Passbook Image</label>
                    <div className="relative bg-gray-100 border-2 border-dashed border-gray-400 rounded-lg h-60 w-60 flex items-center justify-center overflow-hidden object-cover">
                      {imagePreviews.passbook_image ? (
                        <img
                          src={imagePreviews.passbook_image}
                          alt="Preview"
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <span className="text-gray-500">No image selected</span>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageChange(e, "passbook_image")}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                    </div>
                    {errors.passbook_image && (
                    <p className="text-red-500 text-sm">
                      {errors.passbook_image}
                    </p>
                  )}
                  </div>

                  <div>
                    <label className="font-semibold">Aadhar Image</label>
                    <div className="relative bg-gray-100 border-2 border-dashed border-gray-400 rounded-lg h-60 w-60 flex items-center justify-center overflow-hidden object-cover">
                      {imagePreviews.adhar_image ? (
                        <img
                          src={imagePreviews.adhar_image}
                          alt="Preview"
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <span className="text-gray-500">No image selected</span>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageChange(e, "adhar_image")}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                    </div>
                    {errors.adhar_image && (
                    <p className="text-red-500 text-sm">
                      {errors.adhar_image}
                    </p>
                  )}
                  </div>

                  <div>
                    <label className="font-semibold">PAN Card Image</label>
                    <div className="relative bg-gray-100 border-2 border-dashed border-gray-400 rounded-lg h-60 w-60 flex items-center justify-center overflow-hidden object-cover">
                      {imagePreviews.panCard_image ? (
                        <img
                          src={imagePreviews.panCard_image}
                          alt="Preview"
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <span className="text-gray-500">No image selected</span>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageChange(e, "panCard_image")}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                    </div>
                    {errors.panCard_image&& (
                    <p className="text-red-500 text-sm">
                      {errors.panCard_image}
                    </p>
                  )}
                  </div>

                  <div>
                    <label className="font-semibold">RC Image</label>
                    <div className="relative bg-gray-100 border-2 border-dashed border-gray-400 rounded-lg h-60 w-60 flex items-center justify-center overflow-hidden object-cover">
                      {imagePreviews.rc_image ? (
                        <img
                          src={imagePreviews.rc_image}
                          alt="Preview"
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <span className="text-gray-500">No image selected</span>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageChange(e, "rc_image")}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                    </div>
                    {errors.rc_image && (
                    <p className="text-red-500 text-sm">
                      {errors.rc_image}
                    </p>
                  )}
                  </div>

                  <div>
                    <label className="font-semibold">
                      Driving License Image
                    </label>
                    <div className="relative bg-gray-100 border-2 border-dashed border-gray-400 rounded-lg h-60 w-60 flex items-center justify-center overflow-hidden object-cover">
                      {imagePreviews.driving_license_image ? (
                        <img
                          src={imagePreviews.driving_license_image}
                          alt="Preview"
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <span className="text-gray-500">No image selected</span>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          handleImageChange(e, "driving_license_image")
                        }
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                    </div>
                    {errors.driving_license_image && (
                    <p className="text-red-500 text-sm">
                      {errors.driving_license_image}
                    </p>
                  )}
                  </div>
                </div>

                <div className="flex gap-10 mt-7">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="bg-green-600 w-40 h-10 rounded-full text-white font-semibold"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={handleClear}
                    className="w-40 h-10 bg-red-500 rounded-full text-white font-semibold"
                  >
                    Clear
                  </button>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>

  
  );
};

export default AddDeliveryBoy;
