import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Unlimited Developer. All rights reserved.</p>
      <div className="floating-chat-icon">
        <a href="#chat" title="Chat with me!">
          <img
            src="/chat-icon.png" // Add a chat icon to the `public` folder
            alt="Chat"
            className="chat-icon"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
