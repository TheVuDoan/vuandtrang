import TextWithLine from "./Utils/TextWithLine";

const GroomAndBride = () => {
  return (
    <section className="pt-20 pb-4">
      <h3 className="text-3xl text-center font-sans font-bold text-gray-700 mb-6">
        Cô dâu & Chú rể
      </h3>
      <div className="w-full flex flex-wrap pb-20">
        <div className="w-full md:w-1/2 px-4">
          <div className="flex flex-col items-center py-14 sm:px-8 lg:p-20 text-center">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
              alt="pengantin perempuan"
              className="w-48 h-48 rounded-full mb-8"
            />
            <h3 className="text-5xl font-medium font-head mb-4 text-gray-800">
              Đoàn Thế Vũ
            </h3>
            <div className="mb-4">
              <TextWithLine>Pengantin Perempuan</TextWithLine>
            </div>
            <p className="font-sans text-gray-500 leading-6">
              Lahir pada 31 Februari 1999 di Curup, Bengkulu. Putri Bungsu dari{" "}
              <strong>Bapak Edward Newgate (Alm.)</strong> dan{" "}
              <strong>Ibu Ross Newgate</strong>.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 px-4">
          <div className="flex flex-col h-full items-center py-14 sm:px-8 lg:p-20 text-center justify-between">
            <div className="flex flex-col items-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                alt="pengantin laki-laki"
                className="w-48 h-48 rounded-full mb-8"
              />
              <h3 className="text-5xl font-medium font-head mb-4 text-gray-800">
                Fauzi Al Aziz
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <TextWithLine>Pengantin Laki-laki</TextWithLine>
              </div>
              <p className="font-sans text-gray-500 leading-6">
                Lahir pada 90 Desember 2145 di Ciamis, Jawa Barat. Putra Sulung
                dari <strong>Bapak Gol D. Roger</strong> dan{" "}
                <strong>Ibu Portgas D. Rouge</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroomAndBride;