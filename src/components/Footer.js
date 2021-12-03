import React from "react";

const Footer = () => {
  return (
    <div className="px-10 py-6">
      <div className="grid grid-cols-4 gap-4">
        <div className="">
          <h3 className="text-gray-700 text-2xl mb-2">Quick Links</h3>
          <ul>
            <li className="list-none">
              <a href="/">
                <i className="fas fa-chevron-right text-medical text-lg mr-2"></i>
                Home
              </a>
            </li>
            <li className="list-none">
              <a href="/">
                <i className="fas fa-chevron-right text-medical text-lg mr-2"></i>
                Services
              </a>
            </li>
            <li className="list-none">
              <a href="/">
                <i className="fas fa-chevron-right text-medical text-lg mr-2"></i>
                About
              </a>
            </li>
            <li className="list-none">
              <a href="/">
                <i className="fas fa-chevron-right text-medical text-lg mr-2"></i>
                Doctors
              </a>
            </li>
            <li className="list-none">
              <a href="/">
                <i className="fas fa-chevron-right text-medical text-lg mr-2"></i>
                Book
              </a>
            </li>
            <li className="list-none">
              <a href="/">
                <i className="fas fa-chevron-right text-medical text-lg mr-2"></i>
                Review
              </a>
            </li>
            <li className="list-none">
              <a href="/">
                <i className="fas fa-chevron-right text-medical text-lg mr-2"></i>
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-gray-700 text-2xl mb-2">Our Services</h3>
          <ul>
            <li className="list-none">
              <a href="/">
                <i className="fas fa-chevron-right text-medical text-lg mr-2"></i>
                Dental Care
              </a>
            </li>
            <li className="list-none">
              <a href="/">
                <i className="fas fa-chevron-right text-medical text-lg mr-2"></i>
                Message Therapy
              </a>
            </li>
            <li className="list-none">
              <a href="/">
                <i className="fas fa-chevron-right text-medical text-lg mr-2"></i>
                Cardiology
              </a>
            </li>
            <li className="list-none">
              <a href="/">
                <i className="fas fa-chevron-right text-medical text-lg mr-2"></i>
                Diagnosis
              </a>
            </li>
            <li className="list-none">
              <a href="/">
                <i className="fas fa-chevron-right text-medical text-lg mr-2"></i>
                Ambulance Service
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-gray-700 text-2xl mb-2">Contact Info</h3>
          <ul>
            <li className="list-none">
              <a href="/">
                <i className="fas fa-phone text-medical text-lg mr-2"></i>
                (123) 456 7890
              </a>
            </li>
            <li className="list-none">
              <a href="/">
                <i className="fas fa-envelope text-medical text-lg mr-2"></i>
                anonim@mail.com
              </a>
            </li>
            <li className="list-none">
              <a href="/">
                <i className="fas fa-map-marker text-medical text-lg mr-2"></i>
                Somewhere, Earth
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-gray-700 text-2xl mb-2">Follow Us</h3>
          <ul>
            <li className="list-none">
              <a href="/">
                <i className="fab fa-facebook-f text-medical text-lg mr-2"></i>
                Facebook
              </a>
            </li>
            <li className="list-none">
              <a href="/">
                <i className="fab fa-twitter text-medical text-lg mr-2"></i>
                Twitter
              </a>
            </li>
            <li className="list-none">
              <a href="/">
                <i className="fab fa-instagram text-medical text-lg mr-2"></i>
                Instagram
              </a>
            </li>
            <li className="list-none">
              <a href="/">
                <i className="fab fa-linkedin-in text-medical text-lg mr-2"></i>
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-3" />

      <h3 className="text-center">
        © 2021 <span className="text-medical">Vibe Software</span>. Designed by
        Mr. Web Designer
      </h3>
    </div>
  );
};

export default Footer;
