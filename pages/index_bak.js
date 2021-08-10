import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
//import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>

      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="flex-col">
        <section>
          <p className="flex justify-center m-1 p-1">[Your Self Introduction]</p>
        </section>

        <Link href="/first-post">
          <a>test page!</a>
        </Link>

        <section>
          <h2 className="flex justify-center m-1 p-1" >Blog</h2>
          <dir className="flex justify-center">
            <ul >
              {allPostsData.map(({ id, date, title }) => (
                <li key={id}>
                  <dir className="m-1 p-1">
                    <Link href={`/posts/${id}`}>
                      <a>{title}</a>
                    </Link>
                    <br />
                    <small>
                      <Date dateString={date} />
                    </small>
                  </dir>
                </li>

              ))}
            </ul>
          </dir>
        </section>
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
