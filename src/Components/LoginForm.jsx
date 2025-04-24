import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./UI/Button.jsx";

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <form
      onSubmit={handleLogin}
      className="mb-4 p-4"
      style={{
        backgroundColor: "#131718",
        borderRadius: "8px",
        border: "1px solid white",
      }}
    >
      <div className="d-flex justifiy-content-start">
        <Button onClick={handleBack}>← Continue as Guest</Button>
      </div>

      <h2 className="pt-3">Login</h2>

      <label htmlFor="email" className="text-white">
        Email
      </label>
      <input
        id="email"
        type="email"
        name="email"
        value={email}
        placeholder="Email"
        className="form-control mb-3"
        style={{ backgroundColor: "#f7f7f7" }}
        onChange={(event) => setEmail(event.target.value)}
      />

      <label htmlFor="password" className="text-white">
        Password
      </label>
      <input
        id="password"
        type="password"
        name="password"
        value={password}
        placeholder="Password"
        className="form-control mb-3"
        style={{ backgroundColor: "#f7f7f7" }}
        onChange={(event) => setPassword(event.target.value)}
      />

      <div className="d-flex justify-content-end pt-3">
        <Button type="submit">Login</Button>
      </div>
    </form>
  );
}

export default LoginForm;
