import React from "react";
import ProyectLauout from "./ProyectLauout";

const Proyects = () => {
  return (
    <section
      id="proyects"
      className="w-full max-w-[1024px] p-3 mx-auto gap-5 grid grid-rows-[auto,_1fr] mt-[60px]"
    >
      <h2 className="text-3xl after:bg-cyan-500 font-semibold">
        <span className="text-cyan-500 text-4xl">#</span>My Proyects
      </h2>
      <section className="h-full grid grid-rows-[auto,_1fr] bg-gray-950/20">
        <ProyectLauout />
      </section>
    </section>
  );
};

export default Proyects;
