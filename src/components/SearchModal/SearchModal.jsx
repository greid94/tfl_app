import React from "react";
import "./SearchModal.css";

export default function SearchModal({
  isOpen,
  onClose,
  searchTerm,
  setSearchTerm,
}) {
  if (!isOpen) return null;

  return (
    <div className="search-modal__overlay" onClick={onClose}>
      <div
        className="search-modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="search-modal__close" onClick={onClose}>
          ✖
        </button>
        <input
          type="text"
          placeholder="Search for a game..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-modal__input"
        />
      </div>
    </div>
  );
}
