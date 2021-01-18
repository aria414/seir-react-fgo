import React from "react";
import ServantDisplay from "./servantdisplay";
import "../App.scss";
import { Link } from "react-router-dom";

const ServantList = () => {
  // Use this URL to get the list of Servants to Display
  const urGrab = "https://api.atlasacademy.io/export/NA/basic_servant.json";

  const [servantIndex, setServantIndex] = React.useState(null);

  const getData = async () => {
    const response = await fetch(urGrab);
    const data = await response.json();
    //console.log("The parsed data is: ", data);
    setServantIndex(data);
  };

  React.useEffect(() => {
    getData();
  }, []);

  //Check if the data has been loaded by seeing if servantIndex state is null. If  not null,
  // use the loaded() to display stuff. First map out servantIndex so it looks cleaner.
  // The new servantArr array only has NAME and ID grabed from the API
  const loaded = () => {
    const servantArr = servantIndex.map((item, index) => {
      return (
        <Link to={`/servantdisplay/${item.id}`} key={index}>
          <div className="cards">
            <img src={item.face} alt={item.name} />
            <p>{item.name}</p>
            <p>
              {item.id}
              <span class="right">{item.rarity}</span>
            </p>
          </div>
        </Link>
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

  return servantIndex ? loaded() : loading();
};

export default ServantList;
