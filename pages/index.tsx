import Head from 'next/head'
import dynamic from 'next/dynamic';

const MobileView = dynamic<{}>( () => import( '@/views/MobileView' ), {
  ssr: false
} );
const DesktopView = dynamic<{}>( () => import( '@/views/DesktopView' ), {
  ssr: false
} );

const isDarkTheme: boolean = !true

export default function Home ()
{

  return (
    <>
      <Head>
        <title>Ralf's E-Resume</title>
        <meta name="description" content="A personal website designed to help me showcase my work and achievements in a professional manner online." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={isDarkTheme ? 'dark-theme dark' : 'light-theme'}>
        <DesktopView />
      </main>
    </>
  )
}
