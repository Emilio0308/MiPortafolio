import React from "react";
import SkillCard from "./SkillCard";

const SkillSet = () => {
  return (
    <section id="skills" className="w-full max-w-[1024px] mx-auto flex flex-col gap-5 p-3 mt-[80px]">
      <h2 className="text-3xl after:bg-cyan-500 font-semibold">
        <span className="text-cyan-500 text-4xl">#</span>My Skills
      </h2>

      <div className="w-full grid auto-rows-auto grid-cols-[repeat(auto-fit,_minmax(260px,_1fr))] gap-5">
        <SkillCard
          type={"Soft"}
          skills={[
            "Effective communication",
            "Teamwork",
            "Critical thinking",
            "Adaptability",
          ]}
        />
        <SkillCard
          type={"FrontEnd"}
          skills={[
            "Html",
            "CSS",
            "Tailwind",
            "Javascript",
            "React",
            "Redux",
            "Vite",
          ]}
        />
        <SkillCard
          type={"BackEnd"}
          skills={["Nodejs", "MongoDB", "Phyton", "SQL"]}
        />
      </div>
      <div className="w-full h-[350px] overflow-hidden relative">
        <img
          className="w-full absolute bottom-0"
          src="/imagenes/skillcenter.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default SkillSet;
