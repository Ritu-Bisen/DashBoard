import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
//import { getemployeeList } from '../../Redux/Slices/salonSlicees/salonEmployeeDataSlice';
import { FaEye } from "react-icons/fa";

// import ViewGymEmployeeDeatils from './ViewGymEmployeeDeatils';
// import { getGymemployeeList } from '../../Redux/Slices/gymSlice/gymEmployeeSlice';
import ViewMartEmployeeDetails from './ViewMartEmployeeDetails';
import { getmartEmployeeList } from '../../Redux/Slices/martEmployeeSlice';
import Header from './Header';

const EmployeeList = () => {
const [isShowDetail, setIsShowDetail] = useState(false);
    const [showEmployee, setShowEmployee] = useState(null);
  
    const handleViewDetails = (employees) => {
      setIsShowDetail(true);
      setShowEmployee(employees);
    };

    const handleEmployeeClose = () => {
      setIsShowDetail(false);
    };

const {employeeData} =useSelector((state)=>state.martEmployee)
console.log(employeeData);

const dispatch =useDispatch();

useEffect(() => {
  dispatch(getmartEmployeeList())
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
      {
        name: "View",
        selector: (row) => row.view,
        center:true,
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
        image:(<img className='h-15 w-15' src={item.profile_image_url}/>),
        role:item.role,
        active:(item.active === true ?
          (<p>Active</p>):(<p>Inactive</p>)),
        address:item.address,
        view:( <button onClick={() => handleViewDetails(item)}>
                      <FaEye size={25} />
                    </button>),
      }))
  return (
    <div className='fixed w-[calc(100%-300px)] ml-[300px]  pt-10'>
      <Header/>
      
    <h1 className=' font-bold text-3xl mt-15 ml-5'>Employees List</h1>
      <div className='overflow-x mt-9 '>
      <DataTable data={data} fixedHeaderScrollHeight='67vh' defaultSortFieldId={1} customStyles={customStyles} pagination fixedHeader columns={columns}/>
      </div> 
      {
          isShowDetail && (
            <>
              <div
                className="fixed inset-0 z-50 bg-black/70 "
                onClick={() => {
                  setIsShowDetail(false);
                }}
              ></div>
              <div className="absolute z-1000">
                <ViewMartEmployeeDetails
                  employeeData={showEmployee}
                  onClose={handleEmployeeClose}
                />
              </div>
            </>
          )} 
    </div>
  )
}

export default EmployeeList
