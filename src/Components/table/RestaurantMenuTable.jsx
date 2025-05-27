import React, { useEffect, useRef, useState, useCallback } from 'react';
import DataTable from 'react-data-table-component';
import { FaEye } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantmenus, searchedProducts } from '../../Redux/Slices/restaurantSlice/restaurantMenuSlice';
import RestaurantViewMenuDetails from '../preview/RestaurantViewMenuDetails';

const RestaurantMenuTable = () => {
  const [isShowProduct, setIsShowProduct] = useState(false);
  const [showProduct, setShowProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(0);
  const scrollRef = useRef(null);

  const { menu, loading, hasMore } = useSelector((state) => state.restaurantmenu);
  const dispatch = useDispatch();

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchQuery.trim()) {
        dispatch(searchedProducts({page, searchQuery }));
      } else {
        dispatch(getRestaurantmenus({ page }));
      }
    }, 300); // debounce input to avoid excessive API calls
  
    return () => clearTimeout(delayDebounce);
  }, [searchQuery, page, dispatch]);

 
  useEffect(() => {
    console.log("Scroll Top:", scrollRef.current.scrollTop);
    console.log("Client Height:", scrollRef.current.clientHeight);
    console.log("Scroll Height:", scrollRef.current.scrollHeight);
  }, [scrollRef.current, menu]);

  const handleScroll = () => {
    const scrollEl = scrollRef.current;
    if (
      scrollEl &&
      scrollEl.scrollTop + scrollEl.clientHeight >= scrollEl.scrollHeight - 1 &&
      hasMore &&
      !loading
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    scrollElement.addEventListener("scroll", handleScroll);
    return () => scrollElement.removeEventListener("scroll", handleScroll);
  }, [hasMore, loading]);



  const handleViewDetails = (menu) => {
    setIsShowProduct(true);
    setShowProduct(menu);
  };

  const handleProductDetailClose = () => {
    setIsShowProduct(false);
  };

  const columns = [
    { name: "S.no", selector: (row) => row.serialNo },
    { name: "Id", selector: (row) => row.id },
    { name: "Image", selector: (row) => row.image_urls },
    { name: "Name", selector: (row) => row.name, width: "200px" },
    { name: "Discounted Price", selector: (row) => row.discounted_price },
    { name: "Discount %", selector: (row) => row.discount_percentage },
    { name: "Final Price", selector: (row) => row.final_price },
    { name: "CGST", selector: (row) => row.cgst, width: "80px" },
    { name: "SGST", selector: (row) => row.sgst, width: "80px" },
    { name: "tax_amount", selector: (row) => row.tax_amount, width: "100px" },
    { name: "Status", selector: (row) => row.status, width: "150px" },
    { name: "View", selector: (row) => row.view, center: true },
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
    final_price: item.final_price,
    cgst: item.cgst,
    sgst: item.sgst,
    tax_amount: item.tax_amount,
    status: item.is_available ? (
      <p className="bg-green-800 text-white font-semibold rounded-lg p-3">Available</p>
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
            type="text"
            placeholder="Search Product name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border pl-2 w-96 rounded-full"
          />
      </div>
    <div ref={scrollRef} className="max-h-[85vh] overflow-y-auto mt-10">
        <DataTable
          data={data}
          columns={columns}
          customStyles={customStyles}
          fixedHeader
          defaultSortFieldId={1}
        />
      
     
       
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
