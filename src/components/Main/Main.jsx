import "./Main.css";
import { fetchPopularGames } from "../../utils/api";
import { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";
import GameCard from "../GameCard/GameCard";
import GameModal from "../GameModal/GameModal";

export default function Main({ searchResults }) {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAllGames, setShowAllGames] = useState(false);
  const [likedGames, setLikedGames] = useState({});
  const [gameBriefs, setGameBriefs] = useState({});
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    fetchPopularGames().then((data) => {
      setGames(data);
      setLoading(false);
    });
  }, []);

  const handleGameClick = (game) => {
    setSelectedGame(game);
  };

  const closeModal = () => {
    setSelectedGame(null);
  };

  const handleLikeToggle = (gameId) => {
    setLikedGames((prev) => ({
      ...prev,
      [gameId]: !prev[gameId],
    }));
  };

  const handleBriefChange = (gameId, text) => {
    setGameBriefs((prev) => ({
      ...prev,
      [gameId]: text,
    }));
  };

  const sourceGames =
    searchResults && searchResults.length > 0 ? searchResults : games;

  const visibleGames = showAllGames
    ? sourceGames.slice(0, 6)
    : sourceGames.slice(0, 3);

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <section className="summary">
        <div>
          <h1 className="summary__header">Powered by Gavin Reid</h1>
          <p className="summary__text">
            Looking for your next favorite game? The Final Level makes it easy
            to explore trending titles, dive into detailed game info, and search
            through thousands of games.
          </p>
        </div>
      </section>

      <section className="games">
        <div className="games__header">
          <h2 className="games__text">
            {searchResults && searchResults.length > 0
              ? "Search Results"
              : "What's Hot?!"}
          </h2>
          <button
            type="button"
            className="games__btn"
            onClick={() => setShowAllGames(!showAllGames)}
          >
            {showAllGames ? "Show Less" : "Show More"}
          </button>
        </div>

        <ul className="games__list">
          {visibleGames.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              liked={likedGames[game.id]}
              brief={gameBriefs[game.id]}
              onLikeToggle={handleLikeToggle}
              onBriefChange={handleBriefChange}
              onCardClick={handleGameClick}
            />
          ))}
        </ul>

        {selectedGame && <GameModal game={selectedGame} onClose={closeModal} />}
      </section>
    </>
  );
}
