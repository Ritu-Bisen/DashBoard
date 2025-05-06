import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const RestaurantDeliveryBoysManagement = () => {
 // const { deliveryBoys } = useSelector((state) => state.deliveryBoy);
  //const dispatch = useDispatch();
  const [active, setActive] = useState("all");
  // console.log(deliveryBoys);

  // useEffect(() => {
  //   dispatch(getVerifiedDeliveryBoys());
  // }, [dispatch]);

  const [isShowDeliveryBoy, setIsShowDeliveryBoy] = useState(false);
  const [deliveryBoy, setDeliveryBoy] = useState(null);

  const handleShowDeliveryBoy = (item) => {
    setIsShowDeliveryBoy(true);
    setDeliveryBoy(item);
  };

  const handleOnClose = () => {
    setIsShowDeliveryBoy(false);
    setDeliveryBoy(null);
  };

  const columns = [
    {
      name: "S.no",
      selector: (row) => row.serialNo,
      width: "100px",
    },
    {
      name: "Segment",
      selector: (row) => row.segment,
      width: "100px",
    },
    {
      name: "Profile Pic",
      selector: (row) => row.profile_pic,
      width: "150px",
    },
    {
      name: "Seller id",
      selector: (row) => row.seller_id,
      width: "100px",
    },
    {
      name: "Name",
      selector: (row) => row.user_name,
    },
    {
      name: "contact No",
      selector: (row) => row.phone_number,
      width: "150px",
    },
    {
      name: "Store Address",
      selector: (row) => row.store_address,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      width: "140px",
      centre: true,
    },
    {
      name: "preview",
      selector: (row) => row.preview,
      width: "120px",
      centre: true,
    },
  ];

  // const data = deliveryBoys?.map((item, index) => ({
  //   serialNo: index + 1,
  //   segment: item.section,
  //   profile_pic: (
  //     <img src={item.profile_image_url} alt="" className="h-15 w-15" />
  //   ),
  //   seller_id: item.id.slice(0, 8),
  //   user_name: item.full_name,
  //   store_name: item.store_name,
  //   phone_number: item.phone_number,
  //   store_address: <div>{item.address}</div>,
  //   status: (
  //     <div className="inline-flex items-center text-white justify-center gap-1 w-full">
  //       {item.is_active === true ? (
  //         <p className="bg-green-600 cursor-pointer text-lg rounded-md px-3">
  //           Active
  //         </p>
  //       ) : (
  //         <p className="bg-red-600 cursor-pointer text-lg rounded-md px-3">
  //           Not Active
  //         </p>
  //       )}
  //     </div>
  //   ),
  //   preview: (
  //         <button
  //           onClick={() => handleShowDeliveryBoy(item)}
  //           className="text-3xl cursor-pointer"
  //         >
  //           <FaEye />
  //         </button>
  //       ),

  // }));

  const customStyles = {
    headCells: {
      style: {
        borderBottom: "1px solid black", // Bottom border for header cells
        borderRight: "1px solid gray", // Right border for header cells
        backgroundColor: "#f4f4f4", // Light gray background
        fontWeight: "bold",
        borderTop: "1px solid black",
        justifyContent: "center",
        fontSize: "15px",
      },
    },
    cells: {
      style: {
        "&:not(:last-of-type)": {
          borderRightStyle: "solid",
          borderRightWidth: "1px",
          borderRightColor: "gray",
          justifyContent: "center",
          fontSize: "15px",
        },
      },
    },
  };

  return (
    <div>
      <div className=" m-5 p-2 text-5xl font-semibold  sticky top-0 z-10 ">
        <h1>Manage Delivery Boys</h1>
      </div>
      <div className="flex bg-gray-200 w-54 px-2 py-2 rounded-full m-5 justify-between">
        <button
          type="button"
          className={`rounded-full px-2 text-lg font-semibold ${
            active === "all" ? "bg-white text-black" : "text-black"
          }`}
          onClick={() => {
            setActive("all");
          //  dispatch(getVerifiedDeliveryBoys());
          }}
        >
          All
        </button>
        <button
          type="button"
          className={`rounded-full px-2 text-lg font-semibold ${
            active === "active" ? "bg-white text-green-500" : "text-black"
          }`}
          onClick={() => {
            setActive("active");
          //  dispatch(getActiveVerifiedDeliveryBoys());
          }}
        >
          Active
        </button>
        <button
          type="button"
          className={`rounded-full px-2 text-lg font-semibold ${
            active === "inactive" ? "bg-white text-red-500" : "text-black"
          }`}
          onClick={() => {
            setActive("inactive");
          //  dispatch(getInactiveVerifiedDeliveryBoys());
          }}
        >
          Inactive
        </button>
      </div>
      <div className="max-h-[75vh] max-w-[81vw]">
        <DataTable
          fixedHeader
          columns={columns}
          data={data}
          customStyles={customStyles}
          // fixedHeaderScrollHeight="67vh"
          pagination
          defaultSortFieldId={1}
        />
      </div>
      {/* {isShowDeliveryBoy && (
        <>
          <div
            className="fixed inset-0 bg-black/75 z-20 "
            onClick={() => setIsShowDeliveryBoy(false)}
          ></div>
          <ViewDeliveryBoyRequests
            deliveryBoy={deliveryBoy}
            onClose={() => handleOnClose()}
          />
        </>
      )} */}
    </div>
  );
};

export default RestaurantDeliveryBoysManagement
