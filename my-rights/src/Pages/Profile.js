import React from "react";
import "../Css/Profile.css";

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
      <div className="img">
        <img src={"./images/pfp.png"} alt="" />
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
      <div className="star1">
        <img src={"./images/unfilledStar.webp"} alt="" />
      </div>
      <div className="star2">
        <img src={"./images/unfilledStar.webp"} alt="" />
      </div>
      <div className="star3">
        <img src={"./images/star.png"} alt="" />
      </div>
      <div className="star4">
        <img src={"./images/star.png"} alt="" />
      </div>
      <div className="star5">
        <img src={"./images/star.png"} alt="" />
      </div>
      <div className="talk">
        <h2>Here's what people have to say</h2>
      </div>
    </div>
  );
};
export default Profile;
