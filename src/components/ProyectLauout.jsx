import React from "react";
import { useSelector } from "react-redux";

const ProyectLauout = ({ proyect, id, setProyectActive }) => {
  const language = useSelector((store) => store.language);

  const handleChangeProyect = (num) => {
    let newValue = id + eval(num);
    if (newValue == 0) {
      newValue = 4;
    }
    if (newValue == 5) {
      newValue = 1;
    }
    setProyectActive(newValue);
  };

  const proyectPosition = () => {
    if (id > proyect.id) {
      return "right-[100%]";
    }
    if (id < proyect.id) {
      return "right-[-100%]";
    }
  };
  return (
    <section
      className={`${proyect.title}-${
        proyect.id
      } grid grid-rows-[auto,_1fr] absolute w-full h-screen gap-[2px] opacity-100 shadow-2xl shadow-black/60
      ${
        id == proyect.id
          ? "right-0 visible transition-all duration-1000 z-10"
          : "invisible transition-all delay-1000 duration-0"
      } ${proyectPosition()}`}
    >
      <article className="grid w-full h-[80px] grid-cols-[2fr,_1fr] gap-[2px]">
        <div className="bg-[#23252f]"></div>
        <div className="flex justify-around items-center text-3xl bg-[#23252f]">
          <span>
            <a
              href="https://www.linkedin.com/in/emilio-rivas-ruiz-a8857226b/"
              target="_blank"
            >
              <i className="bx bxl-linkedin-square hover:text-cyan-500"></i>
            </a>
          </span>
          <span>
            <a href="https://www.instagram.com/emilio_e_r/" target="_blank">
              <i className="bx bxl-instagram hover:text-cyan-500"></i>
            </a>
          </span>
          <span>
            <a href={proyect.github} target="_blank">
              <i className="bx bxl-github hover:text-cyan-500"></i>
            </a>
          </span>
        </div>
      </article>
      <article
        className="w-full grid grid-rows-[3fr,_repeat(3,_1fr)] items-center justify-items-center gap-[2px]
       sm:grid-rows-[2fr,_1fr] sm:grid-cols-[2fr,_1fr] text-base max-h-[calc(100vh-80px)]"
      >
        <div className="w-full h-full bg-[#23252f] flex justify-center items-center">
          <img
            className="object-cover object-left-top w-full max-h-[calc((100vh-80px)*0.5)] sm:max-h-[calc((100vh-80px)*2/3)]"
            src={proyect.img}
            alt=""
          />
        </div>
        <h3 className="sm:row-start-2 relative w-full h-full flex justify-center items-center bg-[#23252f] text-2xl tracking-widest uppercase">
          {proyect.title}
          <a href={proyect.link} target="_blank">
            <i className="absolute hover:text-cyan-500 right-1 bottom-2 bx bx-link-external"></i>
          </a>
        </h3>
        <p className="p-1 w-full h-full flex justify-center items-center bg-[#23252f] sm:p-3">
          {language ? proyect.ingles : proyect.español}
        </p>
        <div className="w-full h-full grid grid-cols-2 text-5xl bg-[#23252f]">
          <button className="hover:bg-[#282C33] hover:text-cyan-500">
            <i
              onClick={() => handleChangeProyect(-1)}
              className="bx bx-left-arrow-alt w-full h-full flex justify-center items-center"
            ></i>
          </button>
          <button className="hover:bg-[#282C33] hover:text-cyan-500 ">
            <i
              onClick={() => handleChangeProyect(1)}
              className="bx bx-right-arrow-alt w-full h-full flex justify-center items-center"
            ></i>
          </button>
        </div>
      </article>
    </section>
  );
};

export default ProyectLauout;
