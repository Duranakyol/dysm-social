import React from "react";
import Cover from "../../img/cover.jpg";
import ProfileImg from "../../img/profileImg.jpg";
import "./ProfileCard.css";

function ProfileCard() {
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={ProfileImg} alt="" />
      </div>

      <div className="ProfileName">
        <span>Angela Ulrich</span>
        <span>Frontend Web Entwickler</span>
      </div>

      {/* FOLLOW STATUS */}

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>6,890</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1</span>
            <span>Followers</span>
          </div>
        </div>
        <hr />
      </div>
      <span>My Profile</span>
    </div>
  );
}

export default ProfileCard;