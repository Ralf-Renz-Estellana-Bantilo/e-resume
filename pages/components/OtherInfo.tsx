import { Checkbox, Divider, Slider } from 'antd'
import React, { useEffect, useState } from 'react'
import { Quicksand } from 'next/font/google'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "../../styles/globals.css";

// import required modules
import { Pagination } from "swiper";

const quicksand = Quicksand( { subsets: ['latin'] } )

const OtherInfo = () =>
{
   const experienceLevelOptions = ['Entry-Level', 'Junior Level', 'Mid-Senior Level', 'Manager'];
   const jobTypeOptions = ['Full-time', 'Part-time', 'Contract', 'Temporary'];
   const workSetupOptions = ['On-site', 'Remote', 'Hybrid'];
   const jobTitleOptions1 = ['Junior Software Engineer', 'Frontend Software Engineer', 'Fullstack Developer (React/Node)'];
   const jobTitleOptions2 = ['React Developer', ' Junior Programmer', 'Web Developer'];

   const [screenSize, setScreenSize] = useState( {
      width: window.innerWidth,
      height: window.innerHeight
   } );

   const MOBILE = 600

   useEffect( () =>
   {
      const handleResize = () =>
      {
         setScreenSize( {
            width: window.innerWidth,
            height: window.innerHeight
         } );
      };

      window.addEventListener( 'resize', handleResize );

      return () =>
      {
         window.removeEventListener( 'resize', handleResize );
      };
   }, [] );

   const { width } = screenSize;

   return (
      <div className="flex flex-col gap-8 p-7 pt-3 max-md:px-4">
         <div className="flex flex-col px-5 neumorphism-1 rounded-lg max-md:px-3">
            <div className="flex flex-col py-2 gap-2">
               <h2 className='font-bold text-lg text-dark-blue-secondary'>PREFERENCES</h2>
               <Divider className='m-0'></Divider>
            </div>
            <div className="flex flex-col p-3 pb-6 gap-11 max-md:gap-5" >
               {width > MOBILE ? <>
                  <div className="flex flex-col gap-2">
                     <Divider className='m-0' orientation="center">
                        <h3 className='font-semibold text-base text-dark-blue-secondary'>Experience Level</h3>
                     </Divider>
                     <div className='px-3'>
                        <Checkbox.Group className={`${quicksand.className} w-full`} options={experienceLevelOptions} value={['Junior Level']} />
                     </div>
                  </div>
                  <div className="flex flex-col gap-2">
                     <Divider className='m-0' orientation="center">

                        <h3 className='font-semibold text-base text-dark-blue-secondary'>Job Type</h3>
                     </Divider>
                     <div className='px-3'>
                        <Checkbox.Group className={`${quicksand.className} w-full`} options={jobTypeOptions} value={['Full-time']} />
                     </div>
                  </div>
                  <div className="flex flex-col gap-2">
                     <Divider className='m-0' orientation="center">

                        <h3 className='font-semibold text-base text-dark-blue-secondary'>Work Setup</h3>
                     </Divider>
                     <div className='px-3'>
                        <Checkbox.Group className={`${quicksand.className} w-full`} options={workSetupOptions} value={workSetupOptions} />
                     </div>
                  </div>
                  <div className="flex flex-col gap-2">
                     <Divider className='m-0' orientation="center">

                        <h3 className='font-semibold text-base text-dark-blue-secondary'>Title</h3>
                     </Divider>
                     <div className='px-3 space-y-3'>
                        <Checkbox.Group className={`${quicksand.className} w-full`} options={jobTitleOptions1} value={jobTitleOptions1} />
                        <Checkbox.Group className={`${quicksand.className} w-full`} options={jobTitleOptions2} value={jobTitleOptions2} />
                     </div>
                  </div>
                  <div className="flex flex-col gap-2">
                     <Divider className='m-0' orientation="center">

                        <h3 className='font-semibold text-base text-dark-blue-secondary'>Availability (Phone call)</h3>
                     </Divider>
                     <div className='flex items-center px-3 gap-2'>
                        <div className="flex gap-2 items-center flex-1">
                           <p>Weekdays:</p>
                           <span className='font-semibold'>6pm - 8pm</span>
                        </div>
                        <div className="flex gap-2 items-center flex-1">
                           <p>Weekends:</p>
                           <span className='font-semibold'>8am - 8pm</span>
                        </div>
                     </div>
                  </div>
               </> : <>
                  <div className="flex flex-col gap-2">
                     <Divider className='m-0' orientation="center">
                        <h3 className='font-semibold text-base text-dark-blue-secondary'>Experience Level</h3>
                     </Divider>
                     <div className='px-3'>
                        {experienceLevelOptions.map( ( exp, i ) =>
                        {
                           return <Checkbox.Group className={`${quicksand.className} w-full`} options={[exp]} value={['Junior Level']} key={i} />
                        } )}
                     </div>
                  </div>
                  <div className="flex flex-col gap-2">
                     <Divider className='m-0' orientation="center">
                        <h3 className='font-semibold text-base text-dark-blue-secondary'>Job Type</h3>
                     </Divider>
                     <div className='px-3'>
                        {jobTypeOptions.map( ( jobType, i ) =>
                        {
                           return <Checkbox.Group className={`${quicksand.className} w-full`} options={[jobType]} value={['Full-time']} key={i} />
                        } )}

                     </div>
                  </div>
                  <div className="flex flex-col gap-2">
                     <Divider className='m-0' orientation="center">
                        <h3 className='font-semibold text-base text-dark-blue-secondary'>Work Setup</h3>
                     </Divider>
                     <div className='px-3'>
                        {workSetupOptions.map( ( workSetup, i ) =>
                        {
                           return <Checkbox.Group className={`${quicksand.className} w-full`} options={[workSetup]} value={workSetupOptions} key={i} />
                        } )}
                     </div>
                  </div>
                  <div className="flex flex-col gap-2">
                     <Divider className='m-0' orientation="center">

                        <h3 className='font-semibold text-base text-dark-blue-secondary'>Title</h3>
                     </Divider>
                     <div className='px-3 space-y-3'>
                        {[...jobTitleOptions1, ...jobTitleOptions2].map( ( title, i ) =>
                        {
                           return <Checkbox.Group className={`${quicksand.className} w-full`} options={[title]} value={[title]} key={i} />
                        } )}
                     </div>
                  </div>
                  <div className="flex flex-col gap-2">
                     <Divider className='m-0' orientation="center">

                        <h3 className='font-semibold text-base text-dark-blue-secondary'>Availability (Phone call)</h3>
                     </Divider>
                     <div className='flex flex-col items-start px-3 gap-2'>
                        <div className="flex gap-2 items-center flex-1">
                           <p>Weekdays:</p>
                           <span className='font-semibold'>6pm - 8pm</span>
                        </div>
                        <div className="flex gap-2 items-center flex-1">
                           <p>Weekends:</p>
                           <span className='font-semibold'>8am - 8pm</span>
                        </div>
                     </div>
                  </div>
               </>}
               {/* <div className="flex flex-col gap-2">
                  <Divider className='m-0' orientation="center">

                     <h3 className='font-semibold text-base text-dark-blue-secondary'>Salary Range</h3>
                  </Divider>
                  <div className='flex flex-col px-3'>
                     <Slider tooltip={{ formatter: null }} range={{ draggableTrack: true }} value={[90, 160]} min={50} max={200} />
                     <div className="flex justify-between items-center">
                        <p>Min: 50k</p>
                        <p>Max: 200k</p>
                     </div>
                  </div>
               </div> */}
            </div>
         </div>
      </div>
   )
}

export default OtherInfo