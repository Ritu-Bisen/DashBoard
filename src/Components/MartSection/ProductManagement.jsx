import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Header from "../MartSection/Header";
import { fetchProductApi } from "../../Redux/Api/productApi";
import { useDispatch, useSelector } from "react-redux";
import { getproduct } from "../../Redux/Slices/productSlice";
import { FaEye } from "react-icons/fa";

import ViewDetails from "./ViewDetails";


const ProductManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isShowProduct,setIsShowProduct] = useState(false);
  const [showProduct,setShowProduct] = useState(null);


 
  

  
  const { products } = useSelector((state) => state.product);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getproduct());
  }, []);

  const searchthedata = Array.isArray(products)
    ? products.filter((item) => {
        const namematch = item?.name
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase());
        const categorymatch = item?.categories.name
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase());
        const idmatch = item?.id
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase());
        return namematch || categorymatch || idmatch;
      })
    : [];

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
    },
    {
      name: "Image",
      selector: (row) => row.image_urls,
    },
    {
      name: "Id",
      selector: (row) => row.product_id,
      width: "100px",
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      width: "350px",
    },
    {
      name: "Category Name",
      selector: (row) => row.category_name,
      width: "130px",
    },
    {
      name: "MRP",
      selector: (row) => row.price,
    },
    {
      name: "Discount %",
      selector: (row) => row.discount_percentage,
    },
    {
      name: "Final Price",
      selector: (row) => row.discount_price,
      width: "130px",
    },
    {
      name: "Quantity",
      selector: (row) => row.stock_quantity,
    },

    {
      name: "Status",
      selector: (row) => row.status,
      center: "true",
      width: "150px",
    },
    {
      name: "View Details",
      selector: (row) => row.view,
      center: "true",
      width: "130px",
      
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


  const data = searchthedata.map((item, index) => ({
    serialNo: index + 1,
    product_id: item.id.slice(0, 8),
    category_name: item.categories.name,
    
    name: item.name,
    description: item.description,
    price: item.price,
    discount_percentage: item.discount_percentage,
    discount_price: item.discounted_price,
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
        <div className="flex justify-between gap-3">
          <h1 className="  ml-2  text-3xl font-bold ">Product Management</h1>
          <input
            className="border-2 border-gray-400 w-95 h-10 rounded-full p-3 "
            value={searchQuery}
            placeholder="Search"
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="overflow-x mt-9">
          <DataTable
            fixedHeader
            columns={columns}
            data={data}
            customStyles={customStyles}
            fixedHeaderScrollHeight="67vh"
            pagination
            defaultSortFieldId={1}
          />
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

export default ProductManagement;
