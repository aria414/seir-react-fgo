import "./App.css";
import { Route, Switch } from "react-router-dom";
import Main from "./pages/main";
import ServantList from "./pages/servantslist";
import Nav from "./components/nav";
import ServantDisplay from "./pages/servantdisplay";

/* ----------------------------------------------
POSSIBLE COMPONENT STRUCTURE
- Main (introduction, news)
- Character Listing
- Individaul Character Display
- Header
- Footer
Indexing: https://api.atlasacademy.io/export/NA/basic_servant.json
Display Individual: https://api.atlasacademy.io/nice/NA/servant/800100
Create by this amazing FGO comminity: https://atlasacademy.io/about-us/
---------------------------------------------- */

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <div className="content">
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/servantlist">
            <ServantList />
          </Route>
          <Route
            path="/servantdisplay/:symbol"
            render={(routerProps) => <ServantDisplay {...routerProps} />}
          />
        </div>
      </Switch>
    </div>
  );
}

export default App;

/*
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
// DEMONSTRATING BOOTSTRAP COMPONENTS.
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
*/
