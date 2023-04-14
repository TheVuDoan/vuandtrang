import type { NextPage } from 'next';

import LandingPage from '../components/LandingPage';
import cloudinary from '../utils/cloudinary';
import getBase64ImageUrl from '../utils/getBase64ImageUrl';
import type { ImageProps } from '../utils/types';

const Home: NextPage = ({ images }: { images: ImageProps[] }) => {
  return (
    <LandingPage images={images} />
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

  let i = 0;
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    });
    i++;
  }

  const blurImagePromises = results.resources.map((image: ImageProps) => {
    return getBase64ImageUrl(image);
  })
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

  for (let i = 0; i < reducedResults.length; i++) {
    reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i];
  }

  return {
    props: {
      images: reducedResults
    },
  }
}