import "./Profile.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useNavigate } from "react-router-dom";

export default function ProfilePage({
  favoriteGames,
  onLogout,
  searchResults,
  onFavoriteToggle,
}) {
  const currentUser = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const handleLogoutClick = () => {
    onLogout();
    navigate("/");
  };

  return (
    <section className="profile">
      <div className="profile__header">
        <img
          className="profile__avatar"
          src={currentUser?.avatarUrl}
          alt="User avatar"
        />
        <h2 className="profile__email">{currentUser?.email}</h2>
        <button className="profile__logout" onClick={handleLogoutClick}>
          Log Out
        </button>
      </div>

      {searchResults && searchResults.length > 0 ? (
        <div className="profile__results">
          <h3 className="profile__title">Search Results</h3>
          <ul className="profile__game-list">
            {searchResults.map((game) => (
              <li key={game.id} className="profile__game-card">
                <img
                  src={game.background_image}
                  alt={game.name}
                  className="profile__game-image"
                />
                <p className="profile__game-name">{game.name}</p>
                <button onClick={() => onFavoriteToggle(game)}>
                  {favoriteGames.some((fav) => fav.id === game.id)
                    ? "Unfavorite"
                    : "Favorite"}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="profile__favorites">
          <h3 className="profile__title">Favorite Games</h3>
          {favoriteGames.length === 0 ? (
            <p className="profile__empty">
              You haven't favorited any games yet.
            </p>
          ) : (
            <ul className="profile__game-list">
              {favoriteGames.map((game) => (
                <li key={game.id} className="profile__game-card">
                  <img
                    src={game.background_image}
                    alt={game.name}
                    className="profile__game-img"
                  />
                  <p className="profile__game-name">{game.name}</p>
                  <button
                    className={
                      favoriteGames.some((fav) => fav.id === game.id)
                        ? "favorited"
                        : ""
                    }
                    onClick={() => onFavoriteToggle(game)}
                  >
                    Unfavorite
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </section>
  );
}
