import React from "react";
import "./header.css"
function Header() {
  return (
    <div className="mainWrapper">
      <div className="logoCont">
        <img src="/assets/images/nigenje_logo.png" alt="Nigenje Logo" className="logo"/>
      </div>
      <div className="menuItems">
        <span>Products</span>
        <span>Why Nigenje</span>
        <span>Brand</span>
        <span>Team</span>
        <span>Access</span>
      </div>
      <div className="registrationCont">
        <button>Book a Demo</button>
      </div>
    </div>
  );
}

export default Header;
