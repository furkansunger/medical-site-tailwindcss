import React from "react";

const Blogs = () => {
  return (
    <div className="blog px-10 py-6 bg-gray-100">
      <h1 className="text-4xl text-center mb-6">
        OUR <span className="text-medical">BLOGS</span>
      </h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 flex flex-col items-start justify-center bg-white rounded-xl">
          <img
            className="w-5/6 rounded-lg"
            src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Blog Picture"
          />
          <div className="w-full flex justify-between items-center my-6">
            <span>
              <i className="fas fa-calendar-day text-medical text-base"></i>
              1st December, 2021
            </span>
            <span>
              <i className="fas fa-user text-medical text-base"></i>
              Admin
            </span>
          </div>
          <span className="text-2xl my-2">First Blog Title</span>
          <p className="text-gray-600 mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            accusamus. Lorem ipsum dolor sit amet.
          </p>
          <button className="bg-medical hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
            Read More
          </button>
        </div>
        <div className="p-4 flex flex-col items-start justify-center bg-white rounded-xl">
          <img
            className="w-5/6 rounded-lg"
            src="https://images.unsplash.com/photo-1476900164809-ff19b8ae5968?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Blog Picture"
          />
          <div className="w-full flex justify-between items-center my-6">
            <span>
              <i className="fas fa-calendar-day text-medical text-base"></i>
              2st December, 2021
            </span>
            <span>
              <i className="fas fa-user text-medical text-base"></i>
              Admin
            </span>
          </div>
          <span className="text-2xl my-2">Second Blog Title</span>
          <p className="text-gray-600 mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            accusamus. Lorem ipsum dolor sit amet.
          </p>
          <button className="bg-medical hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
            Read More
          </button>
        </div>
        <div className="p-4 flex flex-col items-start justify-center bg-white rounded-xl">
          <img
            className="w-5/6 rounded-lg"
            src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Blog Picture"
          />
          <div className="w-full flex justify-between items-center my-6">
            <span>
              <i className="fas fa-calendar-day text-medical text-base"></i>
              3st December, 2021
            </span>
            <span>
              <i className="fas fa-user text-medical text-base"></i>
              Admin
            </span>
          </div>
          <span className="text-2xl my-2">Third Blog Title</span>
          <p className="text-gray-600 mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            accusamus. Lorem ipsum dolor sit amet.
          </p>
          <button className="bg-medical hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
