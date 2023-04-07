import { Checkbox, Divider, Slider, Timeline, Space, Tag, Spin } from 'antd'
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
import { ClockCircleOutlined } from '@ant-design/icons';

const quicksand = Quicksand( { subsets: ['latin'] } )

const OtherInfo = () =>
{
   const experienceLevelOptions = ['Entry-Level', 'Junior Level', 'Mid-Senior Level', 'Manager'];
   const jobTypeOptions = ['Full-time', 'Part-time', 'Contract', 'Temporary'];
   const workSetupOptions = ['On-site', 'Remote', 'Hybrid'];
   const jobTitleOptions1 = ['Junior Software Engineer', 'Frontend Software Engineer', 'Fullstack Developer (React/Node)'];
   const jobTitleOptions2 = ['React Developer', ' Junior Programmer', 'Web Developer'];
   const techStack1 = ['MySQL, ExpressJS, ReactJS, NodeJS', 'ReactJS, NextJS, TypeScript, NodeJS', 'JavaScript, PHP'];
   const techStack2 = ['MySQL, ExpressJS, VueJS, NodeJS', 'VueJS, MySQL, PHP',];

   const [screenSize, setScreenSize] = useState( {
      width: typeof window !== 'undefined' ? window.innerWidth : 0,
      height: typeof window !== 'undefined' ? window.innerHeight : 0
   } );

   const [isVisible, setIsVisible] = useState<boolean>(false)

   const MOBILE:number = 600

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

      setTimeout(() => {
         setIsVisible( true );
      }, 200);

      return () =>
      {
         window.removeEventListener( 'resize', handleResize );
      };
   }, [] );

   const { width } = screenSize;

   return (
      <div className="flex flex-col gap-8 p-7 pt-3 max-md:px-4">
         {isVisible ? 
         <>
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
                           <Checkbox.Group className={`${quicksand.className} w-full`} options={workSetupOptions} value={['Remote']} />
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
                           <h3 className='font-semibold text-base text-dark-blue-secondary'>Tech Stack</h3>
                        </Divider>
                        <div className='flex flex-col items-start px-3 gap-2'>
                           <Checkbox.Group className={`${quicksand.className} w-full`} options={techStack1} value={['MySQL, ExpressJS, ReactJS, NodeJS', 'ReactJS, NextJS, TypeScript, NodeJS']} />
                           <Checkbox.Group className={`${quicksand.className} w-full`} options={techStack2} value={['MySQL, ExpressJS, VueJS, NodeJS']} />
                        </div>
                     </div>
                     {/* <div className="flex flex-col gap-2">
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
                     </div> */}
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
                        <div className='px-3'>
                           {[...jobTitleOptions1, ...jobTitleOptions2].map( ( title, i ) =>
                           {
                              return <Checkbox.Group className={`${quicksand.className} w-full`} options={[title]} value={[title]} key={i} />
                           } )}
                        </div>
                     </div>
                     {/* <div className="flex flex-col gap-2">
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
                     </div> */}
                     <div className="flex flex-col gap-2">
                        <Divider className='m-0' orientation="center">
                           <h3 className='font-semibold text-base text-dark-blue-secondary'>Tech Stack</h3>
                        </Divider>
                        <div className='flex flex-col items-start px-3'>
                           {[...techStack1, ...techStack2].map( ( title, i ) =>
                           {
                              return <Checkbox.Group className={`${quicksand.className} w-full`} options={[title]} value={['MySQL, ExpressJS, ReactJS, NodeJS', 'ReactJS, NextJS, TypeScript, NodeJS', 'MySQL, ExpressJS, VueJS, NodeJS']} key={i} />
                           } )}
                        </div>
                     </div>
                  </>}
                  {/* <div className="flex flex-col gap-2">
                     <Divider className='m-0' orientation="center">

                        <h3 className='font-semibold text-base text-dark-blue-secondary'>Salary Range</h3>
                     </Divider>
                     <div className='flex flex-col px-3'>
                        <Slider
                           tooltip={{ formatter: null }}
                           range={{ draggableTrack: true }}
                           min={50}
                           max={150}
                           value={[75, 110]}
                        />
                        <div className="flex justify-between items-center">
                           <p>Min: $50k</p>
                           <p>Max: $150k</p>
                        </div>
                     </div>
                  </div> */}
               </div>
            </div>
            <div className="flex flex-col px-5 neumorphism-1 rounded-lg max-md:px-3">
               <div className="flex flex-col py-2 gap-2">
                  <h2 className='font-bold text-lg text-dark-blue-secondary'>TIMELINE</h2>
                  <Divider className='m-0'></Divider>
               </div>
               <div className="flex flex-col p-3 max-md:gap-5" >
                  <Timeline
                     mode={'alternate'}
                     items={[
                        {
                           label: '2022 - Present',
                           children: (
                              <>
                                 <Space wrap>
                                    <Tag className='rounded-full' color={'lime'}>VueJS</Tag>
                                    <Tag className='rounded-full' color={'geekblue'}>Vuetify</Tag>
                                    <Tag className='rounded-full' color={'cyan'}>ReactJS</Tag>
                                    <Tag className='rounded-full' color={'blue'}>TailwindCSS</Tag>
                                    <Tag className='rounded-full' color={'magenta'}>NextJS</Tag>
                                    <Tag className='rounded-full' color={'blue'}>TypeScript</Tag>
                                    <Tag className='rounded-full' color={'yellow'}>ExpressJS</Tag>
                                    <Tag className='rounded-full' color={'blue'}>NodeJS</Tag>
                                    <Tag className='rounded-full' color={'orange'}>Figma</Tag>
                                 </Space>
                              </>
                           ),
                        },
                        {
                           label: '2021 - 2022',
                           children: (
                              <>
                                 <Space wrap>
                                    <Tag className='rounded-full' color={'orange'}>MySQL</Tag>
                                    <Tag className='rounded-full' color={'yellow'}>ExpressJS</Tag>
                                    <Tag className='rounded-full' color={'cyan'}>ReactJS</Tag>
                                    <Tag className='rounded-full' color={'blue'}>NodeJS</Tag>
                                    <Tag className='rounded-full' color={'cyan'}>React Native</Tag>
                                    <Tag className='rounded-full' color={'blue'}>TailwindCSS</Tag>
                                    <Tag className='rounded-full' color={'orange'}>Git</Tag>
                                 </Space>
                              </>
                           ),
                        },
                        {
                           label: '2020 - 2021',
                           children: (
                              <>
                                 <Space wrap>
                                    <Tag className='rounded-full' color={'orange'}>MySQL</Tag>
                                    <Tag className='rounded-full' color={'yellow'}>ExpressJS</Tag>
                                    <Tag className='rounded-full' color={'cyan'}>ReactJS</Tag>
                                    <Tag className='rounded-full' color={'blue'}>NodeJS</Tag>
                                    <Tag className='rounded-full' color={'orange'}>Git</Tag>
                                 </Space>
                              </>
                           ),
                        },
                        {
                           label: '2018 - 2020',
                           children: (
                              <>
                                 <Space wrap>
                                    <Tag className='rounded-full' color={'orange'}>MySQL</Tag>
                                    <Tag className='rounded-full' color={'volcano'}>Java</Tag>
                                    <Tag className='rounded-full' color={'geekblue'}>Photoshop</Tag>
                                 </Space>
                              </>
                           ),
                        },
                     ]}
                  />
               </div>
            </div> 
         </> : 
         <div className='h-[90vh] flex items-center justify-center'>
            <Spin size="large" />
         </div>}
         
      </div>
   )
}

export default OtherInfo