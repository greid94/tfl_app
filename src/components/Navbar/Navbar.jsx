import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar__logo">THE FINAL LEVEL</h1>
      <div className="navbar__links">
        <button className="navbar__searchBtn" type="button"></button>
        <button className="navbar__register">Register</button>
        <button className="navbar__login">Log In</button>
      </div>
    </nav>
  );
}
