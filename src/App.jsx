import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Projects from "./projects";
import Contact from "./Contact";
import About2 from "./About2";
import Resume from "./Resume";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/credentials" element={<About2 />}></Route>
        <Route path="/Resume" element={<Resume />}></Route>
      </Routes>
    </>
  );
}

export default App;
