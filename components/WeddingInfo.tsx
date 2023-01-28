import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import type { WeddingInfoModalProps } from '../utils/types'

const data: WeddingInfoModalProps[] = [
  {
    buttonLabel: 'Lễ cưới nhà gái',
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3135.0460639195676!2d106.69116121547967!3d20.863217909550816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a7be3b26b7f15%3A0xfb767616d10e5e50!2zVHJ1bmcgdMOibSB0aeG7h2MgY8aw4bubaSBI4bqjaSDEkMSDbmcgUGxhemEgSOG6o2kgUGjDsm5n!5e0!3m2!1svi!2s!4v1674915525839!5m2!1svi!2s',
    locationTitle: 'Trung Tâm Tiệc Cưới Hải Đăng Plaza, 19 Trần Khánh Dư, Máy Tơ, Ngô Quyền, Hải Phòng',
    timeline: [
      {
        time: '17:00',
        activity: 'Đón khách, chụp ảnh lưu niệm cùng cô dâu và chú rể'
      },
      {
        time: '17:30',
        activity: 'Lễ thành hôn'
      },
      {
        time: '18:00',
        activity: 'Khai tiệc'
      }
    ]
  },
  {
    buttonLabel: 'Lễ cưới nhà trai',
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3912117178347!2d105.81358851543025!3d21.01702708600477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab64a157d313%3A0xc315cd481b1a6e5!2zVHJ1bmcgVMOibSBUaeG7h2MgQ8aw4bubaSBTdGFyIEdhbGF4eQ!5e0!3m2!1svi!2s!4v1674912984562!5m2!1svi!2s',
    locationTitle: 'Trung Tâm Tiệc Cưới Star Galaxy, 87 Láng Hạ, Thành Công, Ba Đình, Hà Nội',
    timeline: [
      {
        time: '10:30',
        activity: 'Đón khách, chụp ảnh lưu niệm cùng cô dâu và chú rể'
      },
      {
        time: '11:00',
        activity: 'Lễ thành hôn'
      },
      {
        time: '11:30',
        activity: 'Khai tiệc'
      }
    ]
  }
];

const WeddingInfo = () => {
  return (
    <section className="pt-20 pb-4 mx-10">
      <h3 className="text-4xl text-center font-great-vibes text-gray-700 mb-6">
        Thông tin lễ cưới
      </h3>
      <div className="w-full flex flex-wrap pb-20 text-center">
        {data.map((item) =>
          <div className="w-full md:w-1/2 px-4" key={item.buttonLabel}>
            <div className="flex flex-col items-center py-14 sm:px-8 lg:p-20 text-center">
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
      <div className="inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        >
          {props.buttonLabel}
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
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex flex-col-reverse md:flex-row mt-2">
                    <div className="md:w-1/2 w-full px-4 mb-6 md:mb-0">
                      <Dialog.Title
                        as="h2"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Địa điểm
                      </Dialog.Title>
                      <div className="sticky top-8 text-center md:text-left">
                        <p className="mb-4 text-gray-700">
                          {props.locationTitle}
                        </p>
                      </div>
                      <div className="p-2 bg-white rounded-lg shadow-lg">
                        <iframe
                          src={props.location}
                          className="w-full h-[480px] md:h-[350px]"
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
                    <div className="w-full px-4 md:w-1/2">
                      <Dialog.Title
                        as="h2"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Lịch trình đám cưới
                      </Dialog.Title>
                      <ol className="relative border-l border-gray-200 dark:border-gray-700">
                        {props.timeline.map((milestone) => 
                          <li className="mb-10 ml-4" key={milestone.time}>
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{milestone.time}</time>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{milestone.activity}</p>
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
