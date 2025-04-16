import React, { useEffect } from 'react'
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { getemployeeList } from '../../Redux/Slices/salonSlicees/salonEmployeeDataSlice';

const SalonEmployeeList = () => {

const {employeeData} =useSelector((state)=>state.employeeDetail)
console.log(employeeData);

const dispatch =useDispatch();

useEffect(() => {
  dispatch(getemployeeList())
}, [dispatch])


    const columns = [ {
        name: "S.no",
        selector: (row) => row.serial_no,
      },
      {
        name: "Employee Id",
        selector: (row) => row.employee_id,
      },
      {
        name: "Name",
        selector: (row) => row.name,
      },
      {
        name: "Email",
        selector: (row) => row.email,
      },
      {
        name: "Phone No",
        selector: (row) => row.phone,
      },
      {
        name: "Role",
        selector: (row) => row.role,
      },
     
      {
        name: "Address",
        selector: (row) => row.address,
      },
      
      {
        name: "Profile",
        selector: (row) => row.image,
        center:"true",
      },
       {
        name: "Active",
        selector: (row) => row.active,
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
    
      const data = employeeData.map((item,index)=>({
        serial_no:index+1,
        employee_id:item.id,
        name:item.name,
        phone:item.phone,
        email:item.email,
        role:item.role,
        active:item.active,
        image:<img src={item.profile_image_url }/>,
        address:item.address,


      }))
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
