import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getServices, resetServices, searchedSalonServices } from "../../Redux/Slices/salonSlicees/salonServicesSlice";
import ViewSalonDetails from "../preview/ViewSalonDetails";

const SalonServicesTable = () => {
  
    const [searchQuery, setSearchQuery] = useState("");
  const [isShowDetails, setIsShowDetails] = useState(false);
  const [showDetails, setShowDetails] = useState(null);

  const { services, loading, hasMore, page } = useSelector((state) => state.service);
   const dispatch = useDispatch();
  
   useEffect(() => {
     const delay = setTimeout(() => {
       dispatch(resetServices()); // reset state before new search
   
       if (searchQuery.trim()) {
         dispatch(searchedSalonServices({ page: 0, searchQuery }));
       } else {
         dispatch(getServices({ page: 0 }));
       }
     }, 400); // debounce
   
     return () => clearTimeout(delay);
   }, [searchQuery, dispatch]);

  const handleShowDetails = (services) => {
    setIsShowDetails(true);
    setShowDetails(services);
  };

  const handleCloseDetails = () => {
    setIsShowDetails(false);
  };

  

  const columns = [
    {
      name: "S.no",
      selector: (row) => row.serialNo,
      width:"65px"
    },
    {
      name: "Service Id",
      selector: (row) => row.service_id,
          width:"100px",
    },
    {
      name: "Image",
      selector: (row) => row.image,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Price",
      selector: (row) => row.price,
       width:"100px",
    },
    {
      name: "Discount %",
      selector: (row) => row.discount_percentage,
      width:"100px",
    },
    {
      name: "Discounted Price",
      selector: (row) => row.discounted_price,
       width:"100px",
    },
    {
      name: "Duration",
      selector: (row) => row.duration,
    },
    

    {
      name: "View",
      selector: (row) => row.view,
      center: "true",
        width:"70px"
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

 const data = services.map((item,index)=>({
  serialNo: index + 1,
     service_id: item.category_id.slice(0, 8),
     image: <img  src={item.image_urls[0]} />,
     name: item.name,
     price: item.price,
    discounted_price: item.discounted_price,
     discount_percentage: item.discount_percentage,
     duration: item.duration,
    

    view: (
      <button onClick={()=>handleShowDetails(item)}>
        <FaEye size={25} />
      </button>
    ),
 }))

  
  return (
    <div className="fixed w-[calc(100%-300px)] ml-[300px]  pt-30">
      <div className="flex justify-between mr-10">
         <h1 className=" font-bold text-3xl ml-5">Services</h1>
       <input
            className="border-2 border-gray-400 w-95 h-10 rounded-full p-3 "
            value={searchQuery}
            placeholder="Search"
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          </div>
     
      <div
  className="h-[68vh] mr-2 mt-9 overflow-y-auto"
  style={{ scrollbarWidth: 'none' }} // Firefox
  onScroll={(e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    if (scrollTop + clientHeight >= scrollHeight - 10 && hasMore && !loading) {
      if (searchQuery.trim()) {
        dispatch(searchedSalonServices({ page, searchQuery }));
      } else {
        dispatch(getServices({ page }));
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
      {isShowDetails && (
        <>
          <div
            className="inset-0  z-50 bg-black/70 fixed"
            onClick={() => {
              setIsShowDetails(false);
            }}
          ></div>
          <div className="absolute z-[10000]">
            <ViewSalonDetails
              services={showDetails}
              onClose={handleCloseDetails}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default SalonServicesTable;
