import React from "react";
import PostSide from "../../components/PostSide/PostSide";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import RightSide from "../../components/RightSide/RightSide";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="Profile">
      <div className="profileLeft">
        <ProfileLeft />
      </div>
      <div className="profile-center">
        <div className="profileCard">
          <ProfileCard />
        </div>
        <div className="postSide2">
          <PostSide />
        </div>
      </div>
      <div className="rightSide2">
        <RightSide />
      </div>
    </div>
  );
};

export default Profile;
