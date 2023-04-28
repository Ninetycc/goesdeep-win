import { Disclosure, Transition } from "@headlessui/react";

const Sidebar = ({ open = false, setOpen }) => {
  return (
    <>
      <Transition show={open}>
        {/* Sliding sidebar */}
        <Transition.Child
          className="fixed right-0 top-0 w-[250px] z-30 h-screen"
          enter="transition ease-in-out duration-300 transform"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <div
            id="sidebar"
            className={`overflow-auto right-0 top-0 w-[250px] h-screen bg-almost-white pt-20 p-8 z-50`}
          >
            <button
              onClick={() => setOpen(false)}
              aria-expanded={open}
              aria-controls="sidebar"
            >
              <img
                className="absolute top-5 right-5"
                src="images/icon-close-menu.svg"
                alt="Close Menu"
              />
            </button>
            <ul className="flex flex-col space-y-3">
              <li>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex items-center text-left">
                        <span className="mr-4 cursor-pointer hover:text-white hover:bg-lime-900">
                          Home
                        </span>
                        <img
                          clasName=""
                          src={`images/icon-arrow-${open ? "up" : "down"}.svg`}
                          alt="Arrow"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        <ul className="flex flex-col space-y-3">
                          <a href="/">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              Home
                            </li>
                          </a>
                          <a href="/about">
                            <li className="cursor-pointer hover:text-white hover:bg-lime-900">
                              About
                            </li>
                          </a>
                          <a href="/Apricot-Seeds">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              Apricot Seeds
                            </li>
                          </a>

                          <a href="/careers">
                            <li className="cursor-pointer hover:text-white hover:bg-lime-900">
                              Careers
                            </li>
                          </a>
                          <li className="cursor-pointer hover:text-white hover:bg-lime-900">
                            5 Our Team
                          </li>
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </li>
              <li>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex items-center text-left">
                        <span className="mr-4 cursor-pointer hover:text-white hover:bg-lime-900">
                          CDS MMS
                        </span>
                        <img
                          clasName=""
                          src={`images/icon-arrow-${open ? "up" : "down"}.svg`}
                          alt="Arrow"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        <ul className="flex flex-col space-y-3">
                          <a href="/">
                            <li className="cursor-pointer hover:text-white hover:bg-lime-900">
                              Home
                            </li>
                          </a>
                          <li className="cursor-pointer hover:text-white hover:bg-lime-900">
                            1 History
                          </li>
                          <a href="/med-bed">
                            <li className="cursor-pointer hover:text-white hover:bg-lime-900">
                              Med-Bed
                            </li>
                          </a>
                          <li className="cursor-pointer hover:text-white hover:bg-lime-900">
                            3 Blog
                          </li>
                          <li className="cursor-pointer hover:text-white hover:bg-lime-900">
                            4 History
                          </li>
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </li>
              <li>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex items-center text-left ">
                        <span className="mr-4 cursor-pointer hover:text-white hover:bg-lime-900">
                          NO VIRUS
                        </span>
                        <img
                          clasName=""
                          src={`images/icon-arrow-${open ? "up" : "down"}.svg`}
                          alt="Arrow"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        <ul className="flex flex-col space-y-3">
                          <a href="/">
                            <li className="cursor-pointer hover:text-white hover:bg-lime-900">
                              NO VIRUS
                            </li>
                          </a>
                          <li className="cursor-pointer hover:text-white hover:bg-lime-900">
                            1 History
                          </li>
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </li>
              <li>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex items-center text-left">
                        <span className="mr-4 cursor-pointer hover:text-white hover:bg-lime-900">
                          GOES DEEP
                        </span>
                        <img
                          clasName=""
                          src={`images/icon-arrow-${open ? "up" : "down"}.svg`}
                          alt="Arrow"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        <ul className="flex flex-col space-y-3">
                          <a href="/goesdeep">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              GOES DEEP
                            </li>
                          </a>
                          <a href="/gods">
                            <li className="cursor-pointer hover:text-white hover:bg-lime-900">
                              GODS
                            </li>
                          </a>
                          <a href="/bluewater">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              Bluewater
                            </li>
                          </a>
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </li>
              <li className="mr-4 cursor-pointer hover:text-white hover:bg-lime-900">
                INDEX
              </li>
              <li>----</li>
            </ul>

            <div className="flex flex-col space-y-5 items-center justify-items-center pt-8">
              <div className="w-full"></div>
            </div>
          </div>
          {/* ... */}
        </Transition.Child>
        <Transition.Child
          enter="transition-opacity ease-linear duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {/* ... */}
          <div
            onClick={() => setOpen(false)}
            className={`"w-full h-full fixed bg-black opacity-80 z-10 inset-0`}
          ></div>
        </Transition.Child>
      </Transition>
    </>
  );
};

export default Sidebar;
