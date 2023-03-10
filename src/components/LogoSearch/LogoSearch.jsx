import React from "react";
import { UilSearch } from "@iconscout/react-unicons";
import "./LogoSearch.css";
import Logo from "../../img/logo.png";

function LogoSearch() {
  return (
    <div className="LogoSearch">
      <div>
        <img src={Logo} alt="" />
      </div>

      <div className="Search">
        <input type="text" placeholder="#Explore" />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
}

export default LogoSearch;
