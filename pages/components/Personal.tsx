import { Divider, Timeline } from 'antd'
import React from 'react'
import { Quicksand } from 'next/font/google'

const quicksand = Quicksand( { subsets: ['latin'] } )

const Personal = () =>
{

   return (
      <div className='flex flex-col gap-8 p-7 pt-3 max-md:px-4'>
         <div className="flex flex-col px-5 neumorphism-1 rounded-lg max-md:px-3">
            <div className="flex flex-col py-2 gap-2">
               <h2 className='font-bold text-lg text-dark-blue-secondary'>ABOUT</h2>
               <Divider className='m-0'></Divider>
            </div>
            <h4 className='pb-6 text-dark-blue-secondary'>I am a  <b>skilled software programmer </b> with proficiency in <b>multiple Frontend Frameworks</b>, databases, and development tools. I am a <b>strong team player</b> with effective communication skills, committed to maintaining <b> high software quality standards </b> . I am also a <b>quick learner</b> and <b>passionate</b>  about developing <b>innovative solutions</b>.</h4>
         </div>
         <div className="flex flex-col px-5 gap-2 neumorphism-1 rounded-lg max-md:px-3">
            <div className="flex flex-col py-2 gap-2" >
               <h2 className='font-bold text-lg text-dark-blue-secondary'>EXPERIENCE</h2>
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
                                    <h3 className='text-dark-blue-secondary font-semibold text-base'>JUNIOR PROGRAMMER</h3>
                                    <h4 className='text-dark-blue-secondary font-semibold'>SL Agritech Corporation</h4>
                                 </div>
                                 <div className="flex items-center">
                                    <p className='font-medium text-dark-blue-secondary text-right'>August 2022 - Present</p>
                                 </div>
                              </div>
                              <div className="flex flex-col px-3">
                                 <div className="flex gap-3 text-dark-blue-secondary">
                                    <div>•</div>
                                    <p>Introduced the modern UI design to the team that helped them create a more user-friendly web applications.</p>
                                 </div>
                                 <div className="flex gap-3 text-dark-blue-secondary">
                                    <div>•</div>
                                    <p>Fixed bugs from existing systems and implemented enhancements that significantly improved its functionality and performance.</p>
                                 </div>
                                 <div className="flex gap-3 text-dark-blue-secondary">
                                    <div>•</div>
                                    <p>Designed and lead the development of a web application that helps HR personnel to track the applications of the applicants.</p>
                                 </div>
                                 <div className="flex gap-3 text-dark-blue-secondary">
                                    <div>•</div>
                                    <p>Collaborated with end-users to gain understanding of needed changes or modifications of existing programs.</p>
                                 </div>
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
                                    <h3 className='text-dark-blue-secondary font-semibold text-base'>BACKEND DEVELOPER (INTERN)</h3>
                                    <h4 className='text-dark-blue-secondary font-semibold'>Sterling Insurance Company Inc.</h4>
                                 </div>
                                 <div className="flex items-center">
                                    <p className='font-medium text-dark-blue-secondary text-right'>April - July 2022</p>
                                 </div>
                              </div>
                              <div className="flex flex-col px-3">
                                 <div className="flex gap-3 text-dark-blue-secondary">
                                    <div>•</div>
                                    <p>Extracted and processed data from an Excel file.</p>
                                 </div>
                                 <div className="flex gap-3 text-dark-blue-secondary">
                                    <div>•</div>
                                    <p>Developed all server-side logic, maintenance, and ensured high-performance and responsiveness to requests from  the frontend.</p>
                                 </div>
                                 <div className="flex gap-3 text-dark-blue-secondary">
                                    <div>•</div>
                                    <p>Created a dynamic APIs.</p>
                                 </div>
                                 <div className="flex gap-3 text-dark-blue-secondary">
                                    <div>•</div>
                                    <p>Collaborated with frontend devs on the integration of elements.</p>
                                 </div>
                                 <div className="flex gap-3 text-dark-blue-secondary">
                                    <div>•</div>
                                    <p>Ran diagnostics tests, repaired bugs, and provided technical supports.</p>
                                 </div>
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
                                    <h3 className='text-dark-blue-secondary font-semibold text-base'>TECHNICAL SUPPORT STAFF</h3>
                                    <h4 className='text-dark-blue-secondary font-semibold'>Comelec</h4>
                                 </div>
                                 <div className="flex items-center">
                                    <p className='font-medium text-dark-blue-secondary text-right'>February - May 2022</p>
                                 </div>
                              </div>
                              <div className="flex flex-col px-3">
                                 <div className="flex gap-3 text-dark-blue-secondary">
                                    <div>•</div>
                                    <p>Provided level 1 support, handled troubleshooting and maintenance, as well as monitoring and deployment of IT equipments.</p>
                                 </div>
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
               <h2 className='font-bold text-lg'>EDUCATION</h2>
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
                                    <h3 className='text-dark-blue-secondary font-semibold text-base'>BS INFORMATION TECHNOLOGY</h3>
                                    <h4 className='text-dark-blue-secondary font-semibold'>University of Eastern Philippines</h4>
                                 </div>
                                 <div className="flex items-center">
                                    <p className='font-medium text-dark-blue-secondary text-right'>August 2018 - June 2022</p>
                                 </div>
                              </div>
                              <div className="flex flex-col px-3">
                                 <div className="flex gap-3 text-dark-blue-secondary">
                                    <div>•</div>
                                    <p>Capstone Project: JOB SEARCH SYSTEM (Using MERN Stack)</p>
                                 </div>
                                 <div className="flex gap-3 text-dark-blue-secondary">
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
      </div>
   )
}

export default Personal