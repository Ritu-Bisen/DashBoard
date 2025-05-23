import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { getGymMember } from '../../Redux/Slices/gymSlice/gymMemberSlice';
import { fetchGymMemberApi } from '../../Redux/Api/gymApi/gymMemberApi';
import ViewGymMemberDetails from '../preview/ViewGymMemberDetails';

const GymMembersTable = () => {
  const {sellerDetails}=useSelector((state)=>state.seller)
  const {member}=useSelector((state)=>state.gymMember)

  const dispatch =useDispatch();

 useEffect(() => {
  dispatch(getGymMember(sellerDetails))
 }, [dispatch])
 

 const getMemberStatus = (placedAt) => {
  const placedDate = new Date(placedAt);
  const currentDate = new Date();

  const oneMonthLater = new Date(placedDate);
  oneMonthLater.setMonth(placedDate.getMonth() + 1);

  return currentDate < oneMonthLater ? <p className='bg-green-600 text-white px-4 py-2 rounded-lg font-semibold '>Active</p> : <p className='bg-red-600 text-white px-4 py-2 rounded-lg font-semibold '>Inactive</p>;
};



 const [isShowDetails, setIsShowDetails] = useState(false);
      const [showDetails, setShowDetails] = useState(null);
    
      const handleShowDetails = (member) => {
        setIsShowDetails(true);
        setShowDetails(member);
      };
    
      const handleCloseDetails = () => {
        setIsShowDetails(false);
      };

    const columns = [ {
        name: "S.no",
        selector: (row) => row.serialNo,
      },
      {
        name: "Order Id",
        selector: (row) => row.order_id,
      },
     
      {
        name: "Service",
        selector: (row) => row.service,
        width:"200px"
      },
      {
        name: "User Name",
        selector: (row) => row.name,
      },
       {
        name: "User Email",
        selector: (row) => row.email,
          width:"200px"
      },
      {
        name: "User Contact",
        selector: (row) => row.contact,
          width:"200px"
      },
      {
        name: "Price",
        selector: (row) => row.price,
      },
       {
        name: "Payment Method",
        selector: (row) => row.payment_method,
      },
       {
        name: "Payment Status",
        selector: (row) => row.payment_status,
      },
     
       {
        name: " Status",
        selector: (row) => row.status,
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

    
    
      const data = member.map((item,index)=>({
        serialNo:index+1,
        order_id:item.order_id.slice(0,8),
        service:item.gym_services.name,
name:item.orders.users.name,
email:item.orders.users.email,
contact:item.orders.users.phone_number,
price:item.price,
payment_method:item.orders.payment_method,
payment_status:item.orders.payment_status,
status: getMemberStatus(item.orders.placed_at), // Use your actual timestamp field here
  view: (
                     <button onClick={() => handleShowDetails(item)}>
                       <FaEye size={25} />
                     </button>
                   ),
      }))
    

  return (
    <div className='w-[calc(100%-300px)] ml-[300px]  pt-[120px]'>
        <div>
            <h1 className='font-bold text-3xl ml-5'>Member</h1>
            </div>
            <div className='overflow-x mt-9'>
                <DataTable data={data} columns={columns} customStyles={customStyles} pagination fixedHeader fixedHeaderScrollHeight='67vh' defaultSortFieldId={1}/>
            </div>
       {isShowDetails && (
        <>
          <div
            className="inset-0  z-50 bg-black/70 fixed"
            onClick={() => {
              setIsShowDetails(false);
            }}
          ></div>
          <div className="absolute z-[10000]">
            <ViewGymMemberDetails
              member={showDetails}
              onClose={handleCloseDetails}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default GymMembersTable
