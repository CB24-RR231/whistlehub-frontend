// import React from "react";
import HomePage from './pages/HomePage';
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import CheckLaporPage from './pages/CheckLaporPage';

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/cek-laporan'
          element={<CheckLaporPage />}
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
