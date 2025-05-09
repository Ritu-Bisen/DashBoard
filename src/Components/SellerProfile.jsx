import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSellerDetails } from '../Redux/Slices/loginSellerSlice'

const SellerProfile = () => {
  const {sellerProfileData}=useSelector((state)=>state.seller)
  const{sellerDetails}=useSelector((state)=>state.seller)
  const dispatch =useDispatch()
useEffect(() => {
 dispatch(getSellerDetails(sellerDetails))
}, [dispatch])
console.log(sellerProfileData);

  return (
    <div className=' relative w-[calc(100%-300px)] ml-[300px] pt-[120px]'>
     <div className='flex flex-col justify-center items-center '>
      <img className='h-65 w-65 rounded-full object-cover' src={sellerProfileData[0]?.profile_urls}/>
      <h1 className='text-3xl font-bold'>{sellerProfileData[0]?.seller_name}</h1>
     </div>
    </div>
  )
}

export default SellerProfile
