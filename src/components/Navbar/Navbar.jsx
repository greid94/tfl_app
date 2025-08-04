import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Search from "../../assets/SearchButton.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function Navbar({
  onSearchClick,
  onLoginClick,
  onRegisterClick,
  onLogout,
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const currentUser = useContext(CurrentUserContext);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        THE FINAL LEVEL
      </Link>
      <div className="navbar__links">
        <button className="navbar__searchBtn" onClick={onSearchClick}>
          <img className="navbar__searchIcon" src={Search} alt="Search" />
        </button>

        {currentUser ? (
          <div className="navbar__user">
            <button onClick={toggleDropdown} className="navbar__userBtn">
              {currentUser.email.split("@")[0]} ⌄
            </button>
            {isDropdownOpen && (
              <div className="navbar__dropdown">
                <Link to="/profile" className="navbar__dropdown-link">
                  My Profile
                </Link>
                <button onClick={onLogout}>Log Out</button>
              </div>
            )}
          </div>
        ) : (
          <>
            <button className="navbar__register" onClick={onRegisterClick}>
              Register
            </button>
            <button className="navbar__login" onClick={onLoginClick}>
              Log In
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
