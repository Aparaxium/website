import Layout, { siteTitle } from '../components/layout'
import Image from 'next/image'


export default function WIP() {
  return (
    <Layout >
      <div className="h-screen">

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

