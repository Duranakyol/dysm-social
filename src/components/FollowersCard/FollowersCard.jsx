import React from "react";
import "./FollowersCard.css";

import { Followers } from "../../Data/FollowersData";

function FollowersCard() {
  return (
    <div className="FollowersCard">
      <h3>Who is following you</h3>
      {Followers.map((follower, id) => {
        return (
          <div className="follower">
            <img src={Followers.img} alt="" className="followerImg" />
            <div className="name">
              <span>{Followers.name}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FollowersCard;
