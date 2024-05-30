import React from "react";
//import "./HomeDashboard.css";

const HomeDashboard = () => {
  return (
    <div className="dashboard-container">
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
      <div className="dashboard-main">
        <h2>Welcome to GetSocial</h2>
        <p>
          This is your dashboard where you can see an overview of your
          activities and access different sections of the app.
        </p>
        <div className="dashboard-cards">
          <div className="dashboard-card">
            <h3>Profile</h3>
            <p>View and edit your profile information.</p>
          </div>
          <div className="dashboard-card">
            <h3>Create Post</h3>
            <p>Share your thoughts and updates with your friends.</p>
          </div>
          <div className="dashboard-card">
            <h3>Feed</h3>
            <p>See the latest updates from your friends and connections.</p>
          </div>
          <div className="dashboard-card">
            <h3>Messages</h3>
            <p>Chat with your friends and stay connected.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDashboard;
