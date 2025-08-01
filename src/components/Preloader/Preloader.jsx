import "./Preloader.css";

export default function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader__spinner"></div>
      <p className="preloader__text">Leveling Up...</p>
    </div>
  );
}
