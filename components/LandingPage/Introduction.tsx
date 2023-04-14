import { introduction } from "../../utils/config";

const Introduction = () => {
  return (
    <section className="py-8 px-10 md:px-48 text-gray-700">
      <h1 className="text-5xl text-center font-great-vibes mb-6">
        We are Getting Married!
      </h1>
      <p className="text-center">
        {introduction}
      </p>
    </section>
  );
};

export default Introduction;
