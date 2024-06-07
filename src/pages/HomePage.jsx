// import React from "react";
import LaporInput from "../components/LaporInput";

const HomePage = ({ onLapor }) => {
  return (
    <section className="home-page">
      <article className="home-page__main">
        <h2>
          <strong>Sampaikan Laporan Anda</strong>
        </h2>
        <LaporInput Lapor={onLapor} />
      </article>
    </section>
  );
};

export default HomePage;
