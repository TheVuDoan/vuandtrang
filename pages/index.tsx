import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import AlbumSlider from '../components/AlbumSlider';
import FooterImage from '../components/FooterImage';
import GroomAndBride from '../components/GroomAndBride';
import Hero from '../components/Hero';
import WeddingInfo from '../components/WeddingInfo';
import cloudinary from '../utils/cloudinary';
import getBase64ImageUrl from '../utils/getBase64ImageUrl'
import type { ImageProps } from '../utils/types';

const Home: NextPage = ({ images }: { images: ImageProps[] }) => {
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
      <AlbumSlider slides={images} />
      <WeddingInfo />
      <FooterImage />
    </>
  )
}

export default Home;

export async function getStaticProps() {
  const results = await cloudinary.v2.search
    .expression(`folder:${process.env.SLIDER_FOLDER}/*`)
    .sort_by('public_id', 'asc')
    .max_results(400)
    .execute();
  let reducedResults: ImageProps[] = [];

  let i = 0
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    })
    i++
  }

  const blurImagePromises = results.resources.map((image: ImageProps) => {
    return getBase64ImageUrl(image)
  })
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises)

  for (let i = 0; i < reducedResults.length; i++) {
    reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i]
  }

  return {
    props: {
      images: reducedResults,
    },
  }
}