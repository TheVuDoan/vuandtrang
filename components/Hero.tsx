import lineBottom from '../public/lineBottom.png';
import lineTop from '../public/lineTop.png';

const Hero = () => {
  return (
    <header className="bg-center bg-no-repeat bg-cover bg-[url('../public/hero.jpg')] h-screen relative">
      <div className="h-screen bg-opacity-50 bg-black flex justify-center">
        <div className="m-20 mx-2 space-y-4 text-center font-great-vibes">
          <img className="mx-auto" src={lineTop.src} />
          <div className="text-gray-100 text-5xl xs:text-6xl md:text-7xl">
            <span>Thế Vũ</span>
          </div>
          <div className="text-gray-200 text-5xl xs:text-6xl md:text-7xl">
            <span>Minh Trang</span>
          </div>
          <img className="mx-auto" src={lineBottom.src} />
        </div>
      </div>
    </header>
  );
};

export default Hero;
