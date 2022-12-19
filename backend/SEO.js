import Head from 'next/head'

var SEO = function(props) {
    const data = props.data;
    return(
        <Head>
            <title key="title">{data.title} - 1giet.cf</title>
            <meta name="description" content={data.description} key="description" />
            <link rel="canonical" href={"https://1giet.cf"+data.url} />

            <meta property="og:description" content={data.description} key="og:description"></meta>
            <meta property="og:title" content={data.title+" - 1giet.cf"} key="og:title"></meta>
            <meta property="og:url" content={"https://1giet.cf"+data.url} />

            <meta name="twitter:title" content={data.title+" - 1giet.cf"} key="twitter:title"></meta>
            <meta name="twitter:description" content={data.description} key="twitter:description"></meta>
        </Head>
    )
}
export default SEO;