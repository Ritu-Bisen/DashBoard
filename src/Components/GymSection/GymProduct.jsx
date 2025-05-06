import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { getGymProducts } from '../../Redux/Slices/gymSlice/gymProductSlice';
import ViewGymProductDetails from './ViewGymProductDetails';

const GymProduct = () => {
  const [isShowDetail, setIsShowDetail] = useState(false);
    const [showGymProducts, setShowGymProducts] = useState(null);
  
    const handleViewDetails = (gymProducts) => {
      setIsShowDetail(true);
      setShowGymProducts(gymProducts);
    };

    const handleGymProductsClose = () => {
      setIsShowDetail(false);
    };

const {gymProducts}=useSelector((state)=>state.gymProducts);
console.log(gymProducts);


const dispatch = useDispatch();
useEffect(() => {
 dispatch(getGymProducts())
}, [dispatch])


    const columns = [ {
        name: "S.no",
        selector: (row) => row.serialNo,
      },
      {
        name: "Product Id",
        selector: (row) => row.id,
      },
      
      {
        name: "Name",
        selector: (row) => row.name,
      },
      {
        name: "Image",
        selector: (row) => row.image_urls,
      },
      {
        name: "Discounted %",
        selector: (row) => row.discounted_percentage,
      },
      {
        name: "Discount Price",
        selector: (row) => row.discounted_price,
      },
      {
        name: "Taxable Price",
        selector: (row) => row.taxable_price,
      },
      
      {
        name: "Final Price",
        selector: (row) => row.price,
      },
      {
        name: "Quantity",
        selector: (row) => row.stock_quantity,
      }, 
    
      {
        name: "Status",
        selector: (row) => row.status,
        width:"150px"
      },
      {
        name: "View",
        selector: (row) => row.view,
        center:"true",
      },
    ]
  
  
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

    
    const quantity = 10;
    
      const data = gymProducts.map((item,index)=>({
        serialNo:index+1,
        id:item.id,
        image_urls:(<img src={item.image_urls[0]}/>),
        name:item.name,
        discounted_percentage:item.discount_percentage,
        discounted_price:item.discount_price,
      
        stock_quantity:item.stock_quantity,
        taxable_price:item.taxable_price,
       
        price:item.price,
        status:(item.stock_quantity>0?<p className='bg-green-800  rounded-lg p-3'>Available</p>:<p className='bg-red-700 rounded-lg p-3'>Not Available</p>),
        view:( <button onClick={() => handleViewDetails(item)}>
                             <FaEye size={25} />
                           </button>),
      }))
    

  return (
    <div className='w-[calc(100%-300px)] ml-[300px]  pt-30'>
        <div>
            <h1 className='font-bold text-3xl ml-5'>Product</h1>
            </div>
            <div className='overflow-x mt-9'>
                <DataTable data={data} columns={columns} customStyles={customStyles} pagination fixedHeader fixedHeaderScrollHeight='67vh' defaultSortFieldId={1}/>
            </div>

            {
          isShowDetail && (
            <>
              <div
                className="fixed inset-0 z-50 bg-black/70 "
                onClick={() => {
                  setIsShowDetail(false);
                }}
              ></div>
              <div className="absolute z-1000">
                <ViewGymProductDetails
                  gymProducts={showGymProducts}
                  onClose={handleGymProductsClose}
                />
              </div>
            </>
          )} 
    </div>
  )
}

export default GymProduct
