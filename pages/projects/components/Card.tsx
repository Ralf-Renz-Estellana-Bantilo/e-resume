import React from 'react';
import {Carousel, Divider, Space, Tag} from 'antd';
import Image from 'next/image';

// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import {Pagination, Autoplay} from 'swiper';
import {ProjectsInterface, TagListsInterface} from '@/interfaces';

import {motion} from 'framer-motion';
import {cardVariants, viewportVariant} from '@/utils/Resources';

const Card = () => {
   const mernStack: number[] = [4, 10, 1, 3];

   const projects: ProjectsInterface[] = [
      {
         title: 'E-Portfolio',
         description:
            'A personal website designed to help me showcase my work and achievements in a professional manner online.',
         tagIDs: [1, 13, 5, 14, 9],
         coverURLs: ['E-Resume/pic1.png', 'E-Resume/code.png'],
      },
      // {
      //    title: 'Applicant Tracking & Onboarding System',
      //    description: ' A software application designed to manage the recruitment process and streamline the onboarding of new hires.',
      //    tagIDs: [2, 4, 6, 7, 11, 9],
      //    coverURLs: [
      //       'Onboarding System/pic1.png',
      //       // 'Onboarding System/pic2.png',
      //       'Onboarding System/pic3.png',
      //       'Onboarding System/pic4.png',
      //       'Onboarding System/pic5.png',
      //       'Onboarding System/code.png',
      //    ]
      // },
      {
         title: 'Payroll System',
         description:
            'A software application designed to automate the process of calculating and managing employee salaries and wages.',
         tagIDs: [...mernStack, 2, 5, 9],
         coverURLs: [
            'Payroll System/pic1.png',
            'Payroll System/pic2.png',
            'Payroll System/pic3.png',
            'Payroll System/pic4.png',
            'Payroll System/code.png',
         ],
      },
      {
         title: 'Expenses Tracker Program',
         description:
            'A personal application designed to help me keep track of my expenses and manage my finances effectively.',
         tagIDs: [...mernStack, 2, 5, 9],
         coverURLs: [
            'Expenses Tracker/pic1.jpg',
            'Expenses Tracker/pic2.jpg',
            'Expenses Tracker/code.jpg',
         ],
      },
      {
         title: 'GWA Calculator Program',
         description: `A software application designed to calculate a student's average grade based on the grades received in individual courses.`,
         tagIDs: [1, 2, 8],
         coverURLs: ['GWA Calculator/pic1.jpg', 'GWA Calculator/code.jpg'],
      },
      {
         title: 'Job Search System',
         description:
            'A software application designed to help job seekers search and apply for job opportunities online.',
         tagIDs: [...mernStack, 2, 8],
         coverURLs: [
            'Job Search System/pic1.png',
            'Job Search System/pic2.png',
            'Job Search System/pic3.png',
            'Job Search System/pic4.png',
            'Job Search System/code.jpg',
         ],
      },
      {
         title: 'Basketball Statistics Program',
         description:
            'A software application designed to track and analyze player and team performance in basketball games.',
         tagIDs: [12, 4, 8],
         coverURLs: [
            'Game Statistics Program/pic1.jpg',
            'Game Statistics Program/pic2.jpg',
            'Game Statistics Program/pic3.jpg',
            'Game Statistics Program/pic4.jpg',
            'Game Statistics Program/code.jpg',
         ],
      },
      {
         title: 'Examination Test Simulator Program',
         description:
            'A software application designed to simulate and provide practice for various types of tests, such as standardized tests or certification exams.',
         tagIDs: [12, 4, 8],
         coverURLs: ['Test Simulator/pic1.jpg', 'Test Simulator/code.jpg'],
      },
      {
         title: 'Random Student Picker Program',
         description:
            ' A software application designed to randomly select students from a list or group for classroom participation or other activities.',
         tagIDs: [12, 4, 8],
         coverURLs: [
            'Student Picker Program/pic1.jpg',
            'Student Picker Program/pic2.jpg',
            'Student Picker Program/pic3.jpg',
            'Student Picker Program/code.jpg',
         ],
      },
   ];
   const tagList: TagListsInterface[] = [
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
   ];

   const findTagByID = (tagID: Number) => {
      return tagList.filter((list) => list.ID == tagID)[0];
   };

   return (
      <>
         {projects.map(({coverURLs, title, description, tagIDs}, i) => {
            return (
               <motion.div
                  className='flex flex-col w-[335px] h-auto bg-opacity-10 p-2 border-1 border-border-color rounded-lg overflow-hidden sm-breakpoint:w-[90%]'
                  key={i}
                  variants={cardVariants}
                  initial='offscreen'
                  whileInView='onscreen'
                  viewport={viewportVariant}>
                  <div className='w-full h-44 overflow-clip gradient-background'>
                     <Carousel autoplay effect='fade'>
                        {coverURLs.map((url, o) => {
                           return (
                              <Image
                                 className='object-cover h-44'
                                 src={require(`@/assets/Images/${url}`)}
                                 alt={title}
                                 key={o}
                              />
                           );
                        })}
                     </Carousel>
                  </div>
                  <div className='flex flex-col gap-2 p-2'>
                     <div className='flex flex-col justify-center'>
                        <h3 className='py-2 text-lg font-semibold text-center text-accent-primary'>
                           {title}
                        </h3>
                        <p className='text-xs font-medium text-justify text-accent-secondary'>
                           {description}
                        </p>
                     </div>
                     <Divider className='m-0 '></Divider>
                     <div>
                        <Space size={[0, tagIDs.length]} wrap>
                           {tagIDs.map((tagID, i) => {
                              return (
                                 <Tag
                                    className='rounded-full'
                                    color={findTagByID(tagID).color}
                                    key={i}>
                                    {findTagByID(tagID).label}
                                 </Tag>
                              );
                           })}
                        </Space>
                     </div>
                  </div>
               </motion.div>
            );
         })}
      </>
   );
};

export default Card;
