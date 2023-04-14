import Link from 'next/link';
import Image from 'next/image'
import { createRef, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const AlbumSlider = ({slides}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const refs = slides.reduce((acc, val, i) => {
    acc[i] = createRef();
    return acc;
  }, {});

  const scrollToImage = i => {
    setCurrentImage(i);
    const image = refs[i].current
    setTimeout(function () {
      image.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    }, 100);
    
  };

  const totalImages = slides.length;

  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      nextImage()
    },
    onSwipedRight: () => {
      previousImage()
    },
    trackMouse: true,
  })

  const arrowStyle =
    'absolute top-0 bottom-0 flex items-center text-gray-500';

  const sliderControl = isLeft => (
    <button
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={`hidden lg:inline ${arrowStyle} ${isLeft ? 'md:-left-12 -left-8' : 'md:-right-12 -right-8'}`}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? 'left' : 'right'}`}>
        {isLeft ? <ChevronLeftIcon className="h-8 w-8" /> : <ChevronRightIcon className="h-8 w-8" />}
      </span>
    </button>
  );

  return (
    <section className="py-10">
      <h1 className="text-5xl text-center font-great-vibes text-gray-700 mb-6">
        Album cưới
      </h1>
      <div className="text-center">
        <Link href="/album">
          <button
            type="button"
            className="text-white bg-[#ee9492] rounded-md text-sm px-5 py-2.5 mb-8"
          >
            Xem toàn bộ Album
          </button>
        </Link>
      </div>
      <div className="lg:px-72 flex items-center" {...handlers}>
        <div className="relative w-full">
          <div className="carousel">
            {sliderControl(true)}
            {slides.map(({ id, public_id, format, blurDataUrl, width, height }, i) => (
              <div className="w-full flex-shrink-0" key={id} ref={refs[i]}>
                <Image
                  blurDataURL={blurDataUrl}
                  src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_1500/${public_id}.${format}`}
                  alt={public_id}
                  className="w-full object-contain"
                  width={width}
                  height={height}
                />
              </div>
            ))}
            {sliderControl(false)}
          </div>
          <div className="space-x-1 text-center mt-4">
            {slides.map((img, i) => (
              <button
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${i === currentImage ? 'bg-[#ee9492]' : 'bg-gray-200'}`}
                key={img.id}
                onClick={() => scrollToImage(i)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlbumSlider;
