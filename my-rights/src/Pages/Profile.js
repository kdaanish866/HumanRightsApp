import React from "react";
import "../Css/Profile.css";

const Profile = () => {
  return (
    <>
      <div className="profile">
        <div className="top">
          <h1>Profile</h1>
          <div className="stats">
            <div className="name">
              <h2>Name:</h2>
              <p>Jane Doe</p>
            </div>
            <div className="department">
              <h3>Department:</h3>
              <p>John Appleseed</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
