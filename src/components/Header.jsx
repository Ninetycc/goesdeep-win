import NavMenu from "./NavMenu.jsx";
import { useState } from "react";
import Sidebar from "./Sidebar.jsx";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="container">
      <div className="flex py-5 px-3">
        <div className="flex items-center pt-3 text-3xl">
          <a href="./">
            <span className="font-paint cursor-pointer hover:text-white hover:bg-black">
              GOESDEEP.win
            </span>
          </a>
        </div>
        <div className="flex-grow flex items-center z-20">
          <NavMenu />
        </div>

        <div className="flex items-center text-xl">
          <a href="./site-map">
            <span className="body-font font-poppins text-2xl cursor-pointer hover:text-white hover:bg-lime-900">
              INDEX
            </span>
          </a>
          &nbsp;
          <button
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="sidebar"
            aria-label="Open Menu"
          >
            <span className="body-font font-poppins text-2xl cursor-pointer hover:text-white hover:bg-lime-900">
              MENU
            </span>
          </button>
          <Sidebar open={open} setOpen={setOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
