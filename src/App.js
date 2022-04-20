import "./App.css";
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";
import Skills from "./Skills";

function App() {
  return (
    <div className="contents">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
