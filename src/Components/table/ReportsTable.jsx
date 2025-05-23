import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getReports } from '../../Redux/Slices/ReportsSlice'

const ReportsTable = () => {
    const  {reports}=useSelector((state)=>state.report)
    const{sellerDetails}=useSelector((state)=>state.seller)
    const dispatch =useDispatch()
    useEffect(()=>{
dispatch(getReports(sellerDetails))
    },[dispatch])
    console.log(reports);

      const columns = [ {
        name: "S.no",
        selector: (row) => row.serialNo,
      },
      {
        name: "Order Id",
        selector: (row) => row.order_id,
      },
        {
        name: "Product",
        selector: (row) => row.product,
      },
     
   
     
      {
        name: "Total Amount",
        selector: (row) => row.total_amount,
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

    
  return (
    <div>
      
    </div>
  )
}

export default ReportsTable
