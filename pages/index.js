import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
//import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Image from 'next/image'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>

      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="h-screen">

        <div className="h-3/4">
          <div className="h-3/4 w-full absolute">
            <Image
              priority
              className="z-10"
              src="/images/carousel.jpg"
              layout="fill"
              objectFit="cover"
            />

           <div className="h-full z-20 bg-gradient-to-t from-black relative"/>
            </div>

            <div className="flex z-30 h-screen justify-center items-center relative">
              <div className="text-center">
                <h2 className="text-white text-6xl">Art</h2>
                <h3 className="text-white text-5xl mt-3">&</h3>
                <h1 className="text-white text-8xl">Design</h1>
              </div>
            </div>
            
          </div>

          <div className="h-1/4">
            <div className="h-screen relative">
              <div className="flex justify-center h-1/4 items-center ">
                <h4 className="text-5xl ">Insert Text</h4>
              </div>
            </div>
          </div>
          <div className="relative h-screen bg-blue-300">

          </div>

        </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
