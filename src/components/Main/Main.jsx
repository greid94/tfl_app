import "./Main.css";
import { fetchPopularGames } from "../../utils/api";
import { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";
import GameCard from "../GameCard/GameCard";
import GameModal from "../GameModal/GameModal";

export default function Main() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAllGames, setShowAllGames] = useState(false);
  const visibleGames = showAllGames ? games.slice(0, 6) : games.slice(0, 3);
  const [likedGames, setLikedGames] = useState({});
  const [gameBriefs, setGameBriefs] = useState({});
  const [selectedGame, setSelectedGame] = useState(null);

  const handleGameClick = (game) => {
    console.log("Game clicked:", game);
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

  useEffect(() => {
    fetchPopularGames().then((data) => {
      setGames(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Preloader />; // Show preloader while fetching data
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
          <h2 className="games__text">What's Hot?!</h2>
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
              //onClick={handleGameClick}
              onCardClick={handleGameClick}
            />
          ))}
        </ul>

        {selectedGame && <GameModal game={selectedGame} onClose={closeModal} />}
      </section>
    </>
  );
}
