import Head from 'next/head'
import Image from 'next/image'
//import styles from './layout.module.css'
//import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Austin Gary'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (

    <div className="mx-auto rounded-xl shadow-md overflow-hidden bg-black bg-opacity-25 p-2">

      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <header className="flex-col">
        {home ? (
          <>
          <div className="flex justify-center p-2">
            <Image
              priority
              src="/images/profile.jpg"
              className="rounded-full"
              height={144}
              width={144}
              alt={name}
            />
            </div>
          </>
        ) : (
          <>
        <div className="flex justify-center p-2">
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className="rounded-full justify-center"
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            </div>
            <div className="flex justify-center">
              <Link href="/">
                <a>{name}</a>
              </Link>
              </div>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="flex justify-center m-8">
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
