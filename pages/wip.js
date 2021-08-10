import Layout, { siteTitle } from '../components/layout'
import Image from 'next/image'


export default function WIP() {
  return (
    <Layout >
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

            <div className="h-full z-20 bg-gradient-to-t from-black relative" />
          </div>

          <div className="flex z-30 h-screen justify-center items-center relative">
            <div className="text-center">
              <h2 className="text-white text-6xl">Work</h2>
              <h3 className="text-white text-5xl mt-3">in</h3>
              <h1 className="text-white text-8xl">Progress</h1>
            </div>
          </div>

        </div>

        <div className="h-1/4">
          <div className="h-screen relative">
            <div className="flex justify-center h-1/4 items-center ">
              <h4 className="text-5xl ">These pages are not finished, this is a placeholder.</h4>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

