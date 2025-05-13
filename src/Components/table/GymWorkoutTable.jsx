import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGymWorkout } from '../../Redux/Slices/gymSlice/gymWorkoutSlice';
import DataTable from 'react-data-table-component';
import { FaEye } from 'react-icons/fa';
import ViewGymWorkoutDetails from '../preview/ViewGymWorkoutDetails';

const GymWorkoutTable = () => {
 const{workout}=useSelector((state)=>state.gymworkout)
    const dispatch =useDispatch();
    useEffect(()=>{
        dispatch(getGymWorkout())
    },[dispatch])

const [isShowDetails, setIsShowDetails] = useState(false);
  const [showDetails, setShowDetails] = useState(null);

  const handleShowDetails = (workout) => {
    setIsShowDetails(true);
    setShowDetails(workout);
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
      name: " Id",
      selector: (row) => row.id,
    },
    {
      name: "Image",
      selector: (row) => row.image,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      width:"250px"
    },
    {
      name: "Repetition",
      selector: (row) => row.repetition,
    },
   
    {
      name: "Duration",
      selector: (row) => row.duration,
    },
   
    {
      name: "View",
      selector: (row) => row.view,
      center: "true",
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

  const data = workout.map((item, index) => ({
      serialNo: index + 1,
      id: item.id.slice(0,8),
      image: <img src={item.image_urls[0]} />,
      name: item.name,
      repetition: item.repetition,
      duration:item.duration,
      view: (
        <button onClick={() => handleShowDetails(item)}>
          <FaEye size={25} />
        </button>
      ),
    }));

   


  return (
    <div className="w-[calc(100%-300px)] ml-[300px]  pt-30">
      <div>
        <h1 className="font-bold text-3xl ml-5">Workout</h1>
      </div>
      <div className="overflow-x mt-9">
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
        {isShowDetails && (
        <>
          <div
            className="inset-0  z-50 bg-black/70 fixed"
            onClick={() => {
              setIsShowDetails(false);
            }}
          ></div>
          <div className="absolute z-[10000]">
            <ViewGymWorkoutDetails
              workout={showDetails}
              onClose={handleCloseDetails}
            />
          </div>
        </>
      )}
    </div>
 
  )
}

export default GymWorkoutTable
