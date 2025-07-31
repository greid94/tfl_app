import Navbar from "../Navbar/Navbar";
import Home from "../../pages/Home";
import "./App.css";
// Import global styles

import Footer from "../Footer/Footer";

export default function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </div>
  );
}
