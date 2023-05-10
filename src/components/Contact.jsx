import React from "react";

const Contact = () => {
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
            placeholder="ingresa tu nombre"
            className="h-[48px] rounded-md outline-none bg-[#23252f] p-3"
            type="text"
            id="name"
          />
          <input
            placeholder="ingresa tu email"
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
          <p className="self-end">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa numquam reprehenderit ab quisquam? Sit tempore odio animi quidem corporis distinctio, earum unde eum possimus magni reiciendis sequi, quaerat ex nostrum?</p>
          <div className="h-full w-full max-h-[300px]">
            <img className="m-auto h-full w-full object-contain" src="/contact/mobile.svg" alt="" />
          </div>
        </article>
      </section>
    </section>
  );
};

export default Contact;
