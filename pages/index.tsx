import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AddReceipts from '../components/AddReceipts'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Household assistant</title>
        <meta name="description" content="Household assistant" />
        <link rel="icon" href="/images/logo/woman_cook.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to site!
        </h1>
        <AddReceipts/>
      </main>

      <footer className={styles.footer}>
          Powered by alllinka
          <span className={styles.logo}>
            <Image src="/womancook.svg" alt="Household" width={72} height={72} />
          </span>
      </footer>
    </div>
  )
}

export default Home
