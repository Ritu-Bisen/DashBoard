// import React from "react";
// import DataTable from "react-data-table-component";

// // Sample data with many columns
// const columns = Array.from({ length: 10 }, (_, i) => ({
//   name: `Column ${i + 1}`,
//   selector: (row) => row[`col${i + 1}`],
//   width: "200px", // Ensures horizontal scrolling
// }));

// // Sample data with large number of rows
// const data = Array.from({ length: 50 }, (_, i) => {
//   let row = { id: i + 1 };
//   for (let j = 1; j <= 10; j++) {
//     row[`col${j}`] = `Data ${i + 1}-${j}`;
//   }
//   return row;
// });

// const  DemoTable = () => {
//   return (
//     <div style={{ width: "90%", margin: "auto", overflowX: "auto" }}>
//       <DataTable
//         title="Large Table"
//         columns={columns}
//         data={data}
//         fixedHeader
//         fixedHeaderScrollHeight="400px" // Vertical scrolling for many rows
//       />
//     </div>
//   );
// };

// export default DemoTable ;

// import React, { useState } from "react";
// import { MdDashboard, MdBorderColor } from "react-icons/md";
// import { SiShutterstock } from "react-icons/si";
// import { TbCategoryFilled } from "react-icons/tb";

// const DemoTable = () => {
//   const [activeMenu, setActiveMenu] = useState(null); // Track active menu item

//   const listItems = [
//     { id: 1, title: "Dashboard", icon: <MdDashboard size={25} />, path: "/" },
//     { id: 2, title: "Order", icon: <MdBorderColor size={25} />, path: "/order" },
//     { id: 3, title: "Stock", icon: <SiShutterstock size={25} />, path: "/stock" },
//     { id: 4, title: "Category", icon: <TbCategoryFilled size={25} />, path: "/category" },
//   ];

//   return (
//     <div className="w-[250px] h-screen bg-gray-900 text-white p-4">
//       <h2 className="text-lg font-bold text-center">My Sidebar</h2>
//       <div className="mt-5">
//         {listItems.map(({ id, icon, title }) => (
//           <button
//             key={id}
//             className={`flex items-center gap-3 px-4 py-2 w-full text-left rounded-md ${
//               activeMenu === id ? "bg-red-500" : "bg-gray-800"
//             } hover:bg-red-400 transition`}
//             onClick={() => setActiveMenu(id)} // Set active menu on click
//           >
//             {icon}
//             <span>{title}</span>
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DemoTable;




// import React from "react";
// import DataTable from "react-data-table-component";

// // Sample columns with long data
// const columns = [
//   {
//     name: "ID",
//     selector: (row) => row.id,
//     width: "80px", // Fixed small width for IDs
//   },
//   {
//     name: "Name",
//     selector: (row) => row.name,
//     minWidth: "150px", // Prevents excessive shrinking
//   },
//   {
//     name: "Description",
//     selector: (row) => row.description,
//     minWidth: "250px", // Prevents cutting long text
//   },
// ];

// // Sample data with large text
// const data = Array.from({ length: 50 }, (_, i) => ({
//   id: i + 1,
//   name: `User ${i + 1}`,
//   description: `This is a very long description for user ${i + 1}. It contains detailed information that might not fit in a small column.`,
// }));

// const DemoTable = () => {
//   return (
//     <div style={{ width: "90%", margin: "auto", overflowX: "auto" }}>
//       <DataTable
//         title="Responsive Table"
//         columns={columns}
//         data={data}
//         fixedHeader
//         fixedHeaderScrollHeight="400px" // Enables vertical scrolling
//       />
//     </div>
//   );
// };

// export default DemoTable;



// const columns =[ 
//   {
//   name: 'id',
//   selector: row => row.category_id,
//   width:'300px',
 
  
// },
// {
//   name: 'Name',
//   selector: row => row.name,
//   sortable: true,
 
// },
// {
//   name: 'Icon',
//   selector: row => row.icon,
 
// },
// {
//   name: 'Section',
//   selector: row => row.section,
  
// },
// {
//   name: 'Banner',
//   selector: row => row.banner_yrls,
  
// },
// {
//   name: 'Description',
//   selector: row => row.descriptions,
  
// },

// {
//   name: 'Status',
//   selector: row => row.status,
//   center:'true'
 
// },
// ]


// const data = Array(25).fill(
//   {
//     category_id: '02fc7211-9f9a-4c0c-ac18-9e0f18ab288e',
//     name:'Men',
//     icon:<img src='https://iltrrlubnqpzllzbogen.supabase.co/storage/v1/object/public/sections/salon/category_icons/02fc7211-9f9a-4c0c-ac18-9e0f18ab288e/electric-razor%20black.png'/>,
//     section:'salon',
//     banner_urls:<img src='["https://iltrrlubnqpzllzbogen.supabase.co/storage/v1/object/public/sections/mart/banners/120299e9-a35a-40bf-ba5a-3d5d38b8db85/mart%203.jpg"]'/>,
//     descriptions:'NULL',
//     status: <div className='m-auto'>{ productQuantity > 0 ? (<p className='bg-green-600 rounded-lg p-2'> Available </p>) : (<p className='bg-red-600 rounded-lg p-2'>Not Available</p>)} </div>
// },
// )


import { useState, useEffect } from "react";

const DemoTable = () => {
  const menuItems = ["Home", "About", "Services", "Contact"];

  // Get the stored active menu from localStorage
  const [activeMenu, setActiveMenu] = useState(() => {
    return localStorage.getItem("activeMenu") || "Home";
  });

  // Update localStorage when activeMenu changes
  useEffect(() => {
    localStorage.setItem("activeMenu", activeMenu);
  }, [activeMenu]);

  return (
    <div className="w-64 h-screen bg-gray-800 text-white">
      <ul className="p-4">
        {menuItems.map((item) => (
          <li
            key={item}
            className={`p-3 cursor-pointer rounded-md text-lg ${
              activeMenu === item ? "bg-blue-500" : "hover:bg-gray-700"
            }`}
            onClick={() => setActiveMenu(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DemoTable;
