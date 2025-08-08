import "./GameCard.css";
import { useState, useEffect } from "react";

export default function GameCard({
  game,
  liked,
  brief,
  onLikeToggle,
  onBriefChange,
  onCardClick,
}) {
  const [animateLike, setAnimateLike] = useState(false);

  const handleLikeClick = () => {
    onLikeToggle(game.id);
    setAnimateLike(true);
    setTimeout(() => setAnimateLike(false), 300); // Reset animation after 300ms
  };

  const handleInputChange = (e) => {
    onBriefChange(e.target.value);
  };

  return (
    <li className="gamecard">
      <img
        className="gamecard__img"
        src={game.background_image}
        alt={game.name}
        onClick={() => onCardClick(game)}
      />

      <div className="gamecard__info">
        <h3 className="gamecard__title">{game.name}</h3>

        <button
          className={`gamecard__like-btn ${liked ? "liked" : ""} ${
            animateLike ? "animate-pop" : ""
          }`}
          onClick={handleLikeClick}
        >
          {liked ? "❤️ Liked" : "🤍 Like"}
        </button>

        <textarea
          className="gamecard__brief"
          placeholder="Whatcha thinkin?..."
          value={brief || ""}
          onChange={handleInputChange}
          maxLength={100}
        />
      </div>
    </li>
  );
}
