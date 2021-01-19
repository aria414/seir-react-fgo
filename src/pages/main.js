import React from "react";
import background from "../images/background.jpg";
import Mychart from "../components/mychart";

const Main = () => {
  return (
    <div className="main">
      <h1>Main Page</h1>
      <p>Unlimited Salt Works!</p>
      <Mychart />
    </div>
  );
};

export default Main;
/*
      <img src={background} alt="back" />

*/
