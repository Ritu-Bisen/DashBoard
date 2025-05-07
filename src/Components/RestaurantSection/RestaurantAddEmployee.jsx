import React, { useEffect, useState } from "react";


import { useDispatch, useSelector } from "react-redux";

import {
  RegisterWithOtp,
  VerifyOtp,
} from "../../Redux/Slices/salonSlicees/authSlice";
import bank_name from "../../constant/bank_names";
import { checkExistingEmployee } from "../../Redux/Api/salonApi/salonEmployeeDetailsApi";
import { restaurant_employee_designation } from "../../constant/employee_designation";
import { restaurantEmployeeDetailsList } from "../../Redux/Slices/restaurantSlice/restaurantemployeeSlice";
import { restaurant_seller_id } from "./RestaurantAddDeliveryBoy";



const RestaurantAddEmployee = () => {
  const { otpSent, otpVerified } = useSelector((state) => state.auth);
  const [errors, setErrors] = useState({});
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  const handleVerifyOtp = async () => {
    console.log(phone);

    const result = await dispatch(
      VerifyOtp({ phoneNumber: phone, token: otp })
    );
    if (VerifyOtp.rejected.match(result)) {
      // ❌ OTP failed (wrong or expired)
      alert(`OTP verification failed: ${result.payload}`);
    } else {
      // ✅ OTP verified successfully
      alert("OTP verified successfully!");
    }
  };

  const handleSendOtp = async () => {
    const phone_no = phone.slice(-10);

    if (phone.length !== 10) {
      alert("Phone Number should be 10 digits");
      return;
    }

    const existing = await checkExistingEmployee(phone_no);
    if (existing && existing.length > 0) {
      console.log("Employee already exists:", existing);
      alert("Employee Already Exist");
      toast.warn("Employee Already Exist");
    }
    else {
      await dispatch(RegisterWithOtp(phone_no));
      console.log("New employee — continue with registration");
    }
  };

  const [formData, setFormData] = useState({
     name: "",
     email: "",
     phone: "",
     designation:"",
     address: "",
     dateOfBirth:"",
     profile_image: null,
     bank_name: "",
     bank_account_name: "",
     bank_ifsc: "",
     account_no: "",
     aadhar_no: "",
     pan_no: "",
     passbook_image: null,
     aadhar_image: [],
     panCard_image: null,
     cancel_cheque_image: null,
     bank_statement_image: null,
     
   
    
   });
 
  


  const handleImageChange =  (e) => {
    const { name, files } = e.target;
    const file = files[0];
    if (name === "profile_image") {
      setFormData((prev) => ({
        ...prev,
        profile_image: file,
      }));
    }

    // Handle aadhar_urls[0], aadhar_urls[1], etc.
    const aadharMatch = name.match(/aadhar_image\[(\d+)\]/);
    if (aadharMatch) {
      const index = parseInt(aadharMatch[1], 10);
      setFormData((prev) => {
        const newAadhar = [...prev.aadhar_image];
        newAadhar[index] = file;
        return {
          ...prev,
          aadhar_image: newAadhar,
        };
      });
    }

    if (name === "panCard_image") {
      setFormData((prev) => ({
        ...prev,
        panCard_image: file,
      }));
    }

    if (name === "passbook_image") {
      setFormData((prev) => ({
        ...prev,
        passbook_image: file,
      }));
    }

    if (name === "cancel_cheque_image") {
      setFormData((prev) => ({
        ...prev,
        cancel_cheque_image: file,
      }));
    }

    if (name === "bank_statement_image") {
      setFormData((prev) => ({
        ...prev,
        bank_statement_image: file,
      }));
    }
  };

  const onhandleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { employeeData } = useSelector((state) => state.restaurantEmployee);
  const dispatch = useDispatch();

  const onHandleSubmit = (e) => {

    e.preventDefault();
    const errors = validation();
    if (Object.keys(errors).length > 0) {
      console.log("Validation Failed:", errors);
      setErrors(errors); //store them
      return;
    }
    setErrors({});
    console.log(formData);
    dispatch(restaurantEmployeeDetailsList({ formData }));
    handleClear()
  };



  useEffect(() => {
    setFormData((prev) => ({ ...prev, phone: phone }));
  }, [phone]);

  const handleClear = () => {
    setFormData({
      name: "",
     email: "",
     phone: "",
     designation:"",
     address: "",
     dateOfBirth:"",
     profile_image: null,
     bank_name: "",
     bank_account_name: "",
     bank_ifsc: "",
     account_no: "",
     aadhar_no: "",
     pan_no: "",
     passbook_image: null,
     adhar_image: [],
     panCard_image: null,
     cancel_cheque_image: null,
     bank_statement_image: null,
    
    
    });
  };


  const validation = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.designation.trim()) newErrors.designation = "Designation is required.";
    if (!formData.dateOfBirth.trim()) newErrors.dateOfBirth = "DateOfBirth is required.";
    if (!formData.phone.trim()) {
      newErrors.phone = " phone number is required.";
    } else if (formData.phone.length !== 10) {
      newErrors.phone = "Phone number should be 10 digits.";
    }
    if (!formData.address.trim()) newErrors.address = "Address is required.";
    if (!formData.bank_name.trim())
      newErrors.bank_name = "Bank Name is required.";
    if (!formData.bank_ifsc.trim()) {
      newErrors.bank_ifsc = " Bank IFSC code  is required.";
    } else if (formData.bank_ifsc.length !== 11) {
      newErrors.bank_ifsc = "Bank IFSC code should be 11 digits.";
    }
    if (!formData.bank_account_name.trim())
      newErrors.bank_account_name = "Bank Account Holder Name is required.";
    if (!formData.account_no.trim())
      newErrors.account_no = "Account Number is required.";
    if (!formData.aadhar_no.trim())
      newErrors.aadhar_no = "Aadhar number is required";
    if (!formData.pan_no.trim()) newErrors.pan_no = "Pan Number is required.";
   
    if (!formData.profile_image)
      newErrors.profile_image = "Profile Photo is required.";
    if (!formData.aadhar_image)
      newErrors.aadhar_image = "Aadhar Photo is required.";
    if (!formData.panCard_image)
      newErrors.panCard_image = "PanCard Photo is required.";
    if (!formData.aadhar_image[0])
      newErrors.aadhar_image = {
        ...(newErrors.aadhar_image || {}),
        0: "Aadhar front is required.",
      };
    
    if (!formData.aadhar_image[1])
      newErrors.aadhar_image = {
        ...(newErrors.aadhar_image || {}),
        ...newErrors.aadhar_image,
        1: "Aadhar back is required.",
      };

    if (!formData.passbook_image)
      newErrors.passbook_image = "Passbook Photo is required.";
    return newErrors;
  };


  useEffect(() => {
    setFormData((prev) => ({ ...prev, phone: phone }));
  }, [phone]);

  return (
    <div className=" w-[calc(100%-300px)] ml-[300px] h-screen flex flex-col mt-2  ">
      <div className=" overflow-y-auto flex-1 pt-[100px] ">
      <div className="bg-gray-300 px-10 py-5  top-0  shadow-md rounded-t-4xl">
        <h1 className="text-3xl font-bold ">Add Employee </h1>
        </div>
        <div className="  px-10 py-6 bg-gray-100">
        <form className="">
         
          <div className="mt-5 bg-white p-5 rounded-4xl flex gap-8">
            <div className="flex flex-col gap-2">
              <label>Phone No. (for OTP)</label>
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
              className="bg-green-600 text-white h-10 w-40 rounded-full mt-8 active:bg-green-800"
            >
              Send OTP
            </button>
            {errors.phone && <p>{errors.phone}</p>}
            {otpSent && (
              
              <div className="mt-8 ml-7">
                <input
                  type="text"
                  value={otp}
                  placeholder="Enter OTP"
                  onChange={(e) => setOtp(e.target.value)}
                  className="rounded-full pl-3 py-2 bg-gray-200 w-60"
                />
                <button
                  type="button"
                  onClick={handleVerifyOtp}
                  className="bg-green-600 text-white px-4 py-2  rounded-full w-40 ml-2 active:bg-green-800"
                >
                  Verify OTP
                </button>
              </div>
            )}
          </div>

          
            {otpVerified && (
              <>
               <div className="mt-10 bg-white rounded-4xl">
               <div className="grid grid-cols-3 space-y-3  py-5 px-15">
                <div className="flex flex-col ">
                   <label className="font-semibold pl-3">Name</label>
                   <input
                   className="bg-gray-300 rounded-lg h-10 w-75 pl-3"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={onhandleChange}
                  />
                   {errors.name && (
                        <p className="text-red-500 text-sm">{errors.name}</p>
                      )}
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold pl-3">Email</label>
                  <input
                  className="bg-gray-300 rounded-lg h-10 w-75 pl-3"
                    type="email"
                    name="email"
                    onChange={onhandleChange}
                    value={formData.email}
                  />
                  {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email}</p>
                      )}
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold pl-3">Mobile No.</label>
                  <input
                  className="bg-gray-300 rounded-lg h-10 w-75 pl-3"
                    type="number"
                    name="phone"
                    onChange={onhandleChange}
                    value={formData.phone}
                  />
                    {errors.phone && (
                        <p className="text-red-500 text-sm">{errors.phone}</p>
                      )}
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold pl-3">Designation (Role) </label>

                  <select name="designation" id="" value={formData.designation} onChange={onhandleChange} className="bg-gray-300 rounded-lg h-10 w-75 pl-3" > 
                 <option value="">Select</option>
                    {
                      restaurant_employee_designation.map((role, index)=>(
                        <option key={index} value={role}>{role}</option>
                      ))
                    }
                </select>
                     {errors.designation && (
                        <p className="text-red-500 text-sm">{errors.designation}</p>
                      )}
                </div>

                <div className="flex flex-col">
                  <label className="font-semibold pl-3">Date Of Birth </label>
                  <input
                 className="bg-gray-300 rounded-lg h-10 w-75 pl-3"
                    type="date"
                    name="dateOfBirth"
                    onChange={onhandleChange}
                    value={formData.dateOfBirth}
                  />
                     {errors.dateOfBirth && (
                        <p className="text-red-500 text-sm">{errors.dateOfBirth}</p>
                      )}
                </div>

                <div className="flex flex-col ">
                  <label className="font-semibold pl-3">Address</label>
                  <textarea
                   className="bg-gray-300 rounded-lg h-10 w-75 pl-3"
                    type="text"
                    name="address"
                    onChange={onhandleChange}
                    value={formData.address}
                  />
                     {errors.address && (
                        <p className="text-red-500 text-sm">{errors.address}</p>
                      )}
                </div>

               

                <div className="flex flex-col font-semibold">
                  <label className="font-semibold pl-3">Photo</label>
                  <input
                    type="file"
                    name="profile_image"
                    onChange={handleImageChange}
                  //  value={formData.profile_image}
                    className="file:bg-gray-400 file:rounded file:px-1 file:cursor-pointer rounded-lg pl-3 py-2 max-w-[20vw] bg-gray-200 "
                  />
                  {errors.profile_image && (
                      <p className="text-red-500 text-sm">
                        {errors.profile_image}
                      </p>
                    )}
                </div>


              

                </div>
               </div>


              <div className="mt-10 bg-white p-10 rounded-4xl ">
                <div className="grid grid-cols-3 gap-5">
                <div className="flex flex-col ">
                  <label className="font-semibold pl-3">Aadhar No.</label>
                  <input
                    className="bg-gray-300 rounded-lg h-10 w-75 pl-3"
                    type="text"
                    name="aadhar_no"
                    onChange={onhandleChange}
                    value={formData.aadhar_no}
                  />
                {errors.aadhar_no && (
                      <p className="text-red-500 text-sm">{errors.aadhar_no}</p>
                    )}
                </div>

                <div className="flex flex-col ">
                  <label className="font-semibold pl-3">Pan No.</label>
                  <input
                   className="bg-gray-300 rounded-lg h-10 w-75 pl-3"
                    type="text"
                    name="pan_no"
                    onChange={onhandleChange}
                    value={formData.pan_no}
                  />
                 {errors.pan_no && (
                      <p className="text-red-500 text-sm">{errors.pan_no}</p>
                    )}
                </div>

                <div className="flex flex-col ">
                  <label className="font-semibold pl-3">Bank Account No.</label>
                  <input
                   className="bg-gray-300 rounded-lg h-10 w-75 pl-3"
                    type="text"
                    name="account_no"
                    onChange={onhandleChange}
                    value={formData.account_no}
                  />
                   {errors.account_no && (
                      <p className="text-red-500 text-sm">
                        {errors.account_no}
                      </p>
                    )}
                </div>

                <div className="flex flex-col ">
                  <label className="font-semibold pl-3">Bank Holder Name</label>
                  <input
                   className="bg-gray-300 rounded-lg h-10 w-75 pl-3"
                    type="text"
                    name="bank_account_name"
                    onChange={onhandleChange}
                    value={formData.bank_account_name}
                  />
                   {errors.bank_account_name && (
                      <p className="text-red-500 text-sm">
                        {errors.bank_account_name}
                      </p>
                    )}
                </div>

                <div className="flex flex-col ">
                  <label className="font-semibold pl-3">Bank IFSC Code</label>
                  <input
                    className="bg-gray-300 rounded-lg h-10 w-75 pl-3"
                    type="text"
                    name="bank_ifsc"
                    onChange={onhandleChange}
                    value={formData.bank_ifsc}
                  />
                    {errors.bank_ifsc && (
                      <p className="text-red-500 text-sm">{errors.bank_ifsc}</p>
                    )}
                </div>

                <div className="flex flex-col ">
                  <label className="font-semibold pl-3">Bank Name</label>
                 <select name="bank_name" id="" value={formData.bank_name} onChange={onhandleChange} className="bg-gray-300 rounded-lg h-10 w-75 pl-3" > <option value=" ">Select</option>
                 <option value="">Select</option>
                    {
                      bank_name.map((bank, index)=>(
                        <option key={index} value={bank}>{bank}</option>
                      ))
                    }
                </select>
                {errors.bank_name && (
                      <p className="text-red-500 text-sm">{errors.bank_name}</p>
                    )}
                </div>

                <div className="flex flex-col font-semibold">
                  <label className="font-semibold pl-3">Aadhar Image (Front)</label>
                  <input
                    type="file"
                 //   value={formData.aadhar_image[0]}
                    name="aadhar_image[0]"
                    onChange={handleImageChange}
                    className="file:bg-gray-400 file:rounded file:px-1 file:cursor-pointer rounded-lg pl-3 py-2 max-w-[20vw] bg-gray-200"
                  />
                    {errors.aadhar_image && (
                      <p className="text-red-500 text-sm">
                        {errors.aadhar_image[0]}
                      </p>
                    )}
                </div>

                <div className="flex flex-col font-semibold">
                  <label className="font-semibold pl-3">Aadhar Image(Back)</label>
                  <input
                    type="file"
                  //   value={formData.aadhar_image[1]}
                    name="aadhar_image[1]"
                   onChange={handleImageChange}
                    className="file:bg-gray-400 file:rounded file:px-1 file:cursor-pointer rounded-lg pl-3 py-2 max-w-[20vw] bg-gray-200"
                  /> 
                   {errors.aadhar_image && (
                      <p className="text-red-500 text-sm">
                        {errors.aadhar_image[1]}
                      </p>
                    )}
                </div>

                <div className="flex flex-col font-semibold">
                  <label className="font-semibold pl-3">PanCard Image </label>
                  <input
                    type="file"
                    name="panCard_image"
                //    value={formData.panCard_image}
                    onChange={handleImageChange}
                    className="file:bg-gray-400 file:rounded file:px-1 file:cursor-pointer rounded-lg pl-3 py-2 max-w-[20vw] bg-gray-200"
                  />
                    {errors.panCard_image && (
                      <p className="text-red-500 text-sm">
                        {errors.panCard_image}
                      </p>
                    )}
                </div>

                <div className="flex flex-col font-semibold">
                  <label className="font-semibold pl-3">Bank PassBook Image </label>
                  <input
                    type="file"
                    name="passbook_image"
                 //   value={imagePreviews.passbook_image}
                    onChange={handleImageChange}
                    className="file:bg-gray-400 file:rounded file:px-1 file:cursor-pointer rounded-lg pl-3 py-2 max-w-[20vw] bg-gray-200"
                  />
                   {errors.passbook_image && (
                      <p className="text-red-500 text-sm">
                        {errors.passbook_image}
                      </p>
                    )}
                </div>

                <div className="flex flex-col font-semibold">
                  <label className="font-semibold pl-3">Cancel Cheque Image </label>
                  <input
                    type="file"
                    name="cancel_cheque_image"
                 //   value={formData.cancel_cheque_image}
                    onChange={handleImageChange}
                    className="file:bg-gray-400 file:rounded file:px-1 file:cursor-pointer rounded-lg pl-3 py-2 max-w-[20vw] bg-gray-200"
                  />
                </div>

                <div className="flex flex-col font-semibold">
                  <label className="font-semibold pl-3">Bank Statement Image </label>
                  <input
                    type="file"
                    name="bank_statement_image"
                //    value={formData.bank_statement_image}
                    onChange={handleImageChange}
                    className="file:bg-gray-400 file:rounded file:px-1 file:cursor-pointer rounded-lg pl-3 py-2 max-w-[20vw] bg-gray-200"
                  />
                </div>

                </div>
              </div>


              <div className="flex  mt-10 p-10  gap-25  bg-white rounded-4xl items-center justify-center ">
                   <button
                    type="Submit"
                    onClick={onHandleSubmit}
                    className="bg-green-500  p-1 h-10 w-100 rounded-lg text-white"
                  >
                    Submit
                  </button>
                  <button
                    onClick={handleClear}
                    className=" bg-red-500 h-10 p-1 w-100 rounded-lg text-white"
                  >
                    Clear
                  </button>
                </div>
              </>
             
         
            )}
          
        </form >
       
      </div>
      </div>
    </div>
  );
};

export default RestaurantAddEmployee;
