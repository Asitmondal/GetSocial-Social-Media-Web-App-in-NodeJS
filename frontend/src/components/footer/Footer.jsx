import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="dashboard-sidebar">
      <h3>Navigation</h3>
      <ul>
        <li>
          <a href="/profile">Profile</a>
        </li>
        <li>
          <a href="/create-post">Create Post</a>
        </li>
        <li>
          <a href="/feed">Feed</a>
        </li>
        <li>
          <a href="/messages">Messages</a>
        </li>
        <li>
          <a href="/settings">Settings</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
