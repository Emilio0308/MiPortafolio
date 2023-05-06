import React, { useState } from "react";

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const handleShowMenu = () => {
    setIsMenuActive(!isMenuActive);
  };
  return (
    <header className="bg-black text-white w-full fixed top-0 z-50 px-2">
      <nav className="grid grid-cols-[auto,_1fr] max-w-[1024px] relative w-full mx-auto gap-6">
        <div className="w-[60px] h-[60px]">
          <img className="w-full h-full object-cover" src="/logo.png" alt="" />
        </div>
        <div
          className= "w-full relative flex justify-end items-center"
        >
          <div className={
            `${isMenuActive ? "opacity-100 visible" : "opacity-0 invisible"}
            absolute top-0 w-full h-[70vh] flex flex-col justify-end sm:flex-row sm:h-full sm:visible sm:opacity-100 text-xl`
            }>
            <a
              onClick={handleShowMenu}
              href="#home"
              className="list-none text-cyan-500 hover:text-gray-800 font-bold 
              hover:bg-cyan-300 w-full sm:w-[150px] h-full flex justify-center items-center"
            >
              Home
            </a>
            <a
              onClick={handleShowMenu}
              href="#about"
              className="list-none text-cyan-500 hover:text-gray-800 font-bold 
              hover:bg-cyan-300 w-full sm:w-[150px] h-full flex justify-center items-center"
            >
              Aboute me
            </a>
            <a
              onClick={handleShowMenu}
              href="#proyects"
              className="list-none text-cyan-500 hover:text-gray-800 font-bold 
              hover:bg-cyan-300 w-full sm:w-[150px] h-full flex justify-center items-center"
            >
              Proyects
            </a>
            <a
              onClick={handleShowMenu}
              href="#contact"
              className="list-none text-cyan-500 hover:text-gray-800 font-bold 
              hover:bg-cyan-300 w-full sm:w-[150px] h-full flex justify-center items-center"
            >
              Contact
            </a>
            <button
              onClick={handleShowMenu}
              className="absolute top-0 right-2 sm:opacity-0 sm:invisible"
            >
              X
            </button>
          </div>
          <button onClick={handleShowMenu} className="sm:opacity-0 sm:invisible">
            menu
            </button>
        </div>
        
      </nav>
    </header>
  );
};

export default Header;
