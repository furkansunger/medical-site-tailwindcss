import React from "react";

const Review = () => {
  return (
    <div className="review px-10 py-6 bg-gray-100">
      <h1 className="text-4xl text-center mb-6">
        CLIENT'S <span className="text-medical">REVIEW</span>
      </h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 flex flex-col items-center justify-center bg-white rounded-xl">
          <img
            className="w-24 h-24 rounded-full"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="Client Picture"
          />
          <span className="text-2xl my-2">Jane Dora</span>
          <p className="text-gray-600 text-center mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="p-4 flex flex-col items-center justify-center bg-white rounded-xl">
          <img
            className="w-24 h-24 rounded-full"
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="Client Picture"
          />
          <span className="text-2xl my-2">Brian Mondo</span>
          <p className="text-gray-600 text-center mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="p-4 flex flex-col items-center justify-center bg-white rounded-xl">
          <img
            className="w-24 h-24 rounded-full"
            src="https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="Client Picture"
          />
          <span className="text-2xl my-2">Annie Well</span>
          <p className="text-gray-600 text-center mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
