const AboutImage = () => {
  return (
    <div className="relative w-full aspect-square self-end grid">
      <div
        className="w-[85%] aspect-square imgcontainer absolute after:bg-cyan-500 before:bg-cyan-500
          sm:translate-y-[25.8%] bottom-0 z-20 bg-[#23252f] pt-3"
      >
        <img
          className="h-full mx-auto object-cover"
          src="/imagenes/profile2.png"
          alt="Emilio Rivas"
        />
      </div>
      <span className="block w-[31%] h-[4px] bg-cyan-500 absolute bottom-[21.25%] right-[0] sm:bottom-[-2px] sm:top-auto"></span>
      <div className="h-[150px] w-[30px] absolute bottom-[35%] right-[0%] flex flex-col justify-around items-center gap-3 text-4xl sm:top-auto">
        <span>
          <a
            href="https://www.linkedin.com/in/emilio-rivas-ruiz-a8857226b/"
            target="_blank"
          >
            <i className="bx bxl-linkedin-square hover:text-cyan-500"></i>
          </a>
        </span>
        <span>
          <a href="https://github.com/Emilio0308" target="_blank">
            <i className="bx bxl-github hover:text-cyan-500"></i>
          </a>
        </span>
      </div>
      <span className=" absolute text-cyan-500 right-0 top-0 text-2xl font-bold tracking-widest">
        Follow Me
      </span>
    </div>
  );
};
export default AboutImage;
