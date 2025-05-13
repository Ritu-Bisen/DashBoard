import React from 'react'
import Carousel from '../UI/Carousel'
import { MdSportsGymnastics } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

const ViewGymWorkoutDetails = ({onClose,workout}) => {
  return (
     <div className="fixed bg-white rounded-xl w-full max-w-5xl max-h-[90vh] overflow-auto shadow-2xl top-1/2 left-1/2 transition -translate-x-1/2 -translate-y-1/2 z-50">
      {/* Header*/}
      <div className="bg-gradient-to-r from-red-400 to-red-500 sticky top-0 z-10 flex justify-between items-center px-6 py-2 border-b border-orange-300">
        <h3 className="font-bold text-2xl text-white flex items-center gap-2">
          <MdSportsGymnastics className="text-white" />
          Delivery Boy Details
        </h3>
        <button
          onClick={onClose}
          className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-1 transition-all duration-200"
          aria-label="Close"
        >
          <RxCross1 size={25} className="text-black font-bold" />
        </button>
      </div>
        <div className='flex'>
         {/* <img className='h-[60vh] w-100 object-cover' src={workout.image_urls}/> */}
            
              {/* Personal Details  */}
              <div>
               
                <table className="border-collapse bg-white rounded-lg overflow-hidden shadow-md mb-6 w-full">
                  <tbody>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">
                        Name
                      </th>
                      <td className="border border-gray-200 px-4 py-3 text-gray-800">
                        {workout.name}
                      </td>
                    </tr>
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">
                        Duration
                      </th>
                      <td className="border border-gray-200 px-4 py-3 text-gray-800 font-mono">
                        {workout.duration}
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">
                      Repetition
                      </th>
                      <td className="border border-gray-200 px-4 py-3 text-gray-800">
                        {workout.repetition}
                      </td>
                    </tr>
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">
                       Difficulty Level
                      </th>
                      <td className="border border-gray-200 px-4 py-3 text-gray-800">
                        {workout.difficulty_level}
                      </td>
                    </tr>
                  
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">
                        Muscles Target
                      </th>
                      <td className="border border-gray-200 px-4 py-3 text-gray-800">
                        {workout.muscles_targeted}
                      </td>
                    </tr> 
                     <tr>
            <th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">Benefits</th>
            <td className="border border-gray-200 px-4 py-3 text-gray-800"> {workout?.benefits.map((list, index) => (
                      <p key={index}>
                        <span className="font-bold">{index + 1}.</span> {list}
                      </p>
                    ))}</td>
        </tr>
                  </tbody>
                </table>
               
      </div>
              

        </div>
          <table >
      
        <tr>
            <th className="border-gray-300 border p-2 px-5">Description</th>
            <td className="border-gray-300 border p-2 px-5"> {workout.description} </td>
        </tr>
      </table>
    </div>
  )
}

export default ViewGymWorkoutDetails
