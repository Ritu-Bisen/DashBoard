import React, { useEffect } from 'react'
import DataTable from 'react-data-table-component';
import { FaEye } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantCategory } from '../../Redux/Slices/restaurantSlice/restaurantCategorySlice';
import { fetchRestaurantCategoryApi } from '../../Redux/Api/restaurantApi/restaurantCategoryApi';

const RestaurantCategory = () => {
    const { category } = useSelector((state) => state.restaurantCategory);
    const{sellerDetails}=useSelector((state)=>state.seller)
    const dispatch =useDispatch();
    useEffect(() => {
     dispatch(getRestaurantCategory(sellerDetails.segment))
    }, [dispatch])
    
    console.log(fetchRestaurantCategoryApi());
   
    
    
      const columns = [ {
        name: "S.no",
        selector: (row) => row.serialNo,
      },
       {
        name: "Icon",
        selector: (row) => row.icon,
      },
    
      {
        name: "Id",
        selector: (row) => row.id,
      }, {
        name: "Name",
        selector: (row) => row.name,
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
    
    
        
          const data = category.map((item,index)=>({
            serialNo:index+1,
            id:(item.id).slice(0,8),
            name:item.name,
            icon:(<img src={item.icon} className='h-15 w-15'/>),
          }))
          
          
  return (
    <div className='w-[calc(100%-300px)] ml-[300px]  pt-30'>
    <div>
        <h1 className='font-bold text-3xl ml-5'>Categories</h1>
        </div>
        <div className='overflow-x mt-9'>
            <DataTable data={data} columns={columns} customStyles={customStyles} pagination fixedHeader fixedHeaderScrollHeight='67vh' defaultSortFieldId={1}/>
        </div>
  
</div>
  )
}

export default RestaurantCategory
