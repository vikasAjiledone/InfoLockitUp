import React from "react";
import Testimonials from "./component/Testimonials";
import About from "./component/About";
import Features from "./component/Features";
import { Routes, Route } from "react-router-dom";
import Landing from "./component/Landing";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/testmonials" element={<Testimonials />} />
      </Routes>
    </>
  );
}

export default App;
