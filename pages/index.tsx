import Head from 'next/head'
import dynamic from 'next/dynamic';

const MobileView = dynamic<{}>( () => import( '@/views/MobileView' ), {
  ssr: false
} );
const DesktopView = dynamic<{}>( () => import( '@/views/DesktopView' ), {
  ssr: false
} );

export default function Home ()
{
  
  return (
    <>
      <Head>
        <title>Ralf's E-Resume</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* {screenSize.width > MOBILE ? <><DesktopView /></> : <><MobileView /></>} */}
        <DesktopView />
      </main>
    </>
  )
}
