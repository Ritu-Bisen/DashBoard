import React from 'react'
import DataTable from 'react-data-table-component'
import Header from '../Header';

const CategoryManagement = () => {

    const columns =[ 
        {
        name: 'id',
        selector: row => row.category_id,
        width:'300px',
       
        
      },
      {
        name: 'Name',
        selector: row => row.name,
        sortable: true,
       
      },
      {
        name: 'Icon',
        selector: row => row.icon,
       
      },
      {
        name: 'Section',
        selector: row => row.section,
        
      },
      {
        name: 'Banner',
        selector: row => row.banner_urls,
        
      },
      {
        name: 'Description',
        selector: row => row.descriptions,
        
      },
      
      {
        name: 'Status',
        selector: row => row.status,
        center:'true'
       
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
            justifyContent: 'center'
          },
        },
        cells: {
            style: {
                '&:not(:last-of-type)': {
                    borderRightStyle: 'solid',
                    borderRightWidth: '1px',
                    borderRightColor:'gray',
                    justifyContent: 'center'
                },
            },
        },
      };
    
      const productQuantity = 10

      const data = Array(25).fill(
        {
          category_id: '02fc7211-9f9a-4c0c-ac18-9e0f18ab288e',
          name:'Men',
          icon:<img src='https://iltrrlubnqpzllzbogen.supabase.co/storage/v1/object/public/sections/salon/category_icons/02fc7211-9f9a-4c0c-ac18-9e0f18ab288e/electric-razor%20black.png' className='h-13 p-2 w-13 '/>,
          section:'salon',
          banner_urls:<img src="https://iltrrlubnqpzllzbogen.supabase.co/storage/v1/object/public/sections/mart/banners/120299e9-a35a-40bf-ba5a-3d5d38b8db85/mart%203.jpg" className='py-1' />,
          descriptions:'NULL',
          status: <div className='m-auto'>{ productQuantity > 0 ? (<p className='bg-green-600 rounded-lg p-2'> Available </p>) : (<p className='bg-red-600 rounded-lg p-2'>Not Available</p>)} </div>
      },
      )

  return (
    <div className='w-[calc(100%-300px)'>
        <Header/>
    <div className=' mt-25'>
        <div className='flex justify-between gap-3'>
        <h1 className="  ml-2  text-3xl font-bold ">Category Management</h1>
        <input className='border-2 border-gray-400 w-95 h-10 rounded-full p-3  ' placeholder='Search' type='text'/>
        </div>
      <div className='overflow-x mt-9' >
       <DataTable fixedHeader columns={columns} data={data} customStyles={customStyles} pagination fixedHeaderScrollHeight='67vh'  defaultSortFieldId={1}/>
      </div>
    </div>
    </div>
  )
}

export default CategoryManagement
