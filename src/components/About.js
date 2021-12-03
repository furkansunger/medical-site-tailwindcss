import React from "react";
import aboutImg from "../images/about.svg";

const About = () => {
  return (
    <div className="about px-10 py-6 bg-gray-100">
      <h1 className="text-4xl text-center mb-6">
        ABOUT <span className="text-medical">US</span>
      </h1>

      <div className="grid grid-cols-2 gap-6 px-8 py-16">
        <div>
          <img src={aboutImg} alt="Hero Image" />
        </div>
        <div className="flex flex-col items-start justify-center">
          <h3 className="text-gray-800 text-3xl">
            We Take Care Of Your Healthy Life
          </h3>
          <p className="text-gray-500 my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            necessitatibus! Soluta totam esse dignissimos dicta. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quibusdam,
            necessitatibus! Soluta totam esse dignissimos dicta.
          </p>
          <p className="text-gray-500 my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            necessitatibus! Soluta totam esse dignissimos dicta.
          </p>
          <button className="bg-medical hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-lg flex flex-col justify-center items-center py-4">
          <i className="fas fa-user-md text-medical text-2xl"></i>
          <span className="text-3xl">+120</span>
          <span className="text-gray-600">Doctors at work</span>
        </div>
        <div className="bg-white rounded-lg flex flex-col justify-center items-center py-4">
          <i className="fas fa-users text-medical text-2xl"></i>
          <span className="text-3xl">+1040</span>
          <span className="text-gray-600">Happy patients</span>
        </div>
        <div className="bg-white rounded-lg flex flex-col justify-center items-center py-4">
          <i className="fas fa-procedures text-medical text-2xl"></i>
          <span className="text-3xl">+500</span>
          <span className="text-gray-600">Bed facility</span>
        </div>
        <div className="bg-white rounded-lg flex flex-col justify-center items-center py-4">
          <i className="fas fa-hospital-alt text-medical text-2xl"></i>
          <span className="text-3xl">+80</span>
          <span className="text-gray-600">Hospital available</span>
        </div>
      </div>
    </div>
  );
};

export default About;
