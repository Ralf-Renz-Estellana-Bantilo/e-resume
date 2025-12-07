import { ProjectsInterface } from '@/interfaces';
import { cardVariants, viewportVariant } from '@/utils/Resources';
import { Carousel, Divider, Space, Tag } from 'antd';
import { motion } from 'framer-motion';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import { findTagByID } from './tagList';

const Card = () => {
   const mernStack: number[] = [4, 10, 1, 3];

   const projects: ProjectsInterface[] = [
      {
         title: 'Order Management System',
         description:
            'A full cloud-based Order Management System (OMS) for companies of any size. Manage orders, sales, purchasing, production and assembly from one cockpit.',
         tagIDs: [1, 13, 14, 9],
         coverURLs: [],
         duties: [
            'Software Development Team Leader',
            'Front End Developer',
            'UI/UX Designer',
         ],
      },
      {
         title: 'Applicant Tracking & Onboarding System',
         description:
            ' A software application designed to manage the recruitment process and streamline the onboarding of new hires.',
         tagIDs: [2, 4, 6, 7, 11, 9],
         coverURLs: [
            'Onboarding System/pic3.png',
            'Onboarding System/pic4.png',
            'Onboarding System/pic5.png',
            'Onboarding System/code.png',
         ],
         duties: ['Lead Developer', 'UI/UX Designer'],
      },
      {
         title: 'Organizational Chart Library',
         description:
            'A centralized system that displays the company’s hierarchy, departments, and reporting structure, making it easy to find teams and understand organizational relationships.',
         tagIDs: [2, 4, 6, 7, 11, 9],
         coverURLs: [],
         duties: ['Lead Developer', 'UI/UX Designer'],
      },
      {
         title: 'Offboarding System',
         description:
            'A self-service platform where employees can access personal information, company updates, HR services, and essential tools in one convenient place.',
         tagIDs: [2, 4, 6, 7, 11, 9],
         coverURLs: [],
         duties: ['Lead Developer', 'UI/UX Designer'],
      },
      {
         title: 'Employee Portal',
         description:
            'An automated workflow that manages the employee exit process, ensuring smooth coordination between HR, IT, and management while maintaining compliance and proper documentation.',
         tagIDs: [2, 4, 6, 7, 11, 9],
         coverURLs: [],
         duties: ['Full Stack Developer', 'UI/UX Designer'],
      },
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
         duties: ['Team Leader', 'Lead Front End Developer'],
      },
      {
         title: 'E-Portfolio',
         description:
            'A personal website designed to help me showcase my work and achievements in a professional manner online.',
         tagIDs: [1, 13, 5, 14, 9],
         coverURLs: ['E-Resume/pic1.png', 'E-Resume/code.png'],
      },
      {
         title: 'Quiz Maker',
         description:
            'A software application designed to simulate and provide practice for various types of tests, such as standardized tests or certification exams.',
         tagIDs: [...mernStack, 9, 13, 14, 5],
         coverURLs: [
            'Test Simulator/quiz-makeer-1.png',
            'Test Simulator/quiz-makeer-2.png',
            'Test Simulator/quiz-makeer-3.png',
            'Test Simulator/quiz-makeer-4.png',
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

   return (
      <>
         {projects.map(
            ({ coverURLs, title, description, tagIDs, duties }, i) => {
               return (
                  <motion.div
                     className='flex flex-col w-[335px] h-auto bg-opacity-10 p-2 border-1 border-slate-700 bg-slate-500 rounded-lg overflow-hidden sm-breakpoint:w-[90%]'
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

                        {duties && (
                           <>
                              <Divider className='m-0 '></Divider>
                              <div className='flex flex-col'>
                                 {duties.map((duty) => (
                                    <div className='flex gap-3' key={i}>
                                       <div className='text-accent-secondary'>
                                          •
                                       </div>
                                       <p className='text-sm font-medium text-justify text-accent-secondary'>
                                          {duty}
                                       </p>
                                    </div>
                                 ))}
                              </div>
                           </>
                        )}

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
            }
         )}
      </>
   );
};

export default Card;
