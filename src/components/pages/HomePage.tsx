import React from "react";
import About from "./homeSections/About";
import Welcome from "./homeSections/Welcome";
import Expirience from "./homeSections/Expirience";
import Work from "./homeSections/Work";
import Contact from "./homeSections/Contact";

const HomePage = () => {
  return (
    <>
      <Welcome />
      <About />
      <Expirience />
      <Contact />
      <Work />
    </>
  );
};

export default HomePage;
