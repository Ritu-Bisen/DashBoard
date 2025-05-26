import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGymOrders } from '../../Redux/Slices/gymSlice/gymOrdersSlice';
import DataTable from 'react-data-table-component';
import { FaEye } from 'react-icons/fa';
import ViewGymReportDetails from '../preview/ViewGymReportDetails';
import { getGymMember } from '../../Redux/Slices/gymSlice/gymMemberSlice';

const GymReportTable = () => {
  const dispatch = useDispatch();
  const { gymOrders } = useSelector((state) => state.gymOrders);
  const { sellerDetails } = useSelector((state) => state.seller);
  const { member } = useSelector((state) => state.gymMember);

  const [isShowDetails, setIsShowDetails] = useState(false);
  const [showDetails, setShowDetails] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [active, setActive] = useState('product'); // Default to product (gymOrders)

  useEffect(() => {
    if (active === 'product') {
      dispatch(getGymOrders(sellerDetails));
    } else if (active === 'member') {
      dispatch(getGymMember(sellerDetails));
    }
  }, [dispatch, active, sellerDetails]);

  const handleShowDetails = (orderId) => {
    setIsShowDetails(true);
    setShowDetails(orderId);
  };

  const handleCloseDetails = () => {
    setIsShowDetails(false);
  };

  const columns = [
    { name: 'S.no', selector: (row) => row.serialNo },
    { name: 'Order Id', selector: (row) => row.order_id },
    { name: 'Total Amount', selector: (row) => row.total_amount },
   
    {
      name: 'Date',
      selector: (row) => row.date,
      center: true,
    }, {
      name: 'View',
      selector: (row) => row.view,
      center: true,
    },
  ];

  const memberColumns = [
    { name: 'S.no', selector: (row) => row.serialNo },
    { name: 'Order Id', selector: (row) => row.id },
      { name: 'Service', selector: (row) => row.service },
    { name: 'Member Name', selector: (row) => row.name },
    { name: 'Total Amount', selector: (row) => row.price },
    { name: 'Joined Date', selector: (row) => row.date },
  ];

  const customStyles = {
    headCells: {
      style: {
        borderBottom: '1px solid black',
        borderRight: '1px solid gray',
        backgroundColor: '#f4f4f4',
        fontWeight: 'bold',
        borderTop: '1px solid black',
        justifyContent: 'center',
      },
    },
    cells: {
      style: {
        '&:not(:last-of-type)': {
          borderRightStyle: 'solid',
          borderRightWidth: '1px',
          borderRightColor: 'gray',
          justifyContent: 'center',
        },
      },
    },
  };

  // Data for orders
  const orderData = gymOrders
    ?.filter((item) => item.payment_status === 'paid')
    .filter((item) => {
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

  // Data for members
  const memberData = member?.map((item, index) => ({
    serialNo: index + 1,
    id:item.id,
    name: item.orders.users.name,
    service: item.gym_services.name,
    price: item.price,
    date: new Date(item.gym_services.created_at).toISOString().split('T')[0],
  }));

  return (
    <div className="w-[calc(100%-300px)] ml-[300px] pt-[120px]">
        <div className="flex justify-between pt-4 mr-7">
        <h1 className="font-bold text-3xl ml-5">Reports</h1>
        <input
          className="h-10 w-80 p-5 border-gray-300 border-2 rounded-full"
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      <div className="flex bg-gray-200 w-50 px-2 py-2 rounded-full m-5 justify-between">
        <button
          type="button"
          className={`rounded-full px-2 text-lg font-semibold ${
            active === 'product' ? 'bg-white text-green-500' : 'text-black'
          }`}
          onClick={() => setActive('product')}
        >
          Product
        </button>
        <button
          type="button"
          className={`rounded-full px-2 text-lg font-semibold ${
            active === 'member' ? 'bg-white text-green-500' : 'text-black'
          }`}
          onClick={() => setActive('member')}
        >
          Member
        </button>
      </div>

    
      <div className="overflow-x">
        <DataTable
          data={active === 'product' ? orderData : memberData}
          columns={active === 'product' ? columns : memberColumns}
          customStyles={customStyles}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="67vh"
          defaultSortFieldId={1}
        />
      </div>

      {isShowDetails && (
        <>
          <div
            className="inset-0 z-50 bg-black/70 fixed"
            onClick={handleCloseDetails}
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
  );
};

export default GymReportTable;
