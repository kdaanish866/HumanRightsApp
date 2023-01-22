import React from "react";
import "../Css/Profile.css";
import profilePic from "../images/pfp.png";
import unfilledStar from "../images/unfilledStar.png";
import filledStar from "../images/filledStar.png";

const Profile = () => {
  return (
    <div className="profile">
      <div className="hero-overlay"></div>
      <img
        alt="city"
        src="https://wallpapers.com/images/hd/anime-graphic-of-aesthetic-city-uuz8p9u5atk9a9l2.jpg"
      />
      <div className="text">
        <h1>Profile</h1>
      </div>
      <div className="fade-in">
        <img src={profilePic} alt="Profile" />
      </div>
      <div className="stats">
        <div className="name">
          <h2>Name:</h2>
          <div className="nameInfo">
            <p>Jane Doe</p>
          </div>
        </div>
        <div className="department">
          <h2>Department:</h2>
          <div className="departmentInfo">
            <p>New York Police Department</p>
          </div>
        </div>
      </div>
      <div className="fade-in-stars">
        <div className="star1">
          <img src={filledStar} alt="" />
        </div>
        <div className="star2">
          <img src={filledStar} alt="" />
        </div>
        <div className="star3">
          <img src={filledStar} alt="" />
        </div>
        <div className="star4">
          <img src={unfilledStar} alt="" />
        </div>
        <div className="star5">
          <img src={unfilledStar} alt="" />
        </div>
      </div>
      <div className="talk">
        <h2>Here's what people have to say...</h2>
      </div>
      <div className="txtBox1">
        <p>Professional and respectful!</p>
      </div>
      <div className="txtBox2">
        <p>Hostile. Deserves to be fired.</p>
      </div>
    </div>
  );
};
export default Profile;
