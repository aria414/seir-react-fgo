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
          <Link to="/">
            <i className="las la-images"></i>
            <h3>Craft Escence</h3>
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Nav;

/* 

import { BiHomeSmile } from "react-icons/bi";
import { RiFilePaper2Line } from "react-icons/ri";

    <div className="nav">
      <Link to="/">
         <BiHomeSmile className="react-icons link-active" />
      </Link>
      <Link to="/servantlist">
        <IoLibraryOutline />
        <RiFilePaper2Line className="react-icons" />
      </Link>
    </div>
*/
