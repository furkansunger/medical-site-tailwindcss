import React from "react";

const Services = () => {
  return (
    <div className="services px-10 py-6 bg-gray-100">
      <h1 className="text-4xl text-center mb-6">
        OUR <span className="text-medical">SERVICES</span>
      </h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 flex flex-col items-start justify-center bg-white rounded-xl">
          <i className="fas fa-clipboard-check text-medical text-4xl"></i>
          <span className="text-3xl my-2">Free Checkup</span>
          <p className="text-gray-600 mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            accusamus.
          </p>
          <button className="bg-medical hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
        <div className="p-4 flex flex-col items-start justify-center bg-white rounded-xl">
          <i className="fas fa-ambulance text-medical text-4xl"></i>
          <span className="text-3xl my-2">7/24 Ambulance</span>
          <p className="text-gray-600 mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            accusamus.
          </p>
          <button className="bg-medical hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
        <div className="p-4 flex flex-col items-start justify-center bg-white rounded-xl">
          <i className="fas fa-user-md text-medical text-4xl"></i>
          <span className="text-3xl my-2">Experts Consultancy</span>
          <p className="text-gray-600 mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            accusamus.
          </p>
          <button className="bg-medical hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
        <div className="p-4 flex flex-col items-start justify-center bg-white rounded-xl">
          <i className="fas fa-pills text-medical text-4xl"></i>
          <span className="text-3xl my-2">Medicines</span>
          <p className="text-gray-600 mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            accusamus.
          </p>
          <button className="bg-medical hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
        <div className="p-4 flex flex-col items-start justify-center bg-white rounded-xl">
          <i className="fas fa-procedures text-medical text-4xl"></i>
          <span className="text-3xl my-2">Bed Facility</span>
          <p className="text-gray-600 mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            accusamus.
          </p>
          <button className="bg-medical hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
        <div className="p-4 flex flex-col items-start justify-center bg-white rounded-xl">
          <i className="fas fa-heartbeat text-medical text-4xl"></i>
          <span className="text-3xl my-2">Total Care</span>
          <p className="text-gray-600 mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            accusamus.
          </p>
          <button className="bg-medical hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
