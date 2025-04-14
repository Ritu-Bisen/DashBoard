// // // // // import React from "react";
// // // // // import DataTable from "react-data-table-component";

// // // // // // Sample data with many columns
// // // // // const columns = Array.from({ length: 10 }, (_, i) => ({
// // // // //   name: `Column ${i + 1}`,
// // // // //   selector: (row) => row[`col${i + 1}`],
// // // // //   width: "200px", // Ensures horizontal scrolling
// // // // // }));

// // // // // // Sample data with large number of rows
// // // // // const data = Array.from({ length: 50 }, (_, i) => {
// // // // //   let row = { id: i + 1 };
// // // // //   for (let j = 1; j <= 10; j++) {
// // // // //     row[`col${j}`] = `Data ${i + 1}-${j}`;
// // // // //   }
// // // // //   return row;
// // // // // });

// // // // // const  DemoTable = () => {
// // // // //   return (
// // // // //     <div style={{ width: "90%", margin: "auto", overflowX: "auto" }}>
// // // // //       <DataTable
// // // // //         title="Large Table"
// // // // //         columns={columns}
// // // // //         data={data}
// // // // //         fixedHeader
// // // // //         fixedHeaderScrollHeight="400px" // Vertical scrolling for many rows
// // // // //       />
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default DemoTable ;

// // // // // import React, { useState } from "react";
// // // // // import { MdDashboard, MdBorderColor } from "react-icons/md";
// // // // // import { SiShutterstock } from "react-icons/si";
// // // // // import { TbCategoryFilled } from "react-icons/tb";

// // // // // const DemoTable = () => {
// // // // //   const [activeMenu, setActiveMenu] = useState(null); // Track active menu item

// // // // //   const listItems = [
// // // // //     { id: 1, title: "Dashboard", icon: <MdDashboard size={25} />, path: "/" },
// // // // //     { id: 2, title: "Order", icon: <MdBorderColor size={25} />, path: "/order" },
// // // // //     { id: 3, title: "Stock", icon: <SiShutterstock size={25} />, path: "/stock" },
// // // // //     { id: 4, title: "Category", icon: <TbCategoryFilled size={25} />, path: "/category" },
// // // // //   ];

// // // // //   return (
// // // // //     <div className="w-[250px] h-screen bg-gray-900 text-white p-4">
// // // // //       <h2 className="text-lg font-bold text-center">My Sidebar</h2>
// // // // //       <div className="mt-5">
// // // // //         {listItems.map(({ id, icon, title }) => (
// // // // //           <button
// // // // //             key={id}
// // // // //             className={`flex items-center gap-3 px-4 py-2 w-full text-left rounded-md ${
// // // // //               activeMenu === id ? "bg-red-500" : "bg-gray-800"
// // // // //             } hover:bg-red-400 transition`}
// // // // //             onClick={() => setActiveMenu(id)} // Set active menu on click
// // // // //           >
// // // // //             {icon}
// // // // //             <span>{title}</span>
// // // // //           </button>
// // // // //         ))}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default DemoTable;




// // // // // import React from "react";
// // // // // import DataTable from "react-data-table-component";

// // // // // // Sample columns with long data
// // // // // const columns = [
// // // // //   {
// // // // //     name: "ID",
// // // // //     selector: (row) => row.id,
// // // // //     width: "80px", // Fixed small width for IDs
// // // // //   },
// // // // //   {
// // // // //     name: "Name",
// // // // //     selector: (row) => row.name,
// // // // //     minWidth: "150px", // Prevents excessive shrinking
// // // // //   },
// // // // //   {
// // // // //     name: "Description",
// // // // //     selector: (row) => row.description,
// // // // //     minWidth: "250px", // Prevents cutting long text
// // // // //   },
// // // // // ];

// // // // // // Sample data with large text
// // // // // const data = Array.from({ length: 50 }, (_, i) => ({
// // // // //   id: i + 1,
// // // // //   name: `User ${i + 1}`,
// // // // //   description: `This is a very long description for user ${i + 1}. It contains detailed information that might not fit in a small column.`,
// // // // // }));

// // // // // const DemoTable = () => {
// // // // //   return (
// // // // //     <div style={{ width: "90%", margin: "auto", overflowX: "auto" }}>
// // // // //       <DataTable
// // // // //         title="Responsive Table"
// // // // //         columns={columns}
// // // // //         data={data}
// // // // //         fixedHeader
// // // // //         fixedHeaderScrollHeight="400px" // Enables vertical scrolling
// // // // //       />
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default DemoTable;



