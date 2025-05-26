import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGymServices } from "../../Redux/Slices/gymSlice/gymServicesSlice";
import { FaEye } from "react-icons/fa";
import DataTable from "react-data-table-component";
import ViewGymServiceDetails from "../preview/ViewGymServiceDetails";

const GymServicesTable = () => {
 const [isShowDetails, setIsShowDetails] = useState(false);
  const [showDetails, setShowDetails] = useState(null);
  const [searchQuery,setSearchQuery]=useState("");

  const handleShowDetails = (services) => {
    setIsShowDetails(true);
    setShowDetails(services);
  };

  const handleCloseDetails = () => {
    setIsShowDetails(false);
  };

  const { services } = useSelector((state) => state.gymservices);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGymServices());
  }, [dispatch]);

  const searchthedata=Array.isArray(services)
  ?services.filter((item)=>{
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
  }):[];

  const columns = [
    {
      name: "S.no",
      selector: (row) => row.serialNo,
    },
    {
      name: " Id",
      selector: (row) => row.id,
    },
    {
      name: "Image",
      selector: (row) => row.image,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      width:"230px"
    },
    {
      name: "Price",
      selector: (row) => row.price,
    },
    {
      name: "Discount %",
      selector: (row) => row.discount_percentage,
    },
    {
      name: "Discounted Price",
      selector: (row) => row.discounted_price,
    },
    {
      name: "Category",
      selector: (row) => row.category,
    },
    {
      name: "Duration",
      selector: (row) => row.duration,
        width:"250px"
    },
    {
      name: "Status",
      selector: (row) => row.status,
      width: "150px",
    },
    {
      name: "View",
      selector: (row) => row.view,
      center: "true",
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
    id: item.id.slice(0,8),
    image: <img className="h-15 w-15 object-cover" src={item.image_urls[0]} />,
    name: item.name,
    price: item.price,
    discounted_price: item.discounted_price,
    discount_percentage: item.discount_percentage,
    duration: item.duration,
    category: item.categories.name,

    status:
      item.is_available === true ? (
        <div className="p-2 font-semibold bg-green-600 text-white rounded-xl">Available</div>
      ) : (
        <div className="p-2 font-semibold bg-red-600 text-white rounded-xl">Not Available</div>
      ),
    view: (
      <button onClick={() => handleShowDetails(item)}>
        <FaEye size={25} />
      </button>
    ),
  }));

  return (
    <div className="w-[calc(100%-300px)] ml-[300px]  pt-30">
      <div className="flex justify-between ">
        <h1 className="font-bold text-3xl ml-5">Services</h1>
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
          data={data}
          columns={columns}
          customStyles={customStyles}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="67vh"
          defaultSortFieldId={1}
        />
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
            <ViewGymServiceDetails
              services={showDetails}
              onClose={handleCloseDetails}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default GymServicesTable;
