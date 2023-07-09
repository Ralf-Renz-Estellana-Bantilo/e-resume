import { Divider, Timeline } from 'antd'
import React, { useState } from 'react'
import { Quicksand } from 'next/font/google'
import Image from 'next/image'
import { Variants, motion } from "framer-motion";

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
         position: 'PROGRAMMER',
         company: 'SL Agritech Corporation | Makati City, PH',
         duration: 'August 2022 - Present',
         description: [
            {
               pointer: 'Spearheaded the implementation of modern UI design concepts within the team, resulting in the creation of highly user-friendly web applications that enhanced the overall user experience.'
            },
            {
               pointer: 'Demonstrated strong problem-solving skills by identifying and fixing bugs in existing systems, and implementing enhancements that significantly improved functionality and performance.'
            },
            {
               pointer: 'Led the design and development of a web application aimed at streamlining HR processes, enabling HR personnel to efficiently track and manage applicant applications.'
            },
            {
               pointer: 'Actively collaborated with end-users to gather insights and understand their requirements for changes or modifications to existing programs, ensuring that user needs were met effectively.'
            },
            {
               pointer: 'Applied a user-centered approach, conducting usability tests and incorporating user feedback to continuously improve and refine web applications.'
            },
            {
               pointer: 'Employed agile methodologies to manage project timelines and deliverables, ensuring successful completion of development projects.'
            },
            {
               pointer: 'Worked closely with cross-functional teams, including designers and developers, to ensure seamless integration of design elements and optimal functionality of web applications.'
            },
            {
               pointer: 'Demonstrated effective communication skills in presenting and explaining technical concepts to both technical and non-technical stakeholders.'
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
               pointer: 'Conducted data extraction and processing from Excel files, ensuring accuracy and data integrity.'
            },
            {
               pointer: 'Developed robust server-side logic and performed regular maintenance to ensure high performance and responsiveness to frontend requests.'
            },
            {
               pointer: 'Created dynamic APIs to facilitate seamless data exchange and integration with frontend elements.'
            },
            {
               pointer: 'Collaborated closely with frontend developers to ensure smooth integration of components and optimize overall system functionality.'
            },
            {
               pointer: 'Conducted diagnostics tests to identify and resolve bugs, ensuring the reliability and stability of the system.'
            },
            {
               pointer: 'Provided prompt and effective technical support to users, troubleshooting issues and offering solutions to minimize downtime.'
            },
            {
               pointer: 'Actively participated in code reviews and implemented best practices to improve code quality, maintainability, and scalability.'
            },
            {
               pointer: 'Stayed updated with the latest industry trends and technologies, incorporating them into development processes to enhance efficiency and innovation.'
            },
            {
               pointer: 'Acted as a proactive team member, contributing ideas and suggestions for process improvement and optimization.'
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
               pointer: 'Delivered exemplary Level 1 support, swiftly addressing technical issues, troubleshooting problems, and ensuring timely resolutions to maintain uninterrupted operations.'
            },
            {
               pointer: 'Demonstrated expertise in equipment maintenance, performing regular checks, repairs, and upgrades to optimize system performance and reliability.'
            },
            {
               pointer: 'Proactively monitored IT equipment, promptly identifying and mitigating potential issues to minimize downtime and enhance overall system efficiency.'
            },
            {
               pointer: `Played a pivotal role in the seamless deployment of IT equipment, ensuring proper setup, configuration, and integration within the organization's infrastructure.`
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

   const cardVariants: Variants = {
      offscreen: {
         y: 100,
         opacity: 0
      },
      onscreen: {
         y: 0,
         opacity: 1,
         transition: {
            type: "spring",
            bounce: 0.3,
            duration: 1
         }
      }
   };

   const experienceTimelineItems = ( experiences: ExperienceType ) =>
   {
      return {
         children: (
            <>
               <motion.div
                  className='flex flex-col gap-2'
                  variants={cardVariants}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0 }}
               >
                  <div className="flex items-center justify-between">
                     <div className="flex flex-col">
                        <h3 className='text-accent-secondary font-semibold text-base'>{experiences.position}</h3>
                        <div className="flex items-center justify-start gap-1">
                           <h4 className='text-accent-secondary font-semibold'>{experiences.company}</h4>
                           {experiences?.type && <span>({experiences?.type})</span>}
                        </div>
                     </div>
                     <div className="flex items-center">
                        <p className='font-semibold text-accent-secondary text-right'>{experiences.duration}</p>
                     </div>
                  </div>
                  <div className="flex flex-col px-3">
                     {experiences.description.map( ( { pointer }, i ) =>
                     {
                        return <div className="flex gap-3 text-accent-secondary" key={i}>
                           <div>•</div>
                           <p className='text-justify font-medium'>{pointer}</p>
                        </div>
                     } )}
                  </div>
               </motion.div>
            </>
         ),
      }
   }

   return (
      <div className='flex flex-col gap-8 p-7 pt-3 max-md:px-4'>
         {/* EXPERIENCE */}
         <div className="flex flex-col px-5 gap-2 neumorphism-1 rounded-lg max-md:px-3">
            <div className="flex flex-col py-2 gap-2" >
               <h2 className='font-bold text-lg text-accent-secondary'>EXPERIENCE</h2>
               <Divider className='m-0'></Divider>
            </div>
            <Timeline
               className={quicksand.className}
               items={experiences.map( ( experience ) =>
               {
                  return experienceTimelineItems( experience )
               } )}
            />
         </div>

         {/* EDUCATION */}
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
                           <motion.div
                              className='flex flex-col gap-2'
                              variants={cardVariants}
                              initial="offscreen"
                              whileInView="onscreen"
                              viewport={{ once: true, amount: 0 }}
                           >
                              <div className="flex items-center justify-between">
                                 <div className="flex flex-col">
                                    <h3 className='text-accent-secondary font-semibold text-base'>BS INFORMATION TECHNOLOGY</h3>
                                    <h4 className='text-accent-secondary font-semibold'>University of Eastern Philippines</h4>
                                 </div>
                                 <div className="flex items-center">
                                    <p className='font-semibold text-accent-secondary text-right'>August 2018 - June 2022</p>
                                 </div>
                              </div>
                              <div className="flex flex-col px-3">
                                 <div className="flex gap-3 text-accent-secondary">
                                    <div>•</div>
                                    <p className='text-justify font-medium'>Capstone Project: JOB SEARCH SYSTEM (Using MERN Stack)</p>
                                 </div>
                                 <div className="flex gap-3 text-accent-secondary">
                                    <div>•</div>
                                    <p className='text-justify font-medium'>Cum laude | GWA: 1.55</p>
                                 </div>
                              </div>
                           </motion.div>
                        </>
                     ),
                  },
               ]}
            />
         </div>

         {/* ABOUT ME */}
         <div className="flex flex-col px-5 neumorphism-1 rounded-lg max-md:px-3">
            <div className="flex flex-col py-2 gap-2">
               <h2 className='font-bold text-lg text-accent-secondary'>ABOUT ME</h2>
               <Divider className='m-0'></Divider>
            </div>
            <div className="flex flex-col gap-3">

               <motion.h4
                  className='text-accent-secondary text-justify font-medium'
                  variants={cardVariants}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0 }}
               >While my official work experience spans <strong>{setTimestamp( 8, 2022 )}</strong>, I want to emphasize that my proficiency and expertise with the <strong>MERN (MySQL, ExpressJS, ReactJS, NodeJS) Stack</strong> extend far beyond that, equating to over <strong>{setTimestamp( 4, 2020 )} of practical knowledge</strong>.</motion.h4>
               <motion.p
                  className='font-medium'
                  variants={cardVariants}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0 }}
               >Here are three key points to consider:</motion.p>
               <div className="flex flex-col gap-7 my-5">
                  <>
                     {keyPoints.map( ( keypoint, index ) =>
                     {
                        return <motion.div
                           className={`flex items-center gap-5 px-5 max-lg:flex-col ${keypoint?.align && 'flex-row-reverse'}`}
                           key={index}
                           variants={cardVariants}
                           initial="offscreen"
                           whileInView="onscreen"
                           viewport={{ once: true, amount: 0 }}
                        >
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
                              <h2 className='font-bold text-lg text-accent-secondary text-left max-lg:text-center'>{keypoint.title}</h2>
                              <p className='text-justify font-medium'>{keypoint.description}</p>
                           </div>
                        </motion.div>
                     } )}
                  </>

               </div>

            </div>
         </div>
      </div>
   )
}

export default Personal