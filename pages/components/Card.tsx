import { Divider, Space, Tag } from 'antd'
import Image from 'next/image'
import React, { useState } from 'react'

const Card = () =>
{

   const mernStack = [4, 10, 1, 3]

   const [projects, setProjects] = useState( [
      {
         coverURL: 'cover1',
         title: 'E-Resume',
         description: 'A personal website designed to help me showcase my work and achievements in a professional manner online.',
         tagIDs: [1, 13, 5, 14, 9],
      },
      {
         coverURL: 'cover2',
         title: 'Expenses Tracker Program',
         description: 'A personal application designed to help me keep track of my expenses and manage my finances effectively.',
         tagIDs: [...mernStack, 2, 5, 9],
      },
      {
         coverURL: 'cover3',
         title: 'Payroll System',
         description: 'A software application designed to automate the process of calculating and managing employee salaries and wages.',
         tagIDs: [...mernStack, 2, 5, 9],
      },
      {
         coverURL: 'cover4',
         title: 'Applicant Tracking & Onboarding System',
         description: ' A software application designed to manage the recruitment process and streamline the onboarding of new hires.',
         tagIDs: [2, 4, 6, 7, 11, 9],
      },
      {
         coverURL: 'cover5',
         title: 'GWA Calculator Program',
         description: `A software application designed to calculate a student's average grade based on the grades received in individual courses.`,
         tagIDs: [1, 2, 8],
      },
      {
         coverURL: 'cover6',
         title: 'Job Search System',
         description: 'A software application designed to help job seekers search and apply for job opportunities online.',
         tagIDs: [...mernStack, 2, 8],
      },
      {
         coverURL: 'cover7',
         title: 'Basketball Statistics Program',
         description: 'A software application designed to track and analyze player and team performance in basketball games.',
         tagIDs: [12, 4, 8],
      },
      {
         coverURL: 'cover8',
         title: 'Test Simulator Program',
         description: 'A software application designed to simulate and provide practice for various types of tests, such as standardized tests or certification exams.',
         tagIDs: [12, 4, 8],
      },
      {
         coverURL: 'cover9',
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

   const findTagByID = ( tagID: Number ) =>
   {
      return tagList.filter( ( list ) => list.ID == tagID )[0]
   }

   return (
      <>
         {projects.map( ( { coverURL, title, description, tagIDs }, i ) =>
         {
            return <div className='flex flex-col w-[48%] h-auto neumorphism-2 rounded-xl overflow-hidden max-sm:w-full max-md:w-[75%] max-lg:w-[48%] max-xl:w-[70%]' key={i}>
               <div className='w-full h-44 overflow-clip bg-gray-400'>
                  <Image
                     className="object-cover h-full"
                     src={require( `@/assets/Images/${coverURL}.jpg` ).default}
                     alt={title}
                  />
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
         } )}
      </>
   )
}

export default Card