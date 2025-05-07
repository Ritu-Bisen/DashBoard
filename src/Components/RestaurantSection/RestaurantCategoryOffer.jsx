import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import DataTable from 'react-data-table-component';

import { getRestaurantCategory } from '../../Redux/Slices/restaurantSlice/restaurantCategorySlice';

const RestaurantCategoryOffer = () => {

    const { category } = useSelector((state) => state.restaurantCategory);
     const{sellerDetails}=useSelector((state)=>state.seller)
    console.log(category);
  
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getRestaurantCategory(sellerDetails.segment));
    }, [dispatch]);
  

    const columns = [
        {
          name: "Id",
          selector: (row) => row.category_id,
          width: "150px",
        },
        
        {
          name: "Icon",
          selector: (row) => row.icon,
        },
        {
          name: "Name",
          selector: (row) => row.name,
          sortable: true,
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

    //   const data = categories.map((item, index) => ({
    //     category_id: (item.id).slice(0,8),
    //     name: item.name,
    //     icon: <img src={item.icon} className="h-13 p-2 w-13 " />,
    
    //     banner_urls: <img src={item.banner_urls} className="py-1" />,
    //   }));


      const banner_data =category.filter((item)=>(item.banner_urls && item.banner_urls.length  !== 0))
      
      
      const data = banner_data.map((item)=>({
          category_id: (item.id).slice(0,8),
          name: item.name,
          icon: <img src={item.icon} className="h-13 p-2 w-13 " />,
          banner_urls: <div ><img  src={item.banner_urls[0]} className="py-1 relative h-25 w-50" /><p className='absolute z-10 p-2 bg-black bottom-1 text-white'> {item.banner_urls.length}</p></div>,
        }))
        
       

  return  (
    <div className='w-[calc(100%-300px)] ml-[300px]  pt-30'>
    <div>
        <h1 className='font-bold text-3xl ml-5'>Categories Offer</h1>
        </div>
        <div className='overflow-x mt-9'>
            <DataTable data={data} columns={columns} customStyles={customStyles} pagination fixedHeader fixedHeaderScrollHeight='67vh' defaultSortFieldId={1}/>
        </div>
  
</div>
  )
}

export default RestaurantCategoryOffer
