// import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// const inter = Inter({ subsets: ['latin'] })
export const runtime = "edge";

export const metadata = {
  title: 'Byte IT',
  description: 'Byte-IT next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          precedence="default"
        />
        {/*GOOGLE FONTS*/}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Play&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={''}>
        <Navbar />
        {children}
        <Footer title='BYTE-IT' />
      </body>
    </html>
  )
}
