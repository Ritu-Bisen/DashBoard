import React, { useEffect, useState } from "react";
import Header from "../MartSection/Header";
import { useDispatch, useSelector } from "react-redux";
import { getproduct } from "../../Redux/Slices/productSlice";
import DataTable from "react-data-table-component";
import { getStock } from "../../Redux/Slices/stockmanagementSlice";
import { IoIosSend } from "react-icons/io";
import { orderList } from "../../Redux/Slices/stockQuantitySlice";
import { stockApi } from "../../Redux/Api/stockApi";

export const seller_id="1b5e07c8-7e20-4728-ac91-a100546bc1b1";

const StockManagementForm = () => {
  const [selectedProducts, setSelectedProducts] = useState([]); // Selected products list
  const [requestInput, setRequestInput] = useState(""); // Input field value
  const [addedItems, setAddedItems] = useState([]); // List of added items

  const handleSelectProduct = (e) => {
    const selectedItem = JSON.parse(e.target.value);
    if (!selectedProducts.some((prod) => prod.id === selectedItem.id)) {
      setSelectedProducts([...selectedProducts, selectedItem]);
    }
  };

  const handleAddItem = (product) => {
    if (!requestInput || isNaN(requestInput) || requestInput <= 0) {
      alert("Please enter a valid quantity");
      return;
    }

    // Add item to the list
    setAddedItems([
      ...addedItems,
      {id:product.id, name: product.name, quantity: requestInput },
    ]);
    setSelectedProducts(selectedProducts.filter((prod)=>prod.id !== product.id))//remove row
    setRequestInput(""); // Clear input field
  };

  const { stocks } = useSelector((state) => state.stock);
  const { products } = useSelector((state) => state.product);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStock());
    dispatch(getproduct());
  }, [dispatch]);

  //onsubmit button
  const handlesubmit =()=>{
  
    dispatch(orderList({addedItems, seller_id}))
   
  }

  const columns = [
    { name: "S.no", selector: (row) => row.serialNo },
    
    { name: "Product Id", selector: (row) => row.product_id },
    { name: "Image", selector: (row) => row.image_urls, width: "100px" },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      width: "150px",
    },
    { name: "Price", selector: (row) => row.price, width: "130px" },
    { name: "Available Stock", selector: (row) => row.available_stock },
    {
      name: "Request Stock",
      selector: (row) => row.request_stock,
      width: "300px",
    },
  ];

  const customStyles = {
    headCells: {
      style: {
        borderBottom: "1px solid black",
        borderRight: "1px solid gray",
        backgroundColor: "#f4f4f4",
        fontWeight: "bold",
        borderTop: "1px solid black",
        justifyContent: "center",
      },
    },
    cells: {
      style: {
        "&:not(:last-of-type)": {
          borderRightStyle: "solid",
          borderRightWidth: "1px",
          borderRightColor: "gray",
          justifyContent: "center",
        },
      },
    },
    tableWrapper: {
      style: {
        borderBottom: "1px solid gray",
      },
    },
  };

  // Generate data for the table
  let data = selectedProducts.map((product, index) => {
    const stockItem = stocks.find(
      (item) => item.mart_products?.name === product.name
    );
    return {                         
      serialNo: index + 1,
      product_id: stockItem ? stockItem.product_id.slice(0, 8) : product.id,
      image_urls: (
        <img
          src={
            stockItem
              ? stockItem.mart_products.image_urls[0]
              : product.image_urls[0]
          }
          alt="Product"
          width="50"
        />
      ),
      name: product.name,
      price: product.price,
      available_stock: stockItem ? stockItem.available_stock : 0,
      request_stock: (
        <div className="gap-3">
          <input
            type="number"
            className="border-gray-300 border-2 p-2"
            value={requestInput}
            onChange={(e) => setRequestInput(e.target.value)}
          />
          <button
            className="bg-green-700 text-white p-2 ml-2 rounded"
            onClick={() => handleAddItem(product)}
          >
            Add
          </button>
        </div>
      ),
    };
  });



    const  columnList =[  { name: "S.no", selector: (row) => row.serialNo },
      { name: "Product Id", selector: (row) => row.product_id },
      { name: "Name", selector: (row) => row.name },
      { name: "Quantity", selector: (row) => row.quantity },
      
    ]
  
  const dataList = addedItems.map((item,index)=>({
    serialNo: index+1,
    product_id: (item.id).slice(0,8),
    name: item.name,
   quantity: item.quantity
  }))

  

  return (
    <div className="w-[calc(100%-300px)] ml-[300px] pt-[120px]">
    
      <div className="mt-5 flex gap-10 ">
        <h1 className="ml-2 text-3xl font-bold">Stock Management</h1>
        <select
           onChange={handleSelectProduct}
           className="border-gray-300 border-2 rounded-lg p-2"
         >
           <option value="">Select</option>
           {products.map((item) => (
             <option key={item.id} value={JSON.stringify(item)}>
               {item.name}
             </option>
           ))}
         </select>
      </div>

      <div className="mt-10">
        <DataTable
          fixedHeader
          fixedHeaderScrollHeight="50vh"
          defaultSortFieldId={1}
          columns={columns}
          data={data}
          customStyles={customStyles}
        />
      </div>

      

      {/* List of added items */}
      <div className="mt-10 p-4  rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Added Items</h2>

        <DataTable columns={columnList} data={dataList} customStyles={customStyles} fixedHeader /> 
       
      </div>
   <div className="item-center justify-center flex mt-5">
   <button onClick={()=>handlesubmit()} className="bg-red-600 rounded-lg p-2 font-semibold gap-2 text-white flex text-2xl">Request Now < IoIosSend className="mt-1" size={25}/></button>
   </div> 
    </div>
  );
};




export default StockManagementForm;
