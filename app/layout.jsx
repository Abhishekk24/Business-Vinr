// layout.jsx

import Head from 'next/head'; // Import Head from next

import { Raleway } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Vinr Enterprises',
  description: 'Business App',
}

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        {/* Google Analytics script */}
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

      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider attribute='class' defaultTheme='light'>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
