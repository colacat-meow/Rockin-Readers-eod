import Head from 'next/head'
import Header from '@/layouts/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rockin Readers | Read on...</title>
        <meta name="description" content="Gain confidence in reading with live practice." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
      </main>
    </>
  )
}
