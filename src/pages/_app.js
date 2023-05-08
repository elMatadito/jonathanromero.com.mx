import Head from "next/head";
import { Montserrat } from 'next/font/google'
import '@/styles/Global.scss';

const montserrat = Montserrat({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Jonathan Romero Hernandez</title>
        <meta name="description" content="Full Stack Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx global>{`
        :root {
          --montserrat-font: ${montserrat.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>)
}
