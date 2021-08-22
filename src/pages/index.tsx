import Head from 'next/head'
import MainLayout from '../layouts'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Simple News</title>
      </Head>
    </MainLayout>
  )
}


// export const getStaticProps = async () => {
//   // NewsAPIのトップ記事の情報を取得
//   const pageSize = 10   // 取得したい記事の数
//   const topRes = await fetch(
//     `https://newsapi.org/v2/top-headlines?country=jp&pageSize=${pageSize}&apiKey=db4849d109bb4618ae73077bfa60041c`
//   );
//   const topJson = await topRes.json();
//   const topArticles = topJson?.articles;

//   return {
//     props: {
//       topArticles,
//     },
//     revalidate: 60 * 10,
//   };
// };
