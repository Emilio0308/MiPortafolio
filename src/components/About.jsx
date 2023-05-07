import React from "react";
// #282C33
const About = () => {
  return (
    <section id="about" className="w-full">
      <section className="max-w-[1024px] grid grid-rows-[auto,1fr] gap-5 p-3 sm:grid-cols-2 sm:grid-rows-[1fr,0] sm:gap-y-0 sm:h-auto mx-auto">
        <div className="grid grid-rows-[repeat(3,_auto)] min-h-[450px] text-gray-200 sm:border-b-2 border-cyan-500 items-center">
          <h2 className="text-3xl after:bg-cyan-500 font-semibold">
            <span className="text-cyan-500 text-4xl">#</span>About-Me
          </h2>
          <h4 className="text-2xl">
            <span className="text-cyan-500 text-3xl">{`<`}</span> Hello i'm
            Emilio Rivas <span className="text-cyan-500 text-3xl">{`>`}</span>
          </h4>
          <p className="overflow-hidden self-start text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vitae
            architecto harum facilis numquam iusto, deserunt repudiandae labore
            velit, incidunt asperiores veniam maxime natus? Consequuntur quia ab
            minima nesciunt sapiente.
          </p>
        </div>

        <div className="relative w-full aspect-square self-end grid">
          <div className="w-[70%] aspect-square imgcontainer absolute after:bg-cyan-500 before:bg-cyan-500
          sm:translate-y-[25.8%] sm:bottom-0 z-20">
            <img
              className='w-full h-full object-cover'
              src="/imagenes/profile.png"
              alt=""
            />
          </div>
          <span className="block w-[31%] h-[2px] bg-cyan-500 absolute top-[52%] right-[0] sm:bottom-[-2px] sm:top-auto"></span>
          <div className="h-[150px] w-[30px] absolute bottom-[55%] right-[10%] flex flex-col justify-around items-center  gap-3 text-4xl sm:top-auto sm:bottom-6">
            <span><i className='bx bxl-linkedin-square'></i></span>
            <span><i className='bx bxl-github'></i></span>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
