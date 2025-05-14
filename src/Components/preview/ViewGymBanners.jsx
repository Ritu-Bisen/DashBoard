import React from 'react'
import Carousel from '../UI/Carousel'
import { PiFlagBannerFill } from "react-icons/pi";
import { RxCross1 } from 'react-icons/rx';

const ViewGymBanners = ({banner,onClose}) => {
  return (
    <div className="fixed bg-white rounded-xl w-full max-w-5xl max-h-[90vh] overflow-auto shadow-2xl top-1/2 left-1/2 transition -translate-x-1/2 -translate-y-1/2 z-50">
            
             <div className="bg-gradient-to-r from-red-400 to-red-500 sticky top-0 z-10 flex justify-between items-center px-6 py-2 border-b border-orange-300">
               <h3 className="font-bold text-2xl text-white flex items-center gap-2">
                 <PiFlagBannerFill className="text-white" />
                 Banners
               </h3>
               <button
                 onClick={onClose}
                 className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-1 transition-all duration-200"
                 aria-label="Close"
               >
                 <RxCross1 size={25} className="text-black font-bold" />
               </button>
             </div>
             <Carousel className="h-full w-full " image={banner.image_urls}/>
    </div>
  )
}

export default ViewGymBanners
