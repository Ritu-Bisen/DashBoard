



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


import React, { useState } from "react";

const DemoTable = () => {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [step, setStep] = useState(1); // 1 = enter mobile, 2 = enter OTP

  const generateOTP = () => {
    if (!mobile || mobile.length !== 10) {
      alert("Enter a valid 10-digit mobile number");
      return;
    }
    const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
    setGeneratedOtp(otp);
    setStep(2);
    alert(`Your OTP is: ${otp}`); // You would replace this with an SMS sender
  };

  const verifyOTP = () => {
    if (parseInt(otp) === generatedOtp) {
      alert("OTP verified successfully!");
      // Proceed to next step like opening the registration form
    } else {
      alert("Invalid OTP. Try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded-lg shadow-lg bg-white">
      <h2 className="text-xl font-bold mb-4 text-center">
        {step === 1 ? "Enter Mobile Number" : "Enter OTP"}
      </h2>

      {step === 1 && (
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter mobile number"
            className="border rounded p-2"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            maxLength={10}
          />
          <button
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            onClick={generateOTP}
          >
            Generate OTP
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter OTP"
            className="border rounded p-2"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            maxLength={6}
          />
          <button
            className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
            onClick={verifyOTP}
          >
            Verify OTP
          </button>
        </div>
      )}
    </div>
  );
};

export default DemoTable;
