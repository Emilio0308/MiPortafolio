import React from "react";
import ProyectLauout from "./ProyectLauout";

const Proyects = () => {


  const proyects = {
    pokedex : {
      title: "Pokedex",
      id:1,
      description: "este es un proyecto con el consumo dela api pokemon",
      img: "/proyectsimg/pokedex.png"
    },
    rickymorty : {
      title: "Rick y Morty",
      id:2,
      description: "este es un proyecto con el consumo dela api de Rick y Morty",
      img: "/proyectsimg/rickymorty.png"
    }
  }
  return (
    <section
      id="proyects"
      className="w-full max-w-[1024px] p-3 mx-auto gap-5 grid grid-rows-[auto,_1fr] mt-[60px]"
    >
      <h2 className="text-3xl after:bg-cyan-500 font-semibold">
        <span className="text-cyan-500 text-4xl">#</span>My Proyects
      </h2>
      <section className="h-full flex flex-col min-h-screen relative">
        <ProyectLauout proyect={proyects.pokedex} />

        {/* <ProyectLauout proyect={proyects.rickymorty} /> */}
      </section>
    </section>
  );
};

export default Proyects;
