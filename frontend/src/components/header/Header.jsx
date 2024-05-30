import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar__title">GetSocial</div>
      <nav className="navbar__links">
        <a href="/profile">My Profile</a>
        <a href="/dashboard">Home</a>
        <a href="/create-post">Create Post</a>
        <a href="/single-post">Single Post</a>
        <a href="/logout">Logout</a>
      </nav>
    </header>
  );
};

export default Header;