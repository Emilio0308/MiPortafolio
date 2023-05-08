import React, { useState } from "react";

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const handleShowMenu = () => {
    setIsMenuActive(!isMenuActive);
  };
  return (
    <header className="bg-gray-950 text-white w-full fixed top-0 z-50 px-2">
      <nav className="grid grid-cols-[auto,_1fr] max-w-[1024px] relative w-full mx-auto gap-6">
        <div className="w-[60px] h-[60px]">
          <img className="w-full h-full object-cover" src="/logo.png" alt="" />
        </div>
        <div
          className= "w-full relative flex justify-end items-center"
        >
          <div className={
            `${isMenuActive ? "right-[0%]" : " right-[-220px]"}
            absolute bg-gray-950 top-0 w-[220px] h-[70vh] flex flex-col justify-end sm:flex-row sm:h-full sm:right-0 sm:opacity-100 sm:w-full sm:translate-x-0 text-xl transition-[right] duration-700 translate-x-2`
            }>
            <a
              onClick={handleShowMenu}
              href="#home"
              className="list-none text-cyan-500 hover:text-gray-900 font-bold hover:tracking-widest
              hover:bg-cyan-600 w-full sm:w-[150px] h-full flex justify-center items-center"
            >
              Home
            </a>
            <a
              onClick={handleShowMenu}
              href="#about"
              className="list-none text-cyan-500 hover:text-gray-900 font-bold hover:tracking-widest
              hover:bg-cyan-500 w-full sm:w-[150px] h-full flex justify-center items-center"
            >
              Aboute me
            </a>
            <a
              onClick={handleShowMenu}
              href="#skills"
              className="list-none text-cyan-500 hover:text-gray-900 font-bold hover:tracking-widest
              hover:bg-cyan-500 w-full sm:w-[150px] h-full flex justify-center items-center"
            >
              My Skills
            </a>
            <a
              onClick={handleShowMenu}
              href="#proyects"
              className="list-none text-cyan-500 hover:text-gray-900 font-bold hover:tracking-widest
              hover:bg-cyan-500 w-full sm:w-[150px] h-full flex justify-center items-center"
            >
              My Proyects
            </a>
            <a
              onClick={handleShowMenu}
              href="#contact"
              className="list-none text-cyan-500 hover:text-gray-900 font-bold hover:tracking-widest
              hover:bg-cyan-500 w-full sm:w-[150px] h-full flex justify-center items-center"
            >
              Contact
            </a>
            <button
              onClick={handleShowMenu}
              className="absolute top-5 right-2 sm:opacity-0 sm:invisible"
            >
              <i className='bx bx-x text-3xl text-gray-400'></i>
            </button>
          </div>
          <button onClick={handleShowMenu} className="sm:opacity-0 sm:invisible text-2xl">
            <i className='bx bx-menu'></i>
          </button>
        </div>
        
      </nav>
    </header>
  );
};

export default Header;
