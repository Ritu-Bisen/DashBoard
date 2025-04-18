import React, { useEffect, useState } from 'react'
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";


const slides = [
    "https://cdn.pixabay.com/photo/2021/07/20/14/59/iron-man-6480952_640.jpg",
    "https://cdn.pixabay.com/photo/2024/05/14/10/51/ai-generated-8760871_1280.png",
    "https://cdn.pixabay.com/photo/2024/01/26/15/42/venom-8534168_960_720.jpg",
    "https://cdn.pixabay.com/photo/2022/07/24/16/40/background-7342022_1280.jpg"
  ];

const Carousel = ({image}) => {
 const [current,setCurrent] = useState(0);
 const autoplay = true;
 const autoslideInterval = 2000;

 useEffect(() => {
   if(!autoplay) return
 const setSlideInterval = setInterval(
  nextSlide
 , autoslideInterval);
   return () => {
     clearInterval(setSlideInterval)
   }
 }, [current,autoplay])
 

 const nextSlide=()=>{
  setCurrent(current === image.length -1 ? 0 : current + 1)
 }
 const prevSlide=()=>{
  setCurrent(current === 0 ? image.length -1 : current - 1)
 }

  return (
    <div className='flex relative items-center h-65 gap-1 w-65'>
    <div className='h-65 w-65 '>
      {image.map((item,index)=>
     (current === index &&<img key={index} src={item} className='h-full w-full object-cover'/>)) 
          }    </div>
    <div className='absolute flex items-center justify-between h-full w-full p-2'>
      <button onClick={prevSlide } className=''>
<FaLessThan size={15}/>
      </button>
      <button onClick={nextSlide}>
<FaGreaterThan size={15}/>
      </button>
    </div>
    <div className='absolute flex  gap-2 items-center bottom-3  left-25'>
      {
        image.map((_,i)=>(
          <div key={i} className={`items-center flex h-2 w-2 bg-black rounded-full ${current === i ? 'p-1': 'opacity-40'}`}></div>
        ))
      }
    </div>
    </div>
  )
}

export default Carousel
