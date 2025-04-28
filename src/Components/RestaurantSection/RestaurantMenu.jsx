import React, { useEffect } from 'react'
import DataTable from 'react-data-table-component';
import { FaEye } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantmenus } from '../../Redux/Slices/restaurantSlice/restaurantMenuSlice';
import { fetchRestaurantMenuApi } from '../../Redux/Api/restaurantApi/restaurantMenuApi';

const RestaurantMenu = () => {
const { menus } = useSelector((state) => state.restaurantmenu);
const dispatch =useDispatch();
useEffect(() => {
 dispatch(getRestaurantmenus())
}, [dispatch])
console.log(menus);


  const columns = [ {
    name: "S.no",
    selector: (row) => row.serialNo,
  },
  {
    name: "Id",
    selector: (row) => row.id,
  },
  {
    name: "Image",
    selector: (row) => row.image_urls,
  },
  {
    name: "Name",
    selector: (row) => row.name,
  },
  {
    name: "Discounted Price",
    selector: (row) => row.discounted_price,
  },
  {
    name: "Discount %",
    selector: (row) => row.discount_percentage,
  },
  {
    name: "Final Price",
    selector: (row) => row.final_price,
  },
  {
    name: "CGSt",
    selector: (row) => row.cgst,
  },
  {
    name: "SGST",
    selector: (row) => row.sgst,
  },
  {
    name: "tax_amount",
    selector: (row) => row.tax_amount,
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


    
      const data = menus.map((item,index)=>(
        {
          serialNo:index+1,
          id:item.id,
          image_urls:(<img src={item.image_urls[0]}/>),
          name:item.name,
          discounted_price:item.discounted_price,
          discount_percentage:item.discount_percentage,
          category:item.category,
          final_price:item.final_price,
          cgst:item.cgst,
          sgst:item.sgst,
          tax_amount:item.tax_amount,
          status:(item.is_available?<p className='bg-green-800  rounded-lg p-3'>Available</p>:<p className='bg-red-700 rounded-lg p-3'>Not Available</p>),
           view:( <button onClick={() => handleViewDetails(item)}>
                                       <FaEye size={25} />
                                     </button>),



        }
      ))

  return (
    <div className='w-[calc(100%-300px)] ml-[300px]  pt-30'>
    <div>
        <h1 className='font-bold text-3xl ml-5'>Menus</h1>
        </div>
        <div className='overflow-x mt-9'>
            <DataTable data={data} columns={columns} customStyles={customStyles} pagination fixedHeader fixedHeaderScrollHeight='67vh' defaultSortFieldId={1}/>
        </div>
  
</div>
  )
}

export default RestaurantMenu
