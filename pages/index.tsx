import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import profileIMG from '@/assets/Images/Ralf Renz Bantilo.png'
import { Button, Tabs, Spin, TabsProps, Divider } from 'antd'
import { DownloadOutlined } from '@ant-design/icons/lib/icons'
import Personal from './components/Personal'
import Projects from './components/Projects'
import StickyBox from 'react-sticky-box'
import OtherInfo from './components/OtherInfo'
import { Quicksand } from 'next/font/google'

const quicksand = Quicksand( { subsets: ['latin'] } )

export default function Home ()
{
  const [personalInformation, setPersonalInformation] = useState( [
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

  const [skills, setSkills] = useState( [
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
      description: 'Node JS (Express)',
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
  const [panels, setPanels] = useState( [
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
  const [links, setLinks] = useState( [
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

  const [loader, setToggleLoader] = useState( !false )


  const renderTabBar: TabsProps['renderTabBar'] = ( props, DefaultTabBar ) => (
    <StickyBox
      offsetTop={0}
      offsetBottom={20}
      style={{
        zIndex: 1,
      }}
    >
      <DefaultTabBar
        {...props}
        style={{
          background: '#E7F1F3',
        }}
      />
    </StickyBox>
  );

  const visitPage = ( link: string ) =>
  {
    const regex = /^https?:\/\/[^\/]+/;
    const baseUrl = regex.exec( window.location.href )?.[0] ?? "";
    const newLink = link.replace( baseUrl, "" );
    window.open( newLink, "_blank" );
  }

  const handleDownload = () =>
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
  }, [] )


  return (
    <>
      <Head>
        <title>E-Resume</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${quicksand.className} bg-background-primary relative flex min-h-screen max-lg:flex max-lg:flex-col`}>

        {/* LEFT PANEL */}
        <div className='flex flex-col justify-between py-3 px-5 gradient-background max-lg:min-h-[100vh] max-lg:justify-evenly max-lg:gap-3' style={{ flex: 2 }}>
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
        <div className='h-screen overflow-y-scroll max-lg:min-h-[100vh] max-lg:relative' style={{ flex: 5 }}>
          {loader ? <>
            <div className='h-screen flex items-center justify-center'>
              <Spin size="large" />
            </div>

          </>
            : <Tabs
              defaultActiveKey="1"
              centered
              className={quicksand.className}
              renderTabBar={renderTabBar}
              items={panels}
            />}

        </div>

        {/* RIGHT PANEL */}
        <div className='gradient-background py-3 px-5 h-screen max-lg:min-h-[100vh]' style={{ flex: 1.8 }}>
          <div className="flex flex-col rounded-lg border-2 border-gray-600 text-background-primary">
            <div className="flex justify-center border-2 border-transparent border-b-gray-600 p-2">
              <h4 className='text-center'>Technical Skills</h4>
            </div>
            <div className="flex flex-col p-2 gap-2 max-h-[89vh] overflow-auto mr-1 max-lg:max-h-full">
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
      </main>
    </>
  )
}
