import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import ProgressBar from "react-bootstrap/ProgressBar";
import Mychart from "../components/mychart";
import "../App.scss";
import iconimages from "../Iconimages";

const ServantDisplay = (props) => {
  //console.log("You summoned: ", props.match.params.symbol);

  //Define a variable to catch the servant ID when clicked on link on Listing page
  const symbol = props.match.params.symbol;

  //Define a state to see if Servant is summoned.
  const [current, setCurrent] = React.useState(null);

  //URL to grab the individual servant data. Use ID as the symbol
  //https://api.atlasacademy.io/nice/NA/servant/${symbol}

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
    //Grab the first ascension image to display.
    //Store this really long object into a variable.
    const imageObj = current.extraAssets.charaGraph.ascension;
    //Get the value from the 1st key of the object -
    //1st key has the 1st image but sometimes naem of key is different. So just get 1st key
    const image1 = imageObj[Object.keys(imageObj)[0]];

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
    console.log("command cards: ", current.cards);

    //What is the card deck? if Arts, put the arts picture.
    const comdCard = [];
    for (let i = 0; i < current.cards.length; i++) {
      if (current.cards[i] === "arts") {
        comdCard.push(
          <li>
            <img
              src="https://static.wikia.nocookie.net/fategrandorder/images/9/95/Arts.png"
              alt="Arts card"
            />
          </li>
        );
      }
      if (current.cards[i] === "quick") {
        comdCard.push(
          <li>
            <img
              src="https://static.wikia.nocookie.net/fategrandorder/images/8/84/Quick.png"
              alt="Quick card"
            />
          </li>
        );
      }
      if (current.cards[i] === "buster") {
        comdCard.push(
          <li>
            <img
              src="https://static.wikia.nocookie.net/fategrandorder/images/6/6e/Buster.png"
              alt="Buster card"
            />
          </li>
        );
      }
    }
    console.log("command cards array:", comdCard);
    //Calculate the letter grade for the stats.
    let grade = 0;
    const calcStat = (stat) => {
      switch (stat) {
        case "EX":
          grade = 100;
          break;
        case "A++":
          grade = 95;
          break;
        case "A+":
          grade = 90;
          break;
        case "A":
          grade = 85;
          break;
        case "B++":
          grade = 79;
          break;
        case "B+":
          grade = 74;
          break;
        case "B":
          grade = 68;
          break;
        case "C++":
          grade = 64;
          break;
        case "C+":
          grade = 58;
          break;
        case "C":
          grade = 52;
          break;
        case "D++":
          grade = 46;
          break;
        case "D+":
          grade = 40;
          break;
        case "D":
          grade = 35;
          break;
        case "E++":
          grade = 30;
          break;
        case "E+":
          grade = 25;
          break;
        case "E":
          grade = 20;
          break;
        default:
          grade = 0;
      }
      return grade;
    };

    const strength = calcStat(current.profile.stats.strength);
    const magic = calcStat(current.profile.stats.magic);
    const agility = calcStat(current.profile.stats.agility);
    const noble = calcStat(current.profile.stats.np);
    const endurance = calcStat(current.profile.stats.endurance);
    const luck = calcStat(current.profile.stats.luck);

    // 3* saber --> saber[silver] ... current.rarity = color of stars.
    //Filter the array of objects to find the object of the current character's class.
    //Then using its rarity, determine what color the icon should use.
    const classIcon = iconimages.filter((item, index) => {
      return item.name.toLowerCase() === current.className;
    });
    console.log(classIcon);

    let classColor = "";

    if (current.rarity === 0 || current.rarity === 3) {
      classColor = "silver";
    }
    if (current.rarity <= 2) {
      classColor = "bronze";
    }
    if (current.rarity >= 4) {
      classColor = "gold";
    }

    return (
      <>
        <section className="profile">
          <img src={image1} alt={current.name} />
          <div className="svt-general">
            <h2>{current.name}</h2>
            <ul>{stararray}</ul>
            <div>
              <img src={classIcon[0][classColor]} />
              <h3>
                ID: {current.id} | Cost: {current.cost} | Attribute:{" "}
                {current.attribute}
              </h3>
            </div>
          </div>

          <section className="description">
            <p>{current.profile.comments[0].comment}</p>
            <div className="stat-bar">
              <p>Strength: {current.profile.stats.strength}</p>
              <ProgressBar variant="danger" now={strength} />
              <p>Magic: {current.profile.stats.magic}</p>
              <ProgressBar variant="danger" now={magic} />
              <p>Agility: {current.profile.stats.agility}</p>
              <ProgressBar variant="danger" now={agility} />
            </div>
            <div className="stat-bar">
              <p>NP: {current.profile.stats.np}</p>
              <ProgressBar variant="danger" now={noble} />
              <p>Endurance: {current.profile.stats.endurance}</p>
              <ProgressBar variant="danger" now={endurance} />
              <p>Luck: {current.profile.stats.luck}</p>
              <ProgressBar variant="danger" now={luck} />
            </div>
          </section>
        </section>

        <section className="stats">
          <Table className="flat-table" responsive bordered hover>
            <thead>
              <tr className="strong">
                <th></th>
                <th>Level 1</th>
                <th>Level {current.lvMax}</th>
                <th>Level 90 [A]</th>
                <th>Level 100 [A]</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="strong">Attack</td>
                <td>{current.atkBase}</td>
                <td>{current.atkMax}</td>
                <td>{current.atkGrowth[89]}</td>
                <td>{current.atkGrowth[99]}</td>
              </tr>
              <tr>
                <td className="strong">Health</td>
                <td>{current.hpBase}</td>
                <td>{current.hpMax}</td>
                <td>{current.hpGrowth[89]}</td>
                <td>{current.hpGrowth[99]}</td>
              </tr>
            </tbody>
          </Table>

          <Table className="tall-table" responsive bordered hover>
            <thead>
              <tr>
                <th>Attack</th>
                <th>Health</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Lv 1 <br /> <span className="strong">{current.atkBase}</span>
                </td>
                <td>
                  Lv 1 <br /> <span className="strong">{current.hpBase}</span>
                </td>
              </tr>
              <tr>
                <td>
                  Lv {current.lvMax} <br />
                  <span className="strong">{current.atkMax}</span>
                </td>
                <td>
                  Lv {current.lvMax} <br />
                  <span className="strong">{current.hpMax}</span>
                </td>
              </tr>
              <tr>
                <td>
                  Lv 90 <br />
                  <span className="strong">{current.atkGrowth[89]}</span>
                </td>
                <td>
                  Lv 90 <br />
                  <span className="strong">{current.hpGrowth[89]}</span>
                </td>
              </tr>
              <tr>
                <td>
                  Lv 100 <br />
                  <span className="strong">{current.atkGrowth[99]}</span>
                </td>
                <td>
                  Lv 100 <br />
                  <span className="strong">{current.hpGrowth[99]}</span>
                </td>
              </tr>
            </tbody>
          </Table>

          <div className="star-desc">
            <p>
              <span className="strong">Star Weight: </span> {current.starAbsorb}
            </p>
            <p>
              <span className="strong">Star Generate: </span>
              {(current.starGen * 0.1).toFixed(2)} %
            </p>
          </div>
          <div className="commands">
            <h3>Command Cards</h3>
            <ul>{comdCard}</ul>
          </div>
        </section>
        <Mychart attackData={current.atkGrowth} healthData={current.hpGrowth} />
      </>
    );
  };
  // ---------End of loaded function-----------
  const loading = () => {
    return <h3>Select One</h3>;
  };

  return (
    <div className="servant-display">{current ? loaded() : loading()}</div>
  );
};

export default ServantDisplay;
