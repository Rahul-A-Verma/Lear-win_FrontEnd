import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
const Header = ({ isAuth }) => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  };
  return (
    <header>
      <div className="logo">Header</div>
      <div className="menu-btb" onClick={toggleMenu}>
        <div className="menu-icon"></div>
        <div className="menu-icon"></div>
        <div className="menu-icon"></div>
      </div>
      <div className={isMenuOpen ? "link active" : "link"}>
        <Link to={"/"} onClick={toggleMenu}>
          {" "}
          Home
        </Link>
        <Link to={"/about"} onClick={toggleMenu}>
          {" "}
          about
        </Link>
        <Link to={"/courses"} onClick={toggleMenu}>
          {" "}
          course
        </Link>
        {isAuth ? (
          <Link to={"/account"} onClick={toggleMenu}>
            {" "}
            account
          </Link>
        ) : (
          <Link to={"/login"} onClick={toggleMenu}>
            {" "}
            login
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
