import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <header>
      <div className="nav">
        <div className="icon">
          <Link to="/">
            <i className="las la-home"></i>
          </Link>
        </div>
        <div className="icon">
          <Link to="/servantlist">
            <i className="las la-scroll"></i>
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
