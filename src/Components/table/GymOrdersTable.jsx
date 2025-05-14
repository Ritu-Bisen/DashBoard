import React, { useEffect, useState } from 'react'
import { fetchGymOrdersApi } from '../../Redux/Api/gymApi/gymOrderApi';
import { useDispatch, useSelector } from 'react-redux';
import { getGymOrders } from '../../Redux/Slices/gymSlice/gymOrdersSlice';
import DataTable from 'react-data-table-component';
import { FaEye } from 'react-icons/fa';
import ViewGymOrdersDetails from '../preview/ViewGymOrdersDetails';

const GymOrdersTable = () => {
    const {gymOrders} = useSelector((state)=>state.gymOrders)
    const{sellerDetails}=useSelector((state)=>state.seller)
    const dispatch = useDispatch();
console.log(gymOrders);

    useEffect(() => {
    dispatch(getGymOrders(sellerDetails))
    }, [dispatch])
   
  const [isShowDetails, setIsShowDetails] = useState(false);
      const [showDetails, setShowDetails] = useState(null);
    
      const handleShowDetails = (orderId) => {
        setIsShowDetails(true);
        setShowDetails(orderId);
      };
    
      const handleCloseDetails = () => {
        setIsShowDetails(false);
      };
    

 const columns = [
     {
       name: "S.no",
       selector: (row) => row.serialNo,
     },
     {
       name: "Order Id",
       selector: (row) => row.order_id,
       width: "300px",
     },
     {
       name: "User Name",
       selector: (row) => row.user_name,
        width: "180px",
     },
     {
       name: "User Contact",
       selector: (row) => row.user_contact,
       width: "150px",
     },
     {
       name: "Total Amount",
       selector: (row) => row.total_amount,
       width: "120px",
     },
 
     {
       name: "Payment Status",
       selector: (row) => row.payment_status,
       width: "150px",
     },
     {
       name: "Order Status",
       selector: (row) => row.order_status,
       width: "120px",
     },
     {
       name: "Payment Method",
       selector: (row) => row.payment_method,
       width: "150px",
     },
     {
       name: "Address",
       selector: (row) => row.address,
       width: "350px",
     },
 
     {
       name: "View",
       selector: (row) => row.view,
       center:true,
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
 
   const data = gymOrders.map((item, index) => ({
     serialNo: index + 1,
     order_id: item.id,
       user_name: item.users.name,
       user_contact: item.users.phone_number,
      total_amount: item.total_amount,
      payment_status: item.payment_status,
      order_status: item.order_status,
      payment_method: item.payment_method,
      address: item.address,
 
     view: (
       <button onClick={() => handleShowDetails(item.id)}>
         <FaEye size={25} />
       </button>
     ),
   }));
    

    
    
  return (
    <div className='w-[calc(100%-300px)] ml-[300px]  pt-30'>
       <div>
            <h1 className='font-bold text-3xl ml-5'>Orders</h1>
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
            <ViewGymOrdersDetails
              orderId={showDetails}
              sellerDetails={sellerDetails}
              onClose={handleCloseDetails}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default GymOrdersTable
