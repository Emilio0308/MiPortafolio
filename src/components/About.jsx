import React from "react";
import { useSelector } from "react-redux";
// #282C33
const About = () => {
  const language = useSelector((store) => store.language);
  return (
    <section className="w-full bg-[url(/imagenes/about2.svg)] bg-no-repeat bg-[length:100%_90%] sm:bg-[url(/imagenes/aboutsm.svg)]">
      <section
        id="about"
        className="p-3 max-w-[1200px] grid grid-rows-[auto,1fr] gap-5 sm:grid-cols-2 sm:grid-rows-[1fr,0] sm:gap-y-0 sm:h-auto mx-auto pt-[60px]"
      >
        <div className="grid grid-rows-[repeat(3,_auto)] min-h-[450px] sm:border-b-4 border-cyan-500 items-center">
          <h2 className="text-3xl after:bg-cyan-500 font-semibold tracking-[8px]">
            <span className="text-cyan-500 text-4xl">#</span>About-Me
          </h2>
          <h4 className="text-2xl">
            <span className="text-cyan-500 text-3xl">{`<`}</span>
            <span>{language ? "Hello i'm Emilio Rivas" : "Hola, Soy Emilio Rivas"}</span>
            <span className="text-cyan-500 text-3xl">{`>`}</span>
          </h4>
          <p className="overflow-hidden self-start text-lg">
          {
            language ?
            "I am a passionate frontend developer with a love for technology and programming. I enjoy working collaboratively and effectively communicating ideas. I recently graduated from the Academlo bootcamp and am seeking my first employment opportunity in the development field. I am excited for the opportunity to join a software development team and continue learning and growing in this exciting field. Please don't hesitate to contact me. Thank you for your consideration!"

            : "Soy un desarrollador frontend apasionado por la tecnología y la programación, Me gusta trabajar en equipo y comunicar ideas de manera efectiva, me gradué recientemente del bootcamp de Academlo y busco mi primer empleo en el área de desarrollo. Estoy emocionado por la oportunidad de unirme a un equipo de desarrollo de software y seguir aprendiendo y creciendo en este emocionante campo. No dudes en ponerte en contacto conmigo. ¡Gracias por su consideración!"
          }
          </p>
        </div>

        <div className="relative w-full aspect-square self-end grid">
          <div
            className="w-[85%] aspect-square imgcontainer absolute after:bg-cyan-500 before:bg-cyan-500
          sm:translate-y-[25.8%] bottom-0 z-20"
          >
            <img
              className="w-full h-full object-cover"
              src="/imagenes/profile.png"
              alt=""
            />
          </div>
          <span className="block w-[31%] h-[4px] bg-cyan-500 absolute bottom-[21.25%] right-[0] sm:bottom-[-2px] sm:top-auto"></span>
          <div className="h-[150px] w-[30px] absolute bottom-[35%] right-[0%] flex flex-col justify-around items-center gap-3 text-4xl sm:top-auto sm:bottom-[35%]">
            <span className="absolute w-max text-cyan-500 top-[-50%] right-0 text-2xl font-bold">
              Follow Me
            </span>
            <span>
              <a href="https://www.linkedin.com/in/emilio-rivas-ruiz-a8857226b/" target="_blank"><i className="bx bxl-linkedin-square hover:text-cyan-500"></i></a>
            </span>
            <span>
              <a href="https://github.com/Emilio0308" target="_blank"><i className="bx bxl-github hover:text-cyan-500"></i></a>
            </span>
            <span>
              <a href="https://www.instagram.com/emilio_e_r/" target="_blank"><i className="bx bxl-instagram hover:text-cyan-500"></i></a>
            </span>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