// // // // // const columns =[ 
// // // // //   {
// // // // //   name: 'id',
// // // // //   selector: row => row.category_id,
// // // // //   width:'300px',
 
  
// // // // // },
// // // // // {
// // // // //   name: 'Name',
// // // // //   selector: row => row.name,
// // // // //   sortable: true,
 
// // // // // },
// // // // // {
// // // // //   name: 'Icon',
// // // // //   selector: row => row.icon,
 
// // // // // },
// // // // // {
// // // // //   name: 'Section',
// // // // //   selector: row => row.section,
  
// // // // // },
// // // // // {
// // // // //   name: 'Banner',
// // // // //   selector: row => row.banner_yrls,
  
// // // // // },
// // // // // {
// // // // //   name: 'Description',
// // // // //   selector: row => row.descriptions,
  
// // // // // },

// // // // // {
// // // // //   name: 'Status',
// // // // //   selector: row => row.status,
// // // // //   center:'true'
 
// // // // // },
// // // // // ]


// // // // // const data = Array(25).fill(
// // // // //   {
// // // // //     category_id: '02fc7211-9f9a-4c0c-ac18-9e0f18ab288e',
// // // // //     name:'Men',
// // // // //     icon:<img src='https://iltrrlubnqpzllzbogen.supabase.co/storage/v1/object/public/sections/salon/category_icons/02fc7211-9f9a-4c0c-ac18-9e0f18ab288e/electric-razor%20black.png'/>,
// // // // //     section:'salon',
// // // // //     banner_urls:<img src='["https://iltrrlubnqpzllzbogen.supabase.co/storage/v1/object/public/sections/mart/banners/120299e9-a35a-40bf-ba5a-3d5d38b8db85/mart%203.jpg"]'/>,
// // // // //     descriptions:'NULL',
// // // // //     status: <div className='m-auto'>{ productQuantity > 0 ? (<p className='bg-green-600 rounded-lg p-2'> Available </p>) : (<p className='bg-red-600 rounded-lg p-2'>Not Available</p>)} </div>
// // // // // },
// // // // // )


// // // // // import { useState, useEffect } from "react";

// // // // // const DemoTable = () => {
// // // // //   const menuItems = ["Home", "About", "Services", "Contact"];

// // // // //   // Get the stored active menu from localStorage
// // // // //   const [activeMenu, setActiveMenu] = useState(() => {
// // // // //     return localStorage.getItem("activeMenu") || "Home";
// // // // //   });

// // // // //   // Update localStorage when activeMenu changes
// // // // //   useEffect(() => {
// // // // //     localStorage.setItem("activeMenu", activeMenu);
// // // // //   }, [activeMenu]);

// // // // //   return (
// // // // //     <div className="w-64 h-screen bg-gray-800 text-white">
// // // // //       <ul className="p-4">
// // // // //         {menuItems.map((item) => (
// // // // //           <li
// // // // //             key={item}
// // // // //             className={`p-3 cursor-pointer rounded-md text-lg ${
// // // // //               activeMenu === item ? "bg-blue-500" : "hover:bg-gray-700"
// // // // //             }`}
// // // // //             onClick={() => setActiveMenu(item)}
// // // // //           >
// // // // //             {item}
// // // // //           </li>
// // // // //         ))}
// // // // //       </ul>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default DemoTable;


// // // // import React, { useEffect, useState } from "react";
// // // // import Header from "../Header";
// // // // import { useDispatch, useSelector } from "react-redux";
// // // // import { getproduct } from "../../Redux/Slices/productSlice";
// // // // import DataTable from "react-data-table-component";
// // // // import { getStock } from "../../Redux/Slices/stockmanagementSlice";

// // // // const DemoTable = () => {
// // // //   const [selectProduct, setSelectProduct] = useState(null); // Store selected product object

// // // //   const handleSelectProduct = (e) => {
// // // //     const selectedItem = e.target.value ? JSON.parse(e.target.value) : null;
// // // //     setSelectProduct(selectedItem);
// // // //     console.log("Selected Product:", selectedItem);
// // // //   };

// // // //   const { stocks } = useSelector((state) => state.stock);
// // // //   const { products } = useSelector((state) => state.product);

