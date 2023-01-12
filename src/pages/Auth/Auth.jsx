import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <span>DYSM Social</span>
          <h5>Explore the ideas throughout the world</h5>
        </div>
      </div>
      <SignUp />
    </div>
  );
};

function SignUp() {
  return (
    <div className="a-right">
      <form action="" className="infoForm">
        <h3>Sign Up</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="username"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Password"
            className="infoInput"
            name="password"
          />
          <input
            type="text"
            placeholder="Confirm Password"
            className="infoInput"
            name="confirmPassword"
          />
        </div>
      </form>
    </div>
  );
}

export default Auth;
