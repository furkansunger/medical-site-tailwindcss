import React from "react";
import bookImg from "../images/book.svg";

const Book = () => {
  return (
    <div className="book py-8 bg-gray-100 px-10">
      <h1 className="text-4xl text-center mb-6">
        BOOK <span className="text-medical">NOW</span>
      </h1>
      <div className="grid grid-cols-2 gap-6 px-8">
        <div className="p-12">
          <img src={bookImg} alt="Hero Image" />
        </div>
        <div className="flex flex-col items-center justify-center bg-white rounded-lg p-4">
          <h3 className="text-medical text-3xl">Book Appointment</h3>
          <form className="w-full flex flex-col items-center justify-center my-10">
            <input
              type="text"
              className="bg-gray-200 appearance-none rounded w-80 py-2 px-4 text-gray-700 leading-tight focus:outline-none"
              placeholder="Full Name"
            />
            <input
              type="tel"
              className="bg-gray-200 my-6 appearance-none rounded w-80 py-2 px-4 text-gray-700 leading-tight focus:outline-none"
              placeholder="Phone"
            />
            <input
              type="date"
              className="bg-gray-200 appearance-none rounded w-80 py-2 px-4 text-gray-700 leading-tight focus:outline-none"
            />
          </form>
          <button className="bg-medical hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
