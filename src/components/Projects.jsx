import React, { useState } from "react";
import ProjectLauout from "./ProjectLauout";
import projects from "../assets/projectsList";

const Projects = () => {

  const [proyectActive, setProyectActive] = useState(1)


  return (
    <section
      id="Projects"
      className="w-full max-w-[1200px] p-3 mx-auto gap-5 grid grid-rows-[auto,_1fr] pt-[60px]"
    >
      <h2 className="text-3xl after:bg-cyan-500 font-semibold tracking-[8px]">
        <span className="text-cyan-500 text-4xl">#</span>My Projects
      </h2>
      <section className="h-full flex flex-col min-h-screen relative">
        <ProjectLauout project={projects.pokedex} id={proyectActive} setProyectActive={setProyectActive} />

        <ProjectLauout project={projects.warframePage} id={proyectActive} setProyectActive={setProyectActive} />

        <ProjectLauout project={projects.ecommers} id={proyectActive} setProyectActive={setProyectActive} />

        <ProjectLauout project={projects.portfolio} id={proyectActive} setProyectActive={setProyectActive} />

      </section>
    </section>
  );
};

export default Projects;
