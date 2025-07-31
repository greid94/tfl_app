import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <h1 className="footer__logo-text">THE FINAL LEVEL</h1>
      </div>
      <p className="footer__paragraph">
        Built with ❤️ using React and the RAWG Video Games API.
        <span className="footer__author">
          © 2023 Gavin Reid. All rights reserved
        </span>
      </p>
    </footer>
  );
}
