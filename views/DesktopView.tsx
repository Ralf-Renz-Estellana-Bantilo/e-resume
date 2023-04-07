import Image from 'next/image'
import { useEffect, useState } from 'react'
import profileIMG from '@/assets/Images/Ralf Renz Bantilo.png'
import { Button, Tabs, Spin, TabsProps, Divider } from 'antd'
import { DownloadOutlined } from '@ant-design/icons/lib/icons'
import StickyBox from 'react-sticky-box'
import { Quicksand } from 'next/font/google'

import dynamic from 'next/dynamic';
import { LinksInterface, PanelsInterface, PersonalInformationInterface, ScreenSizeInterface, SkillsInterface } from '@/interfaces'

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
   const [personalInformation, setPersonalInformation] = useState<PersonalInformationInterface[]> ( [
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

   const [skills, setSkills] = useState<SkillsInterface[]>( [
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
         proficiency: 'Intermediate',
      },
      {
         icon: 'vuetify',
         description: 'Vuetify',
         category: 'Frontend',
         proficiency: 'Intermediate',
      },
      {
         icon: 'nodejs',
         description: 'Node JS',
         category: 'Backend',
         proficiency: 'Intermediate',
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
         description: 'Adobe Photoshop',
         category: 'Design',
         proficiency: 'Intermediate',
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
   const [panels, setPanels] = useState<PanelsInterface[]>( [
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
   const [links, setLinks] = useState<LinksInterface[]>( [
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

   const MOBILE:number = 600

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
      element.download = "Ralf Renz Bantilo - Junior Programmer Resume";
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

      const handleResize = ():void =>
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

   const { width } = screenSize;

   return (
      <div className={`${quicksand.className} bg-background-primary relative flex min-h-screen max-lg:flex max-lg:flex-col`}>

         {/* LEFT PANEL */}
         <div className='flex flex-col justify-between py-5 px-4 gradient-background max-lg:min-h-[100vh] max-lg:justify-evenly max-lg:gap-3' style={{ flex: 2 }}>
            <div className="flex flex-col gap-3 ">
               <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center justify-center">
                     <div className="w-40 h-40 bg-gray-300 border-2 border-dark-blue-secondary rounded-full">
                        <Image
                           className="object-cover w-full h-full mx-auto rounded-full"
                           src={profileIMG}
                           alt="Ralf Renz Bantilo"
                           priority
                        />
                     </div>
                  </div>
                  <div className="flex flex-col justify-center">
                     <h3 className='text-center text-background-primary text-2xl font-bold tiktok-effect'>RALF RENZ BANTILO</h3>
                     <p className='text-center text-background-secondary'>{`< Junior Programmer />`}</p>
                  </div>
               </div>
               <Divider className='m-0 bg-gray-500'></Divider>

               <div className="flex items-center justify-around text-background-primary">
                  {links.map( ( link, i ) =>
                  {
                     return <Button type="primary" shape="circle" key={i} icon={<Image
                        className="object-cover w-full rounded-full relative bottom-[6px]"
                        src={require( `@/assets/Icons/${link.icon}.png` ).default}
                        alt="image"
                        width={50}
                        onClick={() => visitPage( link.path )}
                     />} size={'large'} />
                  } )}
               </div>

               <Divider className='m-0 bg-gray-500'></Divider>
               <div className="flex flex-col rounded-lg border-2 border-gray-600 text-background-primary">
                  <div className="flex justify-center border-2 border-transparent border-b-gray-600 p-2">
                     <h4 className='text-center'>Information</h4>
                  </div>
                  <div className="flex flex-col p-2 gap-2">
                     {personalInformation.map( ( info, i ) =>
                     {
                        return <div className="flex items-center gap-2 p-1" key={i}>

                           <div className="w-8 h-8 rounded-full flex items-center justify-center"><Image
                              className="object-cover w-full h-full mx-auto rounded-full"
                              src={require( `@/assets/Icons/${info.icon}.png` ).default}
                              alt="image"
                              width={50}
                           /></div>
                           <p style={{ flex: 1 }} className='text-background-primary text-sm font-semibold'>{info.label}</p>
                        </div>
                     } )}
                  </div>
               </div>
            </div>
            <div className="flex">
               <Button type="primary" shape="round" icon={<DownloadOutlined className={`${quicksand.className} relative bottom-1`} />} style={{ flex: 1 }} size='large' onClick={handleDownload}>
                  Download Resume
               </Button>
            </div>
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
               <div className="flex flex-col p-2 gap-2 max-h-[87vh] overflow-auto mr-1 max-lg:max-h-full">
                  {skills.map( ( skill, i ) =>
                  {
                     return <div className="flex items-center gap-2 p-1" key={i}>
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
                     </div>
                  } )}
               </div>
            </div>
         </div>
      </div>
   )
}

export default DesktopView