import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useSwipeable } from 'react-swipeable'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const AlbumSlider = () => {
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      nextSlide()
    },
    onSwipedRight: () => {
      prevSlide()
    },
    trackMouse: true,
  })

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => nextSlide(),
      3000
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  return (
    <section className="pt-14 pb-4">
      <h3 className="text-4xl text-center font-great-vibes text-gray-700 mb-6">
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
      <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group' {...handlers}>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        ></div>
        {/* Left Arrow */}
        <button
          className="w-28 absolute top-0 bottom-0 flex items-center justify-center text-white/75 left-0"
          style={{ transform: 'translate3d(0, 0, 0)' }}
          onClick={prevSlide}
        >
          <ChevronLeftIcon className="h-10 w-10" />
        </button>
        {/* Right Arrow */}
        <button
          className="w-28 absolute top-0 bottom-0 flex items-center justify-center text-white/75 right-0"
          style={{ transform: 'translate3d(0, 0, 0)' }}
          onClick={nextSlide}
        >
          <ChevronRightIcon className="h-10 w-10" />
        </button>
      </div>
    </section>
  );
};

export default AlbumSlider;
