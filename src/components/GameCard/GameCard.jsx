import "./GameCard.css";

export default function GameCard({ title, image }) {
  return (
    <div className="game-card">
      <img className="game-card__img" src={image} alt={title} />
      <p>🔥 {title}</p>
    </div>
  );
}
