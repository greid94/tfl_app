import Navbar from "../Navbar/Navbar";
import Home from "../../pages/Home";
import "./App.css";
import controller from "../../assets/controller.svg"; // Import controller image
// Import global styles

import Footer from "../Footer/Footer";

export default function App() {
  return (
    <div className="page">
      <img src={controller} alt="Controller" className="page__controller" />
      <div className="page__content">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </div>
  );
}
