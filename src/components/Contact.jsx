import emailjs from "@emailjs/browser";
import AWN from "awesome-notifications";
import "awesome-notifications/dist/style.css";
import React, { useState } from "react";
import { useSelector } from "react-redux";
let notifier = new AWN();

const Contact = () => {
  const language = useSelector((store) => store.language);
  const [send, setSend] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    notifier.asyncBlock(
      emailjs.sendForm(
        "service_c96ds7o",
        "template_o9r3ivc",
        e.target,
        "mAdjLZ0BWeBeX3Kd8"
      ),
      () => {
        notifier.modal("SUCCES");
      },
      (err) => {
        notifier.alert("Ah OCURRIDO UN ERROR");
      },
      "Enviando mensaje..."
    );
    e.target.reset()
    setSend(true);
  };

  return (
    <section
      id="contact"
      className="w-full max-w-[1200px] p-3 m-auto  grid grid-rows-[auto,_1fr] gap-5 pt-[60px] relative"
    >
      <h2 className="text-3xl after:bg-cyan-500 font-semibold tracking-[8px]">
        <span className="text-cyan-500 text-4xl">#</span>
        {language ? "Contact" : "Contactame"}
      </h2>
      <section
        className="grid grid-rows-[auto] auto-rows-auto gap-3 sm:grid-rows-1 sm:grid-cols-2 bg-[url(/contact/triangulo.svg)] bg-no-repeat 
      bg-[length:auto_70%] sm:bg-center sm:bg-[length:auto_90%]"
      >
        <form
          onSubmit={handleSubmit}
          className="max-w-[550px] border-[1px] border-gray-800 rounded-2xl grid grid-rows-[repeat(2,_auto),_2fr,auto] p-3 gap-6
        backdrop-blur-sm"
        >
          <input
            placeholder="Your name"
            className="h-[48px] rounded-md outline-none bg-[#23252f] p-3"
            type="text"
            id="name"
            name="from_name"
            required
          />
          <input
            placeholder="Your email"
            className="h-[48px] rounded-md outline-none bg-[#23252f] p-3"
            type="email"
            id="email"
            name="email"
            required
          />
          <textarea
            placeholder="Message"
            className="rounded-md h-[200px]  outline-none bg-[#23252f] resize-none p-3 md:h-[300px]"
            type="text"
            id="message"
            name="message"
            required
          />
          <button
            className="h-[60px] bg-[#23252f] text-2xl text-cyan-500 transition-all duration-300 
          hover:border-[5px] border-cyan-500 flex justify-center items-center gap-3"
          >
            {send ? "Sent" : "Send"}
            <i
              className={` ${
                send ? "bx bx-check-circle" : "bx bx-send"
              } transition-all`}
            ></i>
          </button>
        </form>
        <article className="grid grid-rows-[auto,_60%] h-full gap-3 p-3">
          <div className="self-center max-w-[300px] w-full mx-auto">
            {language ? (
              <p>
                Do you have any questions or want to know more about my work?{" "}
                <strong className="block text-cyan-500">
                  Contact me and let's chat!
                </strong>
              </p>
            ) : (
              <p>
                ¿Tienes alguna pregunta o quieres saber más sobre mi trabajo?
                <strong className="block text-cyan-500">
                  ¡Contáctame y hablemos!
                </strong>
              </p>
            )}
          </div>
          <div className="h-full w-full max-h-[300px]">
            <img
              className="m-auto h-full w-full object-contain"
              src="/contact/mobile.svg"
              alt=""
            />
          </div>
        </article>
      </section>
    </section>
  );
};

export default Contact;
