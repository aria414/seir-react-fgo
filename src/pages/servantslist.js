import React from "react";
//import ServantDisplay from "./servantdisplay";
import "../App.scss";
import { Link } from "react-router-dom";
//Import the file containing the images for the class icons.
import iconimages from "../Iconimages";

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
    const servantarr = servantIndex.map((item, index) => {
      return (
        <Link to={`/servantdisplay/${item.id}`} key={index}>
          <div className="cards">
            <img src={item.face} alt={item.name} />
            <p className="servant-name">{item.name}</p>
            <p className="servant-id">
              {item.id}
              <span className="right">
                {item.rarity}
                <i className="las la-star"></i>
              </span>
            </p>
          </div>
        </Link>
      );
    });

    // Map the icons images from the array with urls and the alt name.
    const classIcons = iconimages.map((item, index) => {
      return (
        <li key={index}>
          <img src={item.iconurl} alt={item.name} />
        </li>
      );
    });

    return (
      <>
        <h1>Servants List</h1>
        <ul className="class-icons">{classIcons}</ul>
        <div className="servant-list">{servantarr}</div>
      </>
    );
  };

  // If the data is null, it will just display Page Loading...
  const loading = () => {
    return <h1>Page Loading...</h1>;
  };

  return servantIndex ? loaded() : loading();
};

export default ServantList;