// // // //   const dispatch = useDispatch();
// // // //   useEffect(() => {
// // // //     dispatch(getStock());
// // // //     dispatch(getproduct());
// // // //   }, [dispatch]);

// // // //   const columns = [
// // // //     { name: "S.no", selector: (row) => row.serialNo },
// // // //     { name: "Product Id", selector: (row) => row.product_id },
// // // //     { name: "Image", selector: (row) => row.image_urls, width: "100px" },
// // // //     { name: "Name", selector: (row) => row.name, sortable: true, width: "150px" },
// // // //     { name: "Price", selector: (row) => row.price, width: "130px" },
// // // //     { name: "Request Stock", selector: (row) => row.request_stock },
// // // //     { name: "Available Stock", selector: (row) => row.available_stock },
// // // //   ];

// // // //   const customStyles = {
// // // //     headCells: {
// // // //       style: {
// // // //         borderBottom: "1px solid black",
// // // //         borderRight: "1px solid gray",
// // // //         backgroundColor: "#f4f4f4",
// // // //         fontWeight: "bold",
// // // //         borderTop: "1px solid black",
// // // //         justifyContent: "center",
// // // //       },
// // // //     },
// // // //     cells: {
// // // //       style: {
// // // //         "&:not(:last-of-type)": {
// // // //           borderRightStyle: "solid",
// // // //           borderRightWidth: "1px",
// // // //           borderRightColor: "gray",
// // // //           justifyContent: "center",
// // // //         },
// // // //       },
// // // //     },
// // // //   };

// // // //   // Filtered Data based on selected product
// // // //   const filteredData = stocks
// // // //     .filter((item) => !selectProduct || item.mart_products.name === selectProduct.name)
// // // //     .map((item, index) => ({
// // // //       serialNo: index + 1,
// // // //       product_id: item.product_id.slice(0, 8),
// // // //       image_urls: <img src={item.mart_products.image_urls[0]} alt="Product" width="50" />,
// // // //       name: item.mart_products.name,
// // // //       price: item.mart_products.price,
// // // //       request_stock: item.request_stock,
// // // //       available_stock: item.available_stock,
// // // //     }));

// // // //   return (
// // // //     <div className="w-[calc(100%-300px)] ml-[300px]">
// // // //       <Header />
// // // //       <div className="mt-28 flex gap-10">
// // // //         <h1 className="ml-2 text-3xl font-bold">Stock Management</h1>
// // // //         <select
// // // //           value={selectProduct ? JSON.stringify(selectProduct) : ""}
// // // //           onChange={handleSelectProduct}
// // // //           className="border-gray-300 border-2 rounded-lg p-2"
// // // //         >
// // // //           <option value="">All Products</option>
// // // //           {products.map((item) => (
// // // //             <option key={item.id} value={JSON.stringify(item)}>
// // // //               {item.name}
// // // //             </option>
// // // //           ))}
// // // //         </select>
// // // //       </div>

// // // //       <div className="mt-20">
// // // //         <DataTable
// // // //           fixedHeader
// // // //           fixedHeaderScrollHeight="67vh"
// // // //           defaultSortFieldId={1}
// // // //           pagination
// // // //           columns={columns}
// // // //           data={filteredData}
// // // //           customStyles={customStyles}
// // // //         />
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default DemoTable;

// // // import { useState } from "react";

// // // export default function DemoTable0() {
// // //   const [amount, setAmount] = useState("");
// // //   const [billItems, setBillItems] = useState([]);

// // //   const addToBill = (id, product ) => {
// // //     if (!amount || isNaN(amount) || amount <= 0) {
// // //       alert("Please enter a valid number");
// // //       return;
// // //     }
// // //     setBillItems([...billItems, Number(amount)]);
// // //     setAmount(""); // Clear input field
// // //   };

// // //   const totalBill = billItems.reduce((sum, item) => sum + item, 0);

// // //   return (
// // //     <div className="p-4 max-w-md mx-auto border rounded-lg shadow-lg space-y-4">
// // //       <h2 className="text-xl font-bold">Bill Calculator</h2>
      
// // //       <input
// // //         type="number"
// // //         value={amount}
// // //         onChange={(e) => setAmount(e.target.value)}
// // //         className="w-full p-2 border rounded"
// // //         placeholder="Enter amount"
// // //       />
      
