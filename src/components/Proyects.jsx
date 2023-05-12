import React, { useState } from "react";
import ProyectLauout from "./ProyectLauout";

const Proyects = () => {

  const [proyectActive, setProyectActive] = useState(1)

  const proyects = {
    pokedex : {
      title: "Pokedex",
      id:1,
      español: "Bienvenido a la Pokédex donde encontrarás todos los pokémon que buscas en una interfaz interactiva pensada para ti.",
      ingles: "Welcome to the Pokédex where you will find all the Pokémon you are looking for in an interactive interface designed for you.",
      img: "/proyectsimg/pokedexsm.png",
      link: "https://erivaspokedex.netlify.app/"
    },
    rickymorty : {
      title: "Rick y Morty",
      id:2,
      español: "Sitio web en React usando la popular API de Rick and Morty. Encuentra a tu personaje favorito en las dimensiones locas de Rick y Morty.",
      ingles: "Website in React using the popular Rick and Morty API.Find your favorite character in Rick and Morty's crazy dimensions.",
      img: "/proyectsimg/rickymorty.png",
      link:"https://projectrick.netlify.app/",
    },
    ecommers : {
      title: "E-commers",
      id:3,
      español: "Este es el e-commers de Academlo, no te quedes sin tu prenda favorita.",
      ingles: "This is Academlo's e-commerce, don't miss out on your favorite garment.",
      img: "/proyectsimg/ecommers2.png",
      link: "https://ecommersproyect.netlify.app/",
    },
    portfolio : {
      title: "Portfolio",
      id:4,
      español: "Este es mi propio sitio web ;)",
      ingles: "This is my personal website.",
      img: "/proyectsimg/portfolio.png",
      link: "https://erivas.netlify.app/",
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

        <ProyectLauout proyect={proyects.portfolio} id={proyectActive} setProyectActive={setProyectActive} />


      </section>
    </section>
  );
};

export default Proyects;
