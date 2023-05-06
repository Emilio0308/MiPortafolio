import React from "react";
// #282C33
const About = () => {
  return (
    <section id="about" className="w-full pt-[60px]">
      <section className="max-w-[1024px] grid grid-rows-[auto,1fr] gap-5 p-3 sm:grid-cols-2 sm:grid-rows-[1fr,0] sm:gap-y-0 sm:h-auto mx-auto">
        <div className="flex justify-center flex-col gap-5 text-gray-200 sm:border-b-2 border-cyan-500">
          <h2 className="text-2xl after:bg-cyan-500 font-semibold">
            <span className="text-cyan-500 text-3xl">#</span>About-Me
          </h2>
          <h4>
            <span className="text-cyan-500 text-2xl">{`<`}</span> Hello i'm
            Emilio Rivas <span className="text-cyan-500 text-2xl">{`>`}</span>
          </h4>
          <p className="overflow-hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vitae
            architecto harum facilis numquam iusto, deserunt repudiandae labore
            velit, incidunt asperiores veniam maxime natus? Consequuntur quia ab
            minima nesciunt sapiente.
          </p>
        </div>

        <div className="relative w-full aspect-square sm:self-end">
          <div className="w-[100%] h-full imgcontainer absolute after:bg-cyan-500 before:bg-cyan-500 bottom-0 sm:translate-y-[25%]">
            <img
              className="w-full h-full object-cover"
              src="/imagenes/profile.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
