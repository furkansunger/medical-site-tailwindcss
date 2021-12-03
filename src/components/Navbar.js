import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full px-10 flex items-center justify-between py-4 fixed bg-white top-0 left-0">
      <a href="/" className="text-2xl">
        <i className="fas fa-heartbeat text-medical mr-2"></i>
        V-Med
      </a>

      <ul className="flex justify-between items-center">
        <li className="list-none mx-2">
          <a
            className="text-gray-600 hover:text-medical transition-colors text-lg"
            href="/"
          >
            Home
          </a>
        </li>
        <li className="list-none mx-2">
          <a
            className="text-gray-600 hover:text-medical transition-colors text-lg"
            href="/"
          >
            Services
          </a>
        </li>
        <li className="list-none mx-2">
          <a
            className="text-gray-600 hover:text-medical transition-colors text-lg"
            href="/"
          >
            About
          </a>
        </li>
        <li className="list-none mx-2">
          <a
            className="text-gray-600 hover:text-medical transition-colors text-lg"
            href="/"
          >
            Doctors
          </a>
        </li>
        <li className="list-none mx-2">
          <a
            className="text-gray-600 hover:text-medical transition-colors text-lg"
            href="/"
          >
            Book
          </a>
        </li>
        <li className="list-none mx-2">
          <a
            className="text-gray-600 hover:text-medical transition-colors text-lg"
            href="/"
          >
            Review
          </a>
        </li>
        <li className="list-none mx-2">
          <a
            className="text-gray-600 hover:text-medical transition-colors text-lg"
            href="/"
          >
            Blog
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
