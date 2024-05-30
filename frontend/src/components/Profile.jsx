import React from "react";
//import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src="profile-picture-url.jpg"
          alt="Profile"
          className="profile-picture"
        />
        <h2>John Doe</h2>
        <p>@johndoe</p>
      </div>
      <div className="profile-info">
        <h3>About Me</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          scelerisque aliquam odio, et consequat libero mattis ut.
        </p>
        <h3>Interests</h3>
        <p>Photography, Travel, Coding</p>
        <h3>Contact</h3>
        <p>Email: johndoe@example.com</p>
      </div>
    </div>
  );
};

export default Profile;
