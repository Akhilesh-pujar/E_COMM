import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps:{session, ...pageProps} }) {
  return <SessionProvider>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </SessionProvider>
}
