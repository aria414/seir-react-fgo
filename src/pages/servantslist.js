import React from "react";
import ServantDisplay from "./servantDisplay";
import "../App.css";

const ServantList = () => {
  // Use this URL to get the list of Servants to Display
  const urGrab = "https://api.atlasacademy.io/export/NA/basic_servant.json";

  const [servantIndex, setServantIndex] = React.useState(null);
  const [currentServant, setCurrentServant] = React.useState(null);

  const getData = async () => {
    const response = await fetch(urGrab);
    const data = await response.json();
    //console.log("The parsed data is: ", data);
    setServantIndex(data);
  };

  React.useEffect(() => {
    getData();
  }, []);

  //console.log("The servantIndex state:, ", servantIndex);

  //Add the pokemon that you clicked on to the OnePokemon component
  const handleAdd = (name, id, icon) => {
    //console.log("you added: ", name, id, icon);
    setCurrentServant({
        name: name,
        id: id,
        iconURL: icon
    })
  };

  console.log("Current Servant state: ", currentServant)

  //Check if the data has been loaded by seeing if servantIndex state is null. If  not null,
  // use the loaded() to display stuff. First map out servantIndex so it looks cleaner.
  // The new servantArr array only has NAME and ID grabed from the API
  const loaded = () => {
    const servantArr = servantIndex.map((item, index) => {
      return (
        <p key={index} onClick={() => handleAdd(item.name, item.id, item.face)}>
          <img style={{ width: "60px" }} src={item.face} alt={item.name} />
          Name: {item.name} - ID: {item.id}
        </p>
      );
    });
    return (
      <div className="servant-list">
        <h1>Servants List</h1>
        {servantArr}
      </div>
    );
  };

  // If the data is null, it will just display Page Loading...
  const loading = () => {
    return <h1>Page Loading...</h1>;
  };

  return (
    <div className="container">
      {servantIndex ? loaded() : loading()}
      <ServantDisplay current={currentServant} />
    </div>
  );
};

export default ServantList;
