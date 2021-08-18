import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './navbar'
import Footer from './footer'
const name = 'Austin Gary'
export const siteTitle = 'Sample Website'

export default function Layout({ children, home }) {
  return (

    <div className="font-custom">
      <Navbar/>
      {home ? (
        <>

        </>
      ) : (
        <>

        </>
      )}
      <main>{children}</main>
      <Footer/>
    </div>
  )
}
