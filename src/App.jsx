import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import SkillSet from "./components/SkillSet";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// bg-[#282C33]
// bg-[#191c20]

function App() {
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
