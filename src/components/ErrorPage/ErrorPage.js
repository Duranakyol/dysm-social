import React from "react";
import Error from "../../img/error.jpg";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="errorPage">
      <img src={Error} alt="errorPage" />
    </div>
  );
};

export default ErrorPage;
