import React from 'react'
import Header from '../MartSection/Header';
import DataTable from 'react-data-table-component';

const DeliveryBoyCash = () => {
    const columns = [
        {
          name: "Id",
          selector: (row) => row.deliveryBoy_id,
          width: "100px",
        },
        
        {
          name: "Name",
          selector: (row) => row.name,
        },
        {
          name: "Mobile No.",
          selector: (row) => row.mobile_no,
       

        },
    
        {
          name: "Order Id",
          selector: (row) => row.order_id,
        },
        {
            name: "Order Amount",
            selector: (row) => row.order_amount,
          },
          {
            name: "type",
            selector: (row) => row.type,
            width:'200px'
          },
          {
            name: "Date And Time",
            selector: (row) => row.dateandtime,
          },
          {
            name: "Status",
            selector: (row) => row.status,
            width:'200px'
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


      const data =Array(25).fill({
        deliveryBoy_id:'8743yfie',
        name:'Rohan',
        mobile_no:'3928487451',
        order_id:'cd1114',
        order_amount:'y4823921093100',
        type:'cod',
        dateandtime:'18-09-2020,11:00',
        status:<div className='space-x-2 text-white font-semibold'><button className='bg-green-700 h-10 w-20 rounded-lg'>Paid</button><button className='bg-red-700 h-10 w-20 rounded-lg'>Pending</button></div>,
      })

  return (
    <div className='w-[calc(100%-300px)] ml-[300px]'>
        <Header/>
      <div className='mt-25'>
        <div className='flex justify-between'>
        <h1 className=' ml-2  text-3xl font-bold'>Delivery Boy Cash</h1>
        <input className='border-2 border-gray-400 w-95 h-10 rounded-full p-3' type='text'  placeholder='Search'/>
        </div>
        <div className='mt-9'>
            <DataTable columns={columns} data={data} customStyles={customStyles} fixedHeader fixedHeaderScrollHeight='67vh' defaultSortFieldId={1}/>
        </div>
      </div>
    </div>
  )
}

export default DeliveryBoyCash
