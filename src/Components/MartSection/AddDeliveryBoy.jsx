import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";

import {
 
  deliveryBoyRegister,
} from "../../Redux/Slices/deliveryBoyDataSlice";
import { seller_id } from "./StockManagementForm";
import { checkExistingDeliveryBoy } from "../../Redux/Api/deliveryBoyApi";
import {
  RegisterWithOtp,
  VerifyOtp,
} from "../../Redux/Slices/salonSlicees/authSlice";
import bank_name from "../../constant/bank_names";

const AddDeliveryBoy = () => {
  const dispatch = useDispatch();
  const { otpSent, otpVerified } = useSelector((state) => state.auth);
      const{sellerDetails}=useSelector((state)=>state.seller)

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
    aadhar_image: [],
    panCard_image: null,
    rc_no: "",
    rc_image: null,
    driving_license_no: "",
    vehicle_type: "",
    driving_license_image: null,
    vehicle_no: "",
    
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

    if (name === "driving_license_image") {
      setFormData((prev) => ({
        ...prev,
        driving_license_image: file,
      }));
    }

    if (name === "rc_image") {
      setFormData((prev) => ({
        ...prev,
        rc_image: file,
      }));
    }
  };

  const handleSendOtp = async () => {
    const phone_no = phone.slice(-10);

    if (phone.length !== 10) {
      alert("Phone Number should be 10 digits");
      return;
    }

    const existing = await checkExistingDeliveryBoy(phone_no);
    if (existing && existing.length > 0) {
      console.log("DeliveryBoy already exists:", existing);
      alert("DeliveryBoy Already Exist");
      toast.warn("DeliveryBoy Already Exist");
    } else {
      await dispatch(RegisterWithOtp(phone_no));
      console.log("New DeliveryBoy — continue with registration");
    }
  };

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
      aadhar_image: [],
      panCard_image: null,
      rc_no: "",
      rc_image: null,
      driving_license_no: "",
      vehicle_type: "",
      driving_license_image: null,
      vehicle_no: "",
    });

   
  };

  useEffect(() => {
    setFormData((prev) => ({ ...prev, phone: phone }));
  }, [phone]);

  const validation = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
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
    if (!formData.rc_no.trim()) newErrors.rc_no = "Rc Number is required.";
    if (!formData.driving_license_no.trim())
      newErrors.driving_license_no = "Driving License Number is required.";
    if (!formData.vehicle_type.trim())
      newErrors.vehicle_type = "Vehicle Type is required.";
    if (!formData.vehicle_no.trim())
      newErrors.vehicel_no = "Vehicle is required.";
    if (!formData.profile_image)
      newErrors.profile_image = "Profile Photo is required.";
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
    if (!formData.panCard_image)
      newErrors.panCard_image = "PanCard Photo is required.";
    if (!formData.rc_image) newErrors.rc_image = "Rc Photo is required.";
    if (!formData.driving_license_image)
      newErrors.driving_license_image = "Driving License Photo is required.";
    if (!formData.passbook_image)
      newErrors.passbook_image = "Passbook Photo is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validation();
    if (Object.keys(errors).length > 0) {
      console.log("Validation Failed:", errors);
      setErrors(errors); //store them
      return;
    }
    setErrors({});
    dispatch(deliveryBoyRegister({ formData, sellerDetails}));
    // console.log("Form Submitted:", formData);
    handleClear();
  };

  return (
    <div className="w-[calc(100%-300px)] ml-[300px]  pt-[110px]  ">
  <div className="rounded-2xl bg-gray-300"> 
     <div className="p-5">
      <h1 className="text-3xl font-bold p-5"> Create Delivery Boy</h1>
    </div>
    <div className=" p-5">
      <form >
        <div className=" bg-white  rounded-xl p-5 m-5 flex gap-10 ">
          <div className="flex flex-col">
            <label className="text-lg font-semibold">
              {" "}
              Phone No.(for OTP){" "}
            </label>
            <input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className=" no-arrows bg-gray-300 rounded-lg h-10 w-70 p-2"
              placeholder="Enter Phone No."
            />
          </div>
          <button
            type="button"
            onClick={handleSendOtp}
            className="bg-green-600 active:bg-green-800 h-10 w-40 rounded-full mt-7 "
          >
            Send OTP
          </button>
          {errors.phone && <p>{errors.phone}</p>}
          {otpSent && (
            <div className="mt-4">
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
            </div>
          )}
        </div>

        <div className="mt-5">
        {otpVerified && (
          <div className="flex flex-col w-full gap-6 justify-center px-5">
            {/* Seller Personal Informations name, email, mobile, address, aadhaar number, pan number, profile pic, aadhaar image, Pan card image */}
            <div className="p-10  bg-white rounded-lg">
              <h1 className="font-semibold text-2xl ">Personal Details</h1>
              <div className="grid grid-cols-3 mt-5 gap-5 ">
                <div className="flex flex-col ">
                  <label className="font-semibold">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gray-300 rounded-full h-10 w-70 pl-3"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>

                <div className="flex flex-col ">
                  <label className="font-semibold">Email Id</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-300 rounded-full h-10 w-70 pl-3"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>

                <div className="flex flex-col ">
                  <label className="font-semibold">Mobile No.</label>
                  <input
                    type="number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-gray-300 rounded-full h-10 w-70 pl-3"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone}</p>
                  )}
                </div>

                <div className="flex flex-col ">
                  <label className="font-semibold">Address</label>
                  <textarea
                    name="address"
                    type="text"
                    value={formData.address}
                    onChange={handleChange}
                    className="h-10 w-70 rounded-xl bg-gray-300 p-1"
                  />

                  {errors.address && (
                    <p className="text-red-500 text-sm">{errors.address}</p>
                  )}
                </div>

                <div className="flex flex-col ">
                  <label className="font-semibold">Aadhar Number</label>
                  <input
                    type="text"
                    name="aadhar_no"
                    value={formData.aadhar_no}
                    onChange={handleChange}
                    className="bg-gray-300 rounded-full h-10 w-70 pl-3"
                  />
                  {errors.aadhar_no && (
                    <p className="text-red-500 text-sm">{errors.aadhar_no}</p>
                  )}
                </div>

                <div className="flex flex-col ">
                  <label className="font-semibold">PAN Number</label>
                  <input
                    type="text"
                    name="pan_no"
                    value={formData.pan_no}
                    onChange={handleChange}
                    className="bg-gray-300 rounded-full h-10 w-70 pl-3"
                  />
                  {errors.pan_no && (
                    <p className="text-red-500 text-sm">{errors.pan_no}</p>
                  )}
                </div>

                <div className="flex flex-col font-semibold">
                  <label className="font-semibold ">Photo</label>
                  <input
                    type="file"
                    name="profile_image"
                    onChange={handleImageChange}
                    //  value={formData.profile_image}
                    className="file:bg-gray-400 file:rounded file:px-1 file:cursor-pointer rounded-lg pl-3 py-2 h-10 w-70  bg-gray-200 "
                  />
                  {errors.profile_image && (
                    <p className="text-red-500 text-sm">
                      {errors.profile_image}
                    </p>
                  )}
                </div>

                <div className="flex flex-col font-semibold">
                  <label className="font-semibold">
                    Aadhar Image (Front)
                  </label>
                  <input
                    type="file"
                    //   value={formData.aadhar_image[0]}
                    name="aadhar_image[0]"
                    onChange={handleImageChange}
                    className="file:bg-gray-400 file:rounded file:px-1 file:cursor-pointer rounded-lg pl-3 py-2 h-10 w-70  bg-gray-200"
                  />
                  {errors.aadhar_image && (
                    <p className="text-red-500 text-sm">
                      {errors.aadhar_image[0]}
                    </p>
                  )}
                </div>

                <div className="flex flex-col font-semibold">
                  <label className="font-semibold ">Aadhar Image(Back)</label>
                  <input
                    type="file"
                    //      value={formData.aadhar_image[1]}
                    name="aadhar_image[1]"
                    onChange={handleImageChange}
                    className="file:bg-gray-400 file:rounded file:px-1 file:cursor-pointer rounded-lg pl-3 py-2 h-10 w-70  bg-gray-200"
                  />
                  {errors.aadhar_image && (
                    <p className="text-red-500 text-sm">
                      {errors.aadhar_image[1]}
                    </p>
                  )}
                </div>

                <div className="flex flex-col font-semibold">
                  <label className="font-semibold">PanCard Image </label>
                  <input
                    type="file"
                    name="panCard_image"
                    //    value={formData.panCard_image}
                    onChange={handleImageChange}
                    className="file:bg-gray-400 file:rounded file:px-1 file:cursor-pointer rounded-lg pl-3 py-2 h-10 w-70  bg-gray-200"
                  />
                  {errors.panCard_image && (
                    <p className="text-red-500 text-sm">
                      {errors.panCard_image}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Seller Vehicle Informations RC number, Driving licence number, vahicle type, Vehical number, RC image, Diving license image */}
            <div className="p-10  bg-white rounded-lg">
              <h1 className="font-semibold text-2xl mt-5">Vehicle Details</h1>
              <div className=" bg-white mt-5 grid grid-cols-3 gap-5">
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
                    <p className="text-red-500 text-sm">{errors.rc_no}</p>
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
                    className="bg-gray-300 text-black rounded-lg h-10 w-70 px-4"
                  >
                    <option value="">Select</option>
                    <option value="two_wheeler">Two Wheeler</option>
                    <option value="four_wheeler">Four Wheeler</option>
                  </select>
                  {errors.vehicle_type && (
                    <p className="text-red-500 text-sm">
                      {errors.vehicle_type}
                    </p>
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

                <div className="flex flex-col font-semibold">
                  <label className="font-semibold ">RC Image </label>
                  <input
                    type="file"
                    name="rc_image"
                    //    value={formData.panCard_image}
                    onChange={handleImageChange}
                    className="file:bg-gray-400 file:rounded file:px-1 file:cursor-pointer rounded-lg pl-3 py-2 h-10 w-70  bg-gray-200"
                  />
                  {errors.rc_image && (
                    <p className="text-red-500 text-sm">{errors.rc_image}</p>
                  )}
                </div>

                <div className="flex flex-col font-semibold">
                  <label className="font-semibold ">
                    {" "}
                    Driving License Image{" "}
                  </label>
                  <input
                    type="file"
                    name="driving_license_image"
                    //    value={formData.panCard_image}
                    onChange={handleImageChange}
                    className="file:bg-gray-400 file:rounded file:px-1 file:cursor-pointer rounded-lg pl-3 py-2 h-10 w-70  bg-gray-200"
                  />
                  {errors.driving_license_image && (
                    <p className="text-red-500 text-sm">
                      {errors.driving_license_image}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Seller Bank Informations Bank name, Accound holder name, IFSC code, account number, Bank passbook image */}
            <div className="p-10  bg-white rounded-lg">
              <h1 className="font-semibold text-2xl mt-5">Bank Detail</h1>
              <div className=" bg-white mt-5 grid grid-cols-3 gap-5">
                <div className="flex flex-col ">
                  <label className="font-semibold ">Bank Name</label>
                  <select
                    name="bank_name"
                    id=""
                    value={formData.bank_name}
                    onChange={handleChange}
                    className="bg-gray-300 rounded-lg h-10 w-70 pl-3"
                  >
                    {" "}
                    <option value="">Select</option>
                    {bank_name.map((bank, index) => (
                      <option key={index} value={bank}>
                        {bank}
                      </option>
                    ))}
                  </select>
                  {errors.bank_name && (
                    <p className="text-red-500 text-sm">{errors.bank_name}</p>
                  )}
                </div>

                <div className="flex flex-col ">
                  <label className="font-semibold">
                    Bank Account Holder Name
                  </label>
                  <input
                    type="text"
                    name="bank_account_name"
                    value={formData.bank_account_name}
                    onChange={handleChange}
                    className="bg-gray-300 rounded-full h-10 w-70  pl-3"
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
                    className="bg-gray-300 rounded-full h-10 w-70 pl-3"
                  />
                  {errors.bank_ifsc && (
                    <p className="text-red-500 text-sm">{errors.bank_ifsc}</p>
                  )}
                </div>

                <div className="flex flex-col ">
                  <label className="font-semibold">Account Number</label>
                  <input
                    type="text"
                    name="account_no"
                    value={formData.account_no}
                    onChange={handleChange}
                    className="bg-gray-300 rounded-full h-10 w-70 pl-3"
                  />
                  {errors.account_no && (
                    <p className="text-red-500 text-sm">
                      {errors.account_no}
                    </p>
                  )}
                </div>

                <div className="flex flex-col font-semibold">
                  <label className="font-semibold">
                    Bank PassBook Image{" "}
                  </label>
                  <input
                    type="file"
                    name="passbook_image"
                    //   value={imagePreviews.passbook_image}
                    onChange={handleImageChange}
                    className="file:bg-gray-400 file:rounded file:px-1 file:cursor-pointer rounded-lg pl-3 py-2 h-10 w-70  bg-gray-200"
                  />
                  {errors.passbook_image && (
                    <p className="text-red-500 text-sm">
                      {errors.passbook_image}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex gap-10 pb-6 m-auto">
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-green-600 w-90 h-10 rounded-full text-white font-semibold"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleClear}
                className="w-90 h-10 bg-red-500 rounded-full text-white font-semibold"
              >
                Clear
              </button>
            </div>
          </div>
        )}
        </div>
      </form>
    </div></div>
  </div>
  );
};

export default AddDeliveryBoy;
