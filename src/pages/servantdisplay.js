import React from "react";
import "../App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import ProgressBar from "react-bootstrap/ProgressBar";

const ServantDisplay = (props) => {
  console.log("You summoned: ", props.match.params.symbol);

  //Define a variable to catch the servant ID when clicked on link on Listing page
  const symbol = props.match.params.symbol;

  //Define a state to see if Servant is summoned.
  const [current, setCurrent] = React.useState(null);

  //URL to grab the individual servant data. Use ID as the symbol
  //const url = `https://api.atlasacademy.io/nice/NA/servant/${symbol}`;
  //https://api.atlasacademy.io/nice/NA/svt/100200?lore=true&lang=en

  const url = `https://api.atlasacademy.io/nice/NA/svt/${symbol}?lore=true&lang=en`;

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
    //Grab the first ascension image to display
    const image1 = current.extraAssets.charaGraph.ascension["1"];

    //What is the rarity? use the number to decide how many times to display star icon
    //Rarity 4 -> show 4 stars.
    const stararray = [];
    for (let i = 0; i < current.rarity; i++) {
      stararray.push(
        <li>
          <i className="las la-star"></i>
        </li>
      );
    }
    console.log("star array:", stararray);
    //https://static.wikia.nocookie.net/fategrandorder/images/8/84/Quick.png/
    //https://static.wikia.nocookie.net/fategrandorder/images/9/95/Arts.png/
    // https://static.wikia.nocookie.net/fategrandorder/images/6/6e/Buster.png/
    console.log("command cards: ", current.cards);

    const comdCard = [];
    for (let i = 0; i < current.cards.length; i++) {
      if (current.cards[i] === "arts") {
        comdCard.push(
          <li>
            <img src="https://static.wikia.nocookie.net/fategrandorder/images/9/95/Arts.png" />
          </li>
        );
      }
      if (current.cards[i] === "quick") {
        comdCard.push(
          <li>
            <img src="https://static.wikia.nocookie.net/fategrandorder/images/8/84/Quick.png" />
          </li>
        );
      }
      if (current.cards[i] === "buster") {
        comdCard.push(
          <li>
            <img src="https://static.wikia.nocookie.net/fategrandorder/images/6/6e/Buster.png" />
          </li>
        );
      }
    }
    console.log("command cards array:", comdCard);
    return (
      <>
        <section className="profile">
          <img src={image1} alt={current.name} />
          <h2>{current.name}</h2>
          <ul>{stararray}</ul>
          <h3>
            ID: {current.id} | Cost: {current.cost} | Attribute:{" "}
            {current.attribute}
          </h3>
        </section>

        <section className="description">
          <p>{current.profile.comments[0].comment}</p>

          <p>Strength: {current.profile.stats.strength}</p>
          <ProgressBar variant="danger" now={80} />

          <p>Magic: {current.profile.stats.magic}</p>
          <ProgressBar variant="danger" now={95} />

          <p>Agility: {current.profile.stats.agility}</p>
          <ProgressBar variant="danger" now={60} />

          <p>NP: {current.profile.stats.np}</p>
          <ProgressBar variant="danger" now={90} />

          <p>Endurance: {current.profile.stats.endurance}</p>
          <ProgressBar variant="danger" now={80} />

          <p>Luck: {current.profile.stats.luck}</p>
          <ProgressBar variant="danger" now={70} />
        </section>

        <section className="stats">
          <Table responsive bordered hover>
            <thead>
              <tr>
                <th>Attack</th>
                <th>Health</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lv 1</td>
                <td>Lv 1</td>
              </tr>
              <tr>
                <td>Lv {current.lvMax}</td>
                <td>Lv {current.lvMax}</td>
              </tr>
            </tbody>
          </Table>

          <p>
            <span className="strong">Star Weight: </span> {current.starAbsorb}
          </p>
          <p>
            <span className="strong">Star Generate: </span>
            {current.starGen * 0.1} %
          </p>

          <h3>Command Cards</h3>
          <ul>{comdCard}</ul>
        </section>
      </>
    );
  };

  const loading = () => {
    return <h3>Select One</h3>;
  };

  return (
    <div className="servant-display">{current ? loaded() : loading()}</div>
  );
};

export default ServantDisplay;
