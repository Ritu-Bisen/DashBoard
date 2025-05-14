import React from 'react'
import { RxCross1 } from 'react-icons/rx'
import Carousel from '../UI/Carousel'
import { IoNutritionOutline } from "react-icons/io5";

const ViewGymNutritionDetails = ({onClose,nutrition}) => {
  
  return (
     <div className="fixed bg-white rounded-xl w-full max-w-5xl max-h-[90vh] overflow-auto shadow-2xl top-1/2 left-1/2 transition -translate-x-1/2 -translate-y-1/2 z-50">
         
          <div className="bg-gradient-to-r from-red-400 to-red-500 sticky top-0 z-10 flex justify-between items-center px-6 py-2 border-b border-orange-300">
            <h3 className="font-bold text-2xl text-white flex items-center gap-2">
              <IoNutritionOutline className="text-white" />
              Nutritions Details
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
    
            
              {/* Personal Details  */}
             
               
                <table className="border-collapse bg-white rounded-lg overflow-hidden shadow-md mb-6 w-full">
                  <tbody>
                    <tr >
                      <th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">
                        Name
                      </th>
                      <td className="border border-gray-200 px-4 py-3 text-gray-800">
                        {nutrition.name}
                      </td>
                    </tr>
                      <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">
                       Id
                      </th>
                      <td className="border border-gray-200 px-4 py-3 text-gray-800 font-mono">
                        {nutrition.id}
                      </td>
                    </tr>
                    <tr >
                      <th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">
                     Calories
                      </th>
                      <td className="border border-gray-200 px-4 py-3 text-gray-800">
                        {nutrition.calories}
                      </td>
                    </tr>
                         <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">
                      Serving
                      </th>
                      <td className="border border-gray-200 px-4 py-3 text-gray-800">
                        {nutrition.serving}
                      </td>
                    </tr>
                  
                    <tr >
                      <th className="border border-gray-200 px-4 py-3 text-left text-gray-600 font-semibold">
                       Protein
                      </th>
                      <td className="border border-gray-200 px-4 py-3 text-gray-800">
                        {nutrition.protein}
                      </td>
                    </tr> 
                      
                  </tbody>
                </table>
                 
      
               <Carousel image={nutrition.image_urls} className='h-70 w-80'/>

        </div>
        <div className='flex mt-5 mb-10 gap-5 border-t-2 border-gray-200 p-2'>
            <h1 className='font-semibold'>Description:</h1>
            <p className='text-gray-800'>{nutrition.description}</p>
        </div>
    </div>
  )
}

export default ViewGymNutritionDetails
