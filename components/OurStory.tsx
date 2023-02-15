import { ourStories } from '../utils/common';

const OurStory = () => {
  return (
    <section className="pt-20 pb-10 px-10 md:px-48 text-gray-700">
      <h1 className="text-5xl text-center font-great-vibes mb-10 px-5">
        Câu chuyện của chúng mình
      </h1>
      <div className="relative h-full">
        <div className="border-2 border-[#285c4e] absolute h-full md:left-1/2"></div>
        <div className="border-2 border-[#285c4e] absolute h-full md:right-1/2"></div>
        {ourStories.map((item, index) => 
          <div className={`ml-6 md:ml-0 mb-8 flex ${index % 2 === 0 ? "md:text-right flex-row-reverse" : ""}`} key={item.time}>
            <div className="md:w-1/2"></div>
            <div className="md:w-1/2 md:px-6">
              <p className="mb-3 font-bold text-[#ee9492] md:text-lg">{item.time}</p>
              <h2 className="mb-3 font-bold text-lg md:text-2xl">{item.title}</h2>
              <p className="text-sm md:text-base text-gray-700 whitespace-pre-wrap">
                {item.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OurStory;
  