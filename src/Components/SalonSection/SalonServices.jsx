import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../../Redux/Slices/salonSlicees/salonServicesSlice";
import ViewSalonDetails from "./ViewSalonDetails";

const SalonServices = () => {
  const [isShowDetails, setIsShowDetails] = useState(false);
  const [showDetails, setShowDetails] = useState(null);

  const handleShowDetails = (services) => {
    setIsShowDetails(true);
    setShowDetails(services);
  };

  const handleCloseDetails = () => {
    setIsShowDetails(false);
  };

  const { services } = useSelector((state) => state.service);
  console.log(services);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  const columns = [
    {
      name: "S.no",
      selector: (row) => row.serialNo,
    },
    {
      name: "Service Id",
      selector: (row) => row.service_id,
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
      name: "Duration",
      selector: (row) => row.duration,
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

 const data = services.map((item,index)=>({
  serialNo: index + 1,
     service_id: item.category_id.slice(0, 8),
     image: <img src={item.image_urls[0]} />,
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
      <h1 className=" font-bold text-3xl ml-5">Services</h1>
      <div className="overflow-x mt-9">
        <DataTable
           data={data}
          fixedHeaderScrollHeight="67vh"
          defaultSortFieldId={1}
          customStyles={customStyles}
          pagination
          fixedHeader
          columns={columns}
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

export default SalonServices;
