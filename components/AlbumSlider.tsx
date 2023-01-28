import Link from "next/link";

const AlbumSlider = () => {
  return (
    <section className="pt-20 pb-4 mx-10">
      <h3 className="text-4xl text-center font-great-vibes text-gray-700 mb-6">
        Album cưới
      </h3>
      <div className="w-full pb-20 text-center">
        <Link href="/album">
          <button
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >
            Xem toàn bộ Album ảnh cưới
          </button>
        </Link>
      </div>
    </section>
  );
};

export default AlbumSlider;
