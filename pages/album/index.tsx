import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import cloudinary from '../../utils/cloudinary';
import generateBlurPlaceholder from '../../utils/generateBlurPlaceholder';
import type { ImageProps } from '../../utils/types';
import logo from '../../public/logo.jpg';
import Link from 'next/link';

const Album: NextPage = ({ images }: { images: ImageProps[] }) => {
  return (
    <>
      <Head>
        <title>VuandTrang Wedding Site!</title>
        <meta
          property="og:image"
          content="https://vandt.day/hero.jpg"
        />
      </Head>
      <main className="mx-auto max-w-[1960px] p-4">
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          <div className="after:content relative mb-5 flex h-[629px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-64 text-center shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0 bg-[url('../public/orangeBackground.jpg')]">
            <img src={logo.src} />
            <h1 className="mt-8 text-5xl tracking-widest font-great-vibes text-gray-700">
              Vũ & Trang
            </h1>
            <h2 className="text-2xl tracking-widest font-great-vibes text-gray-700">
              Wedding Album
            </h2>
            <p className="max-w-[40ch] sm:max-w-[32ch]">
              <i>Cùng ngắm nhìn những bức ảnh cưới của hai chúng mình nhé!</i>
            </p>
            <Link href="/">
              <button
                type="button"
                className="text-white bg-[#ee9492] rounded-md text-sm px-5 py-2.5 mb-4"
              >
                Quay lại trang chủ
              </button>
            </Link>
          </div>
          {images.map(({ id, public_id, format, blurDataUrl }) => (
            <div className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight" key={id}>
              <Image
                alt="Next.js Conf photo"
                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                style={{ transform: 'translate3d(0, 0, 0)' }}
                placeholder="blur"
                blurDataURL={blurDataUrl}
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
                width={720}
                height={480}
                sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
              />
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default Album;

export async function getStaticProps() {
  const results = await cloudinary.v2.search
    .expression(`folder:${process.env.WEDDING_FOLDER}/*`)
    .sort_by('public_id', 'desc')
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
