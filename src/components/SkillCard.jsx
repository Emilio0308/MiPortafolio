import React from "react";


const SkillCard = ( { type, skills } ) => {
  return (
    <article>
      <h3>
        <span className="text-cyan-500 text-2xl">{`<`}</span>
        My {type} Skills
        <span className="text-cyan-500 text-2xl">{`>`}</span>
      </h3>
      <div className="flex flex-col justify-center items-center">
        <ul>
            {
                skills.map( (skill) =>
                <li key={skill}><span className="text-cyan-500">{"/* "}</span>{skill}</li>)
            }
        </ul>
      </div>
    </article>
  );
};

export default SkillCard;
