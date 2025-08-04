import Navbar from "../Navbar/Navbar";
import Main from "../Main/Main";
import "./App.css";
import controller from "../../assets/controller.svg";
import GameCard from "../GameCard/GameCard";
import { useState } from "react";
import SearchModal from "../SearchModal/SearchModal";

// Import global styles
import Footer from "../Footer/Footer";

export default function App() {
  return (
    <div className="page">
      <img src={controller} alt="Controller" className="page__controller" />
      <div className="page__content">
        <Navbar />

        <Main />
        <SearchModal />
        <Footer />
      </div>
    </div>
  );
}
