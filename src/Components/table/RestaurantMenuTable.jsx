import React, { useEffect, useRef, useState, useCallback } from 'react';
import DataTable from 'react-data-table-component';
import { FaEye } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantmenus, resetProducts, searchedProducts} from '../../Redux/Slices/restaurantSlice/restaurantMenuSlice';
import RestaurantViewMenuDetails from '../preview/RestaurantViewMenuDetails';

const RestaurantMenuTable = () => {
 const [isShowProduct, setIsShowProduct] = useState(false);
  const [showProduct, setShowProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const observer = useRef();

  const { menu, loading, hasMore, page } = useSelector((state) => state.restaurantmenu);
  const dispatch = useDispatch();

useEffect(() => {
  const delay = setTimeout(() => {
    dispatch(resetProducts()); // reset state before new search

    if (searchQuery.trim()) {
      dispatch(searchedProducts({ page: 0, searchQuery }));
    } else {
      dispatch(getRestaurantmenus({ page: 0 }));
    }
  }, 400); // debounce

  return () => clearTimeout(delay);
}, [searchQuery, dispatch]);


  const lastMenuRef = useCallback(
  (node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        if (searchQuery.trim()) {
          dispatch(searchedProducts({ page, searchQuery }));
        } else {
          dispatch(getRestaurantmenus({ page }));
        }
      }
    });

    if (node) observer.current.observe(node);
  },
  [loading, hasMore, dispatch, page, searchQuery]
);


 

     const handleViewDetails = (menu) => {
    setIsShowProduct(true);
    setShowProduct(menu);
  };

   const handleProductDetailClose = () => {
    setIsShowProduct(false);
  };

    const columns = [
    { name: "S.No.", selector: (row) => row.serialNo,
      width:"65px"
     },
    { name: "Id", selector: (row) => row.id ,width:"90px"},
    { name: "Name", selector: (row) => row.name, width: "180px" },
    { name: "Image", selector: (row) => row.image_urls },
  { name: "MRP", selector: (row) => row.price ,width:"70px" },
   
    { name: "Discount %", selector: (row) => row.discount_percentage,width:"100px" },
     { name: "Discounted Price", selector: (row) => row.discounted_price },
       { name: "GST", selector: (row) => row.gst, width: "60px" },
      { name: "tax_amount", selector: (row) => row.tax_amount, width: "100px" },
    { name: "Final Price", selector: (row) => row.final_price },
  
 
   
    { name: "Status", selector: (row) => row.status, width: "130px" },
    { name: "View", selector: (row) => row.view, center: true ,width:"65px" },
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
  };

  const data = menu.map((item, index) => ({
    serialNo: index + 1,
    id: item.id.slice(0, 8),
    image_urls: <img src={item.image_urls[0]} alt="menu" />,
    name: item.name,
    discounted_price: item.discounted_price,
    discount_percentage: item.discount_percentage,
    price:item.price,
    final_price: item.final_price,
    gst: item.sgst+item.cgst,
   
    tax_amount: item.tax_amount,
    status: item.is_available ? (
      <p className="bg-green-800 text-white font-semibold rounded-lg p-3"> Not Available</p>
    ) : (
      <p className="bg-red-700 text-white font-semibold rounded-lg p-3">Not Available</p>
    ),
    view: <button onClick={() => handleViewDetails(item)}><FaEye size={25} /></button>,
  }));



 
  return (
    <div className="w-[calc(100%-300px)] ml-[300px] pt-[120px] ">
      <div className="flex justify-between">
        <h1 className="font-bold text-3xl ml-5">Menu</h1>
        <input
          className="border-2 border-gray-400 w-95 h-10 rounded-full p-3 mr-10"
          value={searchQuery}
          placeholder="Search"
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>


    <div
  className="h-[75vh] mt-9 overflow-y-auto"
  style={{ scrollbarWidth: 'none' }} // Firefox
  onScroll={(e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    if (scrollTop + clientHeight >= scrollHeight - 10 && hasMore && !loading) {
      if (searchQuery.trim()) {
        dispatch(searchedProducts({ page, searchQuery }));
      } else {
        dispatch(getRestaurantmenus({ page }));
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


      {isShowProduct && (
        <>
          <div
            className="fixed inset-0 bg-black/70 z-50"
            onClick={() => setIsShowProduct(false)}
          ></div>
          <div className="absolute z-1000">
             <RestaurantViewMenuDetails product={showProduct} onClose={handleProductDetailClose} />
          </div>
        </>
      )}
    </div>
  );
};

export default RestaurantMenuTable;
