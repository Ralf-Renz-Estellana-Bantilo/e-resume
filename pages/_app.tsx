import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Layout from './layout';
import { NextUIProvider } from '@nextui-org/react';
import Head from 'next/head';
import { ConfigProvider, theme } from 'antd';
import AppContextProvider from '@/context/appContext';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Ralf's E-Portfolio</title>
                <meta
                    name="description"
                    content="A personal website designed to help me showcase my work and achievements in a professional manner online."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ConfigProvider
                theme={{
                    algorithm: theme.darkAlgorithm,
                }}
            >
                <NextUIProvider>
                    <AppContextProvider>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </AppContextProvider>
                </NextUIProvider>
            </ConfigProvider>
            <Analytics />
            <SpeedInsights />
        </>
    );
}
