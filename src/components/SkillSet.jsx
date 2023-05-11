import React from "react";
import SkillCard from "./SkillCard";

const SkillSet = () => {
  return (
    <section id="skills" className="w-full max-w-[1200px] mx-auto flex flex-col gap-8 p-3 pt-[90px]">
      <h2 className="text-3xl after:bg-cyan-500 font-semibold tracking-[8px]">
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
      {/* <article className="grid-cols-2">
        <div className="h-[300px] overflow-hidden">
          <img
            className="h-full bottom-0"
            src="/imagenes/cel2.png"
            alt=""
          />
        </div>
        <div>
          
        </div>
      </article> */}
    </section>
  );
};

export default SkillSet;
