import React from "react";

const ProyectLauout = () => {
  return (
    <>
      <article className="grid w-full h-[80px] grid-cols-[2fr,_1fr]">
        <div className="">
            
        </div>
        <div className="flex justify-around items-center text-3xl">
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
        className="w-full grid grid-rows-[2fr,_repeat(3,_1fr)] items-center justify-items-center
       sm:grid-rows-[2fr,_1fr] sm:grid-cols-[2fr,_1fr]"
      >
        <div className="w-full h-full border-y-[1px] border-gray-600">
          <img
            className="w-full h-full object-contain"
            src="/pokedex.png"
            alt=""
          />
        </div>
        <h3 className="sm:row-start-2  w-full h-full flex justify-center items-center">
          Titulo Proyecto de Prueba
        </h3>
        <p className="p-3 border-y-[1px] border-gray-600 w-full h-full flex justify-center items-center sm:border-l-[1px]">
          Descripcion: Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Incidunt vero numquam commodi. Nemo sequi incidunt repellendus,
          pariatur
        </p>
        <div className="w-full h-full grid grid-cols-2 text-5xl sm:border-l-[1px] border-gray-600">
          <button>
            <i className="bx bx-left-arrow-alt hover:text-cyan-500"></i>
          </button>
          <button>
            <i className="bx bx-right-arrow-alt hover:text-cyan-500"></i>
          </button>
        </div>
      </article>
    </>
  );
};

export default ProyectLauout;
