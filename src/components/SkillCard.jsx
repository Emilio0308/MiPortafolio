import React from "react";

const SkillCard = ({ type, skills }) => {
  return (
    <article className="flex flex-col gap-4 items-center p-3 rounded-xl shadow-xl shadow-gray-700 min-h-[220px]">
      <h3>
        <span className="text-cyan-500 text-2xl">{`<`}</span>
        <span> My {type} Skills </span>
        <span className="text-cyan-500 text-2xl">{`>`}</span>
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
                className="w-[18px] h-[80%] object-cover justify-self-end"
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
