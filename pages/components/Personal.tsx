import { ClockCircleOutlined, InfoCircleOutlined, SmileOutlined } from '@ant-design/icons'
import { Divider, Timeline } from 'antd'
import React, { useState } from 'react'

const Personal = () =>
{

   return (
      <div className='flex flex-col gap-8 py-3 px-7'>
         <div className="flex flex-col px-5 neumorphism-1 rounded-lg">
            <div className="flex flex-col py-2 gap-2">
               <h2 className='font-bold text-lg text-dark-blue-secondary'>ABOUT</h2>
               <Divider className='m-0'></Divider>
            </div>
            <div className='pb-6 text-dark-blue-secondary font-medium'>I am a skilled software programmer with proficiency in multiple programming languages, databases, and development tools. I am a strong team player with effective communication skills, committed to maintaining high software quality standards. I am also a quick learner and passionate about developing innovative solutions.</div>
         </div>
         <div className="flex flex-col px-5 gap-2 neumorphism-1 rounded-lg">
            <div className="flex flex-col py-2 gap-2">
               <h2 className='font-bold text-lg text-dark-blue-secondary'>EXPERIENCE</h2>
               <Divider className='m-0'></Divider>
            </div>
            <Timeline
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
                                    <p className='font-medium text-dark-blue-secondary'>August 2022 - Present</p>
                                 </div>
                              </div>
                              <div className="flex flex-col px-3">
                                 <div className="flex gap-3 text-dark-blue-secondary font-medium">
                                    <div>•</div>
                                    <p>Codes, tests, and troubleshoots internal programs. </p>
                                 </div>
                                 <div className="flex gap-3 text-dark-blue-secondary font-medium">
                                    <div>•</div>
                                    <p>Maintains and modifies programs, make approved changes by amending flowcharts, develop detailed programming logic, and coding changes.</p>
                                 </div>
                                 <div className="flex gap-3 text-dark-blue-secondary font-medium">
                                    <div>•</div>
                                    <p>Writes new program code using prescribed specifications.</p>
                                 </div>
                                 <div className="flex gap-3 text-dark-blue-secondary font-medium">
                                    <div>•</div>
                                    <p>Confers with users to gain understanding of needed changes or modifications of existing programs.</p>
                                 </div>
                                 <div className="flex gap-3 text-dark-blue-secondary font-medium">
                                    <div>•</div>
                                    <p>Analyzes performance of programs and take action to correct deficiencies based on consultation with users and approval of supervisor.</p>
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
                                    <p className='font-medium text-dark-blue-secondary'>April - July 2022</p>
                                 </div>
                              </div>
                              <div className="flex flex-col px-3">
                                 <div className="flex gap-3 text-dark-blue-secondary font-medium">
                                    <div>•</div>
                                    <p>Extracted and processed data from an Excel file.</p>
                                 </div>
                                 <div className="flex gap-3 text-dark-blue-secondary font-medium">
                                    <div>•</div>
                                    <p>Developed all server-side logic, maintenance, and ensured high-performance and responsiveness to requests from  the frontend.</p>
                                 </div>
                                 <div className="flex gap-3 text-dark-blue-secondary font-medium">
                                    <div>•</div>
                                    <p>Created a dynamic APIs.</p>
                                 </div>
                                 <div className="flex gap-3 text-dark-blue-secondary font-medium">
                                    <div>•</div>
                                    <p>Collaborated with frontend devs on the integration of elements.</p>
                                 </div>
                                 <div className="flex gap-3 text-dark-blue-secondary font-medium">
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
                                    <p className='font-medium text-dark-blue-secondary'>February - May 2022</p>
                                 </div>
                              </div>
                              <div className="flex flex-col px-3">
                                 <div className="flex gap-3 text-dark-blue-secondary font-medium">
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
         <div className="flex flex-col px-5 gap-2 neumorphism-1 rounded-lg">
            <div className="flex flex-col py-2 gap-2">
               <h2 className='font-bold text-lg'>EDUCATION</h2>
               <Divider className='m-0'></Divider>
            </div>
            <Timeline
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
                                    <p className='font-medium text-dark-blue-secondary'>August 2018 - June 2022</p>
                                 </div>
                              </div>
                              <div className="flex flex-col px-3">
                                 <div className="flex gap-3 text-dark-blue-secondary font-medium">
                                    <div>•</div>
                                    <p>Capstone Project: JOB SEARCH SYSTEM in Catarman, Northern Samar (Using MERN Stack)</p>
                                 </div>
                                 <div className="flex gap-3 text-dark-blue-secondary font-medium">
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