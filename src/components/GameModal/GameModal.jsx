import React from "react";
import "./GameModal.css";

export default function GameModal({ game, onClose }) {
  if (!game) return null;

  return (
    <div className="modal__overlay" onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>
          ✖
        </button>
        <h2 className="modal__title">{game.name}</h2>
        <img
          src={game.background_image}
          alt={game.name}
          className="modal__image"
        />
        <p className="modal__description">
          {game.description || "No description available."}
          {game.metacritic && (
            <span className="modal__metacritic">
              Metacritic Score: {game.metacritic}
            </span>
          )}
        </p>
      </div>
    </div>
  );
}
