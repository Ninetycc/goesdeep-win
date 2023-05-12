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
                          <a href="/cancer">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              Cancer
                            </li>
                          </a>
                          <a href="/Apricot-Seeds">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              Apricot Seeds
                            </li>
                          </a>
                          <a href="./australia4k">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              Australia Documentary 4K
                            </li>
                          </a>

                          <a href="./verve">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              BITTER SWEET SYMPHONY
                            </li>
                          </a>
                          <a href="./enya">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              Enya - Aniron (Extended) HD
                            </li>
                          </a>
                          <a href="./gopro">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              GoPro
                            </li>
                          </a>
                          <a href="./carpenter">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              If I Were A Carpenter
                            </li>
                          </a>

                          <a href="./red-centre">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              The Red Centre
                            </li>
                          </a>
                          <a href="./world8k">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              THE BEAUTY OF THE WORLD in 8K ULTRA HD
                            </li>
                          </a>
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
                          <a href="/cds-mms">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              CDS MMS
                            </li>
                          </a>
                          <a href="/hydrogen-peroxide">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              HYDROGEN-PEROXIDE
                            </li>
                          </a>
                          <a href="/thyme">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              The Healing SPICE...Clears Up Phlegm & Mucus in
                              Sinus
                            </li>
                          </a>
                          <a href="/med-bed">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              Med-Bed
                            </li>
                          </a>
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
                          <a href="/bioweapon">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              Bioweapon
                            </li>
                          </a>
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
                          <a href="/gods">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              GODS
                            </li>
                          </a>
                          <a href="/goesdeep">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              GOES DEEP
                            </li>
                          </a>
                          <a href="/australia">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              Australia
                            </li>
                          </a>
                          <a href="/global">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              Global Marshall Law
                            </li>
                          </a>
                          <a href="/bluewater">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              Bluewater
                            </li>
                          </a>
                          <a href="/mcallister">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              McAllister TV
                            </li>
                          </a>

                          <a href="/braden">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              Gregg Braden: NEW EVIDENCE! The Shocking TRUTH
                              About How They Built The Pyramids!!
                            </li>
                          </a>
                          <a href="/justinian-deception">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              Justinian Deception
                            </li>
                          </a>
                          <a href="/hyphen-glitch">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              The Chicago Manual of Style, 17th ed. (2017)
                            </li>
                          </a>
                          <a href="/hyphen-glitch">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              HYPHEN-GLITCH
                            </li>
                          </a>

                          <a href="/tom-cruise">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900 text-transform: uppercase">
                              We Interviewed Deepfake Tom Cruise
                            </li>
                          </a>
                          <a href="/pleiadians">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900 text-transform: uppercase">
                              Paul Wallis
                            </li>
                          </a>
                          <a href="/pleiadians">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900 text-transform: uppercase">
                              Pleiadians
                            </li>
                          </a>
                          <a href="/supersoldiertalk">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900 text-transform: uppercase">
                              Super Soldier Talk
                            </li>
                          </a>
                          <a href="/stargate">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900 text-transform: uppercase">
                              Star Gate
                            </li>
                          </a>
                          <a href="/invisible-war">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900 text-transform: uppercase">
                              The Invisible War
                            </li>
                          </a>
                          <a href="/flat-earth">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900 text-transform: uppercase">
                              Flat Earth
                            </li>
                          </a>
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </li>
              <a href="/site-map">
                <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                  INDEX
                </li>
              </a>
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
