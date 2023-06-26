import React, { useState } from "react";
import ProjectLauout from "./ProjectLauout";

const Projects = () => {

  const [proyectActive, setProyectActive] = useState(1)


  const proyects = {
    pokedex : {
      title: "Pokedex",
      id:1,
      español: "Bienvenido a la Pokédex donde encontrarás todos los pokémon que buscas en una interfaz interactiva pensada para ti.",
      ingles: "Welcome to the Pokédex where you will find all the Pokémon you are looking for in an interactive interface designed for you.",
      img: "/proyectsimg/pokedex.png",
      link: "https://erivaspokedex.netlify.app/",
      github : "https://github.com/Emilio0308/pokedex",
    },
    rickymorty : {
      title: "Warframe Page",
      id:2,
      español: "Sitio web desarrollado en react de uno de mis juegos favoritos warframe",
      ingles: "Website developed in React showcasing one of my favorite games, Warframe.",
      img: "/proyectsimg/warframe-page.png",
      link:"https://warframe-page.netlify.app/",
      github: "https://github.com/Emilio0308/warframepage",
    },
    ecommers : {
      title: "E-commers",
      id:3,
      español: "Este es el e-commers de Academlo, no te quedes sin tu prenda favorita.",
      ingles: "This is Academlo's e-commerce, don't miss out on your favorite garment.",
      img: "/proyectsimg/ecommers2.png",
      link: "https://my-shopfy.netlify.app/",
      github: "https://github.com/Emilio0308/shop",
    },
    portfolio : {
      title: "Portfolio",
      id:4,
      español: "Este es mi propio sitio web ;)",
      ingles: "This is my personal website.",
      img: "/proyectsimg/portfolio.png",
      link: "https://erivas.netlify.app/",
      github: "https://github.com/Emilio0308/MiPortafolio",
    },
  }

  return (
    <section
      id="Projects"
      className="w-full max-w-[1200px] p-3 mx-auto gap-5 grid grid-rows-[auto,_1fr] pt-[60px]"
    >
      <h2 className="text-3xl after:bg-cyan-500 font-semibold tracking-[8px]">
        <span className="text-cyan-500 text-4xl">#</span>My Projects
      </h2>
      <section className="h-full flex flex-col min-h-screen relative">
        <ProjectLauout project={proyects.pokedex} id={proyectActive} setProyectActive={setProyectActive} />

        <ProjectLauout project={proyects.rickymorty} id={proyectActive} setProyectActive={setProyectActive} />

        <ProjectLauout project={proyects.ecommers} id={proyectActive} setProyectActive={setProyectActive} />

        <ProjectLauout project={proyects.portfolio} id={proyectActive} setProyectActive={setProyectActive} />

      </section>
    </section>
  );
};

export default Projects;
