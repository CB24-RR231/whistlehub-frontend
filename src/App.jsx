// import React from "react";
import HomePage from './pages/HomePage';
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
