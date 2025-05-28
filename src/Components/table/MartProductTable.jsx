import React, { useEffect, useRef, useState } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { getproduct, resetProducts, searchedMartProducts } from "../../Redux/Slices/productSlice";
import { FaEye } from "react-icons/fa";

import ViewDetails from "../preview/ViewDetails";


const MartProductTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isShowProduct,setIsShowProduct] = useState(false);
  const [showProduct,setShowProduct] = useState(null);

 const observer = useRef();

  const { products, loading, hasMore, page } = useSelector((state) => state.product);
 const dispatch = useDispatch();

 useEffect(() => {
   const delay = setTimeout(() => {
     dispatch(resetProducts()); // reset state before new search
 
     if (searchQuery.trim()) {
       dispatch(searchedMartProducts({ page: 0, searchQuery }));
     } else {
       dispatch(getproduct({ page: 0 }));
     }
   }, 400); // debounce
 
   return () => clearTimeout(delay);
 }, [searchQuery, dispatch]);
 

 

 

    //for view details
    const handleViewDetails = (product)=> {
      console.log(product);
     
    setIsShowProduct(true);
    setShowProduct(product);
    };

    //for close details
    const handleProductDetailClose = () => {
      setIsShowProduct(false);
      
    };

  const columns = [
    {
      name: "S.no",
      selector: (row) => row.serialNo,
         width: "60px",
    },
   
    {
      name: "Id",
      selector: (row) => row.product_id,
      width: "90px",
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      width: "250px",
    },
     {
      name: "Image",
      selector: (row) => row.image_urls,
    },
    {
      name: "Category",
      selector: (row) => row.category_name,
      width: "100px",
    },
    { name: "Discount %", selector: (row) => row.discount_percentage,width:"100px" },
     { name: "Discounted Price", selector: (row) => row.discounted_price },
       { name: "GST", selector: (row) => row.gst, width: "60px" },
      { name: "Taxable Amount", selector: (row) => row.tax_amount, width: "120px" },
    { name: "Final Price", selector: (row) => row.final_price , width: "100px"},
  
 
    {
      name: "Quantity",
      selector: (row) => row.stock_quantity,
       width: "85px"
    },

    {
      name: "Status",
      selector: (row) => row.status,
      center: "true",
      width: "130px"
    },
    {
      name: "View",
      selector: (row) => row.view,
      center: "true",
      width: "65px",
      
    },
  ];

  const customStyles = {
    headCells: {
      style: {
        borderBottom: "1px solid black", // Bottom border for header cells
        borderRight: "1px solid gray", // Right border for header cells
        backgroundColor: "#f4f4f4", // Light gray background
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
  };


  const data = products.map((item, index) => ({
    serialNo: index + 1,
    product_id: item.id.slice(0, 8),
    category_name: item.categories.name,
    
    name: item.name,
    
    discounted_price: item.discounted_price,
    discount_percentage: item.discount_percentage,
    price:item.price,
    final_price: item.final_price,
    gst: item.gst,
    tax_amount: item.taxable_price,
    stock_quantity: item.stock_quantity,
    image_urls: (
      <img
        src={item.image_urls[0]}
        className=" h-15 w-15  items-center flex"
      />
    ),
    status: (
      <div className="m-auto text-white font-semibold">
        {item.stock_quantity > 0 ? (
          <p className="bg-green-800  rounded-lg p-2"> Available </p>
        ) : (
          <p className="bg-red-600 rounded-lg p-2">Not Available</p>
        )}  
      </div>
    ),
    view:(
    <button onClick={()=>handleViewDetails(item)}>
      <FaEye   size={25}/>
    </button>
    ),

   
  }));

  return (
    <div className="relative w-[calc(100%-300px)] ml-[300px]">
     
      <div className=" pt-[120px]">
        <div className="flex justify-between ">
          <h1 className="  ml-2  text-3xl font-bold ">Product Management</h1>
          <input
            className="border-2 border-gray-400 w-95 h-10 rounded-full p-3 "
            value={searchQuery}
            placeholder="Search"
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
       <div
  className="h-[65vh] mt-9 overflow-y-auto"
  style={{ scrollbarWidth: 'none' }} // Firefox
  onScroll={(e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    if (scrollTop + clientHeight >= scrollHeight - 10 && hasMore && !loading) {
      if (searchQuery.trim()) {
        dispatch(searchedMartProducts({ page, searchQuery }));
      } else {
        dispatch(getproduct({ page }));
      }
    }
  }}
>
  <DataTable
    data={data}
    columns={columns}
    customStyles={customStyles}
    fixedHeader
    defaultSortFieldId={1}
  />
  {loading && (
    <div className="flex justify-center items-center py-2">
      <p className="text-center text-gray-500">Loading more...</p>
    </div>
  )}
</div>
        <div>
       

{isShowProduct && ( 
      <>
     
     <div
            className="fixed inset-0 bg-black/70 z-50"
            onClick={() => setIsShowProduct(false)}
          ></div>
          <div className="absolute z-1000">
            <ViewDetails product={showProduct} onClose= {handleProductDetailClose} />
            </div>
      </>
    )}
      </div>
      </div>
      
    </div>
  );
};

export default MartProductTable;
