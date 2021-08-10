import Head from 'next/head'
import Image from 'next/image'
//import styles from './layout.module.css'
//import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Austin Gary'
export const siteTitle = 'Sample Website'

export default function Layout({ children, home }) {
  return (

    <div>
      <div className="h-8 z-50 w-full top-0 sticky bg-gray-500 flex justify-center">
        <p>navbar</p>
      </div>
      {home ? (
        <>

        </>
      ) : (
        <>

        </>
      )}
      <main>{children}</main>
    </div>
  )
}
