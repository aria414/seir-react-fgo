import React from "react";
import { Link } from "react-router-dom";
import "../App.scss";

const Nav = (props) => {
  return (
    <header>
      <div className="nav">
        <div className="search"></div>
        <div className="icon">
          <Link to="/">
            <i className="las la-home"></i>
            <h3>Home</h3>
          </Link>
        </div>
        <div className="icon">
          <Link to="/servantlist">
            <i className="las la-scroll"></i>
            <h3>Character List</h3>
          </Link>
        </div>
        <div className="icon">
          <Link to="/about">
            <i className="las la-images"></i>
            <h3>About the Game</h3>
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Nav;
