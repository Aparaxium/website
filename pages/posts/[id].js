import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
//import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <div className="flex-col">
                <h1 className="flex justify-center m-1 p-1">{postData.title}</h1>
                <div className="flex justify-center m-1 p-1">
                    <Date  dateString={postData.date} />
                </div>
                <div className="text-center m-2 p-2" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                </div>
            </article>
        </Layout>
    )
}


export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}


export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

