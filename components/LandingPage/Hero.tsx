import Image from 'next/image';
import lineBottom from '../../public/common/lineBottom.webp';
import lineTop from '../../public/common/lineTop.webp';
import { groomAndBride } from '../../utils/config';

const Hero = () => {
  return (
    <header className="bg-center bg-no-repeat bg-cover bg-[url('../public/hero.webp')] h-screen relative">
      <div className="h-screen bg-opacity-50 bg-black flex justify-center">
        <div className="my-20 space-y-4 text-center font-great-vibes">
          <Image className="mx-auto" alt="lineTop" src={lineTop.src} width={220} height={35}/>
          <div className="text-gray-100 text-5xl xs:text-6xl md:text-7xl">
            <span>{groomAndBride.groom.shortName}</span>
          </div>
          <div className="text-gray-200 text-5xl xs:text-6xl md:text-7xl">
            <span>{groomAndBride.bride.shortName}</span>
          </div>
          <Image className="mx-auto" alt="lineBottom" src={lineBottom.src} width={220} height={35} />
        </div>
      </div>
    </header>
  );
};

export default Hero;
