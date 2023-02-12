import { useState } from "react";
import { table } from "../utils/airtable";

const Rsvp = () => {
  interface formDataType {[key:string]: FormDataEntryValue}
  const responseBody: formDataType = {}

  const [participate, setParticipate] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    formData.forEach((value, property:string) => responseBody[property] = value);
    try {
      const location = !participate ? "" : responseBody.location === "groom" ? "Nhà trai" : "Nhà gái";
      const numOfGuest = !participate ? 0 : Number(responseBody.numOfGuest.toString())
      const fields = {
        "name": responseBody.name?.toString(),
        "participate": participate,
        "location": location,
        "numOfGuest": numOfGuest,
        "message": responseBody.message?.toString()
      }
      await table.create([{ fields: fields}]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="py-8 px-10 md:px-48 text-gray-700 bg-opacity-95 bg-center bg-no-repeat bg-cover bg-[url('../public/rsvp.jpg')]">
      <h1 className="text-5xl text-center font-great-vibes mb-6">
        RSVP
      </h1>
      <div className="flex items-center justify-center">
        <div className="mx-auto w-full max-w-[550px]">
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="name" className="mb-3 block text-base font-medium text-gray-700">
                Họ và tên
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Họ và tên"
                required
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-[#ee9492] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-gray-700">
                Xác nhận tham dự
              </label>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="participate"
                    id="yesButton"
                    value={"yes"}
                    className="h-5 w-5 accent-[#ee9492]"
                    checked={participate} 
                    onChange={() => setParticipate(true)}
                  />
                  <label htmlFor="yesButton" className="pl-3 text-base font-medium text-gray-700">
                    Có
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="participate"
                    id="noButton"
                    value={"no"}
                    className="h-5 w-5 accent-[#ee9492]"
                    checked={!participate} 
                    onChange={() => setParticipate(false)}
                  />
                  <label htmlFor="noButton" className="pl-3 text-base font-medium text-gray-700">
                    Không
                  </label>
                </div>
              </div>
            </div>
            {participate &&
              <div className="flex flex-wrap">
                <div className="w-1/2 pr-3">
                  <div className="mb-5">
                    <label htmlFor="location" className="mb-3 block text-base font-medium text-gray-700">
                      Đám cưới
                    </label>
                    <select
                      name="location"
                      id="location"
                      className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-[#ee9492] focus:shadow-md"
                    >
                      <option value="groom">Nhà trai</option>
                      <option value="bride">Nhà gái</option>
                    </select>
                  </div>
                </div>
                <div className="w-1/2 pl-3">
                  <div className="mb-5">
                    <label htmlFor="numOfGuest" className="mb-3 block text-base font-medium text-gray-700">
                      Số lượng khách
                    </label>
                    <input
                      type="number"
                      name="numOfGuest"
                      id="numOfGuest"
                      placeholder="1"
                      min="1"
                      className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-[#ee9492] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
            }
            <div className="mb-5">
              <label htmlFor="message" className="mb-3 block text-base font-medium text-gray-700">
                Lời chúc tới Cô dâu & Chú rể
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Tin nhắn"
                rows={5}
                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-[#ee9492] focus:shadow-md"
              />
            </div>
            <div className="text-center">
              {formSubmitted &&
                <p className="mb-3 text-[#ee9492] font-bold"><i>Cảm ơn bạn đã phản hồi!</i></p>
              }
              <button type="submit" className="hover:shadow-form rounded-md bg-[#ee9492] py-3 px-8 text-center text-base font-semibold text-white outline-none disabled:opacity-75" disabled={formSubmitted}>
                Gửi lời chúc
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Rsvp;
