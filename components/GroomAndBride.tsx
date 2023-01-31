import TextWithLine from './Utils/TextWithLine';
import groom from '../public/groom.jpg';
import bride from '../public/bride.jpg';

const data = [
  {
    image: bride,
    alt: 'Cô dâu',
    name: 'Vũ Minh Trang',
    age: 26,
    description: 'Lahir pada 31 Februari 1999 di Curup, Bengkulu. Putri Bungsu dari'
  },
  {
    image: groom,
    alt: 'Chú rể',
    name: 'Đoàn Thế Vũ',
    age: 26,
    description: 'Lahir pada 90 Desember 2145 di Ciamis, Jawa Barat. Putra Sulung'
  }
];

const GroomAndBride = () => {
  return (
    <section className="pt-14 pb-4 mx-10">
      <h3 className="text-4xl text-center font-great-vibes text-gray-700 mb-6">
        Cô dâu & Chú rể
      </h3>
      <div className="w-full flex flex-wrap pb-20">
        {data.map((item) =>
          <div className="w-full md:w-1/2 px-4" key={item.alt}>
            <div className="flex flex-col items-center py-14 sm:px-8 lg:p-20 text-center">
              <img
                src={item.image.src}
                alt={item.alt}
                className="w-48 h-48 rounded-full mb-8"
              />
              <h3 className="text-5xl font-medium font-head mb-4 text-gray-800 font-great-vibes">
                {item.name}
              </h3>
              <div className="mb-4">
                <TextWithLine>{item.age} tuổi</TextWithLine>
              </div>
              <p className="font-sans text-gray-500 leading-6">
                {item.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GroomAndBride;
