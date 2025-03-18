import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import About from "../pages/aboutme/aboutme";
import Projects from "../pages/projects/projects";
import Header from "./components/header/header";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
      <Header></Header>
      </>
  );
}

export default App;
