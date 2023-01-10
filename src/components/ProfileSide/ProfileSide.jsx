import React from "react";
import FollowersCard from "../FollowersCard/FollowersCard";
import LogoSearch from "../LogoSearch/LogoSearch";
import ProfileCard from "../ProfileCard/ProfileCard";
import "./ProfilSide.css";

function ProfileSide() {
  return (
    <div className="ProfilSide">
      <LogoSearch />
      <ProfileCard />
      <FollowersCard />
    </div>
  );
}

export default ProfileSide;
