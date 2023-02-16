import Image from 'next/image';
import lineBottom from '../public/lineBottom.webp';
import lineTop from '../public/lineTop.webp';

const Hero = () => {
  return (
    <header className="bg-center bg-no-repeat bg-cover bg-[url('../public/hero.webp')] h-screen relative">
      <div className="h-screen bg-opacity-50 bg-black flex justify-center">
        <div className="m-20 space-y-4 text-center font-great-vibes">
          <Image className="mx-auto" alt="lineTop" src={lineTop.src} width={220} height={35}/>
          <div className="text-gray-100 text-5xl xs:text-6xl md:text-7xl">
            <span>Thế Vũ</span>
          </div>
          <div className="text-gray-200 text-5xl xs:text-6xl md:text-7xl">
            <span>Minh Trang</span>
          </div>
          <Image className="mx-auto" alt="lineBottom" src={lineBottom.src} width={220} height={35} />
        </div>
      </div>
    </header>
  );
};

export default Hero;
