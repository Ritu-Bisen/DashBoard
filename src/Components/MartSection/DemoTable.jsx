



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



import React, { useState } from 'react';

const DemoTable = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      image: file,
    }));

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Form submitted!');
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>User Form</h2>

      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <br /><br />

      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <br /><br />

      <label>Phone:</label>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <br /><br />

      <label>Upload Image:</label>
      <div style={{
        border: '2px dashed #ccc',
        padding: '20px',
        textAlign: 'center',
        position: 'relative',
        borderRadius: '8px'
      }}>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ marginBottom: '10px' }}
        />

        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            style={{ width: '100px', borderRadius: '8px', marginTop: '10px' }}
          />
        )}
      </div>

      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default DemoTable;
