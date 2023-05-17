import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../store/slices/language.sile";

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const language = useSelector( ( store )=> store.language)
  const handleShowMenu = () => {
    setIsMenuActive(!isMenuActive);
  };
  const dispatch = useDispatch()
  const handleChangeLenguage = ()=> {
    dispatch(changeLanguage())
  }
  return (
    <header className="bg-gray-950 text-white w-full fixed top-0 z-50 px-2">
      <nav className="grid grid-cols-[1fr,_auto,auto] max-w-[1200px] relative w-full mx-auto gap-6 sm:grid-cols-[auto,auto,_1fr]">
        <div className="w-[60px] h-[60px]">
          <img className="w-full h-full object-cover" src="/logo_1.svg" alt="" />
        </div>
        <button onClick={handleChangeLenguage} className="text-sm text-cyan-500">
            <span className={`${language? "text-cyan-500" : "text-white text-xs"}`}>En</span>
            /
            <span className={`${language? "text-white text-xs" : "text-cyan-500"}`}>Es</span>
        </button>
        <div
          className= "w-full relative flex justify-end items-center"
        >
          <div className={
            `${isMenuActive ? "right-[0%]" : " right-[-80vw]"}
            absolute bg-gray-950 top-[60px] w-[80vw] h-[calc(100vh-60px)] flex flex-col justify-end sm:flex-row sm:h-full sm:right-0 sm:opacity-100 sm:w-full sm:top-0 text-base transition-[right] duration-700 translate-x-2 sm:translate-x-0`
            }>
            <a
              onClick={handleShowMenu}
              href="#home"
              className="list-none text-cyan-500 hover:text-gray-900 font-bold hover:tracking-widest
              hover:bg-cyan-600 w-full sm:w-[120px] h-full flex justify-center items-center"
            >
              Home
            </a>
            <a
              onClick={handleShowMenu}
              href="#about"
              className="list-none text-cyan-500 hover:text-gray-900 font-bold hover:tracking-widest
              hover:bg-cyan-500 w-full sm:w-[120px] h-full flex justify-center items-center"
            >
              Aboute me
            </a>
            <a
              onClick={handleShowMenu}
              href="#skills"
              className="list-none text-cyan-500 hover:text-gray-900 font-bold hover:tracking-widest
              hover:bg-cyan-500 w-full sm:w-[120px] h-full flex justify-center items-center"
            >
              My Skills
            </a>
            <a
              onClick={handleShowMenu}
              href="#proyects"
              className="list-none text-cyan-500 hover:text-gray-900 font-bold hover:tracking-widest
              hover:bg-cyan-500 w-full sm:w-[120px] h-full flex justify-center items-center"
            >
              My Proyects
            </a>
            <a
              onClick={handleShowMenu}
              href="#contact"
              className="list-none text-cyan-500 hover:text-gray-900 font-bold hover:tracking-widest
              hover:bg-cyan-500 w-full sm:w-[120px] h-full flex justify-center items-center"
            >
              Contact
            </a>
          </div>
          <button onClick={handleShowMenu} className="sm:opacity-0 sm:invisible text-2xl">
            <i className={`${ isMenuActive ? "bx bx-x " : "bx bx-menu"} hover:text-cyan-500`}></i>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
