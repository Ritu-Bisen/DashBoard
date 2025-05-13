import React, { useEffect } from 'react'
import { fetchGymOrdersApi } from '../../Redux/Api/gymApi/gymOrderApi';
import { useDispatch, useSelector } from 'react-redux';
import { getGymOrders } from '../../Redux/Slices/gymSlice/gymOrdersSlice';
import DataTable from 'react-data-table-component';
import { FaEye } from 'react-icons/fa';

const GymOrdersTable = () => {
    const {gymOrders} = useSelector((state)=>state.gymOrders)
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(getGymOrders())
    }, [dispatch])
   
 
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
     },
     {
       name: "User Contact",
       selector: (row) => row.user_contact,
       width: "150px",
     },
     {
       name: "Order Type",
       selector: (row) => row.order_type,
     },
     {
       name: "Quantity",
       selector: (row) => row.quantity,
     },
     {
       name: "Product Name",
       selector: (row) => row.product_name,
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
       width: "300px",
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
 
    //  quantity: item.quantity,
      user_name: item.users.name,
      user_contact: item.users.phone_number,
 
    //  product_name: item.name,
 
    //  order_type: item.orders.order_type,
    //  total_amount: item.orders.total_amount,
    //  payment_status: item.orders.payment_status,
    //  order_status: item.orders.order_status,
    //  payment_method: item.orders.payment_method,
    //  address: item.orders.address,
 
     view: (
       <button onClick={() => handleViewDetails(item)}>
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

    </div>
  )
}

export default GymOrdersTable
