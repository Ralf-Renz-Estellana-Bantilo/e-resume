import Image from 'next/image'
import { useEffect, useState } from 'react'
import profileIMG from '@/assets/Images/Ralf Renz Bantilo.png'
import { Button, Tabs, Spin, TabsProps, Divider, Tag } from 'antd'
import { DownloadOutlined } from '@ant-design/icons/lib/icons'
import StickyBox from 'react-sticky-box'
import { Quicksand } from 'next/font/google'

import dynamic from 'next/dynamic';
import { LinksInterface, PanelsInterface, PersonalInformationInterface, ScreenSizeInterface, SkillsInterface } from '@/interfaces'
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "framer-motion";

const Personal = dynamic<{}>( () => import( '@/pages/components/Personal' ), {
   ssr: false
} );
const Projects = dynamic<{}>( () => import( '@/pages/components/Projects' ), {
   ssr: false
} );
const OtherInfo = dynamic<{}>( () => import( '@/pages/components/OtherInfo' ), {
   ssr: false
} );

const MobileView = dynamic<{}>( () => import( './MobileView' ), {
   ssr: false
} );

const quicksand = Quicksand( { subsets: ['latin'] } )

const DesktopView = () =>
{
   const [personalInformation] = useState<PersonalInformationInterface[]>( [
      {
         icon: 'gmail',
         label: 'ralfrenzbantilo@gmail.com'
      },
      {
         icon: 'viber',
         label: '09606528174'
      },
      {
         icon: 'location',
         label: 'Makati City, Philippines'
      },
   ] )

   const [skills] = useState<SkillsInterface[]>( [
      {
         icon: 'html',
         description: 'HTML',
         category: 'Frontend',
         proficiency: 'Advanced',
      },
      {
         icon: 'css',
         description: 'CSS',
         category: 'Frontend',
         proficiency: 'Advanced',
      },
      {
         icon: 'javascript',
         description: 'JavaScript',
         category: 'Frontend',
         proficiency: 'Advanced',
      },
      {
         icon: 'react',
         description: 'React JS',
         category: 'Frontend',
         proficiency: 'Advanced',
      },
      {
         icon: 'nextjs',
         description: 'Next JS',
         category: 'Frontend',
         proficiency: 'Intermediate',
      },
      {
         icon: 'typescript',
         description: 'TypeScript',
         category: 'Frontend',
         proficiency: 'Intermediate',
      },
      {
         icon: 'vuejs',
         description: 'Vue JS',
         category: 'Frontend',
         proficiency: 'Advanced',
      },
      {
         icon: 'tailwindcss',
         description: 'TailwindCSS',
         category: 'Frontend',
         proficiency: 'Advanced',
      },
      {
         icon: 'vuetify',
         description: 'Vuetify',
         category: 'Frontend',
         proficiency: 'Advanced',
      },
      {
         icon: 'nodejs',
         description: 'Node JS',
         category: 'Backend',
         proficiency: 'Advanced',
      },
      {
         icon: 'java',
         description: 'Java',
         category: 'Desktop App',
         proficiency: 'Intermediate',
      },
      {
         icon: 'mysql',
         description: 'MySQL',
         category: 'Database',
         proficiency: 'Intermediate',
      },
      {
         icon: 'photoshop',
         description: 'Photoshop',
         category: 'Design',
         proficiency: 'Advanced',
      },
      {
         icon: 'figma',
         description: 'Figma',
         category: 'Design',
         proficiency: 'Intermediate',
      },
      {
         icon: 'git',
         description: 'Git',
         category: 'Version Control',
         proficiency: 'Intermediate',
      },

   ] )
   const [panels] = useState<PanelsInterface[]>( [
      {
         label: `Personal`,
         key: `${Math.floor( Math.random() * 100 ) + 1}`,
         children: <Personal />,
      },
      {
         label: `Projects`,
         key: `${Math.floor( Math.random() * 100 ) + 1}`,
         children: <Projects />,
      },
      {
         label: `Others`,
         key: `${Math.floor( Math.random() * 100 ) + 1}`,
         children: <OtherInfo />,
      },
   ] )
   const [links] = useState<LinksInterface[]>( [
      {
         icon: 'linkedin',
         path: 'https://linkedin.com/in/ralfrenzbantilo',
      },
      {
         icon: 'github',
         path: 'https://github.com/Ralf-Renz-Estellana-Bantilo',
      },
      {
         icon: 'facebook',
         path: 'https://www.facebook.com/rr.bantilo2000',
      },
      {
         icon: 'messenger',
         path: 'https://m.me/rr.bantilo2000',
      },
   ] )

   const [loader, setToggleLoader] = useState<boolean>( !false )

   const [screenSize, setScreenSize] = useState<ScreenSizeInterface>( {
      width: typeof window !== 'undefined' ? window.innerWidth : 0,
      height: typeof window !== 'undefined' ? window.innerHeight : 0
   } );

   const MOBILE: number = 1024

   const renderTabBar: TabsProps['renderTabBar'] = ( props, DefaultTabBar ) => (
      <StickyBox
         offsetTop={0}
         offsetBottom={20}
         style={{
            zIndex: 110,
         }}
      >
         <DefaultTabBar
            {...props}
            style={{
               zIndex: 110,
               background: '#E7F1F3',
            }}
         />
      </StickyBox>
   );

   const visitPage = ( link: string ): void =>
   {
      const regex = /^https?:\/\/[^\/]+/;
      const baseUrl = regex.exec( window.location.href )?.[0] ?? "";
      const newLink = link.replace( baseUrl, "" );
      window.open( newLink, "_blank" );
   }

   const handleDownload = (): void =>
   {
      const host = `${window.location.href}`.includes( 'localhost' ) ? 'http://localhost:3000' : 'https://ralf-bantilo-e-resume.vercel.app'
      const element = document.createElement( "a" );
      const fileUrl = `${host}/Documents/Resume.pdf`;
      element.href = fileUrl;
      element.download = "Ralf Renz Bantilo - Software Engineer Resume";
      document.body.appendChild( element );
      element.click();
      document.body.removeChild( element );
   };

   useEffect( () =>
   {
      setToggleLoader( true )
      setTimeout( () =>
      {
         setToggleLoader( false )
      }, 1000 );

      const handleResize = (): void =>
      {
         setScreenSize( {
            width: window.innerWidth,
            height: window.innerHeight
         } );
      };

      window.addEventListener( 'resize', handleResize );

      return () =>
      {
         window.removeEventListener( 'resize', handleResize );
      };
   }, [] )

   const container = {
      hidden: { opacity: 1, scale: 0 },
      visible: {
         opacity: 1,
         scale: 1,
         transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
         }
      }
   };

   const item = {
      hidden: { y: 20, opacity: 0 },
      visible: {
         y: 0,
         opacity: 1
      }
   };

   const { width } = screenSize;

   return (
      <div className={`${quicksand.className} bg-background-primary relative flex min-h-screen max-lg:flex max-lg:flex-col`}>

         {/* LEFT PANEL */}
         <div className='flex flex-col justify-between py-5 px-4 gradient-background max-lg:min-h-[100vh] max-lg:justify-evenly max-lg:gap-3' style={{ flex: 2 }}>
            <div className="flex flex-col gap-3 ">
               <motion.div className="flex flex-col items-center gap-2" variants={container} initial="hidden" animate="visible">
                  <motion.div className="flex items-center justify-center border-2 border-gray-500 rounded-full hover:border-gray-400 transition-colors ease-in-out" variants={item}>
                     <motion.div className="w-40 h-40 bg-transparent p-[5px] rounded-full">
                        <Image
                           className="object-cover w-full h-full mx-auto rounded-full"
                           src={profileIMG}
                           alt="Ralf Renz Bantilo"
                           priority
                        />
                     </motion.div>
                  </motion.div>
                  <motion.div className="flex flex-col justify-center" variants={container} initial="hidden" animate="visible">
                     <motion.h3 className='text-center text-background-primary text-2xl font-bold tiktok-effect' variants={item}>RALF RENZ BANTILO</motion.h3>
                     <motion.p className='text-center text-background-secondary' variants={item}>{`< Programmer />`}</motion.p>
                  </motion.div>
               </motion.div>
               <Divider className='m-0 bg-gray-500'></Divider>

               <motion.div className="flex items-center justify-around text-background-primary" variants={container} initial="hidden" animate="visible">
                  {links.map( ( link, i ) =>
                  {
                     return <motion.div className='flex items-center justify-center' variants={item} key={i}>
                        <Button type="primary" shape="circle" icon={<Image
                           className="object-cover w-full rounded-full relative bottom-[6px]"
                           src={require( `@/assets/Icons/${link.icon}.png` ).default}
                           alt="image"
                           width={50}
                           onClick={() => visitPage( link.path )}
                        />} size={'large'} />
                     </motion.div>
                  } )}
               </motion.div>

               <Divider className='m-0 bg-gray-500'></Divider>
               <motion.div className="flex flex-col rounded-lg border-2 border-gray-600 text-background-primary" variants={container} initial="hidden" animate="visible">
                  <div className="flex justify-center border-2 border-transparent border-b-gray-600 p-2">
                     <h4 className='text-center'>Information</h4>
                  </div>
                  <div className="flex flex-col p-2 gap-2">
                     {personalInformation.map( ( info, i ) =>
                     {
                        return <motion.div className="flex items-center gap-2 p-1 transition-colors ease-in-out border border-transparent hover:bg-slate-400 rounded-md hover:rounded-md hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10" key={i} variants={item}>

                           <div className="w-8 h-8 rounded-full flex items-center justify-center"><Image
                              className="object-cover w-full h-full mx-auto rounded-full"
                              src={require( `@/assets/Icons/${info.icon}.png` ).default}
                              alt="image"
                              width={50}
                           /></div>
                           <p style={{ flex: 1 }} className='text-background-primary text-sm font-semibold'>{info.label}</p>
                        </motion.div>
                     } )}
                  </div>
               </motion.div>
            </div>
            <motion.div className="flex" variants={item}>
               <Button type="primary" shape="round" icon={<DownloadOutlined className={`${quicksand.className} relative bottom-1`} />} style={{ flex: 1 }} size='large' onClick={handleDownload}>
                  Download Resume
               </Button>
            </motion.div>
         </div>

         {/* CONTENT PANEL */}
         <div className={width > MOBILE ? 'h-screen overflow-y-scroll' : 'h-screen'} style={{ flex: 5 }}>
            {loader ? <>
               <div className='h-screen flex items-center justify-center'>
                  <Spin size="large" />
               </div>
            </>
               : <>
                  {
                     width > MOBILE ?
                        <Tabs
                           defaultActiveKey="1"
                           centered
                           animated={{ inkBar: true }}
                           className={quicksand.className}
                           renderTabBar={renderTabBar}
                           items={panels}
                        /> : <MobileView />
                  }
               </>
            }
         </div>

         {/* RIGHT PANEL */}
         <div className='gradient-background py-5 px-4 h-screen max-lg:min-h-[100vh]' style={{ flex: 1.8 }}>
            <div className="flex flex-col rounded-lg border-2 border-gray-600 text-background-primary">
               <div className="flex justify-center border-2 border-transparent border-b-gray-600 p-2">
                  <h4 className='text-center'>Technical Skills</h4>
               </div>
               <motion.div
                  className="flex flex-col p-2 gap-2 max-h-[86vh] overflow-auto mr-1 max-lg:max-h-full"
                  variants={container} initial="hidden" animate="visible"
               >
                  {skills.map( ( skill, i ) =>
                  {
                     return <motion.div className="flex items-center gap-2 py-1 px-2 transition-colors ease-in-out border border-transparent hover:bg-slate-400 rounded-md hover:rounded-md hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10" key={i}
                        variants={item}>
                        <div className="w-8 h-8 rounded-full">
                           <Image
                              className="object-cover w-full h-full mx-auto rounded-full"
                              src={require( `@/assets/Icons/${skill.icon}.png` ).default}
                              alt="image"
                           />
                        </div>
                        <div style={{ flex: 1 }} className='flex items-center justify-between'>
                           <div className="flex flex-col">
                              <h4 className='text-background-primary font-semibold text-sm'>{skill.description}</h4>
                              <p className='text-background-secondary text-xs'>{skill.category}</p>
                           </div>
                           <span className='text-background-primary text-xs'>{skill.proficiency}</span>
                        </div>
                     </motion.div>
                  } )}
               </motion.div>
            </div>
         </div>
      </div>
   )
}

export default DesktopView