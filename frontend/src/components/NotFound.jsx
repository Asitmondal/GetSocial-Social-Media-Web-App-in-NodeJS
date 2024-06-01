import React from "react";
//import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <a href="/" className="home-link">
        Go to Home
      </a>
    </div>
  );
};

export default NotFound;
