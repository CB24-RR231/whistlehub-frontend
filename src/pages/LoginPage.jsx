import React from "react";
import LoginInput from "../components/LoginInput";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const LoginPage = ({ onLogin }) => {
  return (
    <div>
      <Navigation />
      <section className="login-page">
        <article className="login-page__main">
          <h2>
            Whistle <strong>Hub</strong>, <br />
            Lapor.
          </h2>

          <LoginInput login={onLogin} />
          <p>
            Don't have an account? 
          </p>
        </article>
      </section>
      <Footer />
    </div>
  );
};

export default LoginPage;
