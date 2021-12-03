import React from "react";
import heroImg from "../images/hero.svg";

const Hero = () => {
  return (
    <div className="py-16 bg-gray-100 px-10">
      <div className="grid grid-cols-2 gap-6 px-8 py-16">
        <div>
          <img src={heroImg} alt="Hero Image" />
        </div>
        <div className="flex flex-col items-start justify-center">
          <h3 className="text-medical text-3xl">Stay Safe, Stay Healthy</h3>
          <p className="text-gray-600 my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            necessitatibus! Soluta totam esse dignissimos dicta.
          </p>
          <button className="bg-medical hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
            Contact Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
