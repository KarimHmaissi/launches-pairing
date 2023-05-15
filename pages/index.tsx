import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { Launch } from '../components/Launch';
import { getLaunches } from '../services/spacex/getLaunches';
import { LaunchPaginatedResponse } from '../services/spacex/getLaunches/types';
import styles from '../styles/Home.module.css';

export default function Home(props: { launches: LaunchPaginatedResponse }) {
  const { launches } = props;
  const launchFromPages = launches.docs;

  console.log(launchFromPages);

  return (
    <div className={styles.container}>
      <Head>
        <title>SpaceX</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          {launchFromPages.map((launch) => (
            <Launch launch={launch} key={launch.flight_number} />
          ))}
        </div>
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const request = {
    query: {},
    options: {
      populate: ['payloads'] as 'payloads'[],
      limit: 10,
    },
  };

  const data = await getLaunches(request);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      launches: data,
    },
  };
};
