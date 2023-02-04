import Link from 'next/link';
import { createRef, useEffect, useRef, useState } from 'react';
import { useSwipeable } from 'react-swipeable'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const AlbumSlider = ({slides}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const timeoutRef = useRef(null);
  const refs = slides.reduce((acc, val, i) => {
    acc[i] = createRef();
    return acc;
  }, {});

  const scrollToImage = i => {
    setCurrentImage(i);
    refs[i].current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
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

  // const checkInViewport = (el) => {
  //   const rect = el.getBoundingClientRect();
  //   return (
  //     rect.top >= 0 &&
  //     rect.left >= 0 &&
  //     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  //     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  //   );
  // }

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    // console.log(checkInViewport(document.querySelector('.carousel')))
    // if (!checkInViewport(document.querySelector('.carousel'))) return;

    resetTimeout();
    timeoutRef.current = setTimeout(
      () => nextImage(),
      5000
    );

    return () => {
      resetTimeout();
    };
  }, [currentImage]);

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
    'w-28 absolute top-0 bottom-0 flex items-center justify-center text-white/75';

  const sliderControl = isLeft => (
    <button
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={`${arrowStyle} ${isLeft ? 'left-2' : 'right-2'}`}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? 'left' : 'right'}`}>
        {isLeft ? <ChevronLeftIcon className="h-10 w-10" /> : <ChevronRightIcon className="h-10 w-10" />}
      </span>
    </button>
  );

  return (
    <section className="pt-20 pb-4">
      <h3 className="text-5xl text-center font-great-vibes text-gray-700 mb-6">
        Album cưới
      </h3>
      <div className="w-full text-center">
        <Link href="/album">
          <button
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >
            Xem toàn bộ Album ảnh cưới
          </button>
        </Link>
      </div>
      <div className="md:px-72 flex justify-center w-screen items-center">
        <div className="relative w-full">
          <div className="carousel">
            {sliderControl(true)}
            {slides.map((img, i) => (
              <div className="w-full flex-shrink-0" key={img.id} ref={refs[i]}>
                <img src={img.blurDataUrl} className="w-full object-contain" />
              </div>
            ))}
            {sliderControl(false)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlbumSlider;
