import React from "react";

const ProyectLauout = ( { proyect } ) => {

  return (
    <section className={`${proyect.title}-${proyect.id} grid grid-rows-[auto,_1fr] absolute w-full h-screen gap-[1px]`}>
      <article className="grid w-full h-[80px] grid-cols-[2fr,_1fr] gap-[1px]">
        <div className="bg-gray-950/20">
            
        </div>
        <div className="flex justify-around items-center text-3xl bg-gray-950/20">
            <span>
            <i className="bx bxl-linkedin-square hover:text-cyan-500"></i>
            </span>
            <span>
            <i className="bx bxl-instagram hover:text-cyan-500"></i>
            </span>
            <span>
            <i className="bx bxl-github hover:text-cyan-500"></i>
            </span>
        </div>
      </article>
      <article
        className="w-full grid grid-rows-[3fr,_repeat(3,_1fr)] items-center justify-items-center gap-[1px]
       sm:grid-rows-[2fr,_1fr] sm:grid-cols-[2fr,_1fr]"
      >
        <div className="w-full h-full bg-gray-950/20 flex justify-center items-center">
          <img
            className="object-contain max-h-[calc((100vh-80px)*0.5)] sm:max-h-[calc((100vh-80px)*2/3)]"
            src={proyect.img}
            alt=""
          />
        </div>
        <h3 className="sm:row-start-2  w-full h-full flex justify-center items-center bg-gray-950/20 text-2xl">
          { proyect.title }
        </h3>
        <p className="p-3 w-full h-full flex justify-center items-center bg-gray-950/20">
          { proyect.description }
        </p>
        <div className="w-full h-full grid grid-cols-2 text-5xl bg-gray-950/20">
          <button className="hover:bg-[#282C33] hover:text-cyan-500">
            <i className="bx bx-left-arrow-alt"></i>
          </button>
          <button className="hover:bg-[#282C33] hover:text-cyan-500 ">
            <i className="bx bx-right-arrow-alt"></i>
          </button>
        </div>
      </article>
    </section>
  );
};

export default ProyectLauout;
