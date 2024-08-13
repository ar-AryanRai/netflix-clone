import React, { useEffect, useState } from "react";
import logo from "./images/netflix-logo.png";
import "./Nav.css";

function Nav() {

  const [show, handleShow] = useState(false);

  const handleScroll = () => {
    handleShow(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100){
        handleShow(true);
      }
      else{
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll",handleScroll);
    };
  },[])

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src={logo} alt="netflix logo" />

      <img
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix account logo"
      />
    </div>
  );
}

export default Nav;
