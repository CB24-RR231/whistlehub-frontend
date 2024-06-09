// import React from "react";
import LaporInput from "../components/HomePage-Content/LaporInput";
import Hero from "../components/HomePage-Content/Hero";
import AboutWhistlehub from "../components/HomePage-Content/AboutWhistlehub";
import PropTypes from "prop-types";

const HomePage = ({ onLapor }) => {
  return (
    <section className="home-page">
      <Hero />
      <AboutWhistlehub />
      <article className="home-page__main">
        <h2>
          <strong>Sampaikan Keluhan Disini:</strong>
        </h2>
        <LaporInput Lapor={onLapor} />
      </article>
    </section>
  );
};

HomePage.propTypes = {
  onLapor: PropTypes.func.isRequired,
};

export default HomePage;
