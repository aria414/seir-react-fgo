import React from "react";
import "../App.scss";


const ServantDisplay = (props) => {
  console.log("You summoned: ", props.match.params.symbol);

  //Define a variable to catch the servant ID when clicked on link on Listing page
  const symbol = props.match.params.symbol;

  //Define a state to see if Servant is summoned.
  const [current, setCurrent] = React.useState(null);

  //URL to grab the individual servant data. Use ID as the symbol
  const url = `https://api.atlasacademy.io/nice/NA/servant/${symbol}`;

  const getServant = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCurrent(data);
    console.log("Data grabbed: ", data);
  };

  React.useEffect(() => {
    getServant();
  }, []);

  const loaded = () => {
    console.log(
      "Ascension Image: ",
      current.extraAssets.charaGraph.ascension["1"]
    );
    const image1 = current.extraAssets.charaGraph.ascension["1"];

    return (
      <div>
        <img src={image1} alt={current.name} />
        <p>Servant: ID: {current.id}</p>
        <p>Servant: Name: {current.name}</p>
      </div>
    );
  };

  const loading = () => {
    return <h3>Select One</h3>;
  };

  return (
    <div className="servant-display">
      <h2>Servant You Summoned: </h2>
      {current ? loaded() : loading()}
    </div>
  );
};

export default ServantDisplay;
