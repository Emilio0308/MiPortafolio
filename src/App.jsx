import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import SkillSet from "./components/SkillSet";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AWN from "awesome-notifications";
import { useEffect } from "react";

const options = {
  position: "top-left",
  maxNotifications: 1,
  animationDuration:200,
  durations: {info: 3000}
}
const notificer = new AWN(options)

// bg-[#282C33]
// bg-[#191c20]

function App() {
  useEffect(() => {
    
    notificer.info("Welcome, Choose your language: English or Spanish.",)

  }, [])
  
  return (
    <main className="overflow-hidden bg-[url(/imagenes/bgnoise.png)] text-white tracking-wider
    ">
      <Header />
      <Home />
      <About />
      <SkillSet/>
      <Projects />
      <Contact />
      <Footer/>
    </main>
  );
}

export default App;
