import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section
      id="home"
      className="bg-gray-950 mt-[60px] text-white grid grid-rows-2 gap-8 relative overflow-hidden bg-[url(/imagenes/shadowbg.png)] bg-no-repeat bg-right-top min-h-[90vh] sm:grid-cols-3 sm:grid-rows-1"
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
      <article className="flex flex-col justify-center w-[80%] max-w-[360px] p-5 mix-blend-difference absolute bottom-[50%] sm:bottom-0 sm:w-[50%] sm:max-w-none md:relative md:w-full md:p-0">
        <h1 className="font-bold text-4xl pb-4 md:text-4xl">
          <strong className="text-cyan-500">Hi</strong> I'm a frontend developer
        </h1>
        <p className="text-xl md:text-2xl">
          I’m probably the most passionate developer you will ever get to work
          with. If you have a great project that needs some amazing skills, I’m
          your guy.
        </p>
      </article>
      <div className="flex justify-center w-full py-3 items-center relative sm:col-span-2 md:col-span-1  max-w-[700px] mx-auto">
        <div className="w-[100%] relative">
          <img
            className="object-cover w-full"
            src="/imagenes/robothome.png"
            alt=""
          />
          <img
            className="absolute w-[25%] -left-10 top-5 "
            src="/imagenes/elipse1.png"
            alt=""
          />
          <img
            className="absolute w-[40%] right-2 top-8"
            src="/imagenes/elipse2.png"
            alt=""
          />
          <img
            className="absolute w-[20%] bottom-[30%] left-11"
            src="/imagenes/elipse3.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
