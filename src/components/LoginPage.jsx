import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin(email);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="brand-watermark">
        <span className="ai-symbol">⚙️</span> VALIDATOR&nbsp;AI
      </div>
      <div className="auth-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
        <p>
          <Link to="/forgot">Forgot Password?</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
