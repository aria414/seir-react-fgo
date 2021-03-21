import { Route, Switch } from "react-router-dom";
import Main from "./pages/main";
import About from "./pages/about";
import ServantList from "./pages/servantslist";
import Nav from "./components/nav";
import ServantDisplay from "./pages/servantdisplay";
import "./App.scss";

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
      <div className="content">
        <Switch>
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
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
