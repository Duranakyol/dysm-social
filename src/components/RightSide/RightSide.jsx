import React, { useState } from "react";
import "./RightSide.css";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Logout from "../../img/logout.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "../TrendCard/TrendCard";
import ShareModal from "../ShareModal/ShareModal";

function RightSide() {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="RightSide">
      <div className="navIcons">
        <a href="/home">
          <img src={Home} alt="" />
        </a>
        <UilSetting />
        <img src={Noti} alt="" />
        <a href="/">
          <img src={Logout} alt="" />
        </a>
      </div>
      <TrendCard />
      <button className="button r-button" onClick={() => setModalOpened(true)}>
        <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
        Share
      </button>
    </div>
  );
}

export default RightSide;
