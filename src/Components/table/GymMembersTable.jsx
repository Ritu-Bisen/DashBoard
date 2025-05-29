import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { FaEye } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getGymMember } from '../../Redux/Slices/gymSlice/gymMemberSlice';
import ViewGymMemberDetails from '../preview/ViewGymMemberDetails';

const GymMembersTable = () => {
  const dispatch = useDispatch();
  const { sellerDetails } = useSelector((state) => state.seller);
  const { member } = useSelector((state) => state.gymMember);

  const [isShowDetails, setIsShowDetails] = useState(false);
  const [showDetails, setShowDetails] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all'); // all, active, inactive

  useEffect(() => {
    dispatch(getGymMember(sellerDetails));
  }, [dispatch, sellerDetails]);

  const handleShowDetails = (member) => {
    setIsShowDetails(true);
    setShowDetails(member);
  };

  const handleCloseDetails = () => {
    setIsShowDetails(false);
  };

  // Utility to check if membership is active
  const isMemberActive = (placedAt) => {
    const placedDate = new Date(placedAt);
    const oneMonthLater = new Date(placedDate);
    oneMonthLater.setMonth(placedDate.getMonth() + 1);
    return new Date() < oneMonthLater;
  };

  const filteredMembers = member.filter((item) => {
    if (filterStatus === 'active') return isMemberActive(item.orders.placed_at);
    if (filterStatus === 'inactive') return !isMemberActive(item.orders.placed_at);
    return true;
  });

  const data = filteredMembers.map((item, index) => ({
    serialNo: index + 1,
    order_id: item.order_id.slice(0, 8),
    service: item.gym_services.name,
    name: item.orders.users.name,
    email: item.orders.users.email,
    contact: item.orders.users.phone_number,
    price: item.price,
    payment_method: item.orders.payment_method,
    payment_status: item.orders.payment_status,
    status: isMemberActive(item.orders.placed_at) ? (
      <p className="font-semibold text-sm m-2 bg-green-600 py-1 px-4 rounded-lg text-white">
        Active
      </p>
    ) : (
      <p className="font-semibold text-sm m-2 bg-red-600 py-1 px-3 rounded-lg text-white">
        Inactive
      </p>
    ),
    view: (
      <button onClick={() => handleShowDetails(item)}>
        <FaEye size={20} />
      </button>
    ),
  }));

  const columns = [
    {
      name: 'S.no',
      selector: (row) => row.serialNo,
      width: '65px',
    },
    {
      name: 'Order Id',
      selector: (row) => row.order_id,
      width: '100px',
    },
    {
      name: 'Service',
      selector: (row) => row.service,
      width: '200px',
    },
    {
      name: 'User Name',
      selector: (row) => row.name,
      width: '150px',
    },
    {
      name: 'User Email',
      selector: (row) => row.email,
      width: '200px',
    },
    {
      name: 'User Contact',
      selector: (row) => row.contact,
      width: '150px',
    },
    {
      name: 'Price',
      selector: (row) => row.price,
      width: '90px',
    },
    {
      name: 'Payment Method',
      selector: (row) => row.payment_method,
    },
    {
      name: 'Payment Status',
      selector: (row) => row.payment_status,
    },
    {
      name: 'Status',
      selector: (row) => row.status,
    },
    {
      name: 'View',
      selector: (row) => row.view,
      center: true,
      width: '70px',
    },
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

  return (
    <div className="w-[calc(100%-300px)] ml-[300px] pt-[120px]">
      <div className='flex justify-between mr-10'>
        <h1 className="font-bold text-3xl ml-5">Member</h1>
          <div className="flex bg-gray-200 rounded-full px-2 py-2 justify-between w-[30vh]">
         <button
          className={`rounded-full px-2 text-lg font-semibold ${
            filterStatus === 'all' ? "bg-white" : "text-black"
          }`}
          onClick={() => setFilterStatus('all')}
        >
          All
        </button>
        <button
          className={` rounded-full px-2 text-lg font-semibold  ${
            filterStatus === 'active' ? "bg-white text-green-500" : "text-black"
          }`}
          onClick={() => setFilterStatus('active')}
        >
          Active
        </button>
        <button
          className={`rounded-full px-2 text-lg font-semibold ${
            filterStatus === 'inactive' ?"bg-white text-red-500" : "text-black"
          }`}
          onClick={() => setFilterStatus('inactive')}
        >
          Inactive
        </button>
       
      </div>
      </div>

      {/* Filter Buttons */}
    

      {/* Table */}
      <div className="overflow-x mt-4">
        <DataTable
          data={data}
          columns={columns}
          customStyles={customStyles}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="67vh"
          defaultSortFieldId={1}
        />
      </div>

      {/* Details Modal */}
      {isShowDetails && (
        <>
          <div
            className="inset-0 z-50 bg-black/70 fixed"
            onClick={() => setIsShowDetails(false)}
          ></div>
          <div className="absolute z-[10000]">
            <ViewGymMemberDetails member={showDetails} onClose={handleCloseDetails} />
          </div>
        </>
      )}
    </div>
  );
};

export default GymMembersTable;
