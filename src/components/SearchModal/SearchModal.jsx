import React from "react";
import "./SearchModal.css";

export default function SearchModal({
  isOpen,
  onClose,
  searchTerm,
  setSearchTerm,
  onSearch,
}) {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
    onClose();
  };

  return (
    <div className="search-modal__overlay" onClick={onClose}>
      <div
        className="search-modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="search-modal__close" onClick={onClose}>
          ✖
        </button>
        <form onSubmit={handleSubmit}>
          <input
            name="search"
            type="text"
            placeholder="Search for a game..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-modal__input"
          />
        </form>
      </div>
    </div>
  );
}
