import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import AlbumSlider from '../components/AlbumSlider';
import GroomAndBride from '../components/GroomAndBride';
import Hero from '../components/Hero';
import WeddingInfo from '../components/WeddingInfo';

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Thiệp cưới</title>
        <meta
          property="og:image"
          content="https://nextjsconf-pics.vercel.app/og-image.png"
        />
        <meta
          name="twitter:image"
          content="https://nextjsconf-pics.vercel.app/og-image.png"
        />
      </Head>
      <Hero />
      <GroomAndBride />
      <AlbumSlider />
      <WeddingInfo />
      <footer className="p-6 text-center text-white/80 sm:p-12">
        Thank you to{' '}
        <a
          href="https://edelsonphotography.com/"
          target="_blank"
          className="font-semibold hover:text-white"
          rel="noreferrer"
        >
          Josh Edelson
        </a>
        ,{' '}
        <a
          href="https://www.newrevmedia.com/"
          target="_blank"
          className="font-semibold hover:text-white"
          rel="noreferrer"
        >
          Jenny Morgan
        </a>
        , and{' '}
        <a
          href="https://www.garysextonphotography.com/"
          target="_blank"
          className="font-semibold hover:text-white"
          rel="noreferrer"
        >
          Gary Sexton
        </a>{' '}
        for the pictures.
      </footer>
    </>
  )
}

export default Home;