// // //       <button 
// // //         onClick={addToBill(products)} 
// // //         className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
// // //       >
// // //         Add to Bill
// // //       </button>
      
// // //       <div className="border-t pt-2">
// // //         <h3 className="text-lg font-semibold">Bill Items:</h3>
// // //         <ul>
// // //           {billItems.map((item, index) => (
// // //             <li key={index} className="text-gray-700">₹{item}</li>
// // //           ))}
// // //         </ul>
// // //         <h3 className="text-lg font-bold mt-2">Total: ₹{totalBill}</h3>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // import React, { useEffect, useState } from 'react';
// // import supabase from '../../SupaBaseClient';
// // //import { fetchorderAPI } from '../../api/OrderAPI';

// // const DemoTable = ({ orderId }) => {
// //   const [billItems, setBillItems] = useState([]);


// //   const fetchorderAPI = async () => {
// //     try {
// //       const { data, error } = await supabase
// //         .from("mart_order_items")
// //         .select(`
// //           *,
// //           orders (
// //             id,
// //             order_date,
// //             users (
// //               id,
// //               name,
// //               email
// //             )
// //           ),
// //           mart_products (
// //             id,
// //             name
// //           )
// //         `);
  
// //       if (error) {
// //         console.error("Error when fetching order data:", error);
// //         return [];
// //       }
  
// //       console.log("Fetched order data:", data);
// //       return data;
// //     } catch (err) {
// //       console.error("Error from Supabase:", err);
// //       return [];
// //     }
// //   };
  

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       const allOrders = await fetchorderAPI();

// //       // Filter only the items that match the orderId
// //       const filtered = allOrders?.filter(item => item.orders?.id === orderId);
// //       setBillItems(filtered || []);
// //     };

// //     fetchData();
// //   }, [orderId]);

// //   if (billItems.length === 0) return <div>Loading or No data found...</div>;

// //   const orderInfo = billItems[0].orders;
// //   const userInfo = orderInfo.users;

// //   const calculateTotal = () =>
// //     billItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

// //   return (
// //     <div style={styles.container}>
// //       <h2 style={styles.title}>🧾 Bill Invoice</h2>
// //       <p><strong>Customer:</strong> {userInfo?.name}</p>
// //       <p><strong>Order ID:</strong> {orderInfo?.id}</p>
// //       <p><strong>Date:</strong> {orderInfo?.order_date}</p>

// //       <table style={styles.table}>
// //         <thead>
// //           <tr>
// //             <th>Product</th>
// //             <th>Qty</th>
// //             <th>Price</th>
// //             <th>Total</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {billItems.map((item, index) => (
// //             <tr key={index}>
// //               <td>{item.mart_products?.name}</td>
// //               <td>{item.quantity}</td>
// //               <td>{item.price}</td>
// //               <td>{item.quantity * item.price}</td>
// //             </tr>
// //           ))}
// //           <tr>
// //             <td colSpan="3"><strong>Grand Total</strong></td>
// //             <td><strong>{calculateTotal()}</strong></td>
// //           </tr>
// //         </tbody>
// //       </table>
// //       <p style={styles.thanks}>Thank you for your order!</p>
// //     </div>
// //   );
// // };

// // const styles = {
// //   container: {
// //     width: '600px',
// //     margin: '30px auto',
// //     padding: '20px',
// //     border: '1px solid #ccc',
// //     borderRadius: '12px',
// //     fontFamily: 'Arial, sans-serif'
// //   },
// //   title: {
// //     textAlign: 'center',
// //     marginBottom: '20px'
// //   },
// //   table: {
// //     width: '100%',
// //     borderCollapse: 'collapse',
// //     marginTop: '20px'
// //   },
// //   thanks: {
// //     textAlign: 'center',
// //     marginTop: '30px',
// //     fontStyle: 'italic'
// //   }
// // };

// // export default DemoTable;




import React, { useState } from "react";

const DemoTable = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      onClick={() => setIsOn(!isOn)}
      className={`w-12 h-6 flex items-center rounded-full cursor-pointer px-1 transition-colors duration-300 ${
        isOn ? "bg-green-200" : "bg-red-200"
      }`}
    >
      <div
        className={`w-4 h-4 rounded-full shadow-md transform duration-300 ${
          isOn
            ? "translate-x-6 bg-green-700"
            : "translate-x-0 bg-red-600"
        }`}
      ></div>
    </div>
  );
};

export default DemoTable;
