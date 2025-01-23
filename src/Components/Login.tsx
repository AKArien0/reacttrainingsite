import { useAuth } from "../../AuthProvider";
import { useState, FormEvent } from "react";
function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login } = useAuth();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    login(username, password);
  };

  return (
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
  );
}

function Logout() {
  const { logout } = useAuth();

  return <button onClick={logout}>Se déconnecter</button>;
}

export { Login, Logout };