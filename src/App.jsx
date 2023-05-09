import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import SkillSet from "./components/SkillSet";
import Proyects from "./components/Proyects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-[#282C33] text-gray-200 overflow-hidden">
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
