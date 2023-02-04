import groom from '../public/groom.jpg';
import bride from '../public/bride.jpg';
import redHeart from '../public/redHeart.png';
import orangeFlower from '../public/orangeFlower.png';

const data = [
  {
    image: bride,
    alt: 'Cô dâu',
    name: 'Vũ Minh Trang'
  },
  {
    image: groom,
    alt: 'Chú rể',
    name: 'Đoàn Thế Vũ'
  }
];

const GroomAndBride = () => {
  return (
    <section className="pt-20 pb-4 md:px-48 px:10 relative bg-[#f7f7f7]">
      <h3 className="text-5xl text-center font-great-vibes text-gray-700 mb-6">
        Cô dâu & Chú rể
      </h3>
      <div className="w-full flex flex-wrap pb-14">
        {data.map((item, index) =>
          <>
            <div className="w-full md:w-1/3 px-4">
              <div className="flex flex-col items-center py-5 sm:px-8 lg:p-20 text-center">
                <img
                  src={item.image.src}
                  alt={item.alt}
                  className="w-48 h-48 rounded-full mb-8"
                />
                <h3 className="text-4xl font-medium font-head mb-4 text-gray-800 font-great-vibes">
                  {item.name}
                </h3>
              </div>
            </div>
            {index === 0 &&
              <div className="w-full md:w-1/3 px-4 flex flex-col items-center">
                <img src={redHeart.src} />
              </div>
            }
          </>
        )}
      </div>
      <div className="absolute inset-x-0 -bottom-14 flex justify-center items-center">
        <img className="w-52" src={orangeFlower.src} />
      </div>
    </section>
  );
};

export default GroomAndBride;
