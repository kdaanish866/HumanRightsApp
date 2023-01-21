import React from "react";
import "../Css/Profile.css";
import profilePic from "./profilepicturejpeg";

const Profile = () => {
  return (
    <>
      <div className="profile">
        <div className="top">
          <h1>Profile</h1>
          <div className="stats">
            <img src={profilePic} className="img" />
            <div className="name">
              <h2>Name:</h2>
              <div className="nameInfo">
                <p>Jane Doe</p>
              </div>
            </div>
            <div className="department">
              <h3>Department:</h3>
              <div className="nameInfo">
                <p>New York Police Department</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
