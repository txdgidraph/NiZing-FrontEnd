import React from "react";
import "./header.css"
function Header() {
  return (
    <div className="mainWrapper">
      <div className="logoCont">
        <img src="/assets/images/nigenje_logo.png" alt="Nigenje Logo" className="logo"/>
      </div>
      <div className="menuItems">
        <span>Natural Order Engine</span>
        <span>Menu Items</span>
        <span>Menu Items</span>
        <span>Menu Items</span>
        <span>Menu Items</span>
      </div>
      <div className="registrationCont">
        <button>Book a Demo</button>
      </div>
    </div>
  );
}

export default Header;
