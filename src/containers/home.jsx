import React from "react";
import Banner from "./partials/banner";
import Portfolio from "./partials/portfolio";
import Contact from "./partials/contact";
import Skills from "./partials/skills";

export default function HomePage() {
  return (
    <>
      <Banner />
      <Skills/>
      <Portfolio />
      <Contact />
    </>
  );
}
