import React from "react";
import { useSelector } from "react-redux";

const Contact = () => {
  const language = useSelector( (store) => store.language )
  return (
    <section
      id="contact"
      className="w-full max-w-[1200px] p-3 m-auto  grid grid-rows-[auto,_1fr] gap-5 pt-[60px]"
    >
      <h2 className="text-3xl after:bg-cyan-500 font-semibold tracking-[8px]">
        <span className="text-cyan-500 text-4xl">#</span>Contact
      </h2>
      <section className="grid grid-rows-[auto] auto-rows-auto gap-3 sm:grid-rows-1 sm:grid-cols-2 bg-[url(/contact/triangulo.svg)] bg-no-repeat 
      bg-[length:auto_70%] sm:bg-center sm:bg-[length:auto_90%]">
        <form className="max-w-[550px] border-[1px] border-gray-600 rounded-2xl grid grid-rows-[repeat(3,_auto),_2fr,auto] p-3 gap-6
        backdrop-blur-sm">
          <input
            placeholder="Your name"
            className="h-[48px] rounded-md outline-none bg-[#23252f] p-3"
            type="text"
            id="name"
          />
          <input
            placeholder="Your email"
            className="h-[48px] rounded-md outline-none bg-[#23252f] p-3"
            type="email"
            id="email"
          />
          <input
            placeholder="subject"
            className="h-[48px] rounded-md outline-none bg-[#23252f] p-3"
            type="text"
            id="subjet"
          />
          <textarea
              placeholder="Message"
              className="rounded-md h-[200px]  outline-none bg-[#23252f] resize-none p-3 md:h-[300px]"
              type="text"
              id="message"
            />
          <button className="h-[60px] bg-[#23252f] text-2xl text-cyan-500">
            Send
          </button>
        </form>
        <article className="grid grid-rows-[auto,_60%] h-full gap-3 p-3">
          <div className="self-end max-w-[300px] w-full mx-auto">
            {
              language?
               "Do you have any questions or want to know more about my work? Contact me and let's chat!"
              :"¿Tienes alguna pregunta o quieres saber más sobre mi trabajo?¡Contáctame y hablemos!"
            }
          </div>
          <div className="h-full w-full max-h-[300px]">
            <img className="m-auto h-full w-full object-contain" src="/contact/mobile.svg" alt="" />
          </div>
        </article>
      </section>
    </section>
  );
};

export default Contact;
