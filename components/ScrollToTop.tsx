import { useEffect, useState } from 'react';
import { ArrowSmallUpIcon } from '@heroicons/react/24/outline';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    }
  }, [])

  return (
    <div className={`${isVisible ? 'opacity-100' : 'opacity-0'} fixed rounded-full bg-[#ee9492] text-white bottom-0 right-0 w-10 h-10 p-2 mb-5 mr-5 text-center`}>
      <button type="button" onClick={scrollToTop} className="mt-0.5">
        <ArrowSmallUpIcon className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  )
}

export default ScrollToTop;
