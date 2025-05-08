import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Header from "../MartSection/Header";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../Redux/Slices/categoriesSlice";

const CategoryManagement = () => {
  const [searchQuery,setSearchQuery] = useState("")
  const { categories } = useSelector((state) => state.category);
  const{sellerDetails}=useSelector((state)=>state.seller)
  console.log(categories);

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getCategories(sellerDetails.segment));
  }, [dispatch]);

  const searchthedata = Array.isArray(categories)
  ? categories.filter((item) => {
      const namematch = item?.name
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase());
      const categorymatch = item?.name
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase());
      const idmatch = item?.id
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase());
      return namematch || categorymatch || idmatch;
    })
  : [];

  const columns = [
  
    {
      name: "Id",
      selector: (row) => row.category_id,
      width: "400px",
    },
    
    {
      name: "Icon",
      selector: (row) => row.icon,
      width:'400px'
      
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      width:'400px'
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
   
    category_id: (item.id).slice(0,8),
    name: item.name,
    icon: <img src={item.icon} className="h-15 p-2 w-15 " />,
  }));

 

  return (
    <div className="w-[calc(100%-300px) ml-[300px]">
    
      <div className=" pt-[120px]">
        <div className="flex justify-between gap-3">
          <h1 className="  ml-2  text-3xl font-bold ">Category Management</h1>
          <input
            className="border-2 border-gray-400 w-95 h-10 rounded-full p-3  "
            placeholder="Search"
            value={searchQuery}
            onChange={(e)=> setSearchQuery(e.target.value)}
            type="text"
          />
        </div>
        <div className="overflow-x mt-9">
          <DataTable
            fixedHeader
            columns={columns}
            data={data}
            customStyles={customStyles}
            pagination
            fixedHeaderScrollHeight="67vh"
            defaultSortFieldId={1}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryManagement;
