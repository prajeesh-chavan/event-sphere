// src/Pages/NotFound.jsx
import Lottie from "lottie-react";
import React from "react";
import { Link } from "react-router-dom";
import animationData from "../../public/404-anim.json";

const NotFound = () => {
  return (
    <Lottie
      animationData={animationData}
      loop={true}
      autoplay={true}
      className="w-1/2 absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-3/4"
    />
    
  );
};

export default NotFound;
