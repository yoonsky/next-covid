import Head from "next/head";
import styles from "../styles/Home.module.css";
import AppLayout from "../common/components/AppLayout";
import Main from "../components/notice/containers/Main";

export default function Notice() {
  return (
    <div className={styles.container}>
      <Head>
        <title>코로나 바이러스(COVID-19)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <AppLayout>
          <Main />
        </AppLayout>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
