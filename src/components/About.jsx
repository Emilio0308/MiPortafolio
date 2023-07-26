import React from "react";
import { useSelector } from "react-redux";
import AboutArticle from "./AboutArticle";
import AboutImage from "./AboutImage";
// #282C33
const About = () => {
  const language = useSelector((store) => store.language);
  return (
    <section
      id="about"
      className="w-full bg-[url(/imagenes/about2.svg)] bg-no-repeat bg-[length:100%_90%] sm:bg-[url(/imagenes/aboutsm.svg)] pt-[60px]"
    >
      <section className="max-w-[1200px] mx-auto p-3">
        <h2 className="text-3xl after:bg-cyan-500 font-semibold tracking-[8px]">
          <span className="text-cyan-500 text-4xl">#</span>
          {language ? "About-Me" : "Acerca de"}
        </h2>
        <article className="grid grid-rows-[auto,1fr] gap-5 sm:grid-cols-2 sm:grid-rows-[1fr,0] sm:gap-y-0 sm:h-auto">
          <AboutArticle language={language} />
          <AboutImage />
        </article>
      </section>
    </section>
  );
};

export default About;
