import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import SkillSet from "./components/SkillSet";
import Proyects from "./components/Proyects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// bg-[#282C33]
// bg-[url(/imagenes/curveline6.svg)] bg-no-repeat bg-fixed bg-[length:100%_auto] sm:bg-[url(/imagenes/curveline7.svg)]

function App() {
  return (
    <main className="overflow-hidden bg-[#191c20] text-gray-300 
    bg-[url(/imagenes/curveline6.svg)] bg-no-repeat bg-fixed bg-[length:100%_auto] sm:bg-[url(/imagenes/curveline7.svg)]">
      <Header />
      <Home />
      <About />
      <SkillSet />
      <Proyects />
      <Contact />
      <Footer/>
    </main>
  );
}

export default App;
