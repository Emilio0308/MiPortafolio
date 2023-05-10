import React, { useState } from "react";
import ProyectLauout from "./ProyectLauout";

const Proyects = () => {

  const [proyectActive, setProyectActive] = useState(1)

  const proyects = {
    pokedex : {
      title: "Pokedex",
      id:1,
      description: "Este es un proyecto con el consumo dela api pokemon",
      img: "/proyectsimg/pokedex.png"
    },
    rickymorty : {
      title: "Rick y Morty",
      id:2,
      description: "Este es un proyecto con el consumo dela api de Rick y Morty",
      img: "/proyectsimg/rickymorty.png"
    },
    ecommers : {
      title: "Ecommers",
      id:3,
      description: "Este es el proyecto del Ecomers",
      img: "/proyectsimg/ecommers.png"
    },
  }
  return (
    <section
      id="proyects"
      className="w-full max-w-[1200px] p-3 mx-auto gap-5 grid grid-rows-[auto,_1fr] pt-[60px]"
    >
      <h2 className="text-3xl after:bg-cyan-500 font-semibold tracking-[8px]">
        <span className="text-cyan-500 text-4xl">#</span>My Proyects
      </h2>
      <section className="h-full flex flex-col min-h-screen relative">
        <ProyectLauout proyect={proyects.pokedex} id={proyectActive} setProyectActive={setProyectActive} />

        <ProyectLauout proyect={proyects.rickymorty} id={proyectActive} setProyectActive={setProyectActive} />

        <ProyectLauout proyect={proyects.ecommers} id={proyectActive} setProyectActive={setProyectActive} />
      </section>
    </section>
  );
};

export default Proyects;
