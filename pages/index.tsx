import { Timeline } from 'antd';
import React, { useEffect } from 'react';
import { Quicksand } from 'next/font/google';
import { motion } from 'framer-motion';
import { cardVariants, viewportVariant } from '@/utils/Resources';
import Container from './components/Container';
import 'react-toastify/dist/ReactToastify.css';
import { setTimestamp } from '@/utils/utils';

const quicksand = Quicksand({ subsets: ['latin'] });

type ExperienceType = {
   position: string;
   company: string;
   duration: string;
   description: {
      pointer: string;
   }[];
   type?: string;
   level?: 'Intern' | 'Junior' | 'Mid-level' | 'Senior';
};

const HomePage = () => {
   const experiences: ExperienceType[] = [
      {
         position: 'SOFTWARE DEVELOPMENT TEAM LEADER',
         company: 'BizBloqs Management Solutions BV',
         duration: 'December 2023 - Present',
         // level: 'Mid-level',
         // type: 'Hybrid',
         description: [
            {
               pointer:
                  'Worked closely with the local Philippines office and foreign offices in the Netherlands and UK, fostering effective communication and collaboration.',
            },
            {
               pointer:
                  'Collaborated with a small team of front-end and back-end developers in designing and developing websites and web applications.',
            },
            {
               pointer:
                  'Utilized TypeScript, React, Node.js, and Next.js to create new user-facing features and enhance existing functionality.',
            },
            {
               pointer:
                  'Determined the structure and design of web pages, ensuring a seamless and intuitive user experience.',
            },
            {
               pointer:
                  'Built reusable code components for efficiency and consistency across projects.',
            },
            {
               pointer:
                  'Optimized page loading times for improved performance.',
            },
            {
               pointer:
                  'Engaged actively in cross-functional teams, including developers, testers, project managers, and business stakeholders.',
            },
            {
               pointer:
                  'Participated in code reviews and provide constructive feedback to enhance code quality.',
            },
            {
               pointer:
                  'Performed testing, debugging, and troubleshooting to ensure the reliability and functionality of software.',
            },
            {
               pointer:
                  'Performed any other duties assigned to contribute to the overall success of the team.',
            },
         ],
      },
      {
         position: 'PROGRAMMER',
         company: 'SL Agritech Corporation | Makati City, PH',
         duration: 'August 2022 - November 2023',
         // level: 'Junior',
         description: [
            {
               pointer:
                  'Spearheaded the implementation of modern UI design concepts within the team, resulting in the creation of highly user-friendly web applications that enhanced the overall user experience.',
            },
            {
               pointer:
                  'Demonstrated strong problem-solving skills by identifying and fixing bugs in existing systems, and implementing enhancements that significantly improved functionality and performance.',
            },
            {
               pointer:
                  'Led the design and development of a web application aimed at streamlining HR processes, enabling HR personnel to efficiently track and manage applicant applications.',
            },
            {
               pointer:
                  'Actively collaborated with end-users to gather insights and understand their requirements for changes or modifications to existing programs, ensuring that user needs were met effectively.',
            },
            {
               pointer:
                  'Applied a user-centered approach, conducting usability tests and incorporating user feedback to continuously improve and refine web applications.',
            },
            {
               pointer:
                  'Employed agile methodologies to manage project timelines and deliverables, ensuring successful completion of development projects.',
            },
            // {
            //    pointer: 'Worked closely with cross-functional teams, including designers and developers, to ensure seamless integration of design elements and optimal functionality of web applications.'
            // },
            {
               pointer:
                  'Demonstrated effective communication skills in presenting and explaining technical concepts to both technical and non-technical stakeholders.',
            },
         ],
      },
      {
         position: 'BACKEND DEVELOPER',
         company: 'Sterling Insurance Company Inc.',
         duration: `April - July 2022`,
         level: 'Intern',
         type: 'Remote',
         description: [
            {
               pointer:
                  'Conducted data extraction and processing from Excel files, ensuring accuracy and data integrity.',
            },
            {
               pointer:
                  'Developed robust server-side logic and performed regular maintenance to ensure high performance and responsiveness to frontend requests.',
            },
            {
               pointer:
                  'Created dynamic APIs to facilitate seamless data exchange and integration with frontend elements.',
            },
            {
               pointer:
                  'Collaborated closely with frontend developers to ensure smooth integration of components and optimize overall system functionality.',
            },
            {
               pointer:
                  'Conducted diagnostics tests to identify and resolve bugs, ensuring the reliability and stability of the system.',
            },
            {
               pointer:
                  'Provided prompt and effective technical support to users, troubleshooting issues and offering solutions to minimize downtime.',
            },
            {
               pointer:
                  'Actively participated in code reviews and implemented best practices to improve code quality, maintainability, and scalability.',
            },
            {
               pointer:
                  'Stayed updated with the latest industry trends and technologies, incorporating them into development processes to enhance efficiency and innovation.',
            },
            {
               pointer:
                  'Acted as a proactive team member, contributing ideas and suggestions for process improvement and optimization.',
            },
         ],
      },
      {
         position: 'TECHNICAL SUPPORT STAFF',
         company: 'Comelec',
         duration: `February - May 2022`,
         type: 'Part-Time',
         description: [
            {
               pointer:
                  'Delivered exemplary Level 1 support, swiftly addressing technical issues, troubleshooting problems, and ensuring timely resolutions to maintain uninterrupted operations.',
            },
            {
               pointer:
                  'Demonstrated expertise in equipment maintenance, performing regular checks, repairs, and upgrades to optimize system performance and reliability.',
            },
            {
               pointer:
                  'Proactively monitored IT equipment, promptly identifying and mitigating potential issues to minimize downtime and enhance overall system efficiency.',
            },
            {
               pointer: `Played a pivotal role in the seamless deployment of IT equipment, ensuring proper setup, configuration, and integration within the organization's infrastructure.`,
            },
         ],
      },
   ];

   const experienceTimelineItems = (experiences: ExperienceType) => {
      return {
         children: (
            <motion.div
               className='flex flex-col gap-2'
               variants={cardVariants}
               initial='offscreen'
               whileInView='onscreen'
               viewport={viewportVariant}>
               <div className='flex items-center justify-between'>
                  <div className='flex flex-col'>
                     <div className='flex items-center gap-2'>
                        <h3 className='text-base font-bold text-accent-primary'>
                           {experiences.position}
                        </h3>
                        {experiences.level && (
                           <span>({experiences?.level})</span>
                        )}
                     </div>
                     <div className='flex items-center justify-start gap-1'>
                        <h4 className='font-semibold text-accent-secondary'>
                           {experiences.company}
                        </h4>
                        {experiences?.type && (
                           <span className='text-accent-secondary'>
                              ({experiences?.type})
                           </span>
                        )}
                     </div>
                  </div>
                  <div className='flex items-center'>
                     <p className='font-semibold text-right text-accent-primary'>
                        {experiences.duration}
                     </p>
                  </div>
               </div>
               <div className='flex flex-col px-3'>
                  {experiences.description.map(({ pointer }, i) => {
                     return (
                        <div className='flex gap-3' key={i}>
                           <div className='text-accent-secondary'>•</div>
                           <p className='font-medium text-justify text-accent-secondary'>
                              {pointer}
                           </p>
                        </div>
                     );
                  })}
               </div>
            </motion.div>
         ),
      };
   };

   useEffect(() => {
      return () => {};
   }, []);

   return (
      <div className='flex flex-col gap-8 pt-3 max-md:px-4'>
         {/* SUMMARY */}
         <Container title='SUMMARY'>
            <div className='flex flex-col gap-3'>
               <motion.h4
                  className='font-medium text-justify text-accent-secondary'
                  variants={cardVariants}
                  initial='offscreen'
                  whileInView='onscreen'
                  viewport={viewportVariant}>
                  With <strong>{setTimestamp(8, 2022)}</strong> of official work
                  experience and a total of{' '}
                  <strong>
                     {setTimestamp(8, 2018)} of practical knowledge
                  </strong>{' '}
                  in <strong>Software Development</strong>, I bring a wealth of
                  knowledge to the table. My background initially focused on CLI
                  apps and desktop development utilizing <strong>Java</strong>{' '}
                  before transitioning to web application development in 2020.
                  Proficient in Web Technologies like{' '}
                  <strong>
                     JavaScript, TypeScript, ReactJS, NextJS, ExpressJS, MySQL
                  </strong>
                  , and many more, I've continuously expanded my skill set by
                  mastering various web-related technologies and frameworks. My
                  dedication to staying updated with the latest industry trends
                  ensures that I can deliver innovative solutions effectively.
               </motion.h4>
            </div>
         </Container>

         {/* EXPERIENCE */}
         <Container title='EXPERIENCE'>
            <Timeline
               className={quicksand.className}
               items={experiences.map((experience) => {
                  return experienceTimelineItems(experience);
               })}
            />
         </Container>

         {/* EDUCATION */}
         <Container title='EDUCATION'>
            <Timeline
               className={quicksand.className}
               items={[
                  {
                     children: (
                        <motion.div
                           className='flex flex-col gap-2'
                           variants={cardVariants}
                           initial='offscreen'
                           whileInView='onscreen'
                           viewport={viewportVariant}>
                           <div className='flex items-center justify-between'>
                              <div className='flex flex-col'>
                                 <h3 className='text-base font-semibold text-accent-primary'>
                                    BS INFORMATION TECHNOLOGY
                                 </h3>
                                 <h4 className='font-semibold text-accent-secondary'>
                                    University of Eastern Philippines
                                 </h4>
                              </div>
                              <div className='flex items-center'>
                                 <p className='font-semibold text-right text-accent-primary'>
                                    {`August 2018 - June 2022`}
                                 </p>
                              </div>
                           </div>
                           <div className='flex flex-col px-3'>
                              <div className='flex gap-3'>
                                 <div className='text-accent-secondary'>•</div>
                                 <p className='font-medium text-justify text-accent-secondary'>
                                    Graduated Cum Laude
                                 </p>
                              </div>
                           </div>
                        </motion.div>
                     ),
                  },
               ]}
            />
         </Container>
      </div>
   );
};

export default HomePage;
