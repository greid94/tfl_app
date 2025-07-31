import "./Main.css";
import { fetchPopularGames } from "../../utils/api";
import { useEffect, useState } from "react";

export default function Main() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchPopularGames().then((data) => {
      setGames(data);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <div>Loading...</div>;
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
          <button type="button" className="games__btn">
            See All
          </button>
        </div>
        <ul className="games__list">
          {games.map((game) => (
            <li key={game.id} className="games__item">
              <img
                className="games__img"
                src={game.background_image}
                alt={game.name}
              />
              <p className="games__title">{game.name}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
