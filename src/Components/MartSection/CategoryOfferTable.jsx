import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../Redux/Slices/categoriesSlice';
import DataTable from 'react-data-table-component';
import Header from '../MartSection/Header';

const CategoryOfferTable = () => {

    const { categories } = useSelector((state) => state.category);
     const{sellerDetails}=useSelector((state)=>state.seller)
    console.log(categories);
  
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getCategories(sellerDetails.segment));
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

   


      const banner_data =categories.filter((item)=>(item.banner_urls && item.banner_urls.length  !== 0))
      
      
      const data = banner_data.map((item,index)=>({
          category_id: (item.id).slice(0,8),
          name: item.name,
          icon: <img src={item.icon} className="h-13 p-2 w-13 " />,
          banner_urls: <div ><img src={item.banner_urls[0]} className="py-1 relative h-25 w-50" /><p className='absolute z-10 p-2 bg-black bottom-1 text-white'> {item.banner_urls.length}</p></div>,
        }))
        
        console.log(data);

  return (
    <div className="w-[calc(100%-300px) ml-[300px]">
   
      <div className=" pt-[120px]">
       
          <h1 className="  ml-2  text-3xl font-bold ">Category Offers</h1>
         
   
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
  )
}

export default CategoryOfferTable
