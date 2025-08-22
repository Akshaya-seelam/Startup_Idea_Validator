import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css"; // reuse same css

function SignupPage({ onSignupComplete }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onSignupComplete();
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="brand-watermark">
        <span className="ai-symbol">⚙️</span> VALIDATOR&nbsp;AI
      </div>
      <div className="auth-card">
        <h2>Signup</h2>
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
          <button type="submit" className="btn">Signup</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
