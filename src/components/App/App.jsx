import { Router, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Main from "../Main/Main";
import ProfilePage from "../Profile/Profile";
import Footer from "../Footer/Footer";
import SearchModal from "../SearchModal/SearchModal";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import controller from "../../assets/controller.svg";
import avatar from "../../assets/avatar.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { searchGames } from "../../utils/api";
import "./App.css";
import { useState, useEffect } from "react";
import ProtectedRoute from "../ProtectedRoute";
import { useNavigate } from "react-router-dom";

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [favoriteGames, setFavoriteGames] = useState([]);

  const navigate = useNavigate();
  // Auth
  const handleLogin = ({ email }) => {
    const user = { email, avatarUrl: avatar };
    setCurrentUser(user);
    localStorage.setItem("currentUser", JSON.stringify(user));
    setIsLoginOpen(false);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  const handleRegister = ({ email }) => {
    console.log("Registering:", email);
    setIsRegisterOpen(false);
  };

  // Favorite Games
  const handleFavoriteToggle = (game) => {
    setFavoriteGames((prev) => {
      const isFavorited = prev.some((g) => g.id === game.id);
      const updated = isFavorited
        ? prev.filter((g) => g.id !== game.id)
        : [...prev, game];
      localStorage.setItem("favoriteGames", JSON.stringify(updated));
      return updated;
    });
  };

  // Search
  const handleSearch = async (query) => {
    const results = await searchGames(query);
    setSearchResults(results);
  };

  // Load local storage
  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    const storedFavorites = localStorage.getItem("favoriteGames");
    if (storedUser) setCurrentUser(JSON.parse(storedUser));
    if (storedFavorites) setFavoriteGames(JSON.parse(storedFavorites));
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <img src={controller} alt="Controller" className="page__controller" />
        <div className="page__content">
          <Navbar
            onLoginClick={() => setIsLoginOpen(true)}
            onRegisterClick={() => setIsRegisterOpen(true)}
            onLogout={handleLogout}
            onSearchClick={() => setIsSearchOpen(true)}
          />

          <Routes>
            <Route
              path="/"
              element={
                <Main
                  searchTerm={searchTerm}
                  searchResults={searchResults}
                  onFavoriteToggle={handleFavoriteToggle}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage
                    favoriteGames={favoriteGames}
                    onLogout={handleLogout}
                    searchResults={searchResults}
                    onFavoriteToggle={handleFavoriteToggle}
                  />
                </ProtectedRoute>
              }
            />
          </Routes>

          <SearchModal
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onSearch={handleSearch}
          />
          <LoginModal
            isOpen={isLoginOpen}
            onClose={() => setIsLoginOpen(false)}
            onLogin={handleLogin}
          />
          <RegisterModal
            isOpen={isRegisterOpen}
            onClose={() => setIsRegisterOpen(false)}
            onRegister={handleRegister}
          />
          <Footer />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}
