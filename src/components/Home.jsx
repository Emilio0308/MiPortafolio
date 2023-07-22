import React from "react";
import "./Home.css";
import { useSelector } from "react-redux";

const Home = () => {
  const language = useSelector((store) => store.language);
  return (
    <section
      id="home"
      className="bg-gray-950 pt-[60px] text-white grid grid-rows-2 gap-8 relative overflow-hidden bg-[url(/imagenes/shadowbg2.png)] bg-no-repeat bg-right-top min-h-[100vh] sm:grid-cols-3 sm:grid-rows-1 bg-[length:auto_70%]"
    >
      <div className=" h-[500px] container3d">
        <div className="column1">
          <div className="frente">
            <span className="mix-blend-difference">
              {"-HELLO WORLD  -".repeat(1500 / 200)}
            </span>
          </div>
          <div className="atras">
            <span className="mix-blend-difference">
              {"-HELLO WORLD  -".repeat(1500 / 200)}
            </span>
          </div>
          <div className="arriba">
            <span className="mix-blend-difference">
              {"-HELLO WORLD  -".repeat(1500 / 200)}
            </span>
          </div>
          <div className="abajo">
            <span className="mix-blend-difference">
              {"-HELLO WORLD  -".repeat(1500 / 200)}
            </span>
          </div>
        </div>
        <div className="column2 text-2xl">
          <div className="frente">
            <span className="mix-blend-difference">
              {"-WELCOME TO MY WEBSITE-".repeat(1500 / 200)}
            </span>
          </div>
          <div className="atras">
            <span className="mix-blend-difference">
              {"-WELCOME TO MY WEBSITE-".repeat(1500 / 200)}
            </span>
          </div>
          <div className="arriba">
            <span className="mix-blend-difference">
              {"-WELCOME TO MY WEBSITE-".repeat(1500 / 200)}
            </span>
          </div>
          <div className="abajo">
            <span className="mix-blend-difference">
              {"-WELCOME TO MY WEBSITE-".repeat(1500 / 200)}
            </span>
          </div>
        </div>
      </div>
      <article className="flex flex-col justify-center w-[100%] max-w-[360px] p-3  absolute bottom-[43%] sm:bottom-0 sm:w-[50%] sm:max-w-none md:relative md:p-0 md:w-[100%]">
        <h1 className="font-bold text-4xl md:text-4xl pb-4 mix-blend-difference">
          <strong className="text-cyan-500">
            {language ? "Hi " : "Hola "}
          </strong>
          {language
            ? "I'm a full stack developer."
            : "soy un desarrollador full stack"}
        </h1>
        <p className="text-lg font-monospace z-50 mix-blend-difference">
          {language
            ? "If you have a great project that needs some amazing skills, contact me!!!"
            : "Si tienes un gran proyecto que requiere habilidades increíbles, contactame me!!!"}
        </p>
        <a
          href={language ? "/cvs/Emilio Rivas Ruiz cv.pdf" : "/cvs/Emilio Rivas Ruiz.pdf"}
          download="Emilio Rivas Ruiz.pdf"
          target="_blank"
          type="button"
          className="cursor-pointer shadow-sm shadow-cyan-600 mt-5 font-semibold tracking-wider text-xl
          bg-black hover:shadow-xl max-w-[220px] p-3 mx-auto hover:shadow-cyan-600 transition-all duration-500"
        >
          {language ? "Download My Cv" : "Descarga mi Cv"}
        </a>
      </article>
      <div className="flex justify-center w-full py-3 items-center relative sm:col-span-2 md:col-span-1  max-w-[700px] mx-auto">
        <div className="w-[100%] relative">
          <img
            className="object-cover w-full"
            src="/imagenes/robothome.png"
            alt="robothome"
          />
          <img
            className="absolute w-[25%] -left-10 top-9"
            src="/imagenes/elipse1.png"
            alt="elipse1"
          />
          <img
            className="absolute w-[40%] right-2 top-8"
            src="/imagenes/elipse2.png"
            alt="elipse2"
          />
          <img
            className="absolute w-[20%] bottom-[18%] left-11"
            src="/imagenes/elipse3.png"
            alt="elipse3"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
