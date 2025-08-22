import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css"; 

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <div className="auth-wrapper">
      <div className="brand-watermark">
        <span className="ai-symbol">⚙️</span> VALIDATOR&nbsp;AI
      </div>
      <div className="auth-card">
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn">Send Reset Link</button>
        </form>
        <p>
          <Link to="/login">Back to Login</Link>
        </p>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
