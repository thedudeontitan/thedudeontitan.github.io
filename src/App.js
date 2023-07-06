import React, { useContext } from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './App.css';
import {Header,getTheme} from "./components/Header"
import Navbar from "./components/navbar/Navbarmob";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Particles from "react-tsparticles";
import {star,particlesInit} from "./components/Particles";
import Footer from "./components/Footer"
import Resume from "./components/Resume";
import { ThemeContext } from "./components/Header";

// setTheme = false;
function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <Router>
      
      <div className={`${theme==="dark-theme" ?'bg-blackish':'bg-white'}`}>
        <Particles id="particles-here" init={particlesInit} options={star} />
          <Navbar/>
          <Routes>
            <Route path="/" element={<Header />}/>
            <Route path="/resume" element={<Resume />}/>
            {/* <Route path="/about" element={}/> */}
            <Route path="/technologies" element={<Technologies />}/>
            <Route path="/projects" element={<Projects />}/>
          </Routes>
          <Footer/>
      </div>
    </Router>
  );
}

export default App;
