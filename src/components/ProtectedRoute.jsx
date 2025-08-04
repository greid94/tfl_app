import { Navigate } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

export default function ProtectedRoute({ children }) {
  const currentUser = useContext(CurrentUserContext);

  return currentUser ? children : <Navigate to="/" replace />;
}
