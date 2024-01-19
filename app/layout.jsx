// pages/_app.js (or pages/_app.tsx for TypeScript)

import '../styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'
import Head from 'next/head'; // Import Head from next

export const metadata = {
  title: 'Vinr Enterprises',
  description: 'Business App',
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Add your Google Analytics script here */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8PFT7ND6TC"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8PFT7ND6TC');
            `,
          }}
        />
      </Head>
      
      <ThemeProvider attribute='class' defaultTheme='light'>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default MyApp
