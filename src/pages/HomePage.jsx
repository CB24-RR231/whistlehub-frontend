import React from "react";
import LaporInput from "../components/LaporInput";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const HomePage = ({ onLapor }) => {
  return (
    <div>
      <Navigation />
      <section className="login-page">
        <article className="login-page__main">
          <h2>
          <strong>Sampaikan Laporan Anda</strong>
          </h2>
          <LaporInput Lapor={onLapor} />
        </article>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
