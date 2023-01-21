import React from "react";
import "../Css/Profile.css";

const Profile = () => {
  return (
    <>
      <div className="profile">
        <h1>Profile</h1>
        <div className="stats">
          <div className="name">
            <h2>Name:</h2>
            <div className="nameInfo">
              <p>Jane Doe</p>
            </div>
          </div>
          <div className="department">
            <h2>Department:</h2>
            <div className="nameInfo">
              <p>New York Police Department</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
