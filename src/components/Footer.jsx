import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#282C33] w-full mt-[80px] min-h-[280px] py-[60px] grid content-center">
      <section className="w-full mas-w-[1200px] grid grid-rows-3 gap-6 justify-center items-center sm:grid-rows-1 sm:grid-cols-3">
        <div className="w-[200px] m-auto">
          <img className="w-full aspect-square" src="/logo.png" alt="" />
          <h3 className="text-center text-4xl tracking-[10px] uppercase text-gray-300 font-Playfair">Emilio.R</h3>
        </div>
        <article className="grid tracking-wider gap-3 w-[250px] mx-auto">
          <a
            href="#home"
            className="hover:text-cyan-500 hover:tracking-widest w-full text-center flex gap-3 justify-center"
          >
            <i class="bx bx-home-alt-2 text-xl"></i>
            <span>HOME</span>
          </a>
          <a
            href="#about"
            className="hover:text-cyan-500 hover:tracking-widest w-full text-center flex gap-3 justify-center"
          >
            <i class="bx bxs-wink-tongue text-xl"></i>
            <span>ABOUT - ME</span>
          </a>
          <a
            href="#skills"
            className="hover:text-cyan-500 hover:tracking-widest w-full text-center flex gap-3 justify-center"
          >
            <i class="bx bx-briefcase text-xl"></i>
            <span>MY SKILLS</span>
          </a>
          <a
            href="#proyects"
            className="hover:text-cyan-500 hover:tracking-widest w-full text-center flex gap-3 justify-center"
          >
            <i class="bx bx-code-alt text-xl"></i>
            <span>PROYECTS</span>
          </a>
          <a
            href="#contact"
            className="hover:text-cyan-500 hover:tracking-widest w-full text-center flex gap-3 justify-center"
          >
            <i class="bx bx-mail-send text-xl"></i>
            <span>CONTACT</span>
          </a>
        </article>
        <div className="grid justify-center items-center text-2xl gap-5">
          <h4 className="tracking-wider text-indigo-600">SOCIAL MEDIA</h4>
          <span className="flex justify-center text-4xl sm:text-3xl">
            <a
              href="https://www.linkedin.com/in/emilio-rivas-ruiz-a8857226b/"
              target="_blank"
            >
              <i className="bx bxl-linkedin-square hover:text-cyan-500"></i>
            </a>
          </span>
          <span className="flex justify-center text-4xl sm:text-3xl">
            <a href="https://www.instagram.com/emilio_e_r/" target="_blank">
              <i className="bx bxl-instagram hover:text-cyan-500"></i>
            </a>
          </span>
          <span className="flex justify-center text-4xl sm:text-3xl">
            <a href="https://github.com/Emilio0308" target="_blank">
              <i className="bx bxl-github hover:text-cyan-500"></i>
            </a>
          </span>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
