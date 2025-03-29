import React from 'react'
import DataTable from 'react-data-table-component';
import Header from '../Header';

const ProductManagement = () => {
const columns =[ 
    {
    name: 'id',
    selector: row => row.order_id,
    width:'300px',
   
    
},
{
    name: 'Category Id',
    selector: row => row.category_id,
    width:'300px',
   
},
{
    name: 'Name',
    selector: row => row.name,
    sortable: true,
},
{
    name: 'Discription',
    selector: row => row.description,
    
},
{
    name: 'Price',
    selector: row => row.price,
    
},
{
    name: 'Discount Percentage',
    selector: row => row.discount_percentage,
    
},
{
    name: 'Discount Price',
    selector: row => row.discount_price,
    width:'130px',
    
},
{
    name: 'Stock Quality',
    selector: row => row.stock_quantity,
   
},
{
    name: 'Benefits',
    selector: row => row.benefits,
    
},
{
    name: 'Product Image',
    selector: row => row.image_urls,
    
},
{
    name: 'Created at',
    selector: row => row.created_at,
    
},
{
    name: 'Updated',
    selector: row => row.updated_at,
   
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
      order_id: '0126e3cd-a4c3-43fe-947f-1cb5a05fa039',
      category_id: '120299e9-a35a-40bf-ba5a-3d5d38b8db85',
      name:'Green Beans',
      description:'Crisp and fibrous, these beans are great for stir-fries, curries, and as a healthy side.',
      price:'38.00',
      discount_percentage:'7.89',
      discount_price:'35.00',
      stock_quantity:'0',
      benefits:'["High in fiber", "Used in stir-fries and curries"]',
      image_urls:<img src="https://iltrrlubnqpzllzbogen.supabase.co/storage/v1/object/public/sections/mart/product_images/0126e3cd-a4c3-43fe-947f-1cb5a05fa039/Green%20Beans_png1.png" className='border h-15 w-15 items-center flex '/>,
      created_at:'2025-02-11 06:15:02.13553',
      updated_at:'2025-02-11 06:15:02.13553',
      status: <div className='m-auto'>{ productQuantity > 0 ? (<p className='bg-green-600 rounded-lg p-2'> Available </p>) : (<p className='bg-red-600 rounded-lg p-2'>Not Available</p>)} </div>
  },
)

  return (
    <div className="w-[calc(100%-300px)]"><Header/>
    <div className=' mt-25'>
        <div className='flex justify-between gap-3'>
        <h1 className="  ml-2  text-3xl font-bold ">Product Management</h1>
        <input className='border-2 border-gray-400 w-95 h-10 rounded-full p-3  ' placeholder='Search' type='text'/>
        </div>
      <div className='overflow-x mt-9' >
        <DataTable fixedHeader columns={columns} data={data} customStyles={customStyles} fixedHeaderScrollHeight="67vh"   pagination defaultSortFieldId={1} />
      </div>
    </div>
    </div>
  )
}

export default ProductManagement
