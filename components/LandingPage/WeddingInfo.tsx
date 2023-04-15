import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { MapPinIcon, CalendarIcon, XMarkIcon, ChatBubbleLeftRightIcon, GiftIcon, CakeIcon } from '@heroicons/react/24/outline';

import { weddingInfoes } from '../../utils/config';
import type { WeddingInfoModalProps } from '../../utils/types';

const icons = [<ChatBubbleLeftRightIcon />, <GiftIcon />, <CakeIcon />]

const WeddingInfo = () => {
  return (
    <section className="p-10 bg-[url('../public/common/orangeBackground.webp')]">
      <h1 className="text-5xl text-center font-great-vibes text-gray-700 mb-6">
        Thông tin lễ cưới
      </h1>
      <div className="w-full flex flex-wrap text-center">
        {weddingInfoes.map((item) =>
          <div className="w-full md:w-1/2" key={item.cardTitle}>
            <div className="flex flex-col items-center py-4 lg:p-20">
              <InfoModal {...item} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const InfoModal: React.FC<WeddingInfoModalProps> = (props: WeddingInfoModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-md shadow">
        <h2 className="mb-2 text-2xl font-bold text-gray-700">{props.cardTitle}</h2>
        <p className="mb-2 text-gray-700">
          <CalendarIcon className="h-4 w-4 inline mb-1" /> {props.time}
        </p>
        <p className="mb-3 text-gray-700 whitespace-pre-wrap">
          <MapPinIcon className="h-4 w-4 inline mb-1" /> {props.locationTitle}
        </p>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="text-white bg-[#ee9492] rounded-md text-sm px-5 py-2.5"
        >
          Thông tin chi tiết
        </button>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full transform overflow-hidden rounded-md bg-white p-6 align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="div"
                    className="text-lg leading-6 text-gray-500 mb-4"
                  >
                    <button className="float-right" onClick={() => setIsOpen(false)} >
                      <XMarkIcon className="h-4 w-4" />
                    </button>
                  </Dialog.Title>
                  <div className="flex flex-col-reverse md:flex-row">
                    <div className="w-full md:w-1/2 px-4">
                      <h2 className="text-lg leading-6 text-gray-900 font-bold mb-2">
                        Địa điểm
                      </h2>
                      <div className="text-left">
                        <p className="mb-4 text-gray-700">
                          {props.locationTitle}
                        </p>
                      </div>
                      <div className="p-2 bg-white rounded-md shadow-md">
                        <iframe
                          src={props.location}
                          className="w-full h-[350px]"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title={props.locationTitle}
                          scrolling="no"
                          aria-label={props.locationTitle}
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4">
                      <h2 className="text-lg leading-6 text-gray-900 font-bold mb-4">
                        Lịch trình đám cưới
                      </h2>
                      <ol className="relative border-l border-gray-200">
                        {props.timeline.map((milestone, index) => 
                          <li className="mb-10 ml-4" key={milestone.time}>
                            <div className="absolute w-4 h-4 mt-0.5 -left-2 border border-white">
                              {icons[index]}
                            </div>
                            <p className="text-sm font-bold text-[#ee9492]">{milestone.time}</p>
                            <p className="mb-4 text-base font-normal text-gray-700">{milestone.activity}</p>
                          </li>
                        )}
                      </ol>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default WeddingInfo;
