import React from 'react'
import Header from '../Header';
import DataTable from 'react-data-table-component';


const DeliveryBoyManaged = () => {
    const columns = [
        {
          name: "Id",
          selector: (row) => row.deliveryBoy_id,
          width: "150px",
        },
        
        {
          name: "Name",
          selector: (row) => row.name,
        },
        {
          name: "Date Of Birth",
          selector: (row) => row.dob,
         width:'200px'

        },
    
        {
          name: "Mobile No",
          selector: (row) => row.mobileNo,
        },
        {
            name: "City",
            selector: (row) => row.city,
          },
          {
            name: "Account No",
            selector: (row) => row.accountNo,
            width:'200px'
          },
          {
            name: "Driving License",
            selector: (row) => row.drivingLicense,
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
        dob:'18-02-2001',
        mobileNo:'3928487451',
        city:'Raipur',
        accountNo:'y4823921093100',
        drivingLicense:<img src='https://th.bing.com/th/id/OIP.E3UNwm389l_qdOdJ6zbhCAHaE8?w=275&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7'/>,
        status:<div className='space-x-2 text-white font-semibold'><button className='bg-green-700 h-10 w-20 rounded-lg'>Edit</button><button className='bg-red-700 h-10 w-20 rounded-lg'>Delete</button></div>,
      })

  return (
    <div className="w-[calc(100%-300px) ml-[300px]">
      <Header/>
      <div className='mt-25'>
        <div className='flex justify-between '> 
        <h1 className="  ml-2  text-3xl font-bold ">Delivery Boys Management</h1>
          <input className="border-2 border-gray-400 w-95 h-10 rounded-full p-3" type='text' placeholder='Search'/>
          </div>
       
        <div className='overflow-x mt-9'>
          <DataTable data={data} columns={columns} customStyles={customStyles} pagination fixedHeader fixedHeaderScrollHeight='67vh' defaultSortFieldId={1} />
        </div>
      </div>
      
    </div>
  )
}

export default DeliveryBoyManaged
