import React from 'react'
import DataTable from 'react-data-table-component';
import { FaEye } from "react-icons/fa";

const GymMembers = () => {
    const columns = [ {
        name: "S.no",
        selector: (row) => row.serialNo,
      },
      {
        name: "Order Id",
        selector: (row) => row.order_id,
      },
      {
        name: "Image",
        selector: (row) => row.image,
      },
      {
        name: "Name",
        selector: (row) => row.name,
      },
      {
        name: "MRP",
        selector: (row) => row.mrp,
      },
      {
        name: "Discount %",
        selector: (row) => row.discounted_price,
      },
      {
        name: "Category",
        selector: (row) => row.category,
      },
      {
        name: "Final Price",
        selector: (row) => row.final_price,
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
    
      const data = Array(25).fill({
        serialNo:'1',
        order_id:'5767t7gugh',
        image:(<img src='https://th.bing.com/th/id/OIP.E3UNwm389l_qdOdJ6zbhCAHaE8?w=275&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7'/>),
        name:'rahul',
        mrp:'100',
        discounted_price:'10',
        category:"Haircut",
        final_price:"200",
        status:(quantity>0?<p className='bg-green-800  rounded-lg p-3'>Available</p>:<p className='bg-red-700 rounded-lg p-3'>Not Available</p>),
        view:(<FaEye size={25}/>)
      })
    

  return (
    <div className='w-[calc(100%-300px)] ml-[300px]  pt-30'>
        <div>
            <h1 className='font-bold text-3xl ml-5'>Member</h1>
            </div>
            <div className='overflow-x mt-9'>
                <DataTable data={data} columns={columns} customStyles={customStyles} pagination fixedHeader fixedHeaderScrollHeight='67vh' defaultSortFieldId={1}/>
            </div>
      
    </div>
  )
}

export default GymMembers
