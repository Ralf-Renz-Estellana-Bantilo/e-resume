import { Carousel, Divider, Space, Tag } from 'antd'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";

const contentStyle: React.CSSProperties = {
   height: '100%',
   color: '#fff',
   lineHeight: '180px',
   textAlign: 'center',
   background: '#364d79',
};

const Card = () =>
{

   const mernStack = [4, 10, 1, 3]

   const [projects, setProjects] = useState( [
      {
         coverURL: 'cover',
         title: 'E-Resume',
         description: 'A personal website designed to help me showcase my work and achievements in a professional manner online.',
         tagIDs: [1, 13, 5, 14, 9],
      },
      {
         coverURL: 'cover',
         title: 'Expenses Tracker Program',
         description: 'A personal application designed to help me keep track of my expenses and manage my finances effectively.',
         tagIDs: [...mernStack, 2, 5, 9],
      },
      {
         coverURL: 'cover',
         title: 'Payroll System',
         description: 'A software application designed to automate the process of calculating and managing employee salaries and wages.',
         tagIDs: [...mernStack, 2, 5, 9],
      },
      {
         coverURL: 'cover',
         title: 'Applicant Tracking & Onboarding System',
         description: ' A software application designed to manage the recruitment process and streamline the onboarding of new hires.',
         tagIDs: [2, 4, 6, 7, 11, 9],
      },
      {
         coverURL: 'cover',
         title: 'GWA Calculator Program',
         description: `A software application designed to calculate a student's average grade based on the grades received in individual courses.`,
         tagIDs: [1, 2, 8],
      },
      {
         coverURL: 'cover',
         title: 'Job Search System',
         description: 'A software application designed to help job seekers search and apply for job opportunities online.',
         tagIDs: [...mernStack, 2, 8],
      },
      {
         coverURL: 'cover',
         title: 'Basketball Statistics Program',
         description: 'A software application designed to track and analyze player and team performance in basketball games.',
         tagIDs: [12, 4, 8],
      },
      {
         coverURL: 'cover',
         title: 'Test Simulator Program',
         description: 'A software application designed to simulate and provide practice for various types of tests, such as standardized tests or certification exams.',
         tagIDs: [12, 4, 8],
      },
      {
         coverURL: 'cover',
         title: 'Random Student Picker Program',
         description: ' A software application designed to randomly select students from a list or group for classroom participation or other activities.',
         tagIDs: [12, 4, 8],
      },
   ] )
   const [tagList, setTaglist] = useState( [
      {
         ID: 1,
         label: 'React JS',
         color: 'cyan',
      },
      {
         ID: 2,
         label: 'JavaScript',
         color: 'yellow',
      },
      {
         ID: 3,
         label: 'Node JS',
         color: 'green',
      },
      {
         ID: 4,
         label: 'MySQL',
         color: 'orange',
      },
      {
         ID: 5,
         label: 'TailwindCSS',
         color: 'blue',
      },
      {
         ID: 6,
         label: 'Vue JS',
         color: 'lime',
      },
      {
         ID: 7,
         label: 'Vuetify',
         color: 'geekblue',
      },
      {
         ID: 8,
         label: 'Photoshop',
         color: 'geekblue',
      },
      {
         ID: 9,
         label: 'Figma',
         color: 'orange',
      },
      {
         ID: 10,
         label: 'Express JS',
         color: 'yellow',
      },
      {
         ID: 11,
         label: 'PHP',
         color: 'orange',
      },
      {
         ID: 12,
         label: 'Java',
         color: 'volcano',
      },
      {
         ID: 13,
         label: 'Next JS',
         color: 'magenta',
      },
      {
         ID: 14,
         label: 'TypeScript',
         color: 'geekblue',
      },
   ] )

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

   const findTagByID = ( tagID: Number ) =>
   {
      return tagList.filter( ( list ) => list.ID == tagID )[0]
   }

   return (
      <>
         {width > MOBILE ? <>{projects.map( ( { coverURL, title, description, tagIDs }, i ) =>
         {
            return <div className='flex flex-col w-[48%] h-auto neumorphism-2 rounded-xl overflow-hidden max-sm:w-full max-md:w-[75%] max-lg:w-[48%] max-xl:w-[70%]' key={i}>
               <div className='w-full h-44 overflow-clip bg-gray-400'>

                  <Carousel autoplay effect='fade'>
                     <Image
                        className="object-cover h-44"
                        src={require( `@/assets/Images/${coverURL}1.jpg` ).default}
                        alt={title}
                     />
                     {/* <h3 style={contentStyle}>1</h3> */}
                     {/* <h3 style={contentStyle}>2</h3> */}
                     <Image
                        className="object-cover h-44"
                        src={require( `@/assets/Images/${coverURL}2.jpg` ).default}
                        alt={title}
                     />
                     {/* <h3 style={contentStyle}>3</h3> */}
                     <Image
                        className="object-cover h-44"
                        src={require( `@/assets/Images/${coverURL}3.jpg` ).default}
                        alt={title}
                     />
                     {/* <h3 style={contentStyle}>4</h3> */}
                     <Image
                        className="object-cover h-44"
                        src={require( `@/assets/Images/${coverURL}4.jpg` ).default}
                        alt={title}
                     />
                  </Carousel>
               </div>
               <div className="flex flex-col gap-2 p-2">
                  <div className='flex flex-col justify-center'>
                     <h3 className='text-lg font-semibold text-dark-blue-secondary text-center py-2'>{title}</h3>
                     <p className='text-dark-blue-secondary text-xs text-justify font-medium'>{description}</p>
                  </div>
                  <Divider className='m-0'></Divider>
                  <div>
                     <Space size={[0, tagIDs.length]} wrap>
                        {tagIDs.map( ( tagID, i ) =>
                        {
                           return <Tag className='rounded-full' color={findTagByID( tagID ).color} key={i}>{findTagByID( tagID ).label}</Tag>
                        } )}
                     </Space>
                  </div>
               </div>
            </div>
         } )}</> : <>
            <Swiper
               slidesPerView={1}
               centeredSlides={true}
               autoplay={{
                  delay: 250000,
                  disableOnInteraction: false,
               }}
               pagination={{
                  clickable: true,
               }}
               modules={[Pagination, Autoplay]}
               className="mySwiper bg-background-primary"
            >

               {projects.map( ( { coverURL, title, description, tagIDs }, i ) =>
               {
                  return <SwiperSlide className='p-4 pb-8 '>
                     <div className='flex flex-col w-[48%] h-full neumorphism-2 rounded-xl overflow-hidden max-sm:w-full max-md:w-[75%] max-lg:w-[48%] max-xl:w-[70%]' key={i}>
                        <div className='w-full h-44 overflow-clip bg-gray-400'>

                           <Carousel autoplay effect='fade'>
                              <Image
                                 className="object-cover h-44"
                                 src={require( `@/assets/Images/${coverURL}1.jpg` ).default}
                                 alt={title}
                              />
                              {/* <h3 style={contentStyle}>1</h3> */}
                              {/* <h3 style={contentStyle}>2</h3> */}
                              <Image
                                 className="object-cover h-44"
                                 src={require( `@/assets/Images/${coverURL}2.jpg` ).default}
                                 alt={title}
                              />
                              {/* <h3 style={contentStyle}>3</h3> */}
                              <Image
                                 className="object-cover h-44"
                                 src={require( `@/assets/Images/${coverURL}3.jpg` ).default}
                                 alt={title}
                              />
                              {/* <h3 style={contentStyle}>4</h3> */}
                              <Image
                                 className="object-cover h-44"
                                 src={require( `@/assets/Images/${coverURL}4.jpg` ).default}
                                 alt={title}
                              />
                           </Carousel>
                        </div>
                        <div className="flex flex-col gap-2 p-2">
                           <div className='flex flex-col justify-center'>
                              <h3 className='text-lg font-semibold text-dark-blue-secondary text-center py-2'>{title}</h3>
                              <p className='text-dark-blue-secondary text-xs text-justify font-medium'>{description}</p>
                           </div>
                           <Divider className='m-0'></Divider>
                           <div>
                              <Space size={[0, tagIDs.length]} wrap>
                                 {tagIDs.map( ( tagID, i ) =>
                                 {
                                    return <Tag className='rounded-full' color={findTagByID( tagID ).color} key={i}>{findTagByID( tagID ).label}</Tag>
                                 } )}
                              </Space>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
               } )}

            </Swiper></>}

      </>
   )
}

export default Card