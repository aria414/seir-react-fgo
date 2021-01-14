import React from "react";
import "../App.css";

const ServantDisplay = ({ current }) => {
  console.log("You summoned: ", current);

  const loaded = () => {
    return (
      <div>
        <p>
          Servant: {current.name} ID: {current.id}
        </p>
        <img src={current.iconURL} alt={current.name} />
      </div>
    );
  };

  const loading = () => {
    return <h3>Select One</h3>;
  };

  return (
    <div className="servant-display">
      <h1>Servant You Summoned: </h1>
      {current ? loaded() : loading()}
    </div>
  );
};

export default ServantDisplay;
