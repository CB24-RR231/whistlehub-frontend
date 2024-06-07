import React from "react";
import LoginInput from "../components/LoginInput";

const LoginPage = ({ onLogin }) => {
  return (
    <section className="login-page">
      <article className="login-page__main">
        <h2>
          Whistle<strong>Hub</strong>, <br />
          Lapor.
        </h2>

        <LoginInput login={onLogin} />
        <p>
          Don't have an account?
        </p>
      </article>
    </section>
  );
};

export default LoginPage;
