import React from "react";
import "./ChatPage.css";

function ChatPage({ user, onLogout }) {
  return (
    <div className="chat-wrapper">
      <div className="brand-watermark">
        <span className="ai-symbol">⚙️</span> VALIDATOR&nbsp;AI
      </div>
      <div className="chat-card">
        <h2>Welcome, {user}</h2>
        <div className="chat-box">
          <p>[Chatbot will appear here]</p>
        </div>
        <button className="btn" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default ChatPage;
