import type { NextPage } from 'next';
import cloudinary from '../../utils/cloudinary';
import generateBlurPlaceholder from '../../utils/generateBlurPlaceholder';
import type { ImageProps } from '../../utils/types';
import AlbumPage from '../../components/AlbumPage';

const Album: NextPage = ({ images }: { images: ImageProps[] }) => {
  return (
    <AlbumPage images={images} />
  )
}

export default Album;

export async function getStaticProps() {
  const results = await cloudinary.v2.search
    .expression(`folder:${process.env.WEDDING_FOLDER}/*`)
    .sort_by('filename', 'asc')
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
    return generateBlurPlaceholder(image);
  })
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

  for (let i = 0; i < reducedResults.length; i++) {
    reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i];
  }

  return {
    props: {
      images: reducedResults
    }
  }
}
