import React from 'react'
import DataTable from 'react-data-table-component';

const SalonEmployeeList = () => {
    const columns = [ {
        name: "S.no",
        selector: (row) => row.serialNo,
      },
      {
        name: "Order Id",
        selector: (row) => row.order_id,
      },
      {
        name: "Date,Time",
        selector: (row) => row.date_time,
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
        selector: (row) => row.discount_percentage,
      },
      {
        name: "Discounted Price",
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
        date_time: (
            <p className="flex flex-col">
              12/03/2025<span>12:40 pm</span>
            </p>
          ),
           name:"name",
        mrp:'100',
        discounted_price:"discounted_price",
        discount_percentage:"discount_percentage",
        category:"Haircut",
        final_price:"200",
        status:(quantity>0?<p className='bg-green-800  rounded-lg p-3'>Available</p>:<p className='bg-red-700 rounded-lg p-3'>Not Available</p>),
        
      })
  return (
    <div className='fixed w-[calc(100%-300px)] ml-[300px]  pt-30'>
    <h1 className=' font-bold text-3xl ml-5'>Services</h1>
      <div className='overflow-x mt-9'>
      <DataTable data={data} fixedHeaderScrollHeight='67vh' defaultSortFieldId={1} customStyles={customStyles} pagination fixedHeader columns={columns}/>
      </div>  
    </div>
  )
}

export default SalonEmployeeList
