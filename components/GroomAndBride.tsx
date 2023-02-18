import Image from 'next/image';
import orangeFlower from '../public/common/orangeFlower.webp';
import { groomAndBride } from '../utils/common';

const GroomAndBride = () => {
  return (
    <section className="relative p-10 md:px-48 bg-[#f7f7f7] text-gray-700">
      <h1 className="text-5xl text-center font-great-vibes mb-6">
        Cô dâu & Chú rể
      </h1>
      <div className="w-full flex flex-wrap pb-10">
        {groomAndBride.map((item) =>
          <div className="w-full md:w-1/2" key={item.alt} >
            <div className="flex flex-col items-center py-5 lg:p-20">
              <Image
                src={item.image.src}
                alt={item.alt}
                className="rounded-full mb-8"
                width={208}
                height={208}
              />
              <h2 className="text-4xl text-gray-800 font-great-vibes">
                {item.name}
              </h2>
            </div>
          </div>
        )}
      </div>
      <div className="absolute inset-x-0 -bottom-14 flex justify-center items-center">
        <Image className="w-52" src={orangeFlower.src} alt="orangeFlower" width={208} height={128} />
      </div>
    </section>
  );
};

export default GroomAndBride;
