import React from 'react'
import DataTable from 'react-data-table-component';
import Header from '../Header';

const DeliveryBoyRequest = () => {

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
        status:<div className='space-x-2 text-white font-semibold'><button className='bg-green-700 h-10 w-20 rounded-lg'>Approval</button><button className='bg-red-700 h-10 w-20 rounded-lg'>Reject</button></div>,
      })

  return (
    <div  className="w-[calc(100%-300px)] ml-[300px]">
        <Header/>
        <div className='mt-25'>
        <div className="flex justify-between gap-3">
          <h1 className="  ml-2  text-3xl font-bold ">Delivery Boys Request</h1>
          <input
            className="border-2 border-gray-400 w-95 h-10 rounded-full p-3"
            placeholder="Search"
            type="text"
          />
        </div>
        <div className='overflow-x mt-9'>
            <DataTable fixedHeader columns={columns} data={data} pagination customStyles={customStyles} defaultSortFieldId={1} fixedHeaderScrollHeight='67vh' />

        </div>
             
             </div>
    
    </div>
  ) 
}

export default DeliveryBoyRequest
