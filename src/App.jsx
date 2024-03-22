import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Nav from "./Components/Nav";
import Front from "./Components/Front";
import AboutMe from "./Components/AboutMe";

function App() {
  return (
    <>
      <Nav />
      {/* {import.meta.env.VITE_REACT_APP_URL} */}
      <div>
        <Routes>
          <Route element={<Front />} path="/" />
          <Route element={<AboutMe />} path="/about" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Projects />} path="/projects" />
          <Route element={<Skills />} path="/skills" />
        </Routes>
      </div>
    </>
  );
}

export default App;
