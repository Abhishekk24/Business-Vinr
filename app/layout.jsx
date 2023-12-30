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
    <html lang="en" suppressHydrationWarning>

      <body className={inter.className}><ThemeProvider attribute='class' defaultTheme='light'>
        <Header />
        {children}
        <Footer />
      </ThemeProvider>

      </body>

    </html>
  )
}
