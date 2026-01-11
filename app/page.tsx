"use client"
import Car360 from '@/components/Car360';
import CarImageCarousel from '@/components/Carousel'
import EmiCalculator from '@/components/EMIForm';
import Overview from '@/components/Overview'
import { Images, Rotate3d } from 'lucide-react';
import { useState } from 'react'



function Home() {
  const [show360,setShow360] = useState<boolean>(false);
  return (
    <div className='flex gap-4'>
      <div className='w-2/3 flex gap-2 flex-col  items-center'>
          {/* <CarImageCarousel images={images}/>
          <Car360/> */}
        {show360 ? <Car360/>:<CarImageCarousel />}
        <button onClick={()=> setShow360(prev => !prev)} 
        className='cursor-pointer flex flex-row gap-2 bg-purple-900 text-md text-white rounded-md p-2 '> 
          {show360?<Images/>:<Rotate3d/>} click here to view {show360?"catalogue":360}</button>
        <Overview/>
      </div>
      <EmiCalculator/>
    </div>
  )
}

export default Home

