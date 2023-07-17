import React from "react";
import SkillCard from "./SkillCard";
// import TechnologyCard from "./TechnologyCard";

const SkillSet = () => {
  return (
    <section
      id="skills"
      className="w-full max-w-[1200px] mx-auto flex flex-col gap-8 p-3 pt-[60px] mt-[80px] relative"
    >
      <h2 className="text-3xl after:bg-cyan-500 font-semibold tracking-[8px]">
        <span className="text-cyan-500 text-4xl">#</span>My Skills
      </h2>

      <div className="w-full grid auto-rows-auto grid-cols-[repeat(auto-fit,_minmax(260px,_1fr))] gap-5 mt-[40px] mb-[80px] z-10">
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
          skills={["Nodejs", "PostgresSQL", "Express", "Sequelize"]}
        />
      </div>

      {/* <TechnologyCard
        skills={[
          "Html",
          "CSS",
          "Tailwind",
          "Javascript",
          "React",
          "Redux",
          "Vite",
          "Nodejs",
          "PostgresSQL",
          "Express",
          "Sequelize",
        ]}
        title={"My Frontend Skills"}
      /> */}

      <div className="bg-[url(/imagenes/phone.png)] w-full right-0 left-0 top-0 bottom-0 opacity-5 absolute z-0"></div>
    </section>
  );
};

export default SkillSet;
