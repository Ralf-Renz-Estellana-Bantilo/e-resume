import { Divider, Timeline } from 'antd'
import React, { useState } from 'react'
import { Quicksand } from 'next/font/google'
import Image from 'next/image'

const quicksand = Quicksand( { subsets: ['latin'] } )

type ExperienceType = {
   id: number;
   position: string;
   company: string;
   duration: string;
   description: {
      pointer: string;
   }[];
   type?: string;
}

type KeyPointsType = {
   title: string;
   description: string;
   path: string;
   align?: string;
}

const Personal = () =>
{

   const [experiences] = useState<ExperienceType[]>( [
      {
         id: Math.floor( Math.random() * 100 ) + 1,
         position: 'JUNIOR PROGRAMMER',
         company: 'SL Agritech Corporation | Makati City, PH',
         duration: 'August 2022 - Present',
         description: [
            {
               pointer: 'Introduced the modern UI design to the team that helped them create a more user-friendly web applications.'
            },
            {
               pointer: 'Fixed bugs from existing systems and implemented enhancements that significantly improved its functionality and performance.'
            },
            {
               pointer: 'Designed and lead the development of a web application that helps HR personnel to track the applications of the applicants.'
            },
            {
               pointer: 'Collaborated with end-users to gain understanding of needed changes or modifications of existing programs.'
            },
         ]
      },
      {
         id: Math.floor( Math.random() * 100 ) + 1,
         position: 'BACKEND DEVELOPER (INTERN)',
         company: 'Sterling Insurance Company Inc.',
         duration: 'April - July 2022',
         type: 'Remote',
         description: [
            {
               pointer: 'Extracted and processed data from an Excel file.'
            },
            {
               pointer: 'Developed all server-side logic, maintenance, and ensured high-performance and responsiveness to requests from the frontend.'
            },
            {
               pointer: 'Created a dynamic APIs..'
            },
            {
               pointer: 'Collaborated with frontend devs on the integration of elements.'
            },
            {
               pointer: 'Ran diagnostics tests, repaired bugs, and provided technical supports.'
            },
         ]
      },
      {
         id: Math.floor( Math.random() * 100 ) + 1,
         position: 'TECHNICAL SUPPORT STAFF',
         company: 'Comelec',
         duration: 'February - May 2022',
         type: 'Part-Time',
         description: [
            {
               pointer: 'Provided level 1 support, handled troubleshooting and maintenance, as well as monitoring and deployment of IT equipments.'
            },
         ]
      },
   ] )

   const [keyPoints] = useState<KeyPointsType[]>( [
      {
         title: 'Immersive Learning Journey',
         description: 'I have dedicated myself to mastering the MERN Stack for over 3 years now, immersing myself in self-study, online courses, and personal projects. This accelerated learning has provided me with a deep understanding about Software Engineering and its complexities.',
         path: 'illustration1.png',
      },
      {
         title: 'Real-World Application',
         description: 'In addition to my professional work, I have actively sought out opportunities to apply my MERN Stack knowledge outside of traditional job roles. Like helping my friends with their errors, making websites for/with them. These hands-on opportunities have broadened my skill-set and exposed me to diverse projects and collaborations.',
         path: 'illustration2.png',
         align: 'right',
      },
      {
         title: 'Demonstrated Results',
         description: 'Despite limited professional experience, I have successfully developed and deployed impactful web applications using the MERN Stack. Positive user feedback and demonstrated results validate my ability to deliver high-quality solutions within given timelines.',
         path: 'illustration3.png',
      },
   ] )

   const setTimestamp = ( mm: number, yyyy: number ): string =>
   {
      let result: string = ''
      let stampNumber: number = 0
      let currentMonth: number = new Date().getMonth() + 1
      let currentYear: number = new Date().getFullYear()

      let stampString: string = ''

      if ( ( yyyy > currentYear && mm > currentMonth ) || ( yyyy === currentYear && mm > currentMonth ) || ( yyyy > currentYear && mm === currentMonth ) )
      {
         return `Invalid TimeStamp!`
      }

      if ( currentYear > yyyy && currentMonth < mm )
      {
         stampNumber = ( currentMonth + 12 ) - mm
         stampString = stampNumber > 1 ? 'Months' : 'Month'
      } else if ( currentYear >= yyyy && currentMonth >= mm )
      {
         if ( currentYear > yyyy )
         {
            stampNumber = currentYear - yyyy
            stampString = stampNumber > 1 ? 'Years' : 'Year'
            return `${stampNumber} ${stampString}`
         }
         stampNumber = currentMonth - mm
         stampString = stampNumber > 1 ? 'Months' : 'Month'
      }

      result = `${stampNumber} ${stampString}`
      return result
   }

   return (
      <div className='flex flex-col gap-8 p-7 pt-3 max-md:px-4'>
         <div className="flex flex-col px-5 gap-2 neumorphism-1 rounded-lg max-md:px-3">
            <div className="flex flex-col py-2 gap-2" >
               <h2 className='font-bold text-lg text-accent-secondary'>EXPERIENCE</h2>
               <Divider className='m-0'></Divider>
            </div>
            <Timeline
               className={quicksand.className}
               items={[
                  {
                     children: (
                        <>
                           <div className='flex flex-col gap-2'>
                              <div className="flex items-center justify-between">
                                 <div className="flex flex-col">
                                    <h3 className='text-accent-secondary font-semibold text-base'>{experiences[0].position}</h3>
                                    <div className="flex items-center justify-start gap-1">
                                       <h4 className='text-accent-secondary  font-semibold'>{experiences[0].company}</h4>
                                       {experiences[0]?.type && <span>({experiences[0]?.type})</span>}
                                    </div>
                                 </div>
                                 <div className="flex items-center">
                                    <p className='font-medium text-accent-secondary text-right'>{experiences[0].duration}</p>
                                 </div>
                              </div>
                              <div className="flex flex-col px-3">
                                 {experiences[0].description.map( ( { pointer }, i ) =>
                                 {
                                    return <div className="flex gap-3 text-accent-secondary" key={i}>
                                       <div>•</div>
                                       <p className='text-justify'>{pointer}</p>
                                    </div>
                                 } )}
                              </div>
                           </div>
                        </>
                     ),
                  },
                  {
                     children: (
                        <>
                           <div className='flex flex-col gap-2'>
                              <div className="flex items-center justify-between">
                                 <div className="flex flex-col">
                                    <h3 className='text-accent-secondary font-semibold text-base'>{experiences[1].position}</h3>
                                    <div className="flex items-center justify-start gap-1">
                                       <h4 className='text-accent-secondary  font-semibold'>{experiences[1].company}</h4>
                                       {experiences[1]?.type && <span>({experiences[1]?.type})</span>}
                                    </div>
                                 </div>
                                 <div className="flex items-center">
                                    <p className='font-medium text-accent-secondary text-right'>{experiences[1].duration}</p>
                                 </div>
                              </div>
                              <div className="flex flex-col px-3">
                                 {experiences[1].description.map( ( { pointer }, i ) =>
                                 {
                                    return <div className="flex gap-3 text-accent-secondary" key={i}>
                                       <div>•</div>
                                       <p className='text-justify'>{pointer}</p>
                                    </div>
                                 } )}
                              </div>
                           </div>
                        </>
                     ),
                  },
                  {
                     children: (
                        <>
                           <div className='flex flex-col gap-2'>
                              <div className="flex items-center justify-between">
                                 <div className="flex flex-col">
                                    <h3 className='text-accent-secondary font-semibold text-base'>{experiences[2].position}</h3>
                                    <div className="flex items-center justify-start gap-1">
                                       <h4 className='text-accent-secondary  font-semibold'>{experiences[2].company}</h4>
                                       {experiences[2]?.type && <span>({experiences[2]?.type})</span>}
                                    </div>
                                 </div>
                                 <div className="flex items-center">
                                    <p className='font-medium text-accent-secondary text-right'>{experiences[2].duration}</p>
                                 </div>
                              </div>
                              <div className="flex flex-col px-3">
                                 {experiences[2].description.map( ( { pointer }, i ) =>
                                 {
                                    return <div className="flex gap-3 text-accent-secondary" key={i}>
                                       <div>•</div>
                                       <p className='text-justify'>{pointer}</p>
                                    </div>
                                 } )}
                              </div>
                           </div>
                        </>
                     ),
                  },
               ]}
            />
         </div>
         <div className="flex flex-col px-5 gap-2 neumorphism-1 rounded-lg max-md:px-3">
            <div className="flex flex-col py-2 gap-2">
               <h2 className='font-bold text-lg text-accent-secondary'>EDUCATION</h2>
               <Divider className='m-0'></Divider>
            </div>
            <Timeline
               className={quicksand.className}
               items={[
                  {
                     children: (
                        <>
                           <div className='flex flex-col gap-2'>
                              <div className="flex items-center justify-between">
                                 <div className="flex flex-col">
                                    <h3 className='text-accent-secondary font-semibold text-base'>BS INFORMATION TECHNOLOGY</h3>
                                    <h4 className='text-accent-secondary font-semibold'>University of Eastern Philippines</h4>
                                 </div>
                                 <div className="flex items-center">
                                    <p className='font-medium text-accent-secondary text-right'>August 2018 - June 2022</p>
                                 </div>
                              </div>
                              <div className="flex flex-col px-3">
                                 <div className="flex gap-3 text-accent-secondary">
                                    <div>•</div>
                                    <p>Capstone Project: JOB SEARCH SYSTEM (Using MERN Stack)</p>
                                 </div>
                                 <div className="flex gap-3 text-accent-secondary">
                                    <div>•</div>
                                    <p>Cum laude | GWA: 1.55</p>
                                 </div>
                              </div>
                           </div>
                        </>
                     ),
                  },
               ]}
            />
         </div>
         <div className="flex flex-col px-5 neumorphism-1 rounded-lg max-md:px-3">
            <div className="flex flex-col py-2 gap-2">
               <h2 className='font-bold text-lg text-accent-secondary'>ABOUT ME</h2>
               <Divider className='m-0'></Divider>
            </div>
            <div className="flex flex-col gap-3">

               <h4 className='text-accent-secondary text-justify'>While my official work experience spans <strong>{setTimestamp( 8, 2022 )}</strong>, I want to emphasize that my proficiency and expertise with the <strong>MERN (MySQL, ExpressJS, ReactJS, NodeJS) Stack</strong> extend far beyond that, equating to over <strong>{setTimestamp( 4, 2020 )} of practical knowledge</strong>.</h4>
               <p>Here are three key points to consider:</p>
               <div className="flex flex-col gap-7 my-5">
                  <>
                     {keyPoints.map( ( keypoint, index ) =>
                     {
                        return <div className={`flex items-center gap-5 px-5 ${keypoint?.align && 'flex-row-reverse'}`} key={index}>
                           <div className="flex justify-center items-center flex-1">
                              <Image
                                 className="object-contain h-44"
                                 src={require( `../../assets/Illustrations/${keypoint.path}` )}
                                 alt={keypoint.title}
                                 width={200}
                                 height={200}
                              />
                           </div>
                           <div className="flex flex-col flex-1 gap-2">
                              <h2 className='font-bold text-lg text-accent-secondary text-left'>{keypoint.title}</h2>
                              <p className='text-justify'>{keypoint.description}</p>
                           </div>
                        </div>
                     } )}
                  </>

               </div>

            </div>
         </div>
      </div>
   )
}

export default Personal