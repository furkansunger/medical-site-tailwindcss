import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Doctors from "./components/Doctors";
import Book from "./components/Book";
import Review from "./components/Review";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Doctors />
      <Book />
      <Review />
      <Blogs />
      <Footer />
    </>
  );
};

export default App;
