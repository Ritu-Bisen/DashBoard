import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getGymOrders } from '../../Redux/Slices/gymSlice/gymOrdersSlice';
import DataTable from 'react-data-table-component';
import { FaEye } from 'react-icons/fa';
import ViewGymReportDetails from '../preview/ViewGymReportDetails';

const GymReportTable = () => {
  
    const {gymOrders} = useSelector((state)=>state.gymOrders)
     const{sellerDetails}=useSelector((state)=>state.seller)
    const dispatch = useDispatch();

    useEffect(() => {
    dispatch(getGymOrders(sellerDetails))
    }, [dispatch])

    console.log(gymOrders);
      const [isShowDetails, setIsShowDetails] = useState(false);
           const [showDetails, setShowDetails] = useState(null);
           const [selectedDate, setSelectedDate] = useState('');

         
           const handleShowDetails = (orderId) => {
             setIsShowDetails(true);
             setShowDetails(orderId);
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
        name: "Total Amount",
        selector: (row) => row.total_amount,
      },
       {
        name: "View",
        selector: (row) => row.view,
        center:true,
      },
       {
        name: "Date",
        selector: (row) => row.date,
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

  

   const data = gymOrders
  .filter(item => item.payment_status === "paid")
  .filter(item => {
    if (!selectedDate) return true;
    const itemDate = new Date(item.placed_at).toISOString().split('T')[0];
    return itemDate === selectedDate;
  })
  .map((item, index) => ({
    serialNo: index + 1,
    order_id: item.id.slice(0, 8),
    total_amount: item.total_amount,
    date: new Date(item.placed_at).toISOString().split('T')[0],
    view: (
      <button onClick={() => handleShowDetails(item.id)}>
        <FaEye size={25} />
      </button>
    ),
  }));


  return (
    <div className='w-[calc(100%-300px)] ml-[300px]  pt-[120px]'>
      <div className='flex justify-between p-7'>
            <h1 className='font-bold text-3xl ml-5'>Reports</h1>
        <input
  className='h-10 w-80 p-5 border-gray-300 border-2 rounded-full'
  type='date'
  value={selectedDate}
  onChange={(e) => setSelectedDate(e.target.value)}
/>


            </div>
            <div className='overflow-x '>
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
            <ViewGymReportDetails
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

export default GymReportTable
