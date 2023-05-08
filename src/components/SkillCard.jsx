import React from "react";

const SkillCard = ({ type, skills }) => {
  return (
    <article className="grid grid-rows-[auto,_1fr] gap-14 p-4 rounded-xl bg-[#23252f] min-h-[340px]">
      <h3 className="text-2xl place-self-center">
        <span className="text-cyan-500 text-3xl">{`<`}</span>
        <span> My {type} Skills </span>
        <span className="text-cyan-500 text-3xl">{`>`}</span>
      </h3>
      <div className="w-full">
        <ul className="w-full">
          {skills.map((skill) => (
            <div
              className="grid gap-2 grid-cols-[auto,auto,1fr] auto-rows-auto"
              key={skill}
            >
              <span className="text-cyan-500">{"/* "}</span>
              {skill}
              <img
                className="w-[18px] h-[80%] object-contain justify-self-end"
                src={`/skillimg/${skill}.png`}
                onError={(e) => (e.target.style.display = "none")}
                alt=""
              />
            </div>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default SkillCard;
