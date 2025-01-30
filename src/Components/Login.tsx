import { Navigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthProvider";
import { useState, FormEvent } from "react";

function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login, user } = useAuth();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <>
      { user ?
        <Navigate to="/" />
      :
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          <button type="submit">Se connecter</button>
        </form>
      }
    </>
  );
}

function Logout() {
  const { logout, user } = useAuth();

  return (
    <>
      { user ?
        <button onClick={logout}>Se déconnecter</button>
      :
        <Navigate to="/" />
      }
    </>
  )
}

export { Login, Logout };