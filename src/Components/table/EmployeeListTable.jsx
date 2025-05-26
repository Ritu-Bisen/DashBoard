import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { FaEye } from "react-icons/fa";
import { getEmployeeDetails, getNotVerifiedEmployee, getVerifiedEmployee } from '../../Redux/Slices/employeeSlice';
import ViewEmployeeDetails from '../preview/ViewEmployeeDetails';

const EmployeeListTable = () => {
  const [active, setActive] = useState("all");

const [isShowDetail, setIsShowDetail] = useState(false);
    const [showEmployee, setShowEmployee] = useState(null);
  
    const handleViewDetails = (employees) => {
      setIsShowDetail(true);
      setShowEmployee(employees);
    };

    const handleEmployeeClose = () => {
      setIsShowDetail(false);
    };

const {employees} =useSelector((state)=>state.employee)
 const { sellerDetails } = useSelector((state) => state.seller);


const dispatch =useDispatch();

useEffect(() => {
  dispatch(getEmployeeDetails(sellerDetails))
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
        name: "Profile",
        selector: (row) => row.image,
        center:"true",
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
        name: "Active",
        selector: (row) => row.active,
      },
      {
        name: "Status",
        selector: (row) => row.status,
        width: "140px",
        centre: true,
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
    
      const data = employees.map((item,index)=>({
        serial_no:index+1,
        employee_id:item.id.slice(0,8),
        name:item.name,
        phone:item.phone,
        email:item.email,
        image:(<img className='h-25 w-25' src={item.profile_image_url}/>),
        role:item.role,
        active:(item.active === true ?
          (<p>Active</p>):(<p>Inactive</p>)),
        address:item.address,
        status: (
          <div className="inline-flex items-center text-white justify-center gap-1 w-full">
            {item.is_verified === true ? (
              <p className="bg-green-600 cursor-pointer text-lg rounded-lg px-3">
               Verified
              </p>
            ) : (
              <p className="bg-red-600 cursor-pointer text-lg rounded-lg px-3">
                Not Verified
              </p>
            )}
          </div>
        ),
        view:( <button onClick={() => handleViewDetails(item)}>
                      <FaEye size={25} />
                    </button>),
      }))
  return (
    <div className='fixed w-[calc(100%-300px)] ml-[300px]  pt-[120px]'>
    
      
    <h1 className=' font-bold text-3xl ml-5'>Employees List</h1>

    <div className="flex bg-gray-200 w-75 px-2 py-2 rounded-full m-5 justify-between">
      <button
        type="button"
        className={`rounded-full px-2 text-lg font-semibold ${
          active === "all" ? "bg-white text-black" : "text-black"
        }`}
        onClick={() => {
          setActive("all");
         dispatch(getEmployeeDetails(sellerDetails));
        }}
      >
        All
      </button>
      <button
        type="button"
        className={`rounded-full px-2 text-lg font-semibold ${
          active === "verified" ? "bg-white text-green-500" : "text-black"
        }`}
        onClick={() => {
          setActive("verified");
          dispatch(getVerifiedEmployee(sellerDetails));
        }}
      >
        Verified
      </button>
      <button
        type="button"
        className={`rounded-full px-2 text-lg font-semibold ${
          active === "notVerified" ? "bg-white text-red-500" : "text-black"
        }`}
        onClick={() => {
          setActive("notVerified");
         dispatch(getNotVerifiedEmployee(sellerDetails));
        }}
      >
       Not Verified
      </button>
    </div>

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
                <ViewEmployeeDetails
                  employeeData={showEmployee}
                  onClose={handleEmployeeClose}
                />
              </div>
            </>
          )} 
    </div>
  )
}

export default EmployeeListTable
