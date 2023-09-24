import Head from 'next/head'
import dynamic from 'next/dynamic';
import ComponentContextProvider from '@/context/context';

const DesktopView = dynamic<{}>( () => import( '@/views/DesktopView' ), {
  ssr: false
} );

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
      <main>
        <ComponentContextProvider>
          <DesktopView />
        </ComponentContextProvider>
      </main>
    </>
  )
}
