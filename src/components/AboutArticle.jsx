const AboutArticle = ({ language }) => {

  return (
    <div className="grid grid-rows-[repeat(2,_auto)] min-h-[450px] sm:border-b-4 border-cyan-500 items-center">
            <h4 className="text-2xl">
              <span className="text-cyan-500 text-3xl">{`<`}</span>
              <span>
                {language ? "Hello i'm Emilio Rivas" : "Hola, Soy Emilio Rivas"}
              </span>
              <span className="text-cyan-500 text-3xl">{`>`}</span>
            </h4>
            <p className="overflow-hidden self-start text-lg sm:text-base md:text-lg font-monospace">
              {language
                ? "I am a Full Stack developer with experience in web development using React JS and Node JS. I focus on creating digital solutions that provide the best user experience. I enjoy working in teams, contributing ideas and solutions, and maintaining clean code. I am always eager to learn and improve my performance as a programmer.Feel free to contact me!!!"
                : "Soy un desarrollador Full Stack con experiencia en desarrollo web utilizando React JS y Node JS. Me enfoco en crear soluciones digitales que brinden la mejor experiencia al usuario. Me gusta trabajar en equipo, aportando ideas y soluciones, y manteniendo un código limpio. Estoy siempre dispuesto a aprender para mejorar mi desempeño como programador.Contactame!!!"}
            </p>
          </div>
  )
}
export default AboutArticle