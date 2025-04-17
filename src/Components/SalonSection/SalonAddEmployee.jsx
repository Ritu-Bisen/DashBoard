import React, { useState } from "react";

import { employeeDetailsList } from "../../Redux/Slices/salonSlicees/salonEmployeeDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { seller_id } from "../MartSection/StockManagementForm";



const SalonAddEmployee = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    phone: "",
    address:"",
    image: null,
  });
  
  const [imagePreview, setImagePreview] = useState(null);

 const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      image: file,
    }));  

  // Show image preview
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  } else {
    setImagePreview(null);
  }
};

  const onhandleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { employeeData } = useSelector((state) => state.employeeDetail);
  const dispatch =useDispatch();

  

  const onHandleSubmit =(e)=>{
    e.preventDefault();
    
    console.log(formData);
    dispatch(employeeDetailsList({formData,seller_id}))
 
  }

   

  const handleClear = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      role: '',
      address: '',
      image: null,
    });
  };

  return (
    <div className="fixed w-[calc(100%-300px)] ml-[300px] h-screen pt-35  ">
      <div className=" px-35">
        <h1 className="text-3xl font-bold">Add Employee </h1>
       <form onSubmit={onHandleSubmit} className="grid grid-cols-2 space-y-3 mt-5">
    
          <div className="flex flex-col">
            <label className="font-semibold">Name</label>
            <input
              className="bg-gray-300 rounded-full h-10 w-90 p-2"
              type="text"
              name="name"
              value={formData.name}
              onChange={onhandleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold">Email</label>
            <input
              className="bg-gray-300 rounded-full h-10 w-90 p-2"
              type="email"
              name="email"
              onChange={onhandleChange}
              value={formData.email}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold">Mobile No.</label>
            <input
              className="bg-gray-300 rounded-full h-10 w-90 p-2"
              type="number"
              name="phone"
              onChange={onhandleChange}
              value={formData.phone}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold">Role</label>
            <input
              className="bg-gray-300 rounded-full h-10 w-90 p-2"
              type="text"
              name="role"
              onChange={onhandleChange}
              value={formData.role}
            />
          </div>
         
         

          
          <div className="flex flex-col ">
            <label className="font-semibold">Address</label>
            <textarea
              className="bg-gray-300 rounded-lg h-40 w-90 p-2"
              type="text"
              name="address"
              onChange={onhandleChange}
              value={formData.address}
            />
          </div>

          {/* image upload */}
          <div className="flex flex-col">
  <label className="font-semibold">Upload Image</label>
  <div className="relative bg-gray-100 border-2 border-dashed border-gray-400 rounded-lg h-60 w-60 flex items-center justify-center overflow-hidden object-cover">
    {imagePreview ? (
      <img
        src={imagePreview}
        alt="Preview"
        className="h-full w-full object-cover"
      />
    ) : (
      <span className="text-gray-500">No image selected</span>
    )}
    <input
      type="file"
      accept="image/*"
      onChange={handleImageChange}
      className="absolute inset-0 opacity-0 cursor-pointer"
    />
  </div>
</div>


         
      <div className="flex mt-40 gap-10 fixed bottom-20 right-70">
      <button type="Submit"  className="bg-green-500 h-10 w-90 p-1 rounded-full text-white">Submit</button>
      <button onClick={handleClear}  className=" bg-red-500 h-10 w-90 p-1 rounded-full text-white">Clear</button>
      </div>  
       </form>
      </div>
    </div>
  );
};

export default SalonAddEmployee;
