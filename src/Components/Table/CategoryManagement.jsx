import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import Header from "../Header";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../Redux/Slices/categoriesSlice";

const CategoryManagement = () => {
  const { categories } = useSelector((state) => state.category);
  console.log(categories);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const columns = [
    {
      name: "id",
      selector: (row) => row.category_id,
      width: "150px",
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Icon",
      selector: (row) => row.icon,
    },

    {
      name: "Banner",
      selector: (row) => row.banner_urls,
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

  const productQuantity = 10;

  const data = categories.map((item, index) => ({
    category_id: (item.id).slice(0,8),
    name: item.name,
    icon: <img src={item.icon} className="h-13 p-2 w-13 " />,

    banner_urls: <img src={item.banner_urls} className="py-1" />,
  }));

  return (
    <div className="w-[calc(100%-300px)">
      <Header />
      <div className=" mt-25">
        <div className="flex justify-between gap-3">
          <h1 className="  ml-2  text-3xl font-bold ">Category Management</h1>
          <input
            className="border-2 border-gray-400 w-95 h-10 rounded-full p-3  "
            placeholder="Search"
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
