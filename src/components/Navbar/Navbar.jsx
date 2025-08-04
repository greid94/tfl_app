import "./Navbar.css";
import Search from "../../assets/SearchButton.svg";

export default function Navbar({ onSearchClick }) {
  return (
    <nav className="navbar">
      <h1 className="navbar__logo">THE FINAL LEVEL</h1>
      <div className="navbar__links">
        <button className="navbar__searchBtn" onClick={onSearchClick}>
          <img src={Search} alt="Search" />{" "}
        </button>
        <button className="navbar__register">Register</button>
        <button className="navbar__login">Log In</button>
      </div>
    </nav>
  );
}
