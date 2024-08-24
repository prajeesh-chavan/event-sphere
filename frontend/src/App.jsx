import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import HeroSection from "./Pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection/>
    </>
  );
}

export default App;
